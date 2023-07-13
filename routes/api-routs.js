const router = require("express").Router();
const path = require("path");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');



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
  console.log(typeof ParsedDatabase);
  // database + req.body
  ParsedDatabase.push(newnote);
  
  console.log(ParsedDatabase);
  fs.writeFileSync(
    path.join(__dirname, "/../db/db.json"),
    JSON.stringify(ParsedDatabase)
  );
  res.json(ParsedDatabase);

  // res.sendFile(path.join())
  // ivys pseudocode
  // recieve strings from notes
  // add strings to the db
  // return note to the client in the notes section

  // POST /api/notes should receive a new note to save on the request body,
  //  add it to the db.json file, and then return the new note to the client.
  //   You'll need to find a way to give each note a unique id when it's saved
  //   (look into npm packages that could do this for you).
});

module.exports = router;
