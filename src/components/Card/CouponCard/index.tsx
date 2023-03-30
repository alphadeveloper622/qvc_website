type ICouponCardProps = {
  className?: string;
  title?: string;
  price?: string;
};

const Index = (props: ICouponCardProps) => {
  return (
    <div
      className={`${props.className} h-[200px] w-[275px] cursor-pointer bg-[#BB843D] pt-[13px] transition-all duration-300 ease-in-out hover:bg-[#daa520] md:h-[280px] md:w-[334px] md:pt-[16px]`}
    >
      <div className="poppins600 w-[100%] text-center text-[18px] uppercase text-black md:text-[24px]">
        {props.title}
      </div>
      <div className="text-white">
        <span className="poppins600 text-[80px] leading-[120%] text-white before:absolute before:ml-[-1.875rem] before:text-[46px] before:content-['$'] md:text-[98.88px] md:leading-[130%] md:before:text-[59.66px]">
          {props.price}
        </span>
      </div>
      <div className="poppins400 text-center text-[16px] text-black md:text-[18px]">
        <p className="">${props.price}.00 per coin</p>
        <p>Insured value up to $10,000</p>
      </div>
    </div>
  );
};

export default Index;
