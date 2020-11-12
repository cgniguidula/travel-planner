
function buildTripCard(res){

    const fragment = document.createDocumentFragment();

    //create trip card
    const tripCard = document.createElement('div');
    tripCard.classList.add("trip-card");
    tripCard.id = "trip" + res.info.tripId;
    
    //create trip image
    const tripImg = document.createElement('div');
    tripImg.classList.add("trip-img");
    const img = document.createElement('img');
    img.src = res.info.imgUrl;
    tripImg.appendChild(img);
    
    //create trip info section, including title, location, dates, weather, buttons
    const tripInfo = document.createElement('div');
    tripInfo.classList.add("trip-info");

    const name =document.createElement('h2');
    name.classList.add("name");
    name.innerHTML = res.info.tripName;

    const place =document.createElement('p');
    place.classList.add("place");
    if(res.info.state != ""){
        place.innerHTML = res.info.city + ", " + res.info.state +"</br>" + res.info.country;
    } else{
        place.innerHTML = res.info.city + ", " + res.info.country;
    }

    const dates = document.createElement('p');
    dates.classList.add("dates");
    dates.innerHTML = "Departing on " + res.info.start + "<br/>Returning on " + res.info.end;

    const countdown = buildCountDown(res.info.start);

    const weather = document.createElement('p');
    weather.classList.add("weather");
    if (res.info.weather != undefined && res.info.weather.maxTemp != "" && res.info.weather.minTemp != ""){
        weather.innerHTML = "High tends to be around " + res.info.weather.maxTemp + "&#8457 and low around " + res.info.weather.minTemp + "&#8457" + "."
    } else{
        weather.innerHTML = "No weather information could be found. Best to pack layers!!"
    }

    //Now append all trip info to trip info div
    tripInfo.appendChild(name);
    tripInfo.appendChild(place);
    tripInfo.appendChild(dates);
    tripInfo.appendChild(countdown);
    tripInfo.appendChild(weather);

    //append everything to the tripcard
    tripCard.appendChild(tripImg);
    tripCard.appendChild(tripInfo);

    fragment.appendChild(tripCard);
    //append everything to the fragment;
    document.getElementById("trips-list").appendChild(fragment);
}

function buildCountDown(start){
    const delta = Math.ceil((new Date(start) - new Date())/(1000 * 60 * 60 * 24));
    const countdown = document.createElement("p");
    countdown.classList.add('countdown');

    if(delta == 1 ){
        countdown.innerHTML = delta + " day away!"
    } else{
        countdown.innerHTML = delta + " days away!"
    }
    
    return countdown;
}

export { buildTripCard }