// **************************************************************
// Search added for project II
// getElementByID function shorthand
function getID(x) {
	var elementID = document.getElementById(x);
	return elementID;
};

// **************************************************************
// Search added for project II
var search = getID('searchBtn');
search.addEventListener("click", getSearch);

// Getting image for the person assigned to
function getImage(assignedName, makeSubList) {
	var imageLi = document.createElement('li');
	makeSubList.appendChild(imageLi);
	var newImage = document.createElement('img');
	var setSrc = newImage.setAttribute("src", "images/" + assignedName + ".png");
	imageLi.appendChild(newImage);
};

function getSearch() {
	//var assigned = getID('assignedPerson').value;// value from
	if (localStorage.length === 0) {
		alert("There is no data.");
	} else {
		var searchTerm = getID('searchBtn').value;
		// Search by textfield
		if (searchTerm != "") {
			// Retrieve data from local storage to display on the browser
			var makeDiv = document.createElement('div');
			makeDiv.setAttribute("id", "searchResults");
			var makeList = document.createElement("ul");
			makeDiv.appendChild(makeList);
			document.body.appendChild(makeDiv);
			getID('searchResults').style.display = "block";
			// runs for every item
			for (var i = 0, len = localStorage.length; i < len; i++) {
				var makeli = document.createElement("li");
				var linksLi = document.createElement("li");
				makeList.appendChild(makeli);
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				// taking the string from local storage and putting it back into objects
				var obj = JSON.parse(value);
				var makeSubList = document.createElement('ul');
				makeli.appendChild(makeSubList);
				getImage(obj.assigned[1], makeSubList);
				// this loop is for every subitem
				for (var a in obj) {
					var makeSubLi = document.createElement('li');
					makeSubList.appendChild(makeSubLi);
					var optSubText = obj[a][0] + " " + obj[a][1];
					makeSubLi.innerHTML = optSubText;
					makeSubList.appendChild(linksLi);
				}
				// makeGrocLinks(localStorage.key(i), linksLi);
			}
		}
	}
};

