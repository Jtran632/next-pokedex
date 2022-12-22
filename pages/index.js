/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();
export default function Home({ res, initialData, initialDesc }) {
  const [poke, setPoke] = useState(1);
  const [descList, setDescList] = useState(initialDesc);
  const [fixedDesc, setFixedDesc] = useState(
    initialDesc[0].flavor_text.replace(/(\r\n|\n|\r|\f)/gm, " ")
  );
  const [descGame, setDescGame] = useState(initialDesc[0].version.name);
  const [selectedPokemon, setSelectedPokemon] = useState({
    name: initialData.name,
    ability: initialData.abilities,
    types: initialData.types,
    stats: {
      Hp: initialData.stats[0].base_stat,
      Attack: initialData.stats[1].base_stat,
      Defense: initialData.stats[2].base_stat,
      SpecialAttack: initialData.stats[3].base_stat,
      SpecialDefence: initialData.stats[4].base_stat,
      Speed: initialData.stats[5].base_stat,
    },
    sprites: {
      normalFront: initialData.sprites.front_default,
      normalBack: initialData.sprites.back_default,
      shinyFront: initialData.sprites.front_shiny,
      shinyBack: initialData.sprites.back_shiny,
    },
    items: initialData.held_items,
  });
  const [infoButton, setInfoButton] = useState("notShiny");
  useEffect(() => {
    const pokeSetter = async () => {
      let response = await P.getPokemonByName(poke).then(function (r) {
        return r;
      });
      setSelectedPokemon({
        name: response.name,
        ability: response.abilities,
        types: response.types,
        stats: {
          Hp: response.stats[0].base_stat,
          Attack: response.stats[1].base_stat,
          Defense: response.stats[2].base_stat,
          SpecialAttack: response.stats[3].base_stat,
          SpecialDefence: response.stats[4].base_stat,
          Speed: response.stats[5].base_stat,
        },
        sprites: {
          normalFront: response.sprites.front_default,
          normalBack: response.sprites.back_default,
          shinyFront: response.sprites.front_shiny,
          shinyBack: response.sprites.back_shiny,
        },
        items: response.held_items,
      });
    };
    const descSetter = async () => {
      var desc = await P.getPokemonSpeciesByName(poke).then(
        function (response) {
          return Object.values(response.flavor_text_entries).filter(
          (i) => i.language.name === "en"
          );
        }
        );
        setFixedDesc(desc[0].flavor_text.replace(/(\r\n|\n|\r|\f)/gm, " "));
      }

    console.log(selectedPokemon);
    pokeSetter();
    descSetter();
  }, [poke]);

  const [shiny, setShiny] = useState("red");
  const [urlPoke, setUrlPoke] = useState(
    `https://projectpokemon.org/images/normal-sprite/bulbasaur.gif`
  );
  const [urlPokeShiny, setUrlPokeShiny] = useState(
    `https://projectpokemon.org/images/shiny-sprite/bulbasaur.gif`
  );

  //alot of special cases where getting gifs from projectpokemon from pokeapi names don't mix well because of different naming conventions usually having to do with hyphens (-)
  async function checkPokemon(props, index) {
    setPoke(props);
    var s = props;
    var baseUrl = "https://projectpokemon.org/images/normal-sprite/";
    var baseUrlShiny = "https://projectpokemon.org/images/shiny-sprite/";
    if ((index >= 810) & (index <= 905)) {
      baseUrl =
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/";
      baseUrlShiny =
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/";
    }
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
    switch (special) {
      case 1:
        setUrlPoke(
          `https://projectpokemon.org/images/normal-sprite/mr.mime.gif`
        );
        setUrlPokeShiny(
          `https://projectpokemon.org/images/shiny-sprite/mr._mime.gif`
        );
        return setPoke(index);
      case 2:
        setUrlPoke(
          `https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/mr.rime.gif`
        );
        setUrlPokeShiny(
          `https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/mr.rime.gif`
        );
        return setPoke(index);
      default:
        setUrlPoke(baseUrl + `${s}.gif`);
        setUrlPokeShiny(baseUrlShiny + `${s}.gif`);
        setPoke(index);
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

            <div className="col-span-12 text-black border-b-4 h-0 border-black pt-2 justify-center flex">
              <div
                div
                className=" text-black border border-black items-end pb-8 flex w-11/12 bg-white justify-center mt-14 h-64 rounded-md"
              >
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

            {/* <div className="row-start-5 col-start-1 col-end-4 text-black pt-10 flex justify-center mt-4 mr-4">
              <div className="border-4 border-double border-gray-900 h-14 w-14 rounded-full bg-black"></div>
            </div> */}
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
                <ul className="border-4 border-b-0 border-black h-40 w-full rounded-t-md  overflow-y-scroll divide-y-2 divide-green-800 text-md capitalize font-semibold">
                  {res.map((i, index) => (
                    <li
                      key={i.name}
                      className="flex items-center justify-between bg-green-600 hover:bg-green-300 pl-2 pr-2"
                      onClick={async () => checkPokemon(i.name, index + 1)}
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

          <ul className="grid grid-rows-6 w-96 max-h-3/4 min-w-fill h-3/4 bg-gradient-to-l text-black">
            <div className=" row-start-2 row-end-7 border-4 border-l-8 border-black bg-gradient-to-l from-red-700 to-red-800 mt-2">
              {/* Makes uses 4/6 rows to make it look like a pokedex */}
              <div className="grid grid-rows-6 grid-cols-8 h-full">
                <ul className=" flex justify-center col-span-full row-start-6 row-end-7 w-full">
                  <button className=" w-20 h-8 border-2 border-black rounded-l-lg bg-green-400 flex justify-center items-center">
                    Info
                  </button>
                  <button className=" w-20 h-8 border-2 border-black  bg-green-400 flex justify-center items-center">
                    Stats
                  </button>
                  <button className=" w-20 h-8 border-2 border-black  bg-green-400 flex justify-center items-center">
                    Desc
                  </button>
                  <button className=" w-20 h-8 border-2 border-black rounded-r-lg bg-green-400 flex justify-center items-center">
                    Cry
                  </button>
                </ul>

                <div className="col-span-full row-start-1 row-end-6 border-8 m-4  bg-white border-black border-double">
                  <></>
                  <div className="grid grid-cols-3 grid-rows-4 h-full justify-center  items-center p-1">
                    <></>
                    <div className="row-start-1 row-end-3 col-start-1 col-end-4 h-full flex border-4 border-gray-800">
                      <div className="grid grid-cols-10 grid-rows-6 w-full items-center">
                        <div className="col-span-full row-span-1 flex justify-center bg-blue-300 mb-3 font-bold">
                          {" "}
                          Info
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
                            <button
                              className="border border-black"
                              onClick={() => setInfoButton("notShiny")}
                            >
                              Regular
                            </button>
                            <button
                              className="border border-black"
                              onClick={() => setInfoButton("shiny")}
                            >
                              Shiny{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <></>
                    <></>
                    <div className="row-start-3 row-end-5 col-start-1 col-end-4 h-full flex border-2 border-black w-full">
                      <div className="grid grid-cols-2 grid-rows-2 border-4 border-green-400 w-full">
                        <div className="col-span-full row-span-2 overflow-y-hidden font-semibold p-1">
                          {fixedDesc}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <></>
              </div>
            </div>
          </ul>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const interval = {
    offset: 0,
    limit: 898,
  };
  const res = await P.getPokemonsList(interval).then(function (response) {
    return response.results;
  });

  const initialData = await P.getPokemonByName(res[0].name).then(function (
    response
  ) {
    return response;
  });
  var initialDesc = await P.getPokemonSpeciesByName(res[0].name).then(function (
    response
  ) {
    return Object.values(response.flavor_text_entries).filter(
      (i) => i.language.name === "en"
    );
  });
  return {
    props: { res, initialData, initialDesc }, // will be passed to the page component as props
  };
}
