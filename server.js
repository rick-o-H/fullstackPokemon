const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;

// Tells express to serve our compiled code from the dist folder.
app.use(express.static(path.join(__dirname, "./dist")));

// Adds middleware that parses JSON
app.use(express.json());

app.get("/api/pokemon", (req, res) => {
  console.log('get/api/pokemon endpoint hit!');
  // FIX_ME
});

// Write a POST route for the "/api/pokemon" endpoint.


app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
