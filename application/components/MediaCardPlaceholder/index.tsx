import { Skeleton } from 'antd'

const MediaCardPlaceholder = () => {
  return (
    <div className="grid h-60 w-64 rounded-lg shadow-lg">
      <div className="flex h-[140px] w-64 rounded-t-lg bg-gray-200 dark:bg-grayDark-200 justify-center">
        <Skeleton.Image
          active
          className={'object-fill rounded-t-lg'}
          style={{ width: 256, height: 140 }}
        />
      </div>
      <div className="relative pl-5 pt-5 flex h-[100px] w-64 bg-gray-200 dark:bg-grayDark-200 rounded-b-lg border-t-[4px]">
        <Skeleton active paragraph={{ rows: 1 }} />
      </div>
    </div>
  )
}

export default MediaCardPlaceholder
