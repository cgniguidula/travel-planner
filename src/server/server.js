//For encrypting credientials
const dotenv = require('dotenv');
dotenv.config();

//Set up express
const express = require('express');
const app = express();
app.use(express.static('dist'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const fetch = require("node-fetch");

//Spin up server
app.listen(8000, function(){
    console.log("running on localhost 8000");
});

//Generates the initial view
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

let projectData = {};
let tripId = 0;

//Handles creating new trip - takes in user information, gets API info, and adds to project data
app.post('/submitForm', function (req, res) {
    const city = req.body.city;
    const start = req.body.start;
    const end = req.body.end;
    const state = req.body.state;
    const country = req.body.country;

    let newTrip = {
        tripName: "Trip to " + city,
        city: city,
        state: state,
        country: country,
        start: start,
        end: end,
        weather: {
            minTemp: 0,
            maxTemp: 0
        },
        imgUrl: ""
    };
    

    getGeonamesData(city, state, country)
    .then(function(geonames_data){

        const info = geonames_data.postalCodes;
        if(info.length > 0){

            getWeather(info[0].lat, info[0].lng, start, end)
            .then(function(weather_data){

                newTrip.weather.minTemp = weather_data.min_temp;
                newTrip.weather.maxTemp = weather_data.max_temp;

                getPicture(city)
                .then(function(pic_data){

                    newTrip.imgUrl = pic_data;

                    const res_data = {
                        status: "success",
                        info: newTrip
                    }
                        
                    tripId = tripId + 1;
                    projectData[tripId] = res_data;
                    res.send(res_data);
                });
            });

        } else{
            res.send({status: "Could not find results for that location", info: {}});
        }    
   })


});

//Gets geonames data 
const getGeonamesData = async function(city, state, country){
    const baseUrl = "http://api.geonames.org/postalCodeSearchJSON?placename=" + city;
    const urlEnd = "&country=" + country + "&maxRows=1&username=" + process.env.GEONAMES_USERNAME
    
    if(state !== ''){
        const response = await fetch(baseUrl + "&adminCode1=" + state + urlEnd);
        try{
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("AN ERROR OCCURRED: " + error);
        }
    } else{
        const response = await fetch(baseUrl +urlEnd);
        try{
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("AN ERROR OCCURRED: " + error);
        }
    }
}

//Get weather data
const getWeather = async function(lat, lon, start_date, end_date){
    const baseUrl = "https://api.weatherbit.io/v2.0/normals?lat="
        + lat +"&lon=" + lon + "&start_day=" + start_date + "&end_day="
        + end_date + "&units=I&key=" + process.env.WEATHERBIT_KEY;

    const response = await fetch(baseUrl);
    try{
        const res = await response.json();
        const data = {
            max_temp: res.data[0].max_temp,
            min_temp: res.data[0].min_temp
        }
        return data;
    } catch (error) {
        console.log("There was an error getting weather information")
    }
}

//Get Pixabay data
const getPicture = async function(city){
    const baseUrl = "https://pixabay.com/api/?key=" + process.env.PIXABAY_KEY + "&q=" + encodeURI(city) + "&orientation=horizontal&image_type=photo";
    const response = await fetch(baseUrl);
    try{
        const res = await response.json();
        if(res.totalHits > 0 ){
            return res.hits[0].webformatURL;
        } else {
            return ""
        }
    } catch (error) {
        console.log("There was an error with the Pixabay API");
    }
}



