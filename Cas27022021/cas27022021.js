/* 1. Create several variables using different letter cases and beginning characters. 
Check if they still exist if you refer to them in different case - does case matter here? 
Try to declare a variable starting with number as the first character.
*/

// Declaration variables
var city;
var firstName;
var _LastName;
var age;
var $Married;

// Initialization variables
var city = "Beograd";
var firstName = "Predrag" ;
var _LastName = "Belos";
var age = 31;
var $Married = false;

// Wrong declaration variable
var 1London = 12;

console.log(1London);




/* 2. Save a string (text) describing your current mood in a variable and print it out in console.*/

var mood = "Osecam se pospano :-)";

console.log(mood);



/* 4. Play around in the console: add, subtract, multiply and divide some numbers. 
Use numbers stored in variables you created as well. 
Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3. Why do we get these results? */

// Creating a 7 variables
var a = 2;
var b = 3;
var c = 4;
var d = 5;
var e = 7;
var f = 1.14;
var g = 31;

// Define 3 expressions
var operation_1 = b - a - g;
var operation_2 = b * d - e / b;
var operation_3 = c / a - f * b;

// Print a results
console.log("Rezultati izvedenih operacija su sledeci:")
console.log("Rezultat 1 je: " + operation_1);
console.log("Rezultat 2 je: " + operation_2);
console.log("Rezultat 3 je: " + operation_3);

/* 5. How many grams weight 1.2kg of bananas? */

var valueInKG = 1.2;
var valueInGR;

valueInGR = valueInKG *1e-3;
valueInGR = 1.2e-3;

console.log("U 1,2 kg ima " + valueInGR + " grama.");




/* 6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? 
What about Tom who is being late half an hour? It is hard to be on time these days… */


var min_sec = 60;
var hour_sec = 60 * 60;
var _AnnasWaiting;
var _TomWaiting;

_AnnasWaiting = 5 * min_sec;
_TomWaiting = 0.5 * hour_sec;

console.log("Ana je kasnila" + " " + _AnnasWaiting + " minuta.");
console.log("Tom je kasnio" + " " + _TomWaiting + " minuta.");



/* 7. How many MB of additional memory we have if we buy a 4GB USB stick? 
How many news articles each in size 98KB can fit in it? */

var _USB_Memory = 4;
var memoryInMB;
var sizeOfArticle = 98 / 1024 / 1024;
var numberOfArticle;

memoryInMB = _USB_Memory * 1024;
numberOfArticle = _USB_Memory / sizeOfArticle;

console.log("USB od 4GB sadrzi " + memoryInMB + " MG memorije.");
console.log("Na USBu moze se skladistiti " + numberOfArticle + " artikala cija je velicina 98KB.");



/* 9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7? */

var a = 2;
var b = 3;
var c = 4;
var d =5;


var a1 = a * (1 + 1);
var b1 = b + (2 + 1/1);
var c1 = c / (2 * 2 + 1);
var d1 = d - ((4*2)-1);

console.log("Rezultati su sledeci:")
console.log("a1 = " + a1);
console.log("b1 = " + b1);
console.log("c1 = " + c1);
console.log("d1 = " + d1);



/* 10. Create the following variables:
	- a variable containing your name,
	- a variable containing your age,
	- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.
*/

/* Define 3 variables width different type of character. 
First begin width _, second width lowerCase and third width $. */
var _MyName = "Predrag";
var myAge = 31;
var $HaveACat = false;

// Print a value of variables
console.log("Moji podaci su sledeci:");
console.log("Moje ime je " + _MyName + ".");
console.log("Ja imam " + myAge + ". godinu.");
console.log("Status posedovanja macke je " + $HaveACat + ".");


// Print a type of data 

console.log("\nTipovi unetih varijabli su sledeci:")
console.log("Tip varijable mog imena je: " + typeof _MyName );
console.log("Tip varijable mog godista je: " + typeof myAge );
console.log("Tip varijable mog statusa premaljubimcu je: " + typeof $HaveACat );



/* 11. Check which type are these values:
- “number”
- true
- null
- “false”
- 56
*/

var _number = "number";
var _true = true;
var $null = null;
var _false = "false";
var number2 = 56;

console.log("Tipovi podataka su sledeci:")
console.log("\nTip podatka varijable _number je: " + typeof _number);
console.log("Tip podatka varijable _true je: " + typeof _true);
console.log("Tip podatka varijable $null je: " + typeof $null);
console.log("Tip podatka varijable _false je: " + typeof _false);
console.log("Tip podatka varijable number2 je: " + typeof number2);



/* 13. Use the console to check the results you think should go in the following table:*/

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

console.log("Rezultat za p1&&q1 je: " + a1);
console.log("Rezultat za p2&&q2 je: " + a2);
console.log("Rezultat za p3&&q3 je: " + a3);
console.log("Rezultat za p4&&q4 je: " + a4);
console.log("Rezultat za p1||q1 je: " + b1);
console.log("Rezultat za p2||q2 je: " + b2);
console.log("Rezultat za p3||q3 je: " + b3);
console.log("Rezultat za p4||q4 je: " + b4);



/* 14. If the variable age stores the information about user’s age, how we can check whether it contains a correct value? Write expressions for checking:
Is age negative value
Is age greater than 120 
*/

var _age = 30;
var A = _age>0;
var B = _age>120;

console.log("Tip podatka koji je unesen kao broj godina je: " + typeof _age);
console.log("Broj godina korisnika je pozitivan broj?: " + A);
console.log("Broj godina korisnika je veci od 120 godina: " + B);



/* 15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. 
If we store the current speed value in the variable speed. 
Write an expression which will check if we are driving drive safely or not? (true if we are driving safe and false if not) */

var minSpeed = 60;
var maxSpeed = 120;
var speed1 = 80;
var speed2 = 130;

var safeDriving = speed1>=minSpeed && speed1<=maxSpeed;
var unSafeDriving = speed1<=minSpeed && speed1>=maxSpeed;
console.log("Podaci o kretanju vozila su:");
console.log("\nPosto se vozilo krece brzinom od " + speed1 + " ono je bezbedno: " + safeDriving);

var safeDriving = speed2>=minSpeed && speed2<=maxSpeed;
var unSafeDriving = speed2<=minSpeed && speed2>=maxSpeed;
console.log("Posto se vozilo krece brzinom od " + speed2 + " ono je bezbedno: " + safeDriving);









