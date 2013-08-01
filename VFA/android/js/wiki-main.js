/**
 * @author Michael Usry VFA 1307
 */
$(function() {
	navigator.geolocation.getCurrentPosition(gotPosition, gotError);

	// $.getJSON(url, screenOutput);
});

var screenOutput = function(info) {
	console.log(info);

	$("#wiki-msg").html("<h2>Landmarks near me</h2");

	$.each(info.articles, function(index, map) {
		var dist = map.distance;
		var title = map.title;
		var fullURL = map.url;
		var mURL = map.mobileurl;

		// <div id = 'landmarks'>
		// <h2>title</h2>
		// <ul>
		// <li>Distance from me: xxxx</li>
		// <li>Desktop URL: xxxxx</li>
		// <li>Mobile URL: xxxxx</li>
		// </ul>
		// </div>
		
		var lm = '<div id = "landmarks"><h2>' + title + '</h2><ul><li>Distance from me: ' + dist + '</li><li>Desktop URL: <a href="' + fullURL + '" target = "_blank"><h4>' + title + '</h4></a></li><li>Mobile URL: <a href="' + mURL + '" target = "_blank"><h5>' + title + '</h5></a></li></ul></div>';
		
		
		// var pic = "<li><img src = '" + rez + "' alt = '" + pu + "' /><h4>" + fn + ", <em>(" + un + ") </em></h4></li> ";
		// console.log(pic);
		$("#wiki-output").append(lm);
		// console.log(lm);
	});

};

var gotPosition = function(position) {
	console.log("in gotPosition");
	// http://api.wikilocation.org/articles?lat=51.500688&lng=-0.124411&limit=1&radius=1000

	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	var url2 = "http://api.wikilocation.org/articles?lat=" + lat + "&lng=" + lng + "&limit=10&radius=14000&type=landmark";
	console.log("lat and Long are: " + lat + " " + lng);
	console.log(url2);

	$.getJSON(url2, screenOutput);

};

function gotError(error) {
	alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
};