/**
 * @author Michael Usry VFA 1307
 */
$(window).load(function () {

$("#weather-li").on('pageinit',function() { 
	var 	apiKey = "5qwnnspwyfufndc3ffxmy25t",
		url = "http://api.worldweatheronline.com/free/v1/weather.ashx?key=" + apiKey + "&q=48.85,2.35&fx=no&format=json";

	$.getJSON(url, weatherOutput);

var weatherOutput = function(info) {
	console.log(info.data.current_condition[0]);
	console.log("Current temp: " + info.data.current_condition[0].temp_F);
	console.log("The skys are: " + info.data.current_condition[0].weatherDesc[0].value);
	console.log("The skys are: " + info.data.current_condition[0].weatherIconUrl[0].value);

	var 	temp = info.data.current_condition[0].temp_F,
		skyDesc = info.data.current_condition[0].weatherDesc[0].value,
		skyIcon = info.data.current_condition[0].weatherIconUrl[0].value;
		weatherOutput =  "<li><img src = '" + skyIcon + "' alt = '" + skyDesc + "'/>" + temp + "</li> ";
	console.log(weatherOutput);
	$("#weather-li").append(weatherOutput);
};	
});
});
