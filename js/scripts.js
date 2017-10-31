var userNumber;

//stores the loop values
var numberArr = [];

var pingPong = function(userInput) {
	for (var index = 1; index <= userInput; index++){
	//the for loop is run with regards to forms input data and the conditionals help with converting the numbers to the outline guidelines
  if ((index % 3 === 0) && (index % 5 === 0)) {
    
    numberArr.push("pingpong");

  } else if (index % 5 === 0){

    numberArr.push("pong");

  } else if (index % 3 === 0) {

    numberArr.push("ping"); 

  } else {

    numberArr.push(index); 

  }
}

return numberArr;

};

function test(val){

  console.log(val);

}

$(document).ready(function() {
	alert("Welcome!");
	$("form#ping").submit(function(event) {
	event.preventDefault();
	var userInput = parseInt($("input#input-no").val());

	var result = pingPong(userInput);

	$("#result").text("");

	$("#result").append("<ul>"); //this is used to append the results from the loop and the for function

	result.forEach(function(result) {

 	 $("#result").append('<li>' + result + '</li>');

	});

	$("#result").append("</ul>");

	$("#result").fadeIn();

	});

});