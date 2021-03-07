/* Task1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -*/

var a = 3;
var b = -7;
var c = 2;
var product = a + b + c;

if(product<0) {
    console.log("Proizvod ima predznak -");  
}
else if(product>0) {
    console.log("Proizvod ima predznak +"); 
}
else {
    console.log("Proizvod je nula");
}

/* Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0*/

var number1 = -5;
var number2 = -2;
var number3 = -6;
var number4 = 0;
var number5 = -1;
var result;

if(number1>number2){
    result = number1;
}
else{
    result = number2;
}

if(result>number3){
    result = result;
}
else{
    result = number3;
}

if(result>number4){
    result = result;
}
else{
    result = number4;
}

if(result>number5){
    result = result;
}
else{
    result = number5;
}

console.log("Najveci broj od pet brojeva je br. " + result);


/* Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

var d = 0;
var e = -1;
var f = 4;
var small;
var smaller;
var smallest;

// Find the smallest number
if (d < e && d < f) {
    smallest = d;
} else if (e < d && e < f) {
    smallest = e;
} else if (f < d && f < e ) {
    smallest = f;
}

//Find the biggest number
if (d > e && d > f) {
    small = d;
} else if (e > d && e > f) {
    small = e;
} else if (f > d && f > e) {
    small = f;
}

// Find the middle number
if(d<small && d>smallest){
    smaller = d
}
else if (e<small && e>smallest){
    smaller = e
} else if (f<small && f>smallest){
    smaller = f
}

console.log(small + " " + smaller + " " + smallest);

/* Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10  					Sample input: 7
Output: 10 / 2 = 5					Output: X  
*/

var x = 7;

if(typeof x ==="number"){
    if(x%2===0){
        console.log(x/2);
    }
    else {
        console.log("X");  
    }
}
else{
    console.log("Varijabla nije broj");
}

/* Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.
*/

var y = 6;
var z = 2;

if(y>z){
    console.log(y);
}
else{
    console.log(z);
}


/* Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Sample Input: 60°C
	Output : 60°C is 140 °F
*/

var celsius = 60;
var fahrenheit;

if(typeof fahrenheit ==="undefined"){
    fahrenheit = (9*celsius/5) + 32;
}
else{
    celsius = (fahrenheit*5-32)/9;
}

console.log("F = " + fahrenheit + " C = " + celsius);

/* Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
	Sample Input: 11					Sample Input: 32
	Output : 2						Output : 38
*/

var num = 13;

if(num<13){
    console.log(13 - num);
    }
else if (num===13){
    console.log(num);
}
else{
    console.log((num - 13)*2);
}

/* Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
	Sample Input: 12,5					Sample Input: 8,8
	Output : 17						Output : 48
*/

var a1 =8;
var a2 =8;

if(a1===a2){
   console.log((a1 + a2)*3);
}
else{
    console.log(a1 + a2);
}

/* Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
*/

var a3 = 46;
var a4 = 4;

if(a3===50 || a4===50 || a3 + a4 === 50){
    console.log(true);
}
else{
    console.log(false);
}

/* Moze se napisati i samo ovaj izraz console.log(a3===50 || a4===50 || a3 + a4 === 50); */

/* Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
Sample Input: 13			Sample Input: 34			Sample Input: 256
	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
*/

var c1 = 13;

if(c1<20){
    console.log("-");
}
else if(c1>20 && c1<100){
    console.log("20 ⇔ 100");
}
else if(c1>100 && c1<400){
    console.log("100 ⇔ 400");
}
else if(c1>400){
    console.log("Broj nije u opsegu.");
}
