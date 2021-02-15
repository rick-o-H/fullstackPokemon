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

const addPokemon = ({ pokemon }, callback) => {
  const {id, name, level, type, picture} = pokemon;
  connection.query(`INSERT INTO pokemon (id, name, level, type, picture) VALUES (?,?,?,?,?)`, [[id], [name], [level], [type], [picture]], (err, data) => {
    if (err) {
      console.log('err')
      callback(err);
    } else {
      console.log(`added new pokemon to database! ${data}`)
      callback(null, data);
    }
  });
}

module.exports = {
  retrieveAllPokemon,
  addPokemon,
};
