const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname + '/src'));

app.get('*', (req, res) => 
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'))
)

app.listen(port, () => console.log(`running port: ${port}`));