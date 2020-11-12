# Extras
I implemented the following:
    1. Display trip end date
    2. Allow user to add multiple trips to the page
    3. Allow user to pick a date from a date picker in addition to entering the date manually.
    4. Require country for entering a new trip, and allow the user to select from a country picker. Because the Geonames API users a country ISO code, I used an npm package called 'country-list' to create a mapping between ISO codes and country names. This made the form more user-friendly, since most users might not know their country ISO. More info on this package here: https://www.npmjs.com/package/country-list.

# API Implementation
The 3 APIs I used - Geonames, Weatherbit, and Pixabay - are all called from the server.js file. I felt that the client should be responsible for creating the end-user view and sending data to the server, and the server should be responsible for managing all project data. Because of this, I implemented API integration on the server side. I used 3 APIs: Geonames, Weatherbit, and Pixabay.

# Known issues
Services workers do not work in Chrome, at least for me. However they do work on Chrome or Safari. In Chrome, the error I get is an "Uncaught DOM Exception: Unexpected internal error" in service-worker.js. This error does not appear in other browsers.