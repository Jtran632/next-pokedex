/* eslint-disable @next/next/no-img-element */
export default function InfoScreen({ selectedPokemon }) {
  let a = `https://veekun.com/dex/media/pokemon/footprints/${selectedPokemon.id}.png`;
  console.log("footprint", a);
  console.log(typeof(selectedPokemon.ability))
  return (
    <div className="row-start-3 row-end-5 col-start-1 col-end-4 h-full flex border-2 border-black w-full capitalize">
      <ul className="grid grid-cols-2 grid-rows-2 border-4 border-blue-400 w-full bg-gray-200">
        <li className="col-span-2 row-span-2 font-semibold p-1 text-sm border-4 border-black border-double items-center justify-center gap-10 flex">
          <div>
            <div>Name: {selectedPokemon.name}</div>
            <div className="">Dex Number: {selectedPokemon.id}</div>
          </div>
          <div>
            <div>Height: {selectedPokemon.weight} lbs</div>
            <div>Weight: {selectedPokemon.height} ft</div>
          </div>
        </li>

        <li className="col-span-1 row-span-1 font-semibold text-sm border-4 border-black border-double items-center justify-center p-1">
          <div className="grid justify-center">
            <h1 className="w-full text-center underline">Abilities</h1>
            {Object.values(selectedPokemon.ability).map((i) => (
              <div key={i.ability.name}> {i.ability.name}</div>
            ))}
          </div>
        </li>
        <li className="col-span-1 row-span-1 font-semibold text-sm border-4 border-black border-double items-center justify-center p-1">
          <div className="grid justify-center">
            <h1 className="w-full text-centertext-xs">Footprint</h1>
            <img
              src={`https://veekun.com/dex/media/pokemon/footprints/${selectedPokemon.id}.png`}
              alt={selectedPokemon.name + " footprint"}
              className="w-full h-full border-2 border-black rounded-xl bg-yellow-100"
            ></img>
          </div>
        </li>
      </ul>
    </div>
  );
}
