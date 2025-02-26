// what is array?
                   
var arr = ["karachi", "lahore", "quetta"];

var copy = arr.slice(1, 3);

console.log(copy);

arr.splice(1, 1, "multan");

arr.push("lahore", true, 50);

arr.unshift("lahore", true, 50);

arr.shift();

console.log(arr);

arr[1] = 100;

arr[25] = "faraz";

console.log(arr);

arr.pop();
arr.pop();
arr.pop();

console.log(arr[3]);

console.log(arr.length);

// Q9

var q1 = prompt("What color you want to add to the start of an array");

var q2 = prompt("What color you want to add to the end of an array");

var color_name = ["white", "red"];

var addColor = prompt("Enter color name");

var startIndex = +prompt("Enter position/index please");

color_name.splice(startIndex, 0, addColor);

console.log(color_name);

color_name.unshift(q1);

color_name.push(q2);

// Q15

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(
  "<select><option>",
  phones[0],
  "</option><option>",
  phones[1],
  "</option><option>",
  phones[2],
  "</option><option>",
  phones[3],
  "</option><option>",
  phones[4],
  "</option></select>"
);

// if() ==> parenthesis

// {
// block of code / scope / statement
// }

// Loop

// Repeatation of a code or program is called a loop.

// for loop

// for(intialization;condition;Incerment/decrement){

// }

for (var i = 1; i <= 100; i++) {
  document.write("hello world ", i, "<br>");
}

for (var i = 1; i <= 10; i++) {
  document.write(i, "<br>");
}

for (var i = 10; i >= 1; i--) {
  document.write(i, "<br>");
}

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

for (var i = 0; i < 6; i++) {
  console.log(phones[i]);
}

// while loop

// do-while loop

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

var tableNumber = +prompt("Enter a number");

var tableRange = +prompt("Enter a range");

for (var i = 1; i <= tableRange; i++) {
  document.write(tableNumber, " x ", i, "= ", tableNumber * i, "<br>");
}

document.write(
  tableNumber,
  " x 1 = ",
  tableNumber * 1,
  " <br>",
  tableNumber,
  " x 2 = ",
  tableNumber * 2,
  " <br>",
  tableNumber,
  " x 3 = ",
  tableNumber * 3,
  " <br>",
  tableNumber,
  " x 4 = ",
  tableNumber * 4,
  " <br>",
  tableNumber,
  " x 5 = ",
  tableNumber * 5,
  " <br>",
  tableNumber,
  " x 6 = ",
  tableNumber * 6,
  " <br>",
  tableNumber,
  " x 7 = ",
  tableNumber * 7,
  " <br>",
  tableNumber,
  " x 8 = ",
  tableNumber * 8,
  " <br>",
  tableNumber,
  " x 9 = ",
  tableNumber * 9,
  " <br>",
  tableNumber,
  " x 10 = ",
  tableNumber * 10,
  " <br>",
  tableNumber,
  " x 11 = ",
  tableNumber * 11,
  " <br>",
  tableNumber,
  " x 12 = ",
  tableNumber * 12,
  " <br>"
);

var citiesArr = ["karachi", "lahore", "islamabad"];

for (var i = 0; i < 205; i++) {
  console.log(citiesArr[i]);
}

var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "faraz",
];

var arrLength = country_list.length;

for (var i = 0; i < arrLength; i++) {
  console.log(country_list[i]);
}

// Problem # 01

var userCity = prompt("Enter where do you live?");

var citiesArr = ["karachi", "lahore", "islamabad"];

for (var i = 0; i < citiesArr.length; i++) {
  if (userCity.toLowerCase() === citiesArr[i]) {
    console.log("hire");
  } else {
    console.log("not hire");
  }
}

// If else logical operator cities found

if (
  userCity === "karachi" ||
  userCity === "lahore" ||
  userCity === "islamabad"
) {
  console.log("hire");
} else {
  console.log("not hire");
}
