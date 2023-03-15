import * as C from "./style";
import { Waves } from "../Waves";
import { fetchPokemon } from "../../api/fetchPokemon";
import { Pokemon } from "../../types/Pokemon";

type HeroSectionProps = {
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
};

export const HeroSection = ({ setModal, setPokemonData }: HeroSectionProps) => {
  const handleClick = async () => {
    const { data } = await fetchPokemon("charizard");
    setPokemonData(data);
    setModal(true);
  };

  return (
    <C.Container>
      <Waves />
    </C.Container>
  );
};