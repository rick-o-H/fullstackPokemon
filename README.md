# 🚀 Welcome to Fullstack Pokemon!

>Build react components to catch & display pokemon, write MySQL queries to get and save your caught pokemon, and  connect it all together using an express server in this fullstack workshop.


## Table of Contents

1. [Installation](#Installation)
1. [Instructions](#Instructions)


## Installation

1. Fork the repository
2. Clone your forked repository:
```sh
git clone <your_repo_link>
```
3. Navigate to the root directory of the repository:
```sh
cd fullstackPokemon
```
4. Install dependencies
```sh
npm install
```
5. Seed the database
```sh
npm run seed
```
6. Bundle and compile the frontend code
```sh
npm run build
```
7. Open a new terminal and start the server
```sh
npm start
```
8. You are now ready to start working on the exercise!

## Instructions

It is reccomended to complete the requirements in an order similar to the outline below:

| ORDER | DESCRIPTION                                                                                                                                                     |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Fix Pokemon.jsx. Pass the dummy data from pokemonData.js to PokemonList.jsx as props to help with building out Pokemon.js until you have correctly implemented step 4. |
| 2     | Finish writing the retrieveAllPokemon function in queries.js. This function should query the database for all pokemon. |
| 3     | Finish writing the '/api/pokemon' route. This endpoint should invoke the retrieveAllPokemon function we wrote in step 1. |
| 4     | Fix the getPokemon method in PokemonList.jsx. This method should make a GET request to the server for all pokemon. |
| 5     | Create a '/api/addPokemon' endpoint in server.js. This endpoint should should add a new pokemon to the database(you will need to create a function that will query the DB as well). |
| 6     | Fix the addCaughtPokemon method in PokemonList.jsx. This method should update the pokemonList in state and make a request to the DB to add the new pokemon. You will know if you implemented steps 4, 5, & 6 correctly if when you reload the page, your newly caught pokemon appear in your pokemonList.   |

