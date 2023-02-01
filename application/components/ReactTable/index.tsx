import React, { useState } from 'react'

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowDown, ArrowUp } from 'components/Icons'

import { Guid } from 'utils/guid'

interface InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  onClick?: (id: string) => void
}

const ReactTable = (props: InputProps) => {
  const [sorting, setSorting] = useState<SortingState>([])

  const { data, columns, onClick } = props

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
  })

  return (
    <div>
      <table className="min-w-full text-sm text-gray-900 dark:text-grayDark-900 rounded-xl bg-gray-100 dark:bg-grayDark-100">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={Guid.newGuid()}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={Guid.newGuid()}
                    colSpan={header.colSpan}
                    className="px-2 pt-3 pb-3 text-left border-b"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        key={Guid.newGuid()}
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: <ArrowUp className={'h-5 w-5'} />, // '🔼',
                          desc: <ArrowDown className={'h-5 w-5'} />, // '🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            table.getRowModel().rows.map((row: any) => {
              return (
                <tr
                  key={Guid.newGuid()}
                  className="hover:bg-gray-200 hover:dark:bg-grayDark-200 cursor-pointer text-gray-900 dark:text-grayDark-900"
                >
                  {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    row.getVisibleCells().map((cell: any) => {
                      return (
                        <td
                          onClick={() =>
                            onClick && onClick(row.original.itemId)
                          }
                          key={Guid.newGuid()}
                          className="px-2 py-2 whitespace-nowrap"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2 text-sm">
        <button
          className="border rounded p-1 text-gray-900 dark:text-grayDark-900"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1 text-gray-900 dark:text-grayDark-900"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1 text-gray-900 dark:text-grayDark-900"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1 text-gray-900 dark:text-grayDark-900"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1 text-gray-600">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1 text-gray-600">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16 text-gray-600 text-sm"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
          className="border rounded p-1 w-24 text-gray-600 text-sm"
        >
          {[10, 20, 30, 40, 50, 100, 150].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ReactTable
