/* eslint-disable unused-imports/no-unused-vars */
import React, { forwardRef, useImperativeHandle, useMemo } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import {
  MSubmissionDataTable,
  SubmissionDataTable,
} from '@/components/DataTable';
import { getColumns } from '@/components/DataTable/SubmissionDataTable/columnsSubmission';
import { getData } from '@/components/DataTable/SubmissionDataTable/sampleSubmissionData';

const DetailModal = (props, ref) => {
  const [showModal, setShowModal] = React.useState(false);
  const [subMission, setSubMission] = React.useState('20052809');
  const [receivedDate, setReceivedDate] = React.useState('2023-02-13');
  const [status, setStatus] = React.useState('Received');
  const data = useMemo(() => getData(), []);
  const columns = useMemo(() => getColumns(), []);
  // const displayModal = () => {
  //   setShowModal(true);
  // };
  useImperativeHandle(
    ref,
    () => {
      return {
        displayModal() {
          setShowModal(true);
        },
      };
    },
    []
  );
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto mt-36 h-full w-screen max-w-[1100px] px-5 md:mt-52 md:px-0">
              {/* content */}
              <div className="relative flex w-full flex-col border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between border-b border-solid border-slate-200 p-5">
                  <table className="text-sm text-[#2D3546] md:text-lg">
                    <tbody>
                      <tr>
                        <td className="poppins700">Submission:</td>
                        <td className="poppins400 pl-3">{subMission}</td>
                      </tr>
                      <tr>
                        <td className="poppins700">Received:</td>
                        <td className="poppins400 pl-3">{receivedDate}</td>
                      </tr>
                      <tr>
                        <td className="poppins700">Status:</td>
                        <td className="poppins400 pl-3">{status}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="flex flex-col">
                    <button
                      className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black  outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="block h-6 w-6 bg-transparent text-4xl text-black outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                    <label className="mt-[20px] hidden items-baseline gap-x-2 md:flex ">
                      <span className="poppins400 mr-[17px] text-[13px] text-black">
                        Search
                      </span>
                      <input
                        type="text"
                        className="mt-1 block w-full border border-solid border-[#DADEE3] bg-white"
                      />
                    </label>
                    <div
                      className={`poppins700 float-right mt-[20px] flex cursor-pointer items-center text-[13px] text-[#3C80BB]  hover:text-[#1f3447] md:hidden`}
                    >
                      <MagnifyingGlassIcon className="m-auto mr-1 h-5 w-5" />
                      <span>Search</span>
                    </div>
                  </div>
                </div>
                {/* body */}
                <div className="relative flex-auto px-0 pt-0 md:px-6 md:pt-[20px]">
                  <div className={`hidden md:block`}>
                    <SubmissionDataTable columns={columns} data={data} />
                  </div>
                  <div className={`block md:hidden `}>
                    <MSubmissionDataTable columns={columns} data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-60"></div>
        </>
      ) : null}
    </>
  );
};

export default forwardRef(DetailModal);
