// function

function abc() {
  console.log("welcome user");
}

abc();

function add(a, b) {
  var result = a + b;

  return result;

}

var getDataBack = add(50, 200);

console.log(add(50, 200));

var userInput = prompt("Enter day of week..");

switch (userInput) {
  case "Monday":
    alert("working day");
    break;
  case "Tuesday":
    alert("working day");
    break;
  case "Wednesday":
    alert("working day");
    break;
  case "Thursday":
    alert("working day");
    break;
  case "Friday":
    alert("working day");
    break;
  case "Saturday":
    alert("working day");
    break;
  case "Sunday":
    alert("working day");
    break;
  default:
    alert("incorrect input..");
}



// for loop


for (var i = 5; i < 5; i++) {
  console.log(i);
}



// while loop



var i = 5;

while (i < 5) {
  console.log(i);
  i++;
}



// do-while loop


var i = 5;

do {
  console.log(i);
  i++;
} while (i < 5);

// Events

alert("welcome to our Website...");

function greet() {
  Swal.fire({
    title: "Good job!",
    text: "login successfully",
    icon: "success",
  });
}
