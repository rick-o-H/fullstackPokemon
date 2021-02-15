import React, { Component } from 'react';
import FindRandomPokemon from '../pokemonFinder';

class CatchPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPokemon: null
    }
    this.findPokemon = this.findPokemon.bind(this);
    this.catchPokemon = this.catchPokemon.bind(this);
  }

  findPokemon(e) {
    e.preventDefault();
    FindRandomPokemon()
      .then(wildPokemon => {
        this.setState({
          currentPokemon: wildPokemon,
        })
      })
  }

  catchPokemon(e) {
    e.preventDefault();
    this.props.addCaughtPokemon(this.state.currentPokemon);
    this.setState({
      currentPokemon: null
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.findPokemon}>
        Find a Pokemon!
        </button>
        <div>
        {
        this.state.currentPokemon !== null ?
          <div>
            <div>
              {this.state.currentPokemon.name}
            </div>
            <div>
              <img src={this.state.currentPokemon.picture}/>
            </div>
            <div>
              {`level: ${this.state.currentPokemon.level}\n type: ${this.state.currentPokemon.type}`}
            </div>
            <button onClick={this.catchPokemon}>
              Catch
            </button>
          </div>
        : null
          }
        </div>
      </div>
    )
  }
};

export default CatchPokemon;