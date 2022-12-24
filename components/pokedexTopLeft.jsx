export default function PokedexTopLeft() {
  return (
    <div className="flex">
      <li className="row-start-1 col-span-2 p-4 ">
        <button className="border-8 rounded-full w-20 h-20 bg-gradient-to-tr from-cyan-400 to-blue-600 " />
      </li>
      <li className="row-start-1 col-start-4 col-end-4 p-2">
        <button className="border border-black rounded-full w-4 h-4 bg-gradient-to-r from-pink-400 to-red-600 " />
      </li>
      <li className="row-start-1 col-start-5 col-end-5 p-2">
        <button className="border border-black rounded-full w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 " />
      </li>
      <li className="row-start-1 col-start-6 col-end-6 p-2">
        <button className="border border-black rounded-full w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 " />
      </li>
    </div>
  );
}
