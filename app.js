// chap# 21 to 25

// question # 1

// var fisrtName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// var fullName = fisrtName + lastName;

// alert("HELLO " + fullName);

// question # 2

// var mob = prompt("Enter your favourite mobile");

// var lenght = mob.length;

// document.write("Your favorite phone is: " + mob + " <br>");
// document.write("Lenght of string: " + lenght + " <br>" + " <br>");

// question # 3

var city = "Pakistani";
var cityFind = city.indexOf("n");

document.write("String: " + city + " <br>");
document.write("Index of 'n' : " + cityFind + " <br>" + " <br>");

// question # 4

var ran = "Hello World";
var lastIndex = ran.lastIndexOf("l");

document.write("String: " + ran + " <br>");
document.write("Last Index of 'l' : " + lastIndex + " <br>" + " <br>");

// question # 5

// var city = "Pakistani";
// var cityFind = city.charAt(3);

// document.write("String: " + city + " <br>");
// document.write("Character at index 3 : " + cityFind + " <br>" + " <br>");

// // question # 6

// var fisrtName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// var fullName = fisrtName.concat(lastName);

// alert("HELLO " + fullName);

// question # 7

var city = "Hyderabad";
var changeCity = city.replace("Hyderabad", "Islamabad");

document.write("City: " + city + " <br>");
document.write("After replacement: " + changeCity + " <br>" + " <br>");

// question # 8

var message = "“Ali and Sami are best friends. They play cricket and football together.”";

var replaceMsg = message.replace(/and /gi, "& ");

document.write("Before replacement: " + message + " <br>");
document.write("After replacement: " + replaceMsg + " <br>" + " <br>");

// question # 9

var strNum = "472";
var a = typeof (strNum);

document.write("Value: " + strNum + " <br>");
document.write("Type: " + a + " <br>");

var change = +strNum;
var b = typeof (change);

document.write("Value: " + change + " <br>");
document.write("Type: " + b + " <br>" + " <br>");

// question # 10

// var nuts = prompt("Enter your favourite nuts")
// var upper = nuts.toUpperCase();

// document.write("User input: " , nuts + " <br>");
// document.write("Upper case: " , upper + " <br>" + " <br>");

// question # 11

// var userInput = prompt("Enter title case");
// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for (var i = 0; i < sentence.length; i++) {
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     document.write("User input: ", userInput + " <br>");
//     document.write("Title case: " + sentence.join(" ") + " <br>" + " <br>");
//     return sentence;
// }
// titleCase(userInput);

// question # 12

var num = 35.36;
var numStr = num.toString().replace(".", "");

document.write("Number: " + num + " <br>")
document.write("Result: " + numStr + "<br>" + " <br>");

// question # 13

// var userName = prompt("Enter your name");

// for (i = 0; i < userName.length; i++) {
//     if (userName[i].charCodeAt() == 33 || userName[i].charCodeAt() == 44 || userName[i].charCodeAt() == 46 || userName[i].charCodeAt() == 64) {
//         alert("please enter a valid username");
//         break
//     }

// }
// document.write(userName);

// question # 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var a = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am");

// var isMatch = true;
// for (i = 0; i < a.length; i++) {
//     if (A[i] === a.toLowerCase()) {
//         document.write(a.toLowerCase() + " is available at index " + i + " in our bakery");
//         isMatch = false;
//         break
//     }
// }
// if (isMatch === true) {
//     document.write("We are sorry." + a + " is not available in our bakery");

// }

