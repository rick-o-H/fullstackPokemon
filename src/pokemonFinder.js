import axios from 'axios';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function FindRandomPokemon() {
  let id = getRandomIntInclusive(1, 300);
  let randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return {
    id: randomPokemon.data.id,
    name: randomPokemon.data.name,
    level: getRandomIntInclusive(1, 100),
    type: randomPokemon.data.types[0].type.name,
    picture: randomPokemon.data.sprites.front_default,
  }
}

export default FindRandomPokemon;