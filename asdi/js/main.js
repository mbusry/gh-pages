/**
 * Michael Usry, ASDI 1305
 */

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	

$('#addAttendant').on('pageinit', function(){

		var myForm = $('#addForm');
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



    // Global variables


// getElementById
    function getID(x){
        var elementID = document.getElementById(x);
        return elementID;
    };
    

    
