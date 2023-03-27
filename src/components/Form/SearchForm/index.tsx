import { SearchButton } from '@/components/Button';

type IItem = {
  id: string;
  name: string;
  title: string;
  placeHolder: string;
};
type ISearchFormProps = {
  fields: IItem[];
  className?: string;
};
const Index = (props: ISearchFormProps) => {
  return (
    <div className={`${props.className}`}>
      <form className="relative w-full" action="/CoinLookUp">
        {/* <div
          className={`relative flex flex-col bg-[#BB843D] px-[27px] pt-[16px] pb-[40px] md:flex-row md:justify-around md:px-[57px] md:pt-[29px] md:pb-[82px]`}
        > */}
        <div
          className={`relative flex flex-col bg-[#BB843D] px-[27px] pt-[16px] pb-[40px] md:flex-row md:justify-around md:px-[3.9vw] md:pt-[2vw] md:pb-[5.7vw] desktop:px-[56.16px] desktop:pt-[28.8px] desktop:pb-[82px]`}
        >
          {props.fields.map((item, key) => {
            return (
              <div key={key} className="w-full text-center">
                <label
                  htmlFor={item.id}
                  // className="poppins400 text-[32px] md:text-[40px]"
                  className="poppins400 text-[32px] md:text-[2.7vw] desktop:text-[38.88px]"
                >
                  {item.title}
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
                    className="poppins400 block w-full border border-slate-300 bg-white py-2 pl-9 pr-3 text-[20px] placeholder-[#858585] shadow-sm placeholder:text-[20px] placeholder:italic focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder={item.placeHolder}
                    type="text"
                    name={item.name}
                    id={item.id}
                  />
                </label>
              </div>
            );
          })}
        </div>
        <SearchButton title="search" className="" />
      </form>
    </div>
  );
};
export default Index;
