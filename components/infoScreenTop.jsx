/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
export default function InfoScreenTop({ selectedPokemon }) {
  const [infoButton, setInfoButton] = useState("notShiny");
  return (
    <div
      className={`row-start-1 row-end-3 col-start-1 col-end-4 h-full flex border-2 border-black`}
    >
      <div className="grid grid-cols-10 grid-rows-6 w-full items-center bg-gray-200">
        <div className="col-span-full row-start-1 flex justify-center gap-1 bg-blue-300 mb-3 font-bold capitalize border border-black">
          <div>#{selectedPokemon.id}</div>
          <div>{selectedPokemon.name}</div>
          <div>- {selectedPokemon.genera}</div>
        </div>
        <ul
          className={`col-span-full row-start-2 flex font-bold capitalize justify-center gap-20 `}
        >
          {Object.values(selectedPokemon.types).map((i, index) => (
            <img
              src={`https://veekun.com/dex/media/types/en/${i.type.name}.png`}
              alt="type"
              key={index + i.type.name}
              className={"w-14 border border-black rounded"}
            />
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
