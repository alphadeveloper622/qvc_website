import React, { useEffect } from 'react';

import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid';
import classNames from 'classnames';
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useFilters,
  useSortBy,
  usePagination,
} from 'react-table';

export function SortIcon({ className }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
    </svg>
  );
}

export function SortUpIcon({ className }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path>
    </svg>
  );
}

export function SortDownIcon({ className }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
    </svg>
  );
}
export function Button({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        'relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function PageButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        'relative inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <label className="flex items-baseline gap-x-2">
      <span className="text-gray-700">{render('Header')}: </span>
      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows ? preGlobalFilteredRows.length : 0;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <label className="flex items-baseline gap-x-2">
      <span className="text-gray-700">Search: </span>
      <input
        type="text"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </label>
  );
}

const Index = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,

    state,

    preGlobalFilteredRows,
    setGlobalFilter,

    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );
  useEffect(() => {
    setPageSize(5);
  }, []);

  return (
    <>
      <div className="justify-between border border-gray-300 px-5 py-4 sm:flex sm:gap-x-2">
        <label>
          <span className="sr-only">Items Per Page</span>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={state.pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </label>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {/* {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div className="mt-2 sm:mt-0" key={column.id}>
                {column.render('Filter')}
              </div>
            ) : null
          )
        )} */}
      </div>
      {/* table */}
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle lg:px-8">
            <div className="overflow-hidden border border-gray-300 shadow ">
              <table
                {...getTableProps()}
                className="poppins400 min-w-full divide-y divide-gray-300"
              >
                <thead className="bg-[#3C80BB]/20 ">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          scope="col"
                          className="Poppins700 group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          <div className="flex items-center justify-between">
                            {column.render('Header')}
                            <span>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <SortDownIcon className="h-4 w-4 text-black" />
                                ) : (
                                  <SortUpIcon className="h-4 w-4 text-black" />
                                )
                              ) : (
                                <SortIcon className="h-4 w-4 text-black" />
                              )}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="divide-y divide-gray-300 bg-white"
                >
                  {page.map((row, i) => {
                    // new
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="whitespace-nowrap px-5 py-4"
                              role="cell"
                            >
                              {cell.column.Cell.name === 'defaultRenderer' ? (
                                <div className="text-left text-xs text-gray-500">
                                  {cell.render('Cell')}
                                </div>
                              ) : (
                                cell.render('Cell')
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* test for column filter */}
      {/* <div>
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div> */}
      {/* Pagination */}
      <div className="flex items-center justify-between py-3">
        <div className="flex flex-1 justify-between sm:hidden">
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-x-2">
            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{' '}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <PageButton
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon
                  className="h-5 w-5 text-gray-700"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon
                  className="h-5 w-5 text-gray-700"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                <span className="sr-only">Next</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-700"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <ChevronDoubleRightIcon
                  className="h-5 w-5 text-gray-700"
                  aria-hidden="true"
                />
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;