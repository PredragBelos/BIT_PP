
// This file contains a exercise of variables, type of variables and operators.

// Variable declaration and initialization

/*
1. Create several variables using different letter cases and beginning 
characters. Check if they still exist if you refer to them in different 
e - does case matter here? Try to declare a variable starting with number 
as the first character.
*/

// Declaring a variables

var city;
var firstName;
var _LastName;
var $Age;
var married;


// Initialization declare variables

city = "Novi Sad";
firstName = "Jovan";
_LastName = "Jovanovic";
$Age = 45;
married = true;

// Wrong declaration variable start width number!!!

var 1Surname;

// Declaring and initializing variables in one time

var car = "AUDI A4";

/*
2. Save a string (text) describing your current mood in a variable 
   and print it out in console.
*/

var mood = "I feel good."
console.log(mood);

// Arithmetic operators

/*
4. Play around in the console: add, subtract, multiply and divide 
some numbers. Use numbers stored in variables you created as well. 
Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3. Why do we get 
these results? 
*/

var a = 1.14;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var f = 7;
var g = 31;

var expresion1 = c - b - g;
var expresion2 = c * e - f / c;
var expresion3 = d / b - a * c;

console.log("Result of tree expresions are:")
console.log("Result1 is: " + expresion1 + ",\nResult2 is: " + expresion2 + ",\nResult3 is: " + expresion3);


/*
5. How many grams weight 1.2kg of bananas? 
*/

var gramInKilogram = 1000;
var bananasWeight = 1.2;
var weightInGrams = gramInKilogram * bananasWeight;

console.log("1.2 kg bananas have " + weightInGrams + " grams bananas.")


/*
6. How many extra seconds we wait for our friend Anna who is being 
late for 5 minutes? What about Tom who is being late half an hour? 
It is hard to be on time these days…
*/

var secInMin = 60;
var secInHour = 60 * 60;
var _AnnasWaiting;
var _TomWaiting;

_AnnasWaiting = 5 * secInMin;
_TomWaiting = 0.5 * secInHour;

console.log("Anna was late" + " " + _AnnasWaiting + " seconds.");
console.log("Tom was late" + " " + _TomWaiting + " seconds.");


/*
7. How many MB of additional memory we have if we buy a 4GB USB stick?
How many news articles each in size 98KB can fit in it?
*/

var _USB_Memory = 4;
var _MGInGB = 1024;
var _KBInGB = 1024 * 1024;

var _USBInMB = _USB_Memory * _MGInGB;
var numberOfArticles = _USB_Memory / (98 / _KBInGB);

console.log("In 4GB USB stick is " + _USBInMB + " MB.")
console.log("In 4GB USB stick can arhiver " + numberOfArticles + " news.")


/*
9. Do you know any other way to write a = a * 2? 
How about: b = b + 3; c = c / 5; d = d - 7?
*/
var a1 = 2;
var b1 = 3;
var c1 = 5;
var d1 = 10;

a1 = a1 * (1 + 1 / 1);
b1 = b1 + 1 / 1 * (2 * 1 + 1);
c1 = c1 / (20 / 5 + 5 / 5);
d1 = d1 - (5 + 2);

console.log("Result of expresions are:");
console.log("Result1 is: " + a1);
console.log("Result2 is: " + b1);
console.log("Result3 is: " + c1);
console.log("Result4 is: " + d1);


/*
10. Create the following variables:
	- a variable containing your name,
	- a variable containing your age,
	- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.
*/

var myName = "Predrag";
var _MyAge = 31;
var $HaveCat = false;

console.log("My name is " + myName);
console.log("My age is " + _MyAge + " years");
console.log("I have a cat? " + $HaveCat);

console.log("\nType of variable 'myNme' is : " + typeof(myName));
console.log("Type of variable '_MyAge' is : " + typeof(_MyAge));
console.log("Type of variable '$HaveCat' is : " + typeof($HaveCat));


/*
11. Check which type are these values:
	- “number”
	- true
	- null
	- “false”
	- 56
*/

var variable1 = "number";
var variable2 = true;
var variable3 = null;
var variable4 = false;
var variable5 = 56;

console.log("Type of variables are:")
console.log("variable1 is : " + typeof(variable1));
console.log("variable2 is : " + typeof(variable2));
console.log("variable3 is : " + typeof(variable3));
console.log("variable4 is : " + typeof(variable4));
console.log("variable5 is : " + typeof(variable5));


// Logical operators

/*
12. Check how good you are at guessing the Boolean equivalent of 
different values using the console. Do you remember how to check for 
a Boolean equivalent of a value?
*/

var a2 = 0;
var b2 = false;
var c2 = true;
var d2 = null;
var e2 = Infinity;
var f2 = "";
var g2 = "string";


console.log(!!a2);
console.log(!!b2);
console.log(!!c2);
console.log(!!d2);
console.log(!!e2);
console.log(!!f2);
console.log(!!g2);


/*
13. Use the console to check the results you think should go in the
 following table:
*/

var p1 = true;
var p2 = true;
var p3 = false;
var p4 = false;
var q1 = true;
var q2 = false;
var q3 = true;
var q4 = false;
var a1 = p1&&q1;
var a2 = p2&&q2;
var a3 = p3&&q3;
var a4 = p4&&q4;
var b1 = p1||q1;
var b2 = p2||q2;
var b3 = p3||q3;
var b4 = p4||q4;

console.log("Result for p1&&q1 is: " + a1);
console.log("Result for p2&&q2 is: " + a2);
console.log("Result for p3&&q3 is: " + a3);
console.log("Result for p4&&q4 is: " + a4);
console.log("Result for p1||q1 is: " + b1);
console.log("Result for p2||q2 is: " + b2);
console.log("Result for p3||q3 is: " + b3);
console.log("Result for p4||q4 is: " + b4);


/*
14. If the variable age stores the information about user’s age, how we can check whether it contains a correct value? Write expressions for checking:
Is age negative value
Is age greater than 120 
*/

var _age = 30;
var A = _age>0;
var B = _age>120;

console.log("Typ of data for years is: " + typeof _age);
console.log("Is number of users years positive number?: " + A);
console.log("Number of users years is greater than 120?: " + B);



/*
15. Let’s say there are speed limitations on a motorway from 60 to 120 
kilometers per hour. If we store the current speed value in the variable
peed. Write an expression which will check if we are driving drive safely
 or not? (true if we are driving safe and false if not) 
*/

var minSpeed = 60;
var maxSpeed = 120;
var speed1 = 80;
var speed2 = 130;

var safeDriving = speed1>=minSpeed && speed1<=maxSpeed;
var unSafeDriving = speed1<=minSpeed && speed1>=maxSpeed;
console.log("Vehicle speed is " + speed1 + " km/h she is safety: " + safeDriving);

var safeDriving = speed2>=minSpeed && speed2<=maxSpeed;
var unSafeDriving = speed2<=minSpeed && speed2>=maxSpeed;
console.log("Vehicle speed is " + speed2 + " km/h she is safety: " + safeDriving);
