import { useMemo } from 'react';

import Link from 'next/link';

import DataTable from '@/components/DataTable';
import { getColumns } from '@/utils/columns';
import { getData } from '@/utils/sampleData';

const MainBoard = ({ className, title }) => {
  const data = useMemo(() => getData(), []);
  const columns = useMemo(() => getColumns(), []);
  return (
    <>
      <div
        className={`${className} fixed inset-0 z-10 block hidden bg-gray-900/50 dark:bg-gray-900/90`}
        id="sidebarBackdrop"
      ></div>
      <div
        id="main-content"
        className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64"
      >
        <main>
          <div className="px-5 pt-6 md:px-8">
            <h2 className={`poppins400 mb-6 text-2xl md:text-4xl`}>{title}</h2>
            <DataTable columns={columns} data={data} />
          </div>
        </main>
        <p className="sr-only my-10 text-center text-sm text-gray-500 lg:not-sr-only">
          © 2023{' '}
          <Link href="/" className="hover:underline" target="_blank">
            Stack&apos;s Bowers
          </Link>
          . All rights reserved.
        </p>
      </div>
    </>
  );
};

export default MainBoard;
