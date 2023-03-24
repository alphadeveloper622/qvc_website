import { SearchButton } from '@/components/Button';

type IItem = {
  id: string;
  name: string;
  title: string;
  placeHolder: string;
};
type ISearchFormProps = {
  className?: string;
};
const Index = (props: ISearchFormProps) => {
  const fields: IItem[] = [
    {
      id: 'zipcode',
      name: 'zipcode',
      title: 'ZIP Code',
      placeHolder: 'Search by ZIP code',
    },
    {
      id: 'state',
      name: 'state',
      title: 'State',
      placeHolder: 'Search by State...',
    },
    {
      id: 'dealer-name',
      name: 'dealer-name',
      title: 'Dealer Name',
      placeHolder: 'Search by Dealer Name',
    },
  ];

  return (
    <div className={`${props.className}`}>
      <form className="relative w-full">
        {/* <div
          className={`relative flex flex-col bg-[#BB843D] px-[27px] pt-[16px] pb-[40px] md:flex-row md:justify-around md:px-[57px] md:pt-[29px] md:pb-[82px]`}
        > */}
        <div
          className={`relative flex flex-col bg-[#BB843D] px-[28px] pt-[19px] pb-[41px] md:flex-row md:justify-around md:px-[7.7vw] md:pt-[1.8vw] md:pb-[5.1vw] desktop:px-[112px] desktop:pt-[27px] desktop:pb-[74px]`}
        >
          <div className="mr-[2.6vw] w-full text-left desktop:mr-[38px]">
            <label
              htmlFor={fields[0]?.id}
              // className="poppins400 text-[32px] md:text-[40px]"
              className="poppins700 text-[16px]"
            >
              {fields[0]?.title}
            </label>
            <label className="relative mt-[15px] block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-[#858585]" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <input
                className="poppins400 block w-full border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm placeholder-[#858585] shadow-sm placeholder:text-sm placeholder:italic focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder={fields[0]?.placeHolder}
                type="text"
                name={fields[0]?.name}
                id={fields[0]?.id}
              />
            </label>
          </div>
          <div className="mr-[2.6vw]  w-full text-left desktop:mr-[38px]">
            <label
              htmlFor={fields[1]?.id}
              // className="poppins400 text-[32px] md:text-[40px]"
              className="poppins700 text-[16px]"
            >
              {fields[1]?.title}
            </label>
            <label className="relative mt-[15px] block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-[#858585]" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <select
                className="poppins400 block w-full border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm shadow-sm  focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                name={fields[1]?.name}
                id={fields[1]?.id}
              >
                <option>{fields[1]?.placeHolder}</option>
                <option>{fields[1]?.placeHolder}</option>
                <option>{fields[1]?.placeHolder}</option>
              </select>
            </label>
          </div>
          <div className="w-full text-left">
            <label
              htmlFor={fields[2]?.id}
              // className="poppins400 text-[32px] md:text-[40px]"
              className="poppins700 text-[16px]"
            >
              {fields[2]?.title}
            </label>
            <label className="relative mt-[15px] block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-[#858585]" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <input
                className="poppins400 block w-full border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm placeholder-[#858585] shadow-sm placeholder:text-sm placeholder:italic focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder={fields[2]?.placeHolder}
                type="text"
                name={fields[2]?.name}
                id={fields[2]?.id}
              />
            </label>
          </div>
        </div>
        <SearchButton title="search" className="" />
      </form>
    </div>
  );
};
export default Index;
