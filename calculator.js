//jshint esversion:6

const express = require('express');

const app = express();

const port = 3000;

//Home, Utilize .sendFile to respond with files
app.get('/', (req, res) => res.sendFile(__dirname + `/index.html`));

//Express server
app.listen(port, () => console.log(`nodeCalc server starts on ${port}`));