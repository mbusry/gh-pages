/**
 * @author Michael Usry VFA 1307
 */

/**
 * weather api: 1175a5d3083e6bdcaf92
 * api key: 8024dc284da525fc3953de9f0195ccf1
 * http://api.biblia.com/v1/bible/find.txt?key=fd37d8f28e95d3be8cb4fbc37e15e18e
 * weather:  https://api.weathersource.com/v1/{api_key}/resource.json?_callback=foo
 * Ham Weather:
 * 	Consumer ID: 	ZBAEOhVRKyYg9Bf7lWO0U
 *	Consumer Secret:	3GTVues7FpzbRoA1W12sF16LPPQHIEH4nk39c7Uq
 * One World Weather:
 *	Key:	5qwnnspwyfufndc3ffxmy25t
 *	url example:  http://api.worldweatheronline.com/free/v1/weather.ashx?key=xxxxxxxxxxxxxxxxx&q=48.85,2.35&fx=no&format=json

 *
 *
 *
 */

$(function() {

	navigator.geolocation.getCurrentPosition(gotPosition, gotError);

});

// gets the geolocation and outputs current weather info to the screen
var gotPosition = function(position) {
	var lat = position.coords.latitude, Long = position.coords.longitude, apiKey = "5qwnnspwyfufndc3ffxmy25t", url = "http://api.worldweatheronline.com/free/v1/weather.ashx?key=" + apiKey + "&q=48.85,2.35&fx=no&format=json",
	url2 = "http://api.worldweatheronline.com/free/v1/weather.ashx?key=" + apiKey + "&q=" + lat + "," + Long + "&fx=no&format=json";
	console.log("lat and Long are: " + lat + " " + Long);
	console.log(url2);

	$.getJSON(url2, screenOutput);

};

function gotError(error) {
	alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

var screenOutput = function(info) {
	console.log(info.data.current_condition[0]);
	console.log("Current temp: " + info.data.current_condition[0].temp_F);
	console.log("The skys are: " + info.data.current_condition[0].weatherDesc[0].value);
	console.log("The skys are: " + info.data.current_condition[0].weatherIconUrl[0].value);

	var temp = info.data.current_condition[0].temp_F, skyDesc = info.data.current_condition[0].weatherDesc[0].value, skyIcon = info.data.current_condition[0].weatherIconUrl[0].value,
	weatherOutput = "<span class = 'temp'><img src = '" + skyIcon + "'/>" + temp + "</span>";
	console.log(weatherOutput);
	$("#weather-li").replaceWith(weatherOutput);
};

// contact info

function onGetContact(contacts) {
	for (var i = 0; i < contacts.length; i++) {
		alert(contacts[i].displayName);
	}
};


function contactReady() {
	// specify contact search criteria
	var options = new ContactFindOptions();
	options.filter = "";
	// empty search string returns all contacts
	options.multiple = true;
	// return multiple results
	filter = ["displayName"];
	// return contact.displayName field

	// find contacts
	navigator.contacts.find(filter, getContacts, gotError, options);
}

function getContacts(contacts) {
	for (var i = 0; i < contacts.length; i++) {
		alert(contacts[i].displayName);
	}
};

function onPixSuccess(imageData) {
	var image = document.getElementById('pixTaken');
	image.src = "data:image/jpeg;base64," + imageData;
}

function onPixFail(message) {
	alert('Failed because: ' + message);
}

var captureVideoSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
        alert(path);
    }
};

// capture error callback
var captureVideoError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

var screenOutputMap = function(info) {
	console.log(info.data.current_condition[0]);

	var temp = info.data.current_condition[0].temp_F;
	var skyDesc = info.data.current_condition[0].weatherDesc[0].value;
	skyIcon = info.data.current_condition[0].weatherIconUrl[0].value;
	mapOutput = "<span class = 'temp'><img src = '" + skyIcon + "'/>" + temp + "</span>";
	console.log(mapOutput);
	$("#mapoutput-li").replaceWith(mapOutput);
};


var gotMapPosition = function(position) {
	var lat = position.coords.latitude;
	var Long = position.coords.longitude;
	var apiKey = "5qwnnspwyfufndc3ffxmy25t";
	var url = "http://api.worldweatheronline.com/free/v1/weather.ashx?key=" + apiKey + "&q=48.85,2.35&fx=no&format=json",
	var url2 = "http://api.worldweatheronline.com/free/v1/weather.ashx?key=" + apiKey + "&q=" + lat + "," + Long + "&fx=no&format=json";
	console.log("lat and Long are: " + lat + " " + Long);
	console.log(url2);

	$.getJSON(url2, screenOutputMap);

};



$('#mapButton').on('click', function() {
	console.log("I clicked mapButton");
	navigator.geolocation.getCurrentPosition(gotMapPosition, gotError);


});



$('#contactButton').on('click', function() {
	console.log("I clicked Add");

	document.addEventListener("deviceready", contactReady, false);

});


$('#pixButton').on('click', function() {
	console.log("I clicked Take Pix");
	navigator.camera.getPicture(onPixSuccess, onPixFail, {
		quality : 50,
		destinationType : Camera.DestinationType.DATA_URL
	});

});

$('#vidButton').on('click', function() {
	console.log("I clicked videoRecording");
navigator.device.capture.captureVideo(captureVideoSuccess, captureVideoError, {limit:1});
});
