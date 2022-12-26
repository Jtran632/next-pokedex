/* eslint-disable @next/next/no-img-element */
export default function DescScreenBottom({ fixedDesc, descList, setFixedDesc }) {
  console.log(Object.values(descList).map((i) => i));
  return (
    <div className="row-start-3 row-end-5 col-start-1 col-end-4 h-full flex border-2 border-black w-full ">
      <ul className="grid grid-cols-6 grid-rows-2 border-4 border-blue-400 w-full bg-gray-200">
        <div className="col-span-full row-span-2 font-semibold p-2 text-md capitalize overflow-y-scroll divide-y divide-black border-2 border-black no-scrollbar">
          {Object.values(descList).map((i, index) => (
            <li key={i.version.name} className="hover:bg-slate-400" onClick={(e) => setFixedDesc(Object.values(descList)[index].flavor_text.replace(/(\r\n|\n|\r|\f)/gm, " "))}>
              {i.version.name}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
