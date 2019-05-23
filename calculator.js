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

//BMI calculator
app.get('/bmicalculator', (req, res) => res.sendFile(__dirname + `/bmiCalculator.html`));

app.post('/bmicalculator', function(req, res){

    //Type casting with Number
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var result = Math.round(weight / Math.pow(height, 2));

    res.send(`Your BMI is ${result}.`);
});

//Express server
app.listen(port, () => console.log(`nodeCalc server starts on ${port}`));