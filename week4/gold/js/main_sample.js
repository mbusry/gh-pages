$('#main').on('pageinit', function() {
    //code needed for home page goes here
});

$('#add').on('pageinit', function() {

    var myForm = $('#firstForm'), errorLink = $('errorID');
    // added for single-page error

    myForm.validate({
        invalidHandler : function(form, validator) {
            errorID.click();
            // on error force this to run
        },
        submitHandler : function() {
            var data = myForm.serializeArray();
            storeGroc(data);
        }
    });

    //any other code needed for addItem page goes here

    //The functions below can go inside or outside the pageinit function for the page in which it is needed.

    var autofillData = function() {

    };

    var getData = function() {

    };

    var storeData = function(data) {

    };

    var deleteItem = function() {

    };

    var clearLocal = function() {

    };
    var groceryItemValue;

    // getElementById
    function getID(x) {
        // var elementID = $('selectlist').val();
        var elementID = document.getElementById(x);
        return elementID;
    };

    //     Finding out what radio buttons are selected
    function getGroceries() {
        var groc = document.forms[0].groceryItem;
        //looking at the 'html document','form' on the page
        //'groceryItem' is from the name= in the form for the buttons
        for (var i = 0; i < groc.length; i++) {
            if (groc[i].checked) {
                groceryItemValue = groc[i].value;
            }
        }

    };

    // saving the data from the field inputs to localstorage with a unique key for each page
    var storeGroc = function saveData(key) {

        // Looking to see if there is a key
        if (!key) {
            var uniqueKey = Math.floor(Math.random() * 100000001);
        } else {
            // If there is a key id=key
            uniqueKey = key;
        }
        //Collect data in an object with label and
        getGroceries();
        var item = {};
        item.assigned = ["Assigned to:", getID('assignedPerson').value];
        console.log(item.assigned);
        item.email = ["eMail:", getID('email').value];
        console.log(item.email);
        item.shop = ["Shop:", getID('shop').value];
        console.log(item.shop);
        item.when = ["When:", getID('when').value];
        console.log
        item.groceryItem = ["Grocery Item:", groceryItemValue];
        item.qty = ["Quantity:", getID('qty').value];
        item.notes = ["Notes:", getID('notes').value];
        console.log(item.notes);
        localStorage.setItem(uniqueKey, JSON.stringify(item));
        // Saving object to a string using Stringify
        // $('#addToStorage').click(function(e) {
        // localStorage.setItem(uniqueKey, $('#entry').val());
        // });
        // $('.storeItem').text(uniqueKey, JSON.stringify(item));

        alert("The List has been saved.");
    };

});

