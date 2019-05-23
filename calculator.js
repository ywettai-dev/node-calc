//jshint esversion:6

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 3000;

//Utilize body-parser .urlencoded to send back site data
app.use(bodyParser.urlencoded({
    extended: true
}));

//Home, Utilize .sendFile to respond with files
app.get('/', (req, res) => res.sendFile(__dirname + `/index.html`));

app.post('/', function (req, res) {

    //Type casting with Number
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2; 

    res.send(`The result is: ${result}`);

});

//Express server
app.listen(port, () => console.log(`nodeCalc server starts on ${port}`));