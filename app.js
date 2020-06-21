/* Chapter # 01 Assignment */

// window.alert("Welcome to website");
// window.alert("Error! Pleaser enter a valid password");
// window.alert("Welcome to JS Land...\nHappy Coding!");

/* Chapter # 02 Assignment */
// 2.1
// var username;
// var myname = "Muhammad Taha";
// var message = "Hello World";
// window.alert(message);

// 2.2
// var name = "Taha";
// var age = "I am 22 years old";
// var certification = "Certified Mobile Application Development";
// window.alert(name);
// window.alert(age);
// window.alert(certification);

// 2.3
// var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
// window.alert(pizza);

// 2.4
// var email = "tahawork@gmail.com";
// window.alert("My email address is " + email)

// 2.5

// var book = "A smarter way to learn JAVA SCRIPT";
// window.alert("I am trying to learn from the book " + book);

// 2.6
// var emoji = "▬▬▬▬▬▬▬▬▬▬💻▬▬▬▬▬▬▬▬▬"
// window.alert(emoji);

/* Chapter # 03*/

// 3.1
// var age;
// age = "i am 22 years old";
// window.alert(age);

// 3.2
// var visits = "you have visited thios site 15 times";
// window.alert(visits);

//3.3 
// var birthYear;
// birthYear = 1998;
// document.write("My birth year is " + birthYear);
// document.write("<br/>Data type of my decleared vairable is number");

// 3.4
// var customerInfo;
// customerInfo = "Muhammad Taha ordered 10 T-shirts on XYZ clothing store";
// document.write(customerInfo);

/* Chapter # 04*/

// 4.1
// var a,b,c;
// 4.2
/*Legal variables*/
// var $time;
// var javaScript;
// var aacount_info;
// var varAlert;
// var document_write;

/* Illegal Variables*/

// var -acount_info;
// var java - script;
// var 4 time;
// var +myName;
// var !date;

// 4.3
// var heading = "Rules of naming JS variables"

// document.write(heading.bold());

// document.write("<br/> <br/>Variables name can only contain, number, $ and _. For example: $my_1stvariable");
// document.write("<br/>Variables must begin with a letter, $ or _. For example: $name, _name, or name");
// document.write("<br/>Variable names are case sensitive");
// document.write("<br/>Variable should not be JS keywords");

/* Chapter # 05 */

//  5.1

// var a = prompt("Enter value of a ");
// var b = prompt("Enter value of b ");
// var c = a + b;
// document.write("Sum of  " + a + " and " + b + "is " + c);

//5.2
// var a = prompt("Enter value of a ");
// var b = prompt("Enter value of b ");
// var c = a - b;
// document.write("Result of  " + a + " and " + b + "is " + c);

// var a = prompt("Enter value of a ");
// var b = prompt("Enter value of b ");
// var c = a * b;
// document.write("Result of  " + a + " and " + b + "is " + c);

// var a = prompt("Enter value of a ");
// var b = prompt("Enter value of b ");
// var c = a / b;
// document.write("Result of  " + a + " and " + b + "is " + c);

// var a = prompt("Enter value of a ");
// var b = prompt("Enter value of b ");
// var c = a % b;
// document.write("Result of  " + a + " and " + b + "is " + c);

// // 5.3 
// var a;
// document.write("value after variable decleration is " + a)
// a = 4;
// document.write("<br/>Initial Value = " + a);
// a++;
// document.write("<br/>Value after increment is: " + a);
// a += 7;
// document.write("<br/>Value after addition of 7 is: " + a);
// a--;
// document.write("<br/>Value after decrement is: " + a);
// b = a % 3;
// document.write("<br/>The Reminder is: " + b);

// 5.4

// var ticketPrice = 600;
// var noOfTickets = 5 * ticketPrice;
// document.write("Total cost of but 5 tickets to a movie is " + noOfTickets + "PKR");

// 5.5
// document.write("Table of 2")
// var num = 2;
// var a;
// for (a = 1; a < 11; a++) {
//     document.write("<br/>2 * " + a + " = " + (a * num))
// }

// 5.6

// var celcius = 25;
// document.write(celcius + " C " + " is " + ((celcius * (9 / 5)) + 32) + "F");

// var fahrenheit = 70;
// document.write("<br/>" + fahrenheit + " F " + " is " + ((fahrenheit - 32) * 5 / 9) + "C")

// 5.7

// var priceOfItem1 = 650;
// var priceOfItem2 = 100;

// var quantityOfItem1 = 3;
// var quantityOfItem2 = 7;

// var shippingCharges = 100;

// var totalCost = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2);

// document.write("Price of item 1 is " + priceOfItem1);
// document.write("<br/>Quantity of item 1 is " + quantityOfItem1);
// document.write("<br/>Price of item 2 is " + priceOfItem2);
// document.write("<br/>Quantity of item 2 is" + quantityOfItem2)
// document.write("<br/>Shipping charges " + shippingCharges)
// document.write("<br/><br/>Total cost of your order is " + (totalCost + shippingCharges))

// 5.8

// var totalMarks = 980;
// var obtainedMarks = 804;

// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("Total marks: " + totalMarks);
// document.write("<br/>Obtained marks: " + obtainedMarks);
// document.write("<br/>Percentage: " + percentage);

// 5.9

// var USDollar = 104.80;
// var saudiRiyal = 28;

// var currencyInPKR = (10 * USDollar) + (25 * saudiRiyal)
// document.write("Total currency in PKR: " + currencyInPKR);

// 5.10
// var number = 10;
// number += 5;
// number *= 10;
// number /= 2;

// document.write("Result is " + number);

// 5.11
// var currentYear = 2020;
// var birthYear = 1998;
// var possibleage1 = currentYear - birthYear;
// var possibleage2 = currentYear - 1997;
// document.write("Current Year " + currentYear);
// document.write("<br/>Birth Year " + birthYear);
// document.write("<br/>They are either " + possibleage1 + " or " + possibleage2 + " years old");

// 5.12

// var radiusOfCircle = 20;
// var ValueOfPie = 3.142;
// var circumferenceOfCircle = (2 * ValueOfPie * radiusOfCircle);
// var areaOfCircle = (ValueOfPie * radiusOfCircle * radiusOfCircle);

// document.write("Radiius " + radiusOfCircle);
// document.write("<br/>The circumference is " + circumferenceOfCircle);
// document.write("<br/>The area is " + areaOfCircle);

// 5.13

// var favoriteSnacks = "Lays";
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;
// var snackCalculation = (maxAge - currentAge) * 365 * amountPerDay;
// document.write("Favorite Snack: " + favoriteSnacks);
// document.write("<br/>Current Age " + currentAge);
// document.write("<br/>Estimated Maximum Age " + maxAge);
// document.write("<br/>Amount of snacks per day " + amountPerDay);
// document.write("<br/>You will need  " + snackCalculation + " lays to last you until the ripe old age of " + maxAge);

/* Chapter # 06 to 09 tasks */

// 6.1

// var a = prompt("Enter a number")
// document.write("Result")
// document.write("<br/>The value of a is " + a);

// document.write("<br/><br/>The value of ++a is " + (++a));
// document.write("<br/>Now the value of a is " + a)

// document.write("<br/><br/>The value of a++ is " + (a++));
// document.write("<br/>Now the value of a is " + a)

// document.write("<br/><br/>The value of --a is " + (--a));
// document.write("<br/>Now the value of a is " + a)

// document.write("<br/><br/>The value of a-- is " + (a--));
// document.write("<br/>Now the value of a is " + a)

// 6.2

// var a = 2,
//     b = 1;
// var result = (--a) - (--b) + (++b) + (b--);

// // --a is a pre decrememt first i minus 1 from value then prints
// --a;
// // --a - --b first 1 is decrement form and 1 is decreemrnt from b and then subtraction
// (--a) - (--b);
// // --a - --b first 1 is decrement form and 1 is decreemrnt from b and then 1 will increment in b and then addition
// (--a) - (--b) + (++b);
// // --a - --b first 1 is decrement form and 1 is decreemrnt from b and then 1 will increment in b and then addition then value of b decremet after printing because it is post decremnt
// (--a) - (--b) + (++b) + (b--);

// document.write("Vale of a " + a);
// document.write("<br/>Value of b " + b)
// document.write("<br/>Result " + result);

// 6.3

// var userName = prompt("Enter your name");
// document.write("We welcome you here " + userName);

// 6.4

// var nunmber = prompt("Enter a number ");
// var a;
// if (nunmber != 0) {
//     for (a = 1; a < 11; a++) {
//         document.write("<br/>" + nunmber + " * " + a + " = " + (nunmber * a))
//     }
// } else {
//     for (a = 1; a < 11; a++) {
//         document.write("<br/>" + "5 * " + a + " = " + (5 * a))
//     }
// }

// 6.5
// var subject1 = prompt("Enter 1 Subject name");
// var subject2 = prompt("Enter 2 Subject name")
// var subject3 = prompt("Enter 3 Subject name")

// var marksForEachSubject = 100;

// var obtainedMarksOfSubject1 = +prompt("Enter subject 1 obtained marks ");
// var obtainedMarksOfSubject2 = +prompt("Enter subject 2 obtained marks ");
// var obtainedMarksOfSubject3 = +prompt("Enter subject 3 obtained marks ");

// var totalMarks = 300;
// var obtainedMarks = (obtainedMarksOfSubject1 + obtainedMarksOfSubject2 + obtainedMarksOfSubject3);
// var percentage = (obtainedMarks / totalMarks) * 100;
// document.write(percentage);

// Chapter # 9 till 11

// 9.1
// var cityName = prompt("Enter city name")
// if (cityName == "karachi" || "Karachi" || "KARACHI") {
//     document.write("Welcome to city of lights")
// } else {
//     document.write("Wrong city name")
// }

// 9.2

// var gender = prompt("Enter yopur gender ")
// if (gender == "male") {
//     document.write("Good morning Sir.")
// } else if (gender == "female") {
//     document.write("Good morning Ma'am.")
// }

// 9.3

// var trafficSignalColor = prompt("Enter signal color ")
// if (trafficSignalColor == "red") {
//     document.write("Must Stop")
// } else if (trafficSignalColor == "yellow") {
//     document.write("Ready to move")
// } else if (trafficSignalColor == "green") {
//     document.write("Move now")
// }

// 9.4
// var remainingFuel = prompt("Enter remaining fuel ");
// if (remainingFuel < 0.25) {
//     document.write("Please refill the fuel in car")
// } else {
//     document.write("Fuel is enough")
// }

// 9.5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// below condition in not generating alert 
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// Only condition 2 and 4 is true
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// Below code snippet is true 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// 9.6
// var markOfSubject1 = +prompt("Enter 1 subject marks");
// var markOfSubject2 = +prompt("Enter 2 subject marks");
// var markOfSubject3 = +prompt("Enter 3 subject marks");

// var totalObtainedMarks = markOfSubject1 + markOfSubject2 + markOfSubject3;
// var totalMarks = 300;
// var percentage = (totalObtainedMarks / totalMarks) * 100;
// document.write("Total Marks: " + totalMarks);
// document.write("<br/>Obtained Marks: " + totalObtainedMarks);
// document.write("<br/>Percentage: " + percentage);
// if (percentage >= 80) {
//     document.write("<br/>Grade: A-one");
//     document.write("<br/>Remarks: Excellent");
// } else if (percentage >= 70) {
//     document.write("<br/>Grade: A");
//     document.write("<br/>Remarks: Good");
// } else if (percentage >= 60) {
//     document.write("<br/>Grade: B");
//     document.write("<br/>Remarks: You need to improve");
// } else if (percentage < 60) {
//     document.write("<br/>Grade: Fail");
//     document.write("<br/>Remarks: Sorry");
// }

9.7
// var secretNumber = 3;
// var userGuess = +prompt("Guess the secret number: ");
// if (secretNumber == userGuess) {
//     document.write("Bingo! Correct Answer");
// } else if (userGuess == secretNumber + 1) {
//     document.write("Close enough to the correct answer");
// } else {
//     document.write("Better Luck Next Time")
// }

// 9.8
// var userNum = +prompt("Enter a number: ");
// if (userNum % 3 == 0) {
//     document.write("Divisible by 3")
// } else {
//     document.write("Not divisible by 3")
// }

// 9.9
// var evenOddNum = +prompt("Enter a number: ");
// if (evenOddNum % 2 == 0) {
//     document.write("Even Number")
// } else {
//     document.write("Odd number")
// }

// 9.10
// var temperature = +prompt("Enter temperature: ");
// if (temperature > 40) {
//     document.write("It is too hot outside.")

// } else if (temperature > 30) {
//     document.write("The Weather today is Normal.")
// } else if (temperature > 20) {
//     document.write("Today’s Weather is cool.")
// } else if (temperature > 10) {
//     document.write("OMG! Today’s weather is so Cool.")
// }

// 9.11

// var x = +prompt("Enter first number: ")
// var y = +prompt("Enter second number: ")
// var operation = prompt("Enter oeration eg. + , - , * , / , %: ")
// if (operation == "+") {
//     document.write("Addition of x and y is: " + (x + y))
// } else if (operation == "/") {
//     document.write("Division of x and y is: " + (x / y))
// } else if (operation == "-") {
//     document.write("Substraction of x and y is: " + (x - y))
// } else if (operation == "*") {
//     document.write("Multiplication of x and y is: " + (x * y))
// } else if (operation == "%") {
//     document.write("Reminder of x and y is: " + (x % y))
// }

/* Chapter no 12 and 13 tasks*/
// 12.1
// var checkValue = prompt("Enter a character(Number or string)");
// if (checkValue >= 65 && <= 90) {
//     document.write("Upper case letter")
// } else if (checkValue >= 97 && <= 122) {
//     document.write("Lower case letter")
// } else if (checkValue < 65 || > 122) {
//     document.write("Number or special character")
// }
// // 12.2
// var integerA = +prompt("Enter value of A");
// var integerB = +prompt("Enter value of B");
// if (integerA < integerB) {
//     document.write(integerB + " is greater")
// } else if (integerB < integerA) {
//     document.write(integerA + " is greater")
// } else if (integerA == integerB) {
//     document.write("Both are equal")
// }

// 12.3
// var numCheck = +prompt("Enter a number");
// if (numCheck < 0) {
//     document.write("Negative Number")
// } else if (numCheck > 0) {
//     document.write("Positive Number")
// } else if (numCheck == 0) {
//     document.write("Zero");
// }

// 12.4
// var charCheck = prompt("Enter a single character ");
// if (charCheck == ("a" || "e" || "i" || "o" || "u") || ("A" || "E" || "I" || "O" || "U")) {
//     document.write("It is a vowel")
// } else {
//     document.write("Not a vowel");
// }

// // 12.5
// var password = 12345;
// var userPassword = +prompt("Enter Password")
// if (userPassword == 0) {
//     document.write("Please enter your password")
// } else if (userPassword == password) {
//     document.write("Correct! The password you entered matches the original password");
// } else if (userPassword != password) {
//     document.write("Incorrect Password");
// }

// 12.6

// var greeting;

// var hour = 13;
// if (hour < 18) {
//     greeting = "Good Day"
//     document.write(greeting)
// } else {
//     greeting = "Good evening";
//     document.write(greeting)
// }

12.7

// var timeInput = +prompt("Enter time in 24 hour format eg. 1500")
// if (timeInput >= 0000 && timeInput < 1200) {
//     document.write("Good Morninig");
// } else if (timeInput >= 1200 && timeInput < 1700) {
//     document.write("Good Afternoon")
// } else if (timeInput >= 1700 && timeInput < 2100) {
//     document.write("Good Evening")
// } else if (timeInput >= 2100 && timeInput < 2359) {
//     document.write("Good Night")
// }

/* Chapter 14 till 16 tasks */

// 14.1

// var studentNames = [];
// // 14.2
// var stdNames = {};
// // 14.3
// var str = ["Taha", "Bilal"];
// // 14.4
// var numberArray = [1, 2, 3, 4, 5]
//     // 14.5
// var boleanArray = [true, false]

// // 14.6
// var mixedArray = [1, "taha", true];

// 14.7
// var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("Qualifications:")
// for (var i = 0; i < education.length; i++) {
//     document.write("<br/>" + [i] + ") " + education[i])
// }

// 14.8

// var studentName = ["Bilal", "Faraz", "Taha"];
// var studentMarks = [320, 230, 480];
// var totalMarks = 500;
// for (var i = 0; i < studentName.length; i++) {
//     document.write("<br/>Score of " + studentName[i] + " is " + studentMarks[i] + " Percentage: " + (studentMarks[i] / totalMarks) * 100 + " %")
// }

// // 14.9
// var colorNames = ["Blue", "Black", "Green", "Grey", "Pink"];
// document.write("List before addition: " + colorNames);
// var colorAdd = prompt("Which color you want to add at the begining of array: ");
// colorNames.unshift(colorAdd);
// document.write("<br/>List after color addition: " + colorNames)
// var colorAdd1 = prompt("Which color you want to add at the end of array: ");
// colorNames.push(colorAdd1);
// document.write("<br/>List after color addition:" + colorNames);
// var colorAdd2 = prompt(" Add two more color to the begining of array. Add 1st color ");
// var colorAdd3 = prompt(" Add two more color to the begining of array. Add 2nd color ");
// colorNames.unshift(colorAdd2, colorAdd3);
// document.write("<br/>List after updation 2 colors: " + colorNames)
// colorNames.shift();
// document.write("<br/>List after deleting firt element: " + colorNames);
// colorNames.pop()
// document.write("<br/>List after deleting last element: " + colorNames);

// var startIndex = +prompt("Add starting index to add a color");
// var colorAdd4 = prompt("Write the name of color to add : ");
// colorNames.splice(startIndex, 0, colorAdd4);
// document.write("<br/>Color names after adding: " + colorNames);

// var startIndex1 = +prompt("At which index you want to delete colors: ");
// var noOfColor = +prompt("How many color you want to delete: ");
// colorNames.splice(startIndex1, noOfColor);
// document.write("<br/>List after deleting the colors: " + colorNames);

// 14.10
// var studentScores = [320, 230, 480, 120]
// document.write("Score of student before sorting: " + studentScores)
// studentScores.sort();
// document.write("<br/>Score of student after sorting: " + studentScores)

// 14.11

// var cityArray = ["Karachi", "Lahore", "Islamabad", "Multan", "Faisalabad"];
// var copyCities = cityArray.slice(1, 4)
// document.write("Cities List: " + cityArray);
// document.write("<br/>Selected Cities: " + copyCities)

// 14.12

// var arr = ["This", "is", "my", "cat"];
// var arrString = arr.join(" ");
// document.write(arrString);

// 14.13

// var devices = []
// devices[0] = "Keyboard"
// devices[1] = "Mouse"
// devices[2] = "Printer"
// devices[3] = "Monitor"

// document.write(devices)

// document.write(`"<br/>" ${ devices[0] } "<br/>" ${ devices[1] } "<br/>" ${ devices[2] } "<br/>" ${ devices[3] } `);

// 14.14

// var devices1 = [];
// devices1[0] = "Keyboard"
// devices1[1] = "Mouse"
// devices1[2] = "Printer"
// devices1[3] = "Monitor"

// document.write("Devices: " + devices1);
// document.write(`"<br/>" ${ devices1[3] } "<br/>" ${ devices1[2] } "<br/>" ${ devices1[1] } "<br/>" ${ devices1[0] } `);

// 14.15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>" + "<option>" + manufacturers[0] + "<option/>" + "<option>" + manufacturers[1] + "<option/>" + "<option>" + manufacturers[2] + "<option/>" + "<option>" + manufacturers[3] + "<option/>" + "<option>" + manufacturers[4] + "<option/>" + "<option>" + manufacturers[5] + "<option/>" + "<select/>");

/* Chapter 17-20 tasks */

// 17.1
// var salary = [
//     [],
//     [],
//     [],
//     [],
// ];
// 17.2

// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ];
// for (var i = 0; i < 4; i++) {
//     for (var j = 0; j < 4; j++) {
//         document.write(matrix[i][j])
//     }
// }

// // 17.3
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br/>")
// }

// 17.4

// var tableNum = +prompt("Enter a number to show its multiplication table: ");
// var tableLength = +prompt("Enter the length of table: ");
// for (var i = 1; i <= tableLength; i++) {
//     document.write(tableNum + " * " + i + " = " + (tableNum * i) + "<br/>");
// }

// 17.5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write("Fruits list" + fruits + "<br/>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at " + i + " index is " + fruits[i] + "<br/>");
// }

// 17.6
// document.write("Counting<br/>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",")
// }

// document.write("<br/>Reverse Counting<br/>")
// for (var i = 15; i >= 0; i--) {
//     document.write(i + ",")
// }

// document.write("<br/>Even Numbers<br/>")
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ",")
// }

// document.write("<br/>Odd Numbers<br/>")
// for (var i = 1; i <= 20; i += 2) {
//     document.write(i + ",")
// }

// document.write("<br/>Even Numbers<br/>")
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "K,")
// }

// 17.7

// var items = ["cake", "applePie", "cookie", "chips", "patties"];
// var itemSearch = prompt("Welcome to ABC bakery. What do you want ot order?");
// for (var i = 0; i < items.length; i++) {
//     if (items[i] == itemSearch) {
//         document.write(itemSearch + " is available at " + items[i] + " index in our bakery.")
//     }
// }

// 17.8
// var array = [24, 53, 78, 91, 12];
// var largest = 0;

// for (i = 0; i <= largest; i++) {
//     if (array[i] > largest) {
//         var largest = array[i];
//     }
// }
// document.write(largest);

// 17.9
// var arr = [24, 53, 78, 91, 12];
// var smallest = arr[0];

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }

document.write(smallest);

// 17.10
// document.write("Multiple of five<br/>")
// for (var i = 5; i <= 100; i += 5) {
//     document.write(i + ",")
// }