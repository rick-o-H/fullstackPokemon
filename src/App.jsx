import React from "react";
import PokemonList from "./components/PokemonList";
import pokemon from "./pokemonData";

const App = () => {

  return (
    <div>
      <PokemonList pokemonList={pokemon}/>
    </div>
  )
};

export default App;
