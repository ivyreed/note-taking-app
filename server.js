const express = require('express');
const html = require('./routes/html-routes')
const api = require('./routes/api-routs')

const app = express();
const PORT = 3000;

app.use(express.static('public'));

// I found out I left these lines of code out after I got the body parsing working, so they are here for referencing this in the future.
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))


app.use('/api', api)
app.use('/', html)


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
