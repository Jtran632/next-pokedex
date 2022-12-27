/* eslint-disable @next/next/no-img-element */
export default function InfoScreen({ selectedPokemon }) {
  return (
    <div className="row-start-3 row-end-5 col-start-1 col-end-4 h-full flex border-2 border-black w-full capitalize">
      <ul className="grid grid-cols-2 grid-rows-2 border-4 border-blue-400 w-full bg-blue-200">
        <li className="col-span-2 row-span-2 font-semibold border-4 border-black border-double items-center justify-center flex text-xs">
          <div className="w-full items-center justify-center grid">
            <div>Height: {selectedPokemon.weight} lbs</div>
            <div>Weight: {selectedPokemon.height} ft</div>
            <div className="grid">
              <div>Shape: {selectedPokemon.shape}</div>
              <img
                src={`https://veekun.com/dex/media/shapes/${selectedPokemon.shape}.png`}
                alt="shape image"
                className="border border-black rounded bg-white"
              />
            </div>
          </div>
          <div className="w-full h-full items-center justify-center grid border-l-2 border-black text-center">
            <div className="">
              <h1 className="underline">Abilities</h1>
              {Object.values(selectedPokemon.ability).map(
                (i, index) => (index ? ", " : "") + i.ability.name
              )}
            </div>
            <div>
              <h1 className="underline">Egg Groups</h1>
              {Object.values(selectedPokemon.eggGroup).map(
                (i, index) => (index ? ", " : "") + i.name
              )}
            </div>
          </div>
        </li>

        <li className="col-span-1 row-span-1 font-semibold border-4 border-black border-double border-r-0 items-center justify-center text-center flex p-1 text-xs">
          <div className="items-center justify-center flex gap-1">
            <div>Habitat: {selectedPokemon.habitat}</div>
            {selectedPokemon.habitat != "None" ? (
              <img
                src={`https://veekun.com/dex/media/habitats/${selectedPokemon.habitat}.png`}
                alt="habitat"
                className=" border border-black rounded-full"
              ></img>
            ) : (
              <></>
            )}
          </div>
        </li>
        <li className="col-span-1 row-span-1 font-semibold border-4 border-black border-double border-l-0 items-center justify-center p-1 text-xs">
          <div className="items-center justify-center flex">
            <h1 className="w-full text-center">Footprint</h1>
            <img
              src={`https://veekun.com/dex/media/pokemon/footprints/${selectedPokemon.id}.png`}
              alt={"None"}
              className="w-2/3 h-full border border-black rounded-xl bg-gray-100"
            ></img>
          </div>
        </li>
      </ul>
    </div>
  );
}
