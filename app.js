// Assignment 06

                         // String methods

// task 01
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");

// task 02
// var phone = prompt("Enter your favorite mobile phone model:");
// var length = phone.length;
// alert("The length of your input is: " + length);

// task 03
// var word = "Pakistani";
// var index = word.indexOf("n");
// alert("The index of 'n' is: " + index);

// task 04
// var word = "Hello World";
// var index = word.lastIndexOf("l");
// alert("The last index of 'l' is: " + index);

// task 05
// var word = "Pakistani";
// var character = word.charAt(3);
// alert("The character at index 3 is: " + character);

// task 06
// var word = "Hyderabad";
// var newWord = word.replace("Hyder", "Islam");
// alert(newWord);

// task 07
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replaceAll("and", "&");
// alert(newMessage);

// task 08
// var str = "472";
// var num = Number(str);
// alert("Value: " + str + ", Type: " + typeof str);
// alert("Value: " + num + ", Type: " + typeof num);


// task 09
// var str = "472";
// var num = Number(str);
// document.write("Value: " + str + ", Type: " + typeof str + "<br>");
// document.write("Value: " + num + ", Type: " + typeof num + "<br>");

// task 10
// var input = prompt("Enter some text:");
// var upperCaseText = input.toUpperCase();
// document.write("Uppercase: " + upperCaseText);

// task 11
// var input = prompt("Enter some text:");
// var words = input.split(" ");
// var result = "";
// for (var i = 0; i < words.length; i++) {
//   var word = words[i];
//   var firstLetter = word.charAt(0).toUpperCase();
//   var restOfWord = word.slice(1).toLowerCase();
//   result += firstLetter + restOfWord + " ";
// }
// document.write("Title Case: " + result);

// task 12
// var num = 35.36;
// var str = num.toString();
// var result = str.replace(".", "");
// document.write(result);

// task 13
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Enter the item you want to search for:");
// var found = false;
// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === search.toLowerCase()) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   document.write(search + " is found in the list!");
// } else {
//   document.write(search + " is not found in the list.");
// }

// task 14
// var password = prompt("Enter your password:");
// var hasLetter = false;
// var hasNumber = false;
// var isValid = true;
// // Check length
// if (password.length < 6) {
//   isValid = false;
// }

// // Check if first character is a number
// var firstChar = password.charAt(0);
// if (firstChar >= "0" && firstChar <= "9") {
//   isValid = false;
// }

// // Check each character for letter or number
// for (var i = 0; i < password.length; i++) {
//   var char = password.charAt(i);
//   if (char >= "0" && char <= "9") {
//     hasNumber = true;
//   } else {
//     hasLetter = true;
//   }
// }
// if (!hasLetter || !hasNumber) {
//   isValid = false;
// }
// if (isValid) {
//   document.write("Password accepted: " + password);
// } else {
//   alert("Invalid password! It must be at least 6 characters, contain letters and numbers, and not start with a number.");
// }

// task 15
// var university = "University of Karachi";
// var arr = university.split(" ");
// document.write(arr);

// task 16
// var input = prompt("Enter some text:");
// var lastChar = input.charAt(input.length - 1);
// document.write("Last character: " + lastChar);

// task 17
// var str = "The quick brown fox jumps over the lazy dog";
// var words = str.toLowerCase().split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }
// document.write("The word 'the' occurs " + count + " times.");

                    //    Maths Methods

// task 01
// var num = prompt("Enter a number:");
// num = Number(num);
// document.write("Number: " + num + "<br>");
// document.write("Round: " + Math.round(num) + "<br>");
// document.write("Floor: " + Math.floor(num) + "<br>");
// document.write("Ceil: " + Math.ceil(num) + "<br>");

// task 02
// var num = prompt("Enter a negative number:");
// num = Number(num);
// document.write("Number: " + num + "<br>");
// document.write("Round: " + Math.round(num) + "<br>");
// document.write("Floor: " + Math.floor(num) + "<br>");
// document.write("Ceil: " + Math.ceil(num) + "<br>");

// task 03
// var num = prompt("Enter a number:");
// num = Number(num);
// var absValue = Math.abs(num);
// document.write("Absolute value: " + absValue);

// task 04
// var dice = Math.floor(Math.random() * 6) + 1;
// document.write("Dice value: " + dice);

// task 05
// var coin = Math.floor(Math.random() * 2);
// var result = coin === 0 ? "Heads" : "Tails";
// document.write("Coin toss result: " + result);

// task 06
// var num = Math.floor(Math.random() * 100) + 1;
// document.write("Random number: " + num);

// task 07
// var input = prompt("Enter your weight:");
// var weight = parseFloat(input);
// document.write("Your weight is: " + weight);

// task 08
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var guess = prompt("Guess a number between 1 and 10:");
// guess = Number(guess);
// if (guess === secretNumber) {
//   document.write("Congratulations! You guessed the correct number: " + secretNumber);
// } else {
//   document.write("Wrong guess! The secret number was: " + secretNumber);
// }






































































