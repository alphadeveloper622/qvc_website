import React, { forwardRef, useImperativeHandle } from 'react';

import { RedFillRoundButton, WhiteFillRoundButton } from '@/components/Button';

const EditSubmissionModal = (props, ref) => {
  const [showModal, setShowModal] = React.useState(false);
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
            <div className="relative my-6 mx-auto mt-36 h-full w-screen max-w-[1100px] px-5 lg:mt-52 lg:px-0">
              {/* content */}
              <div className="relative flex w-full flex-col border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between border-b border-solid border-slate-200 p-5">
                  <div>
                    <h3 className="poppins400 text-3xl">
                      Edit Submission for 1100 - Stack’s Bowers
                    </h3>
                    <div className="poppins700 text-sm text-[#2D3546]">
                      <select>
                        <option>Change Address</option>
                        <option>Change Address</option>
                        <option>Change Address</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button
                      className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black  outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="block h-6 w-6 bg-transparent text-2xl text-black outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                </div>
                {/* body */}
                <div className="poppins400 relative flex-auto px-6 text-xs">
                  <div className="flex w-full flex-col py-2 lg:w-1/2">
                    <label>Contact Name</label>
                    <input
                      type="text"
                      className="border border-slate-300 p-2 text-sm"
                      value="OC"
                      onChange={() => {}}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row">
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>Address 1</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value="68 Scenic Dr."
                        onChange={() => {}}
                      />
                    </div>
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>Address 2</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value=""
                        onChange={() => {}}
                      />
                    </div>
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>City</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value="San Rafael"
                        onChange={() => {}}
                      />
                    </div>
                    <div className="flex flex-1 flex-col py-2">
                      <label>State</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value="California"
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row">
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>ZIP Code</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value="92626"
                        onChange={() => {}}
                      />
                    </div>
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>Country</label>
                      <select
                        className="border border-slate-300 p-2 text-sm"
                        value=""
                        onChange={() => {}}
                      >
                        <option>United States</option>
                        <option>United States</option>
                      </select>
                    </div>
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value="800-555-1212"
                        onChange={() => {}}
                      />
                    </div>
                    <div className="flex flex-1 flex-col py-2">
                      <label>Email</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value="AP@stacksbowers.com"
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row">
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>Shipping Method</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value="FedEx Standard"
                        onChange={() => {}}
                      />
                    </div>
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>Shipping Account Number</label>
                      <select
                        className="border border-slate-300 p-2 text-sm"
                        value=""
                        onChange={() => {}}
                      >
                        <option>123454567887655</option>
                        <option>123454567887655</option>
                      </select>
                    </div>
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>Insurance Limit</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value="0.00"
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row">
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>Coin Tier</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value="Select..."
                        onChange={() => {}}
                      />
                    </div>
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>Number of Coins</label>
                      <select
                        className="border border-slate-300 p-2 text-sm"
                        value=""
                        onChange={() => {}}
                      >
                        <option>Select...</option>
                        <option>United States</option>
                      </select>
                    </div>
                    <div className="mr-2 flex flex-1 flex-col py-2">
                      <label>Check Number</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value="12485"
                        onChange={() => {}}
                      />
                    </div>
                    <div className="flex flex-1 flex-col py-2">
                      <label>Check Amount</label>
                      <input
                        type="text"
                        className="border border-slate-300 p-2 text-sm"
                        value="245.66"
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                  <div className="poppins400 mt-4 text-sm italic">
                    Submission checks should include $6.00 for handling.
                  </div>
                </div>
                {/* footer */}
                <div className="flex items-center justify-between rounded-b border-t border-solid border-slate-200 p-6">
                  <WhiteFillRoundButton
                    title="edit coins"
                    className="border-gray-500 text-gray-500"
                  />
                  <div>
                    <WhiteFillRoundButton title="print" className="mr-5" />
                    <RedFillRoundButton title="save and close" />
                  </div>
                  {/* <button
                    className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
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

export default forwardRef(EditSubmissionModal);
