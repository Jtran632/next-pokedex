import Image from "next/image";
import { useState } from "react";
export default function PokedexLeftScreen({ urlPoke, urlPokeShiny, shiny }) {
  return (
    <div className="col-span-12 text-black border-b-4 h-0 border-black pt-2 justify-center flex">
      <div className=" text-black border border-black items-end pb-8 flex w-11/12 bg-white justify-center mt-14 h-64 rounded-md">
        <div className=" text-black border-2 border-black items-end pb-10 flex w-11/12 bg-white justify-center mt-14 h-48 leftScreen ">
          {shiny === "red" ? (
            <Image
              src={urlPoke}
              alt="pokemon gif"
              width={100}
              height={100}
              placeholder={"/notFound.png"}
              className=" w-auto h-auto scale-150"
            ></Image>
          ) : (
            <Image
              src={urlPokeShiny}
              alt="pokemon gif"
              width={100}
              height={100}
              className=" w-auto h-auto scale-150"
            ></Image>
          )}
        </div>
      </div>
    </div>
  );
}
