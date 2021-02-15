const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const queries = require("./queries");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "./dist")));

app.use(express.json());

app.use(cors());

app.get("/api/pokemon/:id", (req, res) => {
  console.log(`get/api/pokemon/:id endpoint hit!\nRequested Employee id: ${req.params.id}`);
  let employeeId = req.params.id;
  queries.retrieveSingleEmployee({employeeId}, (err, queryResult) => {
    if (err) {
      res.status(500).send('Error!');
    } else {
      console.log(`success on server side!: ${queryResult}`)
      res.status(200).json(queryResult[0]);
    }
  });
});

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

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
