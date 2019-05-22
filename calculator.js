//jshint esversion:6

const express = require('express');

const app = express();

const port = 3000;

//Home 
app.get('/', (req, res) => res.send(`Hello, World!`));

//Express server
app.listen(port, () => console.log(`nodeCalc server starts on ${port}`));