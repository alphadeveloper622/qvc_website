import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export function NameCell({ value }) {
  return <span className={`float-left text-[#3C80BB]`}>{value}</span>;
}
export function DetailCell() {
  return (
    <div className={`float-right flex  text-[#3C80BB]`}>
      <MagnifyingGlassIcon className="m-auto mr-1 h-6 w-6" />
      <span>Details</span>
    </div>
  );
}
