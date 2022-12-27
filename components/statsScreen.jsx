export default function StatsTop({ selectedPokemon }) {
  const l = Object.keys(selectedPokemon.stats).map((i) => i);
  const v = Object.keys(selectedPokemon.stats).map(
    (i) => selectedPokemon.stats[i]
  );
  const total = v.reduce((result, number) => result + number);
  console.log("v", v);
  console.log(total);
  return (
    <div className="font-bold">
      <div className="border-2 border-black bg-green-400 ">
        <div className="text-center capitalize text-xl">{selectedPokemon.name} </div>
        <div className="text-center">Total Base Stats - {total}</div>
      </div>
      <ul className="grid p-2 font-bold">
        {Object.keys(selectedPokemon.stats).map((i) => (
          <div key={i} className="col-span-1 text-left items-center">
            <div>{i}</div>
            <div className="flex border-2 border-black">
              <div className=" w-full bg-slate-100 border border-black flex items-center">
                <div
                  style={{
                    width: `${(selectedPokemon.stats[i] / total) * 100}%`,
                    backgroundColor: "#44D362",
                  }}
                  className="flex items-center justify-center h-full border-r-4 border-green-600"
                ></div>
                {selectedPokemon.stats[i]}
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
