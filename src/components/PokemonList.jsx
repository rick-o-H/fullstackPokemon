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
    axios.get('api/pokemon')
      .then((data) => {
        this.setState({
          pokemonList: data.data,
        })
      })
  }

  addCaughtPokemon(caughtPokemon) {
    let newPokemonList = this.state.pokemonList;
    newPokemonList.push(caughtPokemon);
    axios.post('/api/addPokemon', {
      pokemon: caughtPokemon
    })
      .then(
        this.setState({
          pokemonList: newPokemonList
        })
      )
  }

  render() {
    return (
    <div>
      <table>
        <tbody>
          {this.state.pokemonList.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id}/>)}
        </tbody>
      </table>
      <CatchPokemon addCaughtPokemon={this.addCaughtPokemon} />
    </div>
    )
  }
};

export default PokemonList;