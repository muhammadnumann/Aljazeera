import type { NextPage } from 'next'
import { job as api } from '@vidispine/vdt-api'
import { useState } from 'react'
import withLayout from 'utils/withLayout'
import Typography from 'components/Typography'
import ReactTable from 'components/ReactTable'
import moment from 'moment'
import Spinner from 'components/Spinner'
import { createColumnHelper } from '@tanstack/react-table'
import useInterval from 'utils/hooks/useInterval'
import { JobType } from '@vidispine/types'
import { Progress, Spin } from 'antd'
import { useAmplitude } from 'utils/hooks/useAmplitude'
import { TimeCode } from '@vidispine/vdt-js'
import { Api, JobApiResponse } from 'utils/Api'
import Breadcrumbs from 'components/Breadcrumbs'
import { Folder } from 'components/Icons'

const { XMLParser } = require('fast-xml-parser')

const getMetadata = (
  data: { key: string; value: string }[] | undefined,
  fieldName: string,
) => {
  let value = ''
  if (data) {
    let result = data.find((element) => element.key == fieldName)
    if (result) {
      value = result.value
    }
  }
  return value
}

const getDurationSeconds = (job: JobType) => {
  const parser = new XMLParser()

  let videoMetadata = getMetadata(job.data, 'shapeDocument')
  if (videoMetadata) {
    const thumbData = parser.parse(videoMetadata)

    if (
      thumbData.ShapeDocument.containerComponent &&
      thumbData.ShapeDocument.containerComponent.duration &&
      thumbData.ShapeDocument.containerComponent.duration.samples &&
      thumbData.ShapeDocument.containerComponent.duration.timeBase &&
      thumbData.ShapeDocument.containerComponent.duration.timeBase.denominator
    ) {
      return new TimeCode(
        {
          samples: thumbData.ShapeDocument.containerComponent.duration.samples,
          timeBase: {
            numerator:
              thumbData.ShapeDocument.containerComponent.duration.timeBase
                .numerator,
            denominator:
              thumbData.ShapeDocument.containerComponent.duration.timeBase
                .denominator,
          },
        },
        {
          dropFrame: false,
          frameSeparator: ':',
        },
      )
        .toSmpte()
        .substring(0, 11)
    }
  }
}

const getFormattedDate = (seconds?: number) => {
  let sec = seconds ? seconds : 0
  if (sec < 60) return seconds + ' secs'
  else if (sec < 90) return Math.round(sec / 60) + ' min'
  else if (sec > 90) return Math.round(sec / 60) + ' mins'
  else return 'N/A'
}

const getTimeDiff = (job: JobType) => {
  let endDate
  let startDate = moment(job.started)
  if (job.status == 'FAILED_TOTAL' || job.status == 'ABORTED')
    endDate = moment(job.started)
  else if (job.finished) endDate = moment(job.finished)
  else endDate = moment(new Date())
  return endDate.diff(startDate, 'seconds')
}

const getBeautyString = (text: string) => {
  return text
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
}

const getPercentElapsedTime = (
  job: JobType,
  avgElapsedTime: number | undefined,
) => {
  let diff
  let endDate
  let startDate = moment(job.started)
  if (job.status == 'FAILED_TOTAL' || job.status == 'ABORTED')
    endDate = moment(job.started)
  else if (job.finished) endDate = moment(job.finished)
  else endDate = moment(new Date())
  diff = endDate.diff(startDate, 'seconds')
  return Math.round((diff / (avgElapsedTime ? avgElapsedTime : 1)) * 100)
}

const getTask = (job: JobType) => {
  let currentTask = job.log?.task?.filter((task) =>
    task.status.includes('FINISHED'),
  ).length
  return currentTask ? currentTask : 0
}

const getStatusIcon = (job: JobType) => {
  const percent = job.totalSteps
    ? Math.round((100 / job.totalSteps) * Number(getTask(job)))
    : 0
  switch (job.status) {
    case 'FINISHED':
      return <Progress type="circle" percent={percent} width={30} />
    case 'FINISHED_WARNING':
      return (
        <Progress
          type="circle"
          percent={percent}
          width={30}
          strokeColor="orange"
        />
      )
    case 'FAILED_TOTAL':
    case 'ABORTED':
      return (
        <Progress
          type="circle"
          percent={percent}
          width={30}
          status="exception"
        />
      )
    case 'READY':
    case 'STARTED':
    case 'VIDINET_JOB':
    case 'WAITING':
    case 'ABORTED_PENDING':
      return <Spin tip={percent + '%'} />
    default:
      return <Progress type="circle" percent={percent} width={35} />
  }
}

const getFileSize = (job: JobType) => {
  let filesize = 'N/A'
  job.data
    ?.filter((key) => key.key.includes('filesize'))
    .map(
      (filteredName) =>
        (filesize =
          parseInt(filteredName.value) > 0
            ? Math.round(parseInt(filteredName.value) / 1024 / 1024) + 'MB'
            : 'N/A'),
    )
  return filesize
}

interface JobTable extends JobType {
  duration: number
  avgExecutionTime: number | undefined
  fileName: string
  durationSeconds: string
  percentExecutionTime: number
  statusIcon: JSX.Element
  elapsedTasks: string
  fileSize: string
}

const JobViewer: NextPage = () => {
  const [jobTable, setJobTable] = useState<JobTable[] | undefined>([])
  const columnHelper = createColumnHelper<JobTable>()
  const [instrument] = useAmplitude()

  useInterval(() => {
    Api.fetch(api.listJob, {
      queryParams: {},
      matrixParams: {
        first: 0,
        number: 100,
        sort: ['jobId desc'],
        metadata: true,
        step: true,
        user: false,
      },
    }).then(({ data }: JobApiResponse) => {
      // Get total os Tasks per jobType
      let mapJobType = data.job
        ?.map((job) => job.type)
        .reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map())
      // Get Avarege Elapsed Type per JobType
      let mapAvgElapsedTimeByJobType = new Map<string, number>()
      mapJobType?.forEach((v, k) => {
        let count = 0
        let elapsedAvgSeconds = data.job
          ?.filter(
            (it: JobType) =>
              it.type.includes(k) && it.status.includes('FINISHED'),
          )
          .reduce((n, { finished, started }) => {
            count++
            return n + moment(finished).diff(started, 'seconds')
          }, 0)
        mapAvgElapsedTimeByJobType.set(
          k,
          Math.round(elapsedAvgSeconds ? elapsedAvgSeconds / count : 0),
        )
      })

      const jobList = data.job?.map((job) => {
        return {
          jobId: job.jobId,
          user: job.user ? job.user : '',
          started: job.started,
          finished: job.finished,
          fileName: getMetadata(job.data, 'originalFilename'),
          duration: getTimeDiff(job),
          durationSeconds: getDurationSeconds(job),
          avgExecutionTime: mapAvgElapsedTimeByJobType.get(job.type),
          percentExecutionTime: getPercentElapsedTime(
            job,
            mapAvgElapsedTimeByJobType.get(job.type),
          ),
          status: getBeautyString(job.status),
          statusIcon: getStatusIcon(job),
          elapsedTasks: `${getTask(job)} of ${
            job.totalSteps ? job.totalSteps : 0
          }`,
          type: job.type,
          priority: getBeautyString(job.priority),
          fileSize: getFileSize(job),
        }
      })
      setJobTable(jobList)
      instrument('Job List', { totalJobs: jobList?.length || 0 })
    })
  }, 5000)

  const columns = [
    columnHelper.accessor('jobId', {
      header: () => 'JobId',
    }),
    columnHelper.accessor('user', {
      header: () => 'User',
    }),
    columnHelper.accessor('fileName', {
      header: () => 'File Name',
    }),
    columnHelper.accessor('durationSeconds', {
      header: () => 'Duration',
    }),
    columnHelper.accessor('priority', {
      header: 'Priority',
    }),
    columnHelper.accessor('statusIcon', {
      header: 'Status',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('status', {
      header: 'Status Desc',
    }),
    columnHelper.accessor('started', {
      header: () => 'Started',
      cell: (info) => moment(info.getValue()).format('YY-MM-DD HH:mm:ss'),
    }),

    columnHelper.accessor('finished', {
      header: () => 'Finished',
      cell: (info) =>
        info.getValue() ? (
          moment(info.getValue()).format('YY-MM-DD HH:mm:ss')
        ) : (
          <></>
        ),
    }),
    columnHelper.accessor('type', {
      header: 'Type',
    }),
    columnHelper.accessor('duration', {
      header: () => 'Elapsed Time',
      cell: (info) => getFormattedDate(info.getValue()),
    }),
    columnHelper.accessor('elapsedTasks', {
      header: 'Finished Tasks',
    }),
    columnHelper.accessor('avgExecutionTime', {
      header: 'Historical Average Execution Time',
      cell: (info) => getFormattedDate(info.getValue()),
    }),
    columnHelper.accessor('percentExecutionTime', {
      header: '% Over Avg Time',
      cell: (info) => info.getValue() + '%',
    }),
    columnHelper.accessor('fileSize', {
      header: 'Filesize',
    }),
  ]

  if (jobTable?.length == 0) {
    return (
      <>
        <Typography type="title">Job Viewer</Typography>
        <Spinner />
      </>
    )
  }

  return (
    <>
      <Typography type="title">Job Viewer</Typography>

      <Breadcrumbs
        segmentsRawText={[0]}
        replaceLabelSegments={[{ segment: 0, value: 'Job Viewer' }]}
        icon={
          <Folder className="h-6 w-6 text-gray-600 dark:text-grayDark-600" />
        }
      />

      <div className="flex flex-col pt-5">
        <ReactTable columns={columns} data={jobTable} />
      </div>
    </>
  )
}

export default withLayout(JobViewer, ['job.read'])
