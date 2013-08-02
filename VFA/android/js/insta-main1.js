/**
 * @author Michael Usry VFA 1307
 */
$(function() {
	// var searchRequest = "twitter", url = "https://api.twitter.com/1.1/search/tweets.json?q=" + searchRequest;
	// console.log(url);
	// $.getJSON(url, screenOutput);
	
	
	
	
});

var screenOutput = function(info) {
	console.log(info);

	$("#data-msg").html("<h2>Church Results</h2");

	$.each(info.data, function(index, photo) {
		var rez = photo.images.thumbnail.url, fn = photo.user.full_name, un = photo.user.username, pu = photo.user.id, pic = "<li><img src = '" + rez + "' alt = '" + pu + "' /><h4>" + fn + ", <em>(" + un + ") </em></h4></li> ";
		console.log(pic);
		$("#insta-output").append(pic);
	});

}; 