const app = require('express');
const { readFile } = require('fs');

app.get('/', (req, res) => {
  readFile('index.html', (err, html) => {
    res.send(html)
  })
})