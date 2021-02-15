const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const queries = require("./queries.js");

app.use(express.static(path.join(__dirname, "./dist")));

app.use(express.json());

app.get("/api/pokemon", (req, res) => {
  console.log('get/api/pokemon endpoint hit!');
  queries.retrieveAllPokemon((err, queryResult) => {
    if (err) {
      res.status(500).send('Error!');
    } else {
      res.status(200).json(queryResult);
    }
  });
});

app.post("/api/addPokemon", (req, res) => {
  console.log(`get/api/addPpokemon endpoint hit!`);

  const { pokemon } = req.body;

  queries.addPokemon({ pokemon }, (err, queryResult) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error!');
    } else {
      console.log(`success on server side!: ${queryResult}`)
      res.status(200).json(queryResult[0]);
    }
  });
});


app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
