
// Exercise for loops 1

/*
Write a program that will iterate from 0 to 10 and display squares
of numbers.
*/

var i = 0;

while (i < 11) {

    console.log(i * i);
    i++;
}

// Second way for solving this task is over for loop.

for (var j = 0; j <=10; j++) {

    console.log(j * j);
}


/*
1. Write a for loop that will iterate from 0 to 15. For each 
iteration, it will check if the current number is odd or even, 
and display a message to the screen.
*/

for (var i = 0; i <= 15; i++ ) {
    
    if (i % 2 === 0) {
        console.log(i + " is odd number.");
    }
    else{
        console.log(i + " is even number."); 
    }

}

// Second way for solving this task is over while loop.

var j = 1;

while (j <= 15) {
    
    if (j % 2 === 0) {
        console.log(j + " is odd number.");
    }
    else{
        console.log(j + " is even number."); 
    }

    j++;

}


/*
2. Write a program to sum the multiples of 3 and 5 under 1000.
*/

var i = 0;
var sumOfNumber = 0;

while (i < 1000) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        sumOfNumber +=  i;
    }
    i++;
}

console.log(sumOfNumber);

// Second way for solving this task is over for loop.

var sumOfNumber2 = 0;

for(var j = 0;j < 1000;j++){

    if (j % 3 === 0 && j % 5 === 0) {
        sumOfNumber2 +=  j;
    }

}

console.log(sumOfNumber2);


/*
3. Write a program to compute the sum and product of an array 
of integers.
*/

var array = [1, 0.1, 2, 5 , 0.3];
var sumElement = 0;
var productElement = 0;

for (var i = 0; i < array.length; i++) {
    
    if(array[i] % 1 === 0){
        sumElement += array[i];
        productElement += array[i] * array[i];
    }
      
}

console.log("Sum of integers elements of array is : " + sumElement);
console.log("Product of integers elements of array is : " + productElement);

// Second way for solving this task is over while loop.

var array = [1, 0.1, 2, 5 , 0.3];
var sumElement = 0;
var productElement = 0;
var j = 0;

while (j < array.length) {
    
    if(array[j] % 1 === 0){
        sumElement += array[j];
        productElement += array[j] * array[j];
    }

    j++;
}

console.log("Sum of integers elements of array is : " + sumElement);
console.log("Product of integers elements of array is : " + productElement);


/*
4. Write a program which prints the elements of the 
following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var i = 0;
var newstring = "";

while(i < x.length){
    newstring += x[i];
    i++
}

console.log(newstring);

// Second way for solving this task is over for loop.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var newstring = "";

for (var j = 0; j < x.length; j++) {
    
    newstring += x[j];

}

console.log(newstring);


/*
5. Write a program that prints the elements of the following array.

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

*/

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

for ( var i = 0; i < a.length; i++) {

    console.log("The " + (i + 1) + ". element of array is: " + a[i]);

}

// Second way for solving this task is over while loop.

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

var j = 0;

while (j < a.length) {
    
    console.log("The " + (j + 1) + ". element of array is: " + a[j]);
    j++
}


/* 6. Write a program that outputs the sum of 
   squares of the first 20 numbers.*/


var i = 0;
var squares = 0;

while (i <= 20) {
    squares += i * i;
    i++;
}

console.log(squares);

// Second way for solving this task is over for loop.

var squares = 0;

for (var j = 0; j <= 20; j++) {

    squares += j * j;

}

console.log(squares);



/* 7. Write a program that computes average marks of the 
following students. Then use this average to determine the 
corresponding grade. 
*/

var David = 80;
var Marko = 77;
var Dany = 88;
var John = 95;
var Thomas = 68;
var points = [David, Marko, Dany, John, Thomas];
var sumPoints = 0;
var average = 0;
var grade;
var i = 0;

while (i < points.length)  {
    sumPoints += points[i];
    i++;
  
}

average = sumPoints / points.length;

if ( average > 90 && average <=100) {
    grade = "A";
} else if  ( average > 80 && average <=90) {
    grade = "B";
} else if  ( average > 70 && average <=80) {
    grade = "C";
} else if  ( average > 60 && average <=70) {
    grade = "D";
} else if  ( average < 60) {
    grade = "F";
} 

console.log(grade);

/*
8. Write a program that uses console.log to print all the numbers 
from 1 to 100, with two exceptions. For numbers divisible by 3, 
print "Fizz" instead of the number, and for numbers divisible by 5 
(and not 3), print "Buzz" instead. When you have that working, 
modify your program to print "FizzBuzz", for numbers that are 
divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for 
numbers divisible by only one of those).
*/

var number = 1;

while (number <= 100){
    if(number % 5 === 0 && number % 3 === 0){
        console.log("FizzBuzz");
    }
    else if(number % 3 === 0){
        console.log("Fizz");   
    }
    else if(number % 5 === 0 && !number % 3 === 0){
        console.log("Buzz");  
    }
    else{
        console.log(number);
    }
   
    number++;
}










