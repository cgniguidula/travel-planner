
/************************************
****** Functions for buttons *******/
/***********************************/

/* 'New trip' button actions */
function showForm(){
    const form = document.getElementById("new-trip-section");
    form.style.display = "block";
}

function hideForm(){
    const form = document.getElementById("new-trip-section");
    form.style.display = "none";
}

/* Takes user input and submit form, then display API responses */
function saveTrip(){
    console.log("Trying to save trip....");
    const data = {
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        country: document.getElementById("country").value
    }
    postData(data)
    .then(function(res){
        console.log(res);
        addTripToPage(res);
    })
}

function addTripToPage(res){
    hideForm();
}
/************************************
****** Get & post requests *********/
/***********************************/
const postData = async function(data = {}){
    console.log(JSON.stringify(data));

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
        return data;
    } catch(error){
        console.log("There was an error: " + error);
    }
}

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

}

export { init }