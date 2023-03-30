/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';

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
      // className={classNames(
      //   'relative inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50',
      //   className
      // )}
      className={classNames(
        'poppins400 relative inline-flex items-center bg-[#F5F5F5] px-2 py-2 text-sm font-medium text-[#3C80BB] disabled:text-[#DADEE3]',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
export function PageSingleButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      // className={classNames(
      //   'relative inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50',
      //   className
      // )}
      className={classNames(
        'poppins400 relative inline-flex items-center bg-[#F5F5F5] px-2 py-2 text-sm font-medium text-[#2D3546] ',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

// export function SelectColumnFilter({
//   column: { filterValue, setFilter, preFilteredRows, id, render },
// }) {
//   const options = React.useMemo(() => {
//     const options1 = new Set();
//     preFilteredRows.forEach((row) => {
//       options1.add(row.values[id]);
//     });
//     return [...options1.values()];
//   }, [id, preFilteredRows]);

//   return (
//     <label className="flex items-baseline gap-x-2">
//       <span className="text-gray-700">{render('Header')}: </span>
//       <select
//         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         name={id}
//         id={id}
//         value={filterValue}
//         onChange={(e) => {
//           setFilter(e.target.value || undefined);
//         }}
//       >
//         <option value="">All</option>
//         {options.map((option, i) => (
//           <option key={i} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </label>
//   );
// }

// eslint-disable-next-line unused-imports/no-unused-vars
function GlobalFilter({ globalFilter, setGlobalFilter, className }) {
  const [value, setValue] = React.useState(globalFilter);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onChange = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <label className={`${className} flex items-baseline gap-x-2`}>
      <span className="poppins400 mr-[17px] text-[13px] text-black">
        Search
      </span>
      <input
        type="text"
        className="mt-1 block w-full border border-solid border-[#DADEE3]"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        // placeholder={`${count}`}
      />
    </label>
  );
}

const Index = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    // eslint-disable-next-line unused-imports/no-unused-vars
    headerGroups,
    prepareRow,

    state,

    // eslint-disable-next-line unused-imports/no-unused-vars
    preGlobalFilteredRows,
    // eslint-disable-next-line unused-imports/no-unused-vars
    setGlobalFilter,

    page,

    pageOptions,

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
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle lg:px-8">
            <div className="overflow-hidden border border-gray-300 shadow ">
              <table
                {...getTableProps()}
                className="poppins400 min-w-full divide-y divide-gray-300"
              >
                <thead className="bg-white">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      <th
                        colspan="2"
                        className="poppins700 group bg-[#3C80BB]/20 px-6 py-3 text-left text-xs font-medium tracking-wider text-black"
                        {...headerGroup.headers[1].getHeaderProps(
                          headerGroup.headers[1].getSortByToggleProps()
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <div className="poppins700 flex items-center">
                            {headerGroup.headers[1].render('Header')}
                            <span className="ml-2">
                              {headerGroup.headers[1].isSorted ? (
                                headerGroup.headers[1].isSortedDesc ? (
                                  <SortDownIcon className="h-4 w-4 text-black" />
                                ) : (
                                  <SortUpIcon className="h-4 w-4 text-black" />
                                )
                              ) : (
                                <SortIcon className="h-4 w-4 text-black" />
                              )}
                            </span>
                          </div>
                          <label className="flex items-center">
                            <span className="poppins400 mr-3 whitespace-nowrap text-[13px] text-black">
                              Show:
                            </span>
                            <select className="poppins700 block w-full border border-[#DADEE3] p-2">
                              <option>Date</option>
                              <option>Discription</option>
                            </select>
                          </label>
                        </div>
                      </th>
                      <th></th>
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="divide-y divide-gray-300 bg-white"
                >
                  {page.map((row) => {
                    // new
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} className=" hover:bg-gray-50">
                        <td
                          {...row.cells[1].getCellProps()}
                          className="whitespace-nowrap px-5 py-4 text-[12px]"
                          role="cell"
                        >
                          {row.cells[1].render('Cell')}
                        </td>
                        <td
                          {...row.cells[0].getCellProps()}
                          className="whitespace-nowrap px-5 py-4  text-[12px]"
                          role="cell"
                        >
                          {row.cells[0].render('Cell')}
                        </td>
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
      <div className="flex items-center justify-between py-3 md:hidden">
        <div className=" flex flex-1 items-center justify-between">
          <div className="flex items-baseline py-3 pl-3">
            <span className="text-sm text-black">
              Showing <span className="font-medium">{state.pageSize}</span> of{' '}
              <span className="font-medium">
                {pageOptions.length * state.pageSize}
              </span>{' '}
              entries
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
