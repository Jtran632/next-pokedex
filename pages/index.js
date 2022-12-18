/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();
export default function Home({ res }) {
  const [selectedPokemon, setSelectedPokemon] = useState({
    name: res[0].name,
  });
  const [shiny, setShiny] = useState("red");
  const [urlPoke, setUrlPoke] = useState(
    `https://projectpokemon.org/images/normal-sprite/bulbasaur.gif`
  );
  const [urlPokeShiny, setUrlPokeShiny] = useState(
    `https://projectpokemon.org/images/shiny-sprite/bulbasaur.gif`
  );

  //alot of special cases where getting gifs from projectpokemon from pokeapi names don't mix well because of different naming conventions usually having to do with hyphens (-)
  async function checkPokemon(props, index) {
    var s = props;
    var baseUrl = "https://projectpokemon.org/images/normal-sprite/";
    var baseUrlShiny = "https://projectpokemon.org/images/shiny-sprite/";
    if ((index >= 810) & (index <= 905)) {
      baseUrl =
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/";
      baseUrlShiny =
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/";
    }
    P.getPokemonByName(props).then(function (response) {
      console.log(response);
    });
    if (props.includes("nido") === true || props.includes("mime-jr") === true) {
      s = props.replace("-", "_");
    }
    if (
      props.includes("tapu") === true ||
      props.includes("type") === true ||
      props.includes("mr-mime") === true
    ) {
      s = props.replace("-", "");
    }
    if (
      props.includes("deox") === true ||
      props.includes("worm") === true ||
      props.includes("giratina") === true ||
      props.includes("shaymin") === true ||
      props.includes("bascu") === true ||
      props.includes("darman") === true ||
      props.includes("torna") === true ||
      props.includes("thundu") === true ||
      props.includes("lando") === true ||
      props.includes("keldeo") === true ||
      props.includes("meloe") === true ||
      props.includes("meows") === true ||
      props.includes("aegis") === true ||
      props.includes("pumpka") === true ||
      props.includes("gourg") === true ||
      props.includes("zygarde") === true ||
      props.includes("orico") === true ||
      props.includes("mimi") === true ||
      props.includes("minior") === true ||
      props.includes("lycan") === true ||
      props.includes("wishi") === true ||
      props.includes("eiscu") === true ||
      props.includes("indee") === true ||
      props.includes("morp") === true ||
      props.includes("urshifu") === true ||
      props.includes("toxtri") === true
    ) {
      s = props.split("-");
      s = s[0];
    }
    var special = 0;
    if (props.includes("mr-mime") === true) {
      special = 1;
    }
    if (props.includes("mr-rime") === true) {
      special = 2;
    }
    console.log(s);
    console.log(special);
    switch (special) {
      case 1:
        console.log("mime");
        setUrlPoke(
          `https://projectpokemon.org/images/normal-sprite/mr.mime.gif`
        );
        setUrlPokeShiny(
          `https://projectpokemon.org/images/shiny-sprite/mr._mime.gif`
        );
        return setSelectedPokemon({ name: s });
      case 2:
        console.log("rime");
        setUrlPoke(
          `https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/mr.rime.gif`
        );
        setUrlPokeShiny(
          `https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/mr.rime.gif`
        );
        return setSelectedPokemon({ name: s });
      default:
        setUrlPoke(baseUrl + `${s}.gif`);
        setUrlPokeShiny(baseUrlShiny + `${s}.gif`);
        return setSelectedPokemon({ name: s });
    }
  }

  return (
    <div>
      <div className="flex justify-center">Pokedex App</div>
      <main className="">
        <div className="flex items-center justify-center h-screen">
          <ul className="grid grid-cols-12 grid-rows-6 border-2 border-black w-96 min-w-fill h-3/4 bg-gradient-to-r from-red-700 to-red-800 rounded-l-md">
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

            <div className="col-span-12 text-black border-b-4 h-0 border-black p-1 justify-center flex">
              <div className=" text-black border-8 border-black items-end pb-10 flex w-11/12 bg-white justify-center mt-14 h-72 leftScreen ">
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

            {/* <div className="row-start-5 col-start-1 col-end-4 text-black pt-10 flex justify-center mt-4 mr-4">
              <div className="border-4 border-double border-gray-900 h-14 w-14 rounded-full bg-black"></div>
            </div> */}
            <div className="row-start-5 col-start-3 col-end-10 text-black flex justify-center gap-3">
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

            <div className="grid-col-2 row-start-5 col-start-2 col-end-12 text-black pt-2 justify-center mt-4 ">
              <div className="grid">
                <ul className="border-4 border-b-0 border-black h-40 w-full rounded-t-md  overflow-y-scroll divide-y-2 divide-green-800 text-md capitalize font-semibold">
                  {res.map((i, index) => (
                    <li
                      key={i.name}
                      className="flex items-center justify-between bg-green-600 hover:bg-green-300 pl-2 pr-2"
                      onClick={() => checkPokemon(i.name, index + 1)}
                    >
                      <div>#{index + 1}</div>
                      <div>{i.name}</div>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${
                          index + 1
                        }.png`}
                        onError={() => (this.img.src = notFound)}
                        alt="pokemon icon"
                      />
                    </li>
                  ))}
                </ul>
                <div className="border-4 border-black rounded-b-md bg-gray-400 text-center">
                  {" "}
                  To Do Filter
                </div>
              </div>
            </div>
            {/* <div className="row-start-5 col-start-10 col-end-13 text-black pt-10 justify-center mt-10 ml-6 mr-2">
              <Image
                src={"/gamepad.png"}
                alt="img"
                width={100}
                height={100}
              ></Image>
            </div> */}
          </ul>

          <ul className="grid grid-cols-12 grid-rows-6 border-2 border-l-4 border-black w-96 max-h-3/4 min-w-fill h-3/4 bg-gradient-to-l from-red-700 to-red-800 rounded-r-md">
            To Do Stats and pages
          </ul>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const interval = {
    offset: 0,
    limit: 898,
  };
  return P.getPokemonsList(interval).then(function (response) {
    let res = response.results;
    console.log(res);
    return {
      props: { res }, // will be passed to the page component as props
    };
  });
}
