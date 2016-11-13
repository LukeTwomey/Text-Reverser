window.onload = function(){

    document.getElementById("text-reverse-submit").onclick = function(e){
    	// stop submit button refreshing page
    	e.preventDefault(); 
    	var userInput = document.getElementById("user-submitted-text").value;
    	// split returns array, reverse reverses the elements (in this case letters) in the array
 		var reversed = userInput.split("").reverse(); 
		var output = "";
		for (i=0; i<reversed.length; i++){
			output += reversed[i];
		}
		document.getElementById("reversed-text").value = output;
    };

}