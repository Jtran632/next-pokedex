export default function OptionButtons({ optionsRight, setOptionsRight }) {
  return (
    <ul className=" flex justify-center col-span-full row-start-6 row-end-7 w-full">
      {optionsRight === "info" ? (
        <button
          value={"info"}
          className=" w-20 h-8 border-2 border-black rounded-l-lg bg-green-600 flex justify-center items-center"
          onClick={(e) => setOptionsRight(e.target.value)}
        >
          {"Info"}
        </button>
      ) : (
        <button
          value={"info"}
          className=" w-20 h-8 border-2 border-black rounded-l-lg bg-green-400 flex justify-center items-center"
          onClick={(e) => setOptionsRight(e.target.value)}
        >
          {"Info"}
        </button>
      )}
      {optionsRight === "desc" ? (
        <button
          value={"desc"}
          className=" w-20 h-8 border-2 border-black bg-green-600 flex justify-center items-center"
          onClick={(e) => setOptionsRight(e.target.value)}
        >
          {"Desc"}
        </button>
      ) : (
        <button
          value={"desc"}
          className=" w-20 h-8 border-2 border-black bg-green-400 flex justify-center items-center"
          onClick={(e) => setOptionsRight(e.target.value)}
        >
          {"Desc"}
        </button>
      )}
      {optionsRight === "stats" ? (
        <button
          value={"stats"}
          className=" w-20 h-8 border-2 border-black bg-green-600 flex justify-center items-center"
          onClick={(e) => setOptionsRight(e.target.value)}
        >
          {"Stats"}
        </button>
      ) : (
        <button
          value={"stats"}
          className=" w-20 h-8 border-2 border-black bg-green-400 flex justify-center items-center"
          onClick={(e) => setOptionsRight(e.target.value)}
        >
          {"Stats"}
        </button>
      )}
      {optionsRight === "cry" ? (
        <button
          value={"cry"}
          className=" w-20 h-8 border-2 border-black rounded-r-lg bg-green-600 flex justify-center items-center"
          onClick={(e) => setOptionsRight(e.target.value)}
        >
          {"Cry"}
        </button>
      ) : (
        <button
          value={"cry"}
          className=" w-20 h-8 border-2 border-black rounded-r-lg bg-green-400 flex justify-center items-center"
          onClick={(e) => setOptionsRight(e.target.value)}
        >
          {"Cry"}
        </button>
      )}
    </ul>
  );
}
