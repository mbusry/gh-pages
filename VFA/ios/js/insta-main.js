/**
 * @author Michael Usry VFA 1307
 */
$(function (){
	var 	searchRequest = "church",
		url = "https://api.instagram.com/v1/tags/" + searchRequest + "/media/recent?callback=?&amp;client_id=e9f79d31eb424b69bfb5135bba0d1544";

	$.getJSON(url, screenOutput);
});

var screenOutput = function(info) {
	console.log(info);
	
	$("#insta-msg").html("<h2>Church Results</h2");
	
	$.each(info.data, function(index, photo) {
		var rez = photo.images.thumbnail.url,
			fn = photo.user.full_name,
			un = photo.user.username,
			pu = photo.user.id,
			pic = "<li><img src = '" + rez + "' alt = '" + pu + "' /><h4>" + fn + ", <em>(" + un +") </em></h4></li> ";
		console.log(pic);
		$("#insta-output").append(pic);
	});

};