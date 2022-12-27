import InfoScreenBottom from "./infoScreenBottom";
import InfoScreenTop from "./infoScreenTop";
import DescScreenTop from "./descScreenTop";
import DescScreenBottom from "./descScreenBottom";
import CryScreen from "./cryScreen";
import StatsTop from "./statsScreen";
export default function SwitchPokedexRightScreen({
  selectedPokemon,
  fixedDesc,
  setFixedDesc,
  optionsRight,
  descList,
}) {
  const RenderSwitch = () => {
    switch (optionsRight) {
      case "info":
        return (
          <div className="grid grid-cols-3 grid-rows-4 h-full justify-center  items-center p-1">
            <InfoScreenTop selectedPokemon={selectedPokemon} />
            <InfoScreenBottom selectedPokemon={selectedPokemon} />
          </div>
        );
      case "desc":
        return (
          <div className="grid grid-cols-3 grid-rows-4 h-full justify-center  items-center p-1 ">
            <DescScreenTop fixedDesc={fixedDesc} />
            <DescScreenBottom
              fixedDesc={fixedDesc}
              setFixedDesc={setFixedDesc}
              descList={descList}
            />
          </div>
        );
      case "stats":
        return <StatsTop selectedPokemon={selectedPokemon} className="" />;
      case "cry":
        return (
          <div className="grid grid-cols-3 grid-rows-4 h-full justify-center  items-center p-1 ">
            <InfoScreenTop selectedPokemon={selectedPokemon} />
            <CryScreen selectedPokemon={selectedPokemon} />
          </div>
        );
    }
  };
  return (
    <div className="col-span-full row-start-1 row-end-6 border-8 m-4 bg-white border-black border-double">
      <RenderSwitch />
    </div>
  );
}
