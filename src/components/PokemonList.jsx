import React, { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import CatchPokemon from "./CatchPokemon";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.addCaughtPokemon = this.addCaughtPokemon.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    // https://www.npmjs.com/package/axios#example
    // FIX_ME

  }

  addCaughtPokemon(caughtPokemon) {
    // FIX_ME
  }

  render() {
    return (
    <div>
      <table>
        <tbody>
          {/** HINT: While the map method below currently uses props, it will need to map over something else when step 3 is completed */}
          {this.props.pokemonList.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id}/>)}
        </tbody>
      </table>
      <CatchPokemon addCaughtPokemon={this.addCaughtPokemon} />
    </div>
    )
  }
};

export default PokemonList;