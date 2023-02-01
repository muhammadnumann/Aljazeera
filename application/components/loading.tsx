import React from 'react'

export default function Loading() {
  const data = [0, 1, 2, 2, 3, 4, 5, 6, 8, 8, 7, 8, 5]
  return (
    <div className="grid mt-11 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 sm:mx-0 justify-items-center">
      {data.map((val, i) => {
        return (
          <div className="w-full" key={i}>
            <div className="bg-gray-200 dark:bg-gray-600 w-full pt-[56%]"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded-3xl"></div>
              <div className="w-full flex gap-1 p-2 flex-col">
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-600"></div>
                <div className="w-4/6 h-3 bg-gray-200 dark:bg-gray-600"></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
