import React from "react";
import Pokemon from "./Pokemon";

var PokemonList = ({pokemonList}) => (
  <table>
    <tbody>
      {pokemonList.map(pokemon => <Pokemon pokemon={pokemon}/>)}
    </tbody>
  </table>
);

export default PokemonList;