/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InfoScreenBottom from "../components/infoScreenBottom";
import InfoScreenTop from "../components/infoScreenTop";
import PokedexTopLeft from "../components/pokedexTopLeft";
import PokedexLeftScreen from "../components/pokedexLeftScreen";
import PokedexLeftScreenSearch from "../components/pokedexLeftScreenSearch";
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

  const [urlPoke, setUrlPoke] = useState(
    `https://projectpokemon.org/images/normal-sprite/bulbasaur.gif`
  );
  const [urlPokeShiny, setUrlPokeShiny] = useState(
    `https://projectpokemon.org/images/shiny-sprite/bulbasaur.gif`
  );
  const [optionsRight, setOptionsRight] = useState("info");
  const [shiny, setShiny] = useState("red");
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
      var desc = await P.getPokemonSpeciesByName(poke).then(function (
        response
      ) {
        return Object.values(response.flavor_text_entries).filter(
          (i) => i.language.name === "en"
        );
      });
      setFixedDesc(desc[0].flavor_text.replace(/(\r\n|\n|\r|\f)/gm, " "));
    };

    console.log(selectedPokemon);
    pokeSetter();
    descSetter();
  }, [poke]);

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
            <PokedexTopLeft />
            <PokedexLeftScreen
              urlPoke={urlPoke}
              urlPokeShiny={urlPokeShiny}
              shiny={shiny}
            />
            <PokedexLeftScreenSearch
              res={res}
              checkPokemon={checkPokemon}
              shiny={shiny}
              setShiny={setShiny}
            />
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
                  <div className="grid grid-cols-3 grid-rows-4 h-full justify-center  items-center p-1">
                    <InfoScreenTop selectedPokemon={selectedPokemon} />
                    <InfoScreenBottom fixedDesc={fixedDesc} />
                  </div>
                </div>
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
  const r = await P.getPokemonsList(interval).then(function (response) {
    return response.results;
  });
  //add id to result for tracking
  var res = r
  res.forEach((item, i) => {
    item.id = i + 1;
  });
  console.log(res);
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
  console.log(res);
  return {
    props: { res, initialData, initialDesc }, // will be passed to the page component as props
  };
}
