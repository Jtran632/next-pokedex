/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
export default function InfoScreenTop({ selectedPokemon }) {
  const [infoButton, setInfoButton] = useState("notShiny");
  return (
    <div className="row-start-1 row-end-3 col-start-1 col-end-4 h-full flex border-4 border-gray-800">
      <div className="grid grid-cols-10 grid-rows-6 w-full items-center">
        <div className="col-span-full row-span-1 flex justify-center bg-blue-300 mb-3 font-bold capitalize">
          {selectedPokemon.name}
        </div>
        {infoButton === "notShiny" ? (
          <div className="col-span-full place-content-center row-start-2 row-end-5 flex zoom">
            <img
              src={selectedPokemon.sprites.normalFront}
              alt="front sprite"
            ></img>
            <img
              src={selectedPokemon.sprites.normalBack}
              alt="back sprite"
            ></img>
          </div>
        ) : (
          <div className="col-span-full place-content-center row-start-2 row-end-5 flex zoom">
            <img
              src={selectedPokemon.sprites.shinyFront}
              alt="front sprite"
              className="zoom"
            ></img>
            <img
              src={selectedPokemon.sprites.shinyBack}
              alt="back sprite"
            ></img>
          </div>
        )}
        <div className="col-span-full row-span-2 flex justify-evenly bg-blue-300 mt-7 font-bold">
          <div className="grid grid-cols-2 text-sm w-full">
            {infoButton === "notShiny" ? (
              <button
                className="border border-black bg-blue-400"
                onClick={() => setInfoButton("notShiny")}
              >
                Regular
              </button>
            ) : (
              <button
                className="border border-black"
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
                className="border border-black"
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
