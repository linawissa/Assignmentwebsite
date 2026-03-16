// Greeting
let name = prompt("Hello, what is your name?");
alert("Welcome " + name + ", it's a pleasure to greet you!");

// First number
let firstInput = prompt("Please enter a number:");
let firstNum = Number(firstInput);

// Second number
let secondInput = prompt("Please enter another number:");
let secondNum = Number(secondInput);

// Simple arithmetic
let sum = firstNum + secondNum;
let difference = firstNum - secondNum;
let product = firstNum * secondNum;

alert("Let me show you what I can do with your numbers:");
alert(firstNum + " + " + secondNum + " = " + sum);
alert(firstNum + " - " + secondNum + " = " + difference);
alert(firstNum + " * " + secondNum + " = " + product);

// Decimal number
let decimalInput = prompt("Please enter a number with a decimal:");
let decimalNum = Number(decimalInput);

// Simple operations with decimal
let rounded = Math.round(decimalNum);
let absoluteValue = Math.abs(decimalNum);

alert("Here is what I can do with the number " + decimalNum + ":");
alert("Rounded value: " + rounded);
alert("Absolute value: " + absoluteValue);
