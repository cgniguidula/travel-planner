
const { getNameList, getNames } = require("country-list");
let countries = {};
let map = {};

/*************************************************************
********************** Functions for buttons *****************/
/*************************************************************/

/* 'New trip' button actions */
function showForm(){
    const form = document.getElementById("new-trip-section");
    form.style.display = "block";
}

/* Cancel */
function hideForm(){
    const form = document.getElementById("new-trip-section");
    form.style.display = "none";
}

/* Takes user input and submit form, then display API responses */
function saveTrip(){

    const data = {
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        country: map[document.getElementById("country").value.toLowerCase()],
        start: document.getElementById("trip-start").value,
        end: document.getElementById("trip-end").value
    }

    postData(data)
    .then(function(res){  
        /** TO DO: verify information was received, check if error */
        
        addTripToPage(res);
    })
}

/*************************************************************
**************** Adds/removes trip from page *****************/
/*************************************************************/

const removeTrip = function(tripId){
    console.log("Removing trip " + tripId);

}

function addTripToPage(res){
    Client.buildTripCard(res, removeTrip);
    hideForm();
}

/************************************
****** Get & post requests *********/
/***********************************/
const postData = async function(data = {}){

    const response = await fetch('http://localhost:8000/submitForm', {
        method: 'POST',
        credentials: "same-origin",
        headers:{ 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    try{
        const data = await response.json();
        alert(JSON.stringify(data));
        return data;
    } catch(error){
        console.log("There was an error: " + error);
    }
}



function buildCountryPicker(){
    countries = getNames();
    map = getNameList();

    const fragment = document.createDocumentFragment(); 
    const datalist = document.getElementById("country-list");
    for (const c in countries){
        const op = document.createElement("option");
        op.value = countries[c];
        datalist.appendChild(op);
    }
}

/*************************************************************
****** Init function to add event listeners in index.html ****/
/*************************************************************/
const init = function(){
    const cancelBtn = document.getElementById("cancel-btn");
    const saveBtn = document.getElementById("save-btn");
    const newTripBtn = document.getElementById("new-btn");

    cancelBtn.addEventListener('click', function(evt){
        hideForm();
    });
    saveBtn.addEventListener('click', function(evt){
        saveTrip();
    });
    newTripBtn.addEventListener('click', function(evt){
        showForm();
    });

    buildCountryPicker();
}

export { init }
