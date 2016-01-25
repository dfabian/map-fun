$( document ).ready(function() {
    console.log( "ready!" );
});

var elMap = document.getElementById('loc');                 // HTML element
var msg = 'Sorry, we were unable to get your location.';    // No location msg
var long = 0;
var lat = 0;


if (Modernizr.geolocation) {                                // Is geo supported
  navigator.geolocation.getCurrentPosition(success, fail);  // Ask for location
  elMap.textContent = 'Checking location...';               // Say checking...
} else {                                                    // Not supported
  elMap.textContent = msg;                                  // Add manual entry
}

function success(position) {                                // Got location
  msg = '<h3>Longitude:<br>';                               // Create message
  msg += position.coords.longitude + '</h3>';               // Add longitude
  msg += '<h3>Latitude:<br>';                               // Create message
  msg += position.coords.latitude + '</h3>';                // Add latitude
  elMap.innerHTML = msg;
  long = position.coords.longitude;
  lat = position.coords.latitude;                                    // Show location
}

function fail(msg) {                                        // Not got location
  elMap.textContent = msg;                                  // Show text input
  console.log(msg.code);                                    // Log the error
}

console.log('lat', lat)



function init() {
  var mapOptions = {                                 // Set up the map options
    center: new google.maps.LatLng(lat,long),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var venueMap;                                      // Map() draws a map
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');     // Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?callback=init';
  document.body.appendChild(script);                 // Add element to page
}

window.onload = loadScript;                          // on load call loadScript()
