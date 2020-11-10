function buildTripCard(res, removeTrip){

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

    const weather = document.createElement('p');
    weather.classList.add("weather");
    weather.innerHTML = "High tends to be around " + res.info.weather.maxTemp + " and low around " + res.info.weather.minTemp;

    const buttons = document.createElement("div");
    buttons.classList.add("card-btns");
    const remove = document.createElement("button");
    remove.innerHTML = "Remove"
    remove.classList.add("card-btn");
    remove.addEventListener("click", function(){removeTrip(res.info.tripId)});
    buttons.appendChild(remove);

    //Now append all trip info to trip info div
    tripInfo.appendChild(name);
    tripInfo.appendChild(place);
    tripInfo.appendChild(dates);
    tripInfo.appendChild(weather);
    tripInfo.appendChild(buttons);

    //append everything to the tripcard
    tripCard.appendChild(tripImg);
    tripCard.appendChild(tripInfo);

    fragment.appendChild(tripCard);
    //append everything to the fragment;
    document.getElementById("trips-list").appendChild(fragment);
}

export { buildTripCard }