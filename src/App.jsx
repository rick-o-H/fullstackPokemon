import React from "react";
import PokemonList from "./components/PokemonList";
import axios from "axios";
import pokemon from "./pokemonData";

const App = () => {

  return (
    <div>
      <PokemonList pokemonList={pokemon}/>
    </div>
  )
};

export default App;
