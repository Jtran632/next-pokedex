/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
export default function InfoScreenTop({ selectedPokemon }) {
  const [infoButton, setInfoButton] = useState("notShiny");
  const pokemonColors = {
    normal: "border-gray-300 bg-gray-400",
    fire: "border-orange-300 bg-orange-400",
    water: "border-blue-300 bg-blue-400",
    grass: "border-green-300 bg-green-400",
    electric: "border-yellow-300 bg-yellow-400",
    ice: "border-blue-200 bg-blue-300",
    fighting: "border-red-500 bg-red-600",
    poison: "border-purple-400 bg-purple-500",
    ground: "border-orange-200 bg-orange-300",
    flying: "border-violet-200 bg-violet-300",
    psychic: "border-pink-300 bg-pink-400",
    bug: "border-lime-400 bg-lime-500",
    rock: "border-amber-700 bg-amber-800",
    ghost: "border-purple-600 bg-purple-700",
    dark: "bg-orange-600",
    dragon: "border-violet-600 bg-violet-700",
    steel: "border-gray-200 bg-gray-300",
    fairy: "bg-orange-600",
  };
  // let gradientLeft =
  //   "from-" +
  //   pokemonColors[
  //     Object.values(selectedPokemon.types[selectedPokemon.types.length - 1])[1]
  //       .name
  //   ];
  // let gradientRight =
  //   "to-" + pokemonColors[Object.values(selectedPokemon.types[0])[1].name];
  return (
    <div
      className={`row-start-1 row-end-3 col-start-1 col-end-4 h-full flex border-2 border-black`}
    >
      <div className="grid grid-cols-10 grid-rows-6 w-full items-center bg-gray-200">
        <div className="col-span-full row-start-1 flex justify-center bg-blue-300 mb-3 font-bold capitalize border border-black">
          {selectedPokemon.name}
        </div>
        <ul
          className={`col-span-full row-start-2 flex font-bold capitalize justify-center gap-20 `}
        >
          {Object.values(selectedPokemon.types).map((i) => (
            <li
              key={i}
              className={` 
              border-4 border-double
              ${pokemonColors[i.type.name]}
              rounded-md w-20 h-6 text-center text-white items-center flex justify-center
               `}
            >
              {i.type.name}
            </li>
          ))}
        </ul>
        <div className="col-span-full place-content-center row-start-3 row-end-6 flex zoom">
          {infoButton === "notShiny" ? (
            <>
              <img
                src={selectedPokemon.sprites.normalFront}
                alt="front sprite"
                loading="lazy"
              ></img>
              <img
                src={selectedPokemon.sprites.normalBack}
                alt="back sprite"
                loading="lazy"
              ></img>
            </>
          ) : (
            <>
              <img
                src={selectedPokemon.sprites.shinyFront}
                alt="front sprite"
                loading="lazy"
              ></img>
              <img
                src={selectedPokemon.sprites.shinyBack}
                alt="back sprite"
                loading="lazy"
              ></img>
            </>
          )}
        </div>
        <div className="col-span-full row-end-7 flex justify-evenly font-bold mt-2">
          <div className="grid grid-cols-2 text-sm w-full h-6">
            {infoButton === "notShiny" ? (
              <button
                className="border border-black bg-blue-400"
                onClick={() => setInfoButton("notShiny")}
              >
                Regular
              </button>
            ) : (
              <button
                className="border border-black bg-blue-300"
                onClick={() => setInfoButton("notShiny")}
              >
                Regular
              </button>
            )}
            {infoButton === "shiny" ? (
              <button
                className="border border-black bg-blue-400"
                onClick={() => setInfoButton("shiny")}
              >
                Shiny{" "}
              </button>
            ) : (
              <button
                className="border border-black bg-blue-300"
                onClick={() => setInfoButton("shiny")}
              >
                Shiny{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
