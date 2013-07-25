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
		
		navigator.geolocation.getCurrentPosition(gotPosition,gotError);

	});
	
	var gotPosition = function(position){
		var lat = position.coords.latitude,
			Long = position.coords.longitude,
			apiKey = "5qwnnspwyfufndc3ffxmy25t",
			url = "http://api.worldweatheronline.com/free/v1/weather.ashx?key=" + apiKey + "&q=48.85,2.35&fx=no&format=json";
			url2 = "http://api.worldweatheronline.com/free/v1/weather.ashx?key=" + apiKey + "&q=" + lat + "," + Long + "&fx=no&format=json";
			console.log("lat and Long are: " + lat + " " + Long);
			console.log(url2);

		$.getJSON(url2, screenOutput);

		
			};
	
	function gotError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
	
	var screenOutput = function(info) {
		console.log(info.data.current_condition[0]);
		console.log("Current temp: " + info.data.current_condition[0].temp_F);
		console.log("The skys are: " + info.data.current_condition[0].weatherDesc[0].value);
		console.log("The skys are: " + info.data.current_condition[0].weatherIconUrl[0].value);

	var temp 	= info.data.current_condition[0].temp_F,
		skyDesc = info.data.current_condition[0].weatherDesc[0].value,
		skyIcon = info.data.current_condition[0].weatherIconUrl[0].value;
		weatherOutput =  "<span class = 'temp'><img src = '" + skyIcon + "'/>" + temp + "</span>";
		console.log(weatherOutput);
		$("#weather-li").replaceWith(weatherOutput);
	};
