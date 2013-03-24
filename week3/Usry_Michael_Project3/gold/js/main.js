$('#main').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#add').on('pageinit', function(){

		var myForm = $('#firstForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			saveData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.
    // Global variables
    var     groceryItemValue;

// getElementById
    function getID(x){
        var elementID = document.getElementById(x);
        return elementID;
    };
    
//     Finding out what radio buttons are selected
        function getGroceries(){
        var groc = document.forms[0].groceryItem;
        //looking at the 'html document','form' on the page
        //'groceryItem' is from the name= in the form for the buttons
        for(var i=0; i<groc.length; i++){
            if(groc[i].checked){
                groceryItemValue = groc[i].value;
            }
        }

    };

// saving the data from the field inputs to localstorage with a unique key for each page
    function saveData(key){

        // Looking to see if there is a key
        if(!key){
            var uniqueKey = Math.floor(Math.random()*100000001);
        }else{
        // If there is a key id=key
            uniqueKey = key;
        }
        //Collect data in an object with label and
        getGroceries();
        var item = {};
            item.assigned = ["Assigned to:", getID('assignedPerson').value];
            item.email = ["eMail:", getID('email').value];
            item.shop = ["Shop:", getID('shop').value];
            item.when = ["When:", getID('when').value];
            item.groceryItem = ["Grocery Item:", groceryItemValue];
            item.qty = ["Quantity:", getID('qty').value];           
            item.notes = ["Notes:", getID('notes').value];
            // Saving object to a string using Stringify
            localStorage.setItem(uniqueKey, JSON.stringify(item));
            alert("The List has been saved.");
    };

// Getting image for the person assigned to
    function getImage(assignedName, makeSubList){
        var imageLi = document.createElement('li');
        makeSubList.appendChild(imageLi);
        var newImage = document.createElement('img');
        var setSrc = newImage.setAttribute("src", "images/" + assignedName + ".png");
        imageLi.appendChild(newImage);
    };

// Gets the data from the form on the page.
    function getPageData(){

        if(localStorage.length === 0){
            alert("There is no data.  Loading default data.");
            loadDefaultData();
        }
        // Retrieve data from local storage to display on the browser
        var $makeDiv = $('<div>');
        $makeDiv.attr("id", "items");
        var $makeList = $('<ul>');
        $makeDiv.appendTo($makeList);
        document.body.appendChild($makeDiv);// look how to do that
        getID('items').style.display = "block";
        // runs for every item
        for(var i=0, len=localStorage.length; i<len;i++){
            var $makeli = document.createElement("li");
            var $linksLi = document.createElement("li");
            makeList.appendChild(makeli);
            var $key = localStorage.key(i);
            var $value = localStorage.getItem(key);
            // taking the string from local storage and putting it back into objects
            var $obj = JSON.parse(value);
            var $makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            getImage(obj.assigned[1],makeSubList);
            // this loop is for every subitem
            for(var a in $obj){
                var $makeSubLi = document.createElement('li');
                makeSubList.appendChild(makeSubLi);
                var $optSubText = obj[a][0] + " " + obj[a][1];
                makeSubLi.innerHTML = optSubText;
                makeSubList.appendChild(linksLi);
            }
            makeGrocLinks(localStorage.key(i), linksLi);
            //Creates edit and delete links in each item for local storage.
            //This is in the loop for the grocery list NOT the items.
        }
    };
    
// Loading default data from json.js from additem.html
    function loadDefaultData(){

        // loading from json.js
        for(var i in json){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id,JSON.stringify(json[i]));
        }
    };
    
//     deleting groceries
        function deleteGroceries(){
        var ask = confirm("Are you sure you want to delete this?");
        if(ask){
            localStorage.removeItem(this.key);
            alert("It was deleted");
            window.location.reload();
        }
            alert("You didn't delete it.");
        
    };

// clear local storage function
    function clearLocal(){
        if(localStorage.length === 0){
        alert("There is no data to clear.");
        }else{
            
        localStorage.clear();
        alert("All items have been removed.");
        window.location.reload();
        return false;
        }
    };


// From Template
var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


