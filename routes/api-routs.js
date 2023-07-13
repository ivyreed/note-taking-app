const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// This was my work-aound for forgetting lines of code in server.js
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();




router.get("/notes", (request, response) => {
  response.sendFile(path.join(__dirname, "/../db/db.json"));
});




router.post("/notes", jsonParser, (req, res) => {

  const database = fs.readFileSync(
    path.join(__dirname, "/../db/db.json"),
    "utf8"
  );

  const newnote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4()
  }
  
  const ParsedDatabase = JSON.parse(database);
  ParsedDatabase.push(newnote);
  
  fs.writeFileSync(
    path.join(__dirname, "/../db/db.json"),
    JSON.stringify(ParsedDatabase)
  );
  res.json(ParsedDatabase);
});

module.exports = router;
