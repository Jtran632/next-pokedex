/* eslint-disable @next/next/no-img-element */
export default function DescScreenTop({ fixedDesc}) {
  return (
    <div
      className={`row-start-1 row-end-3 col-start-1 col-end-4 h-full flex border-2 border-black border-b-0`}
    >
      <div className="grid grid-rows-6 border-4 border-blue-400 font-bold">
        <div className=" row-end-1 bg-blue-300 text-center border-2 border-black capitalize">
          Flavor Text
        </div>
        <div className=" row-span-6 p-2 w-full items-center bg-gray-200 border-blue-400">
          {fixedDesc}
        </div>
      </div>
    </div>
  );
}
