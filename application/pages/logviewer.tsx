import { auditlog as api } from '@vidispine/vdt-api'
import type { NextPage } from 'next'
import { useState } from 'react'
import withLayout from 'utils/withLayout'
import Spinner from 'components/Spinner'
import Typography from 'components/Typography'
import { AuditLogEntryType } from '@vidispine/types'
import { createColumnHelper } from '@tanstack/react-table'
import useInterval from 'utils/hooks/useInterval'
import ReactTable from 'components/ReactTable'
import moment from 'moment'
import { Api, ApiResponse } from 'utils/Api'
import Breadcrumbs from 'components/Breadcrumbs'
import { Folder } from 'components/Icons'

const LogViewer: NextPage = () => {
  const [logs, setLogs] = useState<AuditLogEntryType[] | undefined>([])
  const columnHelper = createColumnHelper<AuditLogEntryType>()

  useInterval(() => {
    Api.fetch(api.listAuditLog, {
      path: '/API/log/',
      queryParams: {},
    }).then(({ data }: ApiResponse) => {
      setLogs(data.entry)
    })
  }, 10000)

  const columns = [
    columnHelper.accessor('timestamp', {
      header: () => 'Timestamp',
      cell: (info) => moment(info.getValue()).format('YY-MM-DD HH:mm:ss:SSS'),
    }),
    columnHelper.accessor('username', {
      header: () => 'Username',
    }),
    columnHelper.accessor('method', {
      header: () => 'Method',
    }),
    columnHelper.accessor('path', {
      header: () => 'Path',
    }),
    columnHelper.accessor('queryParameters', {
      header: () => 'Query Parameters',
    }),
    columnHelper.accessor('matrixParameters', {
      header: () => 'Matrix Parameters',
    }),
  ]

  if (logs?.length == 0) {
    return (
      <>
        <Typography type="title">Log Viewer</Typography>
        <Spinner />
      </>
    )
  }

  return (
    <>
      <Typography type="title">Logs</Typography>

      <Breadcrumbs
        segmentsRawText={[0]}
        replaceLabelSegments={[{ segment: 0, value: 'Log Viewer' }]}
        icon={
          <Folder className="h-6 w-6 text-gray-600 dark:text-grayDark-600" />
        }
      />

      <div className="flex flex-col pt-5">
        <ReactTable columns={columns} data={logs} />
      </div>
    </>
  )
}

export default withLayout(LogViewer, ['log.read'])
