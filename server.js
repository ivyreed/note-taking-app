const express = require('express');
const html = require('./routes/html-routes')
const api = require('./routes/api-routs')

const app = express();
const PORT = 4321;

app.use(express.static('public'));
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use('/api', api)
app.use('/', html)


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
