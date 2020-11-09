//For encrypting credientials
const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

const express = require('express');
const app = express();
app.use(express.static('dist'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const fetch = require("node-fetch");

const port = 8000;

// Spin up the server
const callback = function(){
    console.log("running on localhost " + port);
}
app.listen(port, callback);

//Generates the initial view
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

//Handles creating new trip
app.post('/submitForm', function (req, res) {
    getGeonamesData(req.body.city, req.body.state, req.body.country)
    .then(function(data){
        res.send({results: data});
   })
})

//Gets geonames data 
const getGeonamesData = async function(city, state, country){
    const baseUrl = "http://api.geonames.org/postalCodeSearchJSON?placename=" + city;
    const urlEnd = "&country=" + country + "&maxRows=1&username=" + process.env.GEONAMES_USERNAME
    
    if(state !== ''){
        const response = await fetch(baseUrl + "adminCode1=" + state + urlEnd);
        try{
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data;
        } catch (error) {
            console.log("AN ERROR OCCURRED: " + error);
        }
    } else{
        const response = await fetch(baseUrl +urlEnd);
        try{
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data;
        } catch (error) {
            console.log("AN ERROR OCCURRED: " + error);
        }
    }
}

