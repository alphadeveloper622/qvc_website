import { useRef } from 'react';

import Link from 'next/link';

import DetailModal from './DetailModal';
import EditSubmissionModal from './EditSubmissionModal';

const SideBar = ({ className }) => {
  const childFunRef1 = useRef(null);
  const childFunRef2 = useRef(null);
  const buttonHandler1 = () => {
    childFunRef1.current.displayModal();
  };
  const buttonHandler2 = () => {
    childFunRef2.current.displayModal();
  };
  return (
    <>
      <aside
        id="sidebar"
        className={`${className} transition-width fixed top-0 left-0 z-20 hidden h-full w-64 flex-shrink-0 font-normal duration-75 lg:flex lg:flex-col `}
        aria-label="Sidebar"
      >
        <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-[#11253C] pt-0">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex-1 space-y-1 divide-y divide-gray-200 bg-[#11253C] px-3 ">
              <ul className="space-y-2 pb-2">
                <li>
                  <Link
                    href="/"
                    className="poppins400 group flex items-center rounded-lg p-2 text-base text-white hover:bg-gray-600 "
                  >
                    <svg
                      className="h-6 w-6 text-white transition duration-75 group-hover:text-gray-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3" sidebar-toggle-item="">
                      Open Submissions
                    </span>
                  </Link>
                </li>
                <li>
                  <button className="poppins400 group flex items-center rounded-lg p-2 text-base text-white hover:bg-gray-600 ">
                    <svg
                      className="h-6 w-6 text-white transition duration-75 group-hover:text-gray-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3" sidebar-toggle-item="">
                      All Balances
                    </span>
                  </button>
                </li>
                <li>
                  <Link
                    href="/"
                    className="poppins400 group flex items-center rounded-lg p-2 text-base text-white hover:bg-gray-600 "
                  >
                    <svg
                      className="h-6 w-6 text-white transition duration-75 group-hover:text-gray-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3" sidebar-toggle-item="">
                      All Submissions
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="poppins400 group flex items-center rounded-lg p-2 text-base text-white hover:bg-gray-600 "
                  >
                    <svg
                      className="h-6 w-6 text-white transition duration-75 group-hover:text-gray-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3" sidebar-toggle-item="">
                      Submission Forms
                    </span>
                  </Link>
                </li>
                <li>
                  <button
                    className="poppins400 group flex items-center rounded-lg p-2 text-base text-white hover:bg-gray-600 "
                    data-modal-target="defaultModal"
                    data-modal-toggle="defaultModal"
                    onClick={buttonHandler1}
                  >
                    <svg
                      className="h-6 w-6 text-white transition duration-75 group-hover:text-gray-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3" sidebar-toggle-item="">
                      SubmissionDialog
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    className="poppins400 group flex items-center rounded-lg p-2 text-base text-white hover:bg-gray-600 "
                    data-modal-target="defaultModal"
                    data-modal-toggle="defaultModal"
                    onClick={buttonHandler2}
                  >
                    <svg
                      className="h-6 w-6 text-white transition duration-75 group-hover:text-gray-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3" sidebar-toggle-item="">
                      EditSubmissionDialog
                    </span>
                  </button>
                </li>
                {/* <li>
                <button
                  type="button"
                  className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  aria-controls="dropdown-layouts"
                  data-collapse-toggle="dropdown-layouts"
                >
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                  </svg>
                  <span
                    className="ml-3 flex-1 whitespace-nowrap text-left"
                    sidebar-toggle-item=""
                  >
                    Layouts
                  </span>
                  <svg
                    sidebar-toggle-item=""
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul id="dropdown-layouts" className="hidden space-y-2 py-2">
                  <li>
                    <a
                      href="https://flowbite-admin-dashboard.vercel.app/layouts/stacked/"
                      className="group flex items-center rounded-lg p-2 pl-11 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Stacked
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://flowbite-admin-dashboard.vercel.app/layouts/sidebar/"
                      className="group flex items-center rounded-lg p-2 pl-11 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Sidebar
                    </a>
                  </li>
                </ul>
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <aside
        id="sidebar"
        className={`${className} transition-width not-sr-only z-20  w-full flex-shrink-0 font-normal duration-75 lg:sr-only lg:flex `}
        aria-label="Sidebar"
      >
        <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-[#11253C] pt-0">
          <div className="flex justify-between bg-[#11253C] py-4 px-5">
            <span className="poppins400 flex-initial py-1 pr-3 text-white">
              Show:
            </span>
            <select className="poppins400 grow text-base text-black">
              <option>Open Submissions</option>
              <option>All Balances</option>
              <option>All Submissions</option>
              <option>Submission Forms</option>
            </select>
          </div>
        </div>
      </aside>
      <DetailModal ref={childFunRef1} />
      <EditSubmissionModal ref={childFunRef2} />
    </>
  );
};

export default SideBar;
