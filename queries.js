const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // YOUR MYSQL PASSWORD HERE
  database: "fullstackPokemon",
});

connection.connect();

const retrieveAllPokemon = (callback) => {
  // FIX_ME
}

// Create an addPokemon method that adds a pokemon to the database.

module.exports = {
  retrieveAllPokemon,
};
