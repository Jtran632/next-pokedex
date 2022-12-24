export default function InfoScreen(props) {
  return (
    <div className="row-start-3 row-end-5 col-start-1 col-end-4 h-full flex border-2 border-black w-full">
      <ul className="grid grid-cols-2 grid-rows-2 border-4 border-green-400 w-full">
        <li className="col-span-1 row-span-1 overflow-y-scroll font-semibold p-1">
          {props.fixedDesc}
        </li>
        <li className="col-span-1 row-span-1 overflow-y-hidden font-semibold p-1">
          {props.fixedDesc}
        </li>
        <li className="col-span-1 row-span-1 overflow-y-hidden font-semibold p-1">
          {props.fixedDesc}
        </li>
        <li className="col-span-1 row-span-1 overflow-y-hidden font-semibold p-1">
          Hello
        </li>
      </ul>
    </div>
  );
}
