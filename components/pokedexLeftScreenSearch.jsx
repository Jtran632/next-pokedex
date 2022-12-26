/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
export default function PokedexLeftScreenSearch({
  res,
  checkPokemon,
  shiny,
  setShiny,
}) {
  const [pokeFilter, setPokeFilter] = useState("");
  const PokemonList = () => {
    let filtered = res.filter((i) => i.name.includes(pokeFilter));
    return (
      <div className="border-4 border-b-0 border-black h-40 w-full rounded-t-md  overflow-y-scroll divide-y-2 divide-green-100 text-md capitalize font-semibold bg-green-600 no-scrollbar">
        {filtered.map((i) => (
          <li
            key={i.name}
            className="flex items-center justify-between bg-green-600 hover:bg-green-300 pl-2 pr-2"
            onClick={async () => checkPokemon(i.name, i.id)}
          >
            <div>#{i.id}</div>
            <div>{i.name}</div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${i.id}.png`}
              onError={() => (this.img.src = notFound)}
              alt="pokemon icon"
            />
          </li>
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="row-start-5 col-start-2 col-end-12 text-black flex justify-center gap-5 pb-8">
        {shiny === "red" ? (
          <div
            className="border-2 border-black h-4 w-12 rounded-3xl bg-rose-400"
            onClick={() => setShiny("red")}
          />
        ) : (
          <div
            className="border-2 border-black h-4 w-12 rounded-3xl bg-rose-700"
            onClick={() => setShiny("red")}
          />
        )}
        {shiny === "green" ? (
          <div
            className="border-2 border-black h-4 w-12 rounded-3xl bg-green-400"
            onClick={() => setShiny("green")}
          />
        ) : (
          <div
            className="border-2 border-black h-4 w-12 rounded-3xl bg-green-900"
            onClick={() => setShiny("green")}
          />
        )}
      </div>
      <div className="grid-col-2 row-start-5 col-start-2 col-end-12 text-black justify-center mt-4 pt-2 ">
        <div className="grid">
          <PokemonList />
          <input
            className="border-4 border-black rounded-b-md bg-gray-400 text-center"
            onChange={(e) => setPokeFilter(e.target.value)}
          ></input>
        </div>
      </div>
    </>
  );
}
