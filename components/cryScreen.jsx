import ReactAudioPlayer from "react-audio-player";
export default function CryScreen({ selectedPokemon }) {
  return (
    <ReactAudioPlayer
      src={`https://veekun.com/dex/media/pokemon/cries/${selectedPokemon.id}.ogg`}
      controls={true}
      className={
        "w-full col-span-full row-span-5 bg-blue-300 h-full border-4 border-black border-double p-2"
      }
    />
  );
}
