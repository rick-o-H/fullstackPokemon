const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yogurtPretzels",
  database: "fullstackPokemon",
});

connection.connect();

const retrieveAllPokemon = (callback) => {
  connection.query('SELECT * FROM pokemon', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

const retrieveSinglePokemon = ({ id }, callback) => {

  connection.query('SELECT * FROM pokemon WHERE id = ?', [id], (err, data) => {
    if (err) {
      console.log('err')
      callback(err);
    } else {
      console.log(`data from queries.js file: ${data}`)
      callback(null, data);
    }
  });
}

module.exports = {
  retrieveAllPokemon,
  retrieveSinglePokemon,
};
