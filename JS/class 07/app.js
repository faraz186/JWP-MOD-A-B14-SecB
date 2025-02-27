var userInput = prompt("Enter your city name?");
      
var citiesArr = ["Karachi", "Lahore", "Multan"];
 
var flag = false;

for (var i = 0; i < citiesArr.length; i++) {
  //   if (userInput.toUpperCase() === citiesArr[i]) {

  if (userInput.toLowerCase() === citiesArr[i]) {
    flag = true;
    console.log("value match..");
  }
}

if (flag === false) {
  console.log("value not match..");
}


// for loop


var arr = [];

for (var i = 1; i <= 20; i++) {
  arr.push(i);
}

console.log(arr);



// For loop nested


var firstNames = ["Muhammad", "Abdul"];

var lastNames = ["faraz", "farooq", "ali", "ahmed"];

var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.unshift(firstNames[i] + lastNames[j]);
  }
}

console.log(fullNames);



// Measuring parts of string slice method()

var str = prompt("Enter your name?");

var firstChar = str.slice(0, 1).toUpperCase();

var remainChar = str.slice(1).toLowerCase();

console.log(firstChar + remainChar);



// --------------Capitalize each word Input------------------


var userInput = prompt("Enter your city name?");

var firstChar = userInput.slice(0, 1).toUpperCase();

var remainChar = userInput.slice(1).toLowerCase();

var updateInput = firstChar + remainChar;

var citiesArr = ["Karachi", "Lahore", "Multan"];

var flag = false;

for (var i = 0; i < citiesArr.length; i++) {
  if (updateInput === citiesArr[i]) {
    flag = true;
    console.log("value match..");
  }
}

if (flag === false) {
  console.log("value not match..");
}
