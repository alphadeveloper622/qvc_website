import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export function NameCell({ value }) {
  return <span className={`float-left text-black`}>{value}</span>;
}
export function DetailCell() {
  return (
    <div
      className={`poppins700 float-right  flex cursor-pointer text-[13px] text-[#3C80BB] hover:text-[#1f3447]`}
    >
      <MagnifyingGlassIcon className="m-auto mr-1 h-5 w-5" />
      <span>Details</span>
    </div>
  );
}
