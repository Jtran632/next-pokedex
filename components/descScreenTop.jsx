/* eslint-disable @next/next/no-img-element */
export default function DescScreenTop({ fixedDesc }) {
  return (
    <div
      className={`row-start-1 row-end-3 col-start-1 col-end-4 h-full flex border-2 border-black border-b-0`}
    >
      <div className="p-2 w-full items-center bg-gray-200 border-4  border-blue-400 font-bold">
        {fixedDesc}
      </div>
    </div>
  );
}
