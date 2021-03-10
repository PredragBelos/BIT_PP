
// Exercise for loops 1

/*
Write a program that will iterate from 0 to 10 and display squares
of numbers.
*/

var i = 0;

while (i<11) {
    console.log(i * i);
    i++
}


/*
1. Write a for loop that will iterate from 0 to 15. For each iteration, 
it will check if the current number is odd or even, and display a message 
he screen.
*/

for (i = 0; i < 16; i++ ) {
    
    if (i%2===0) {
        console.log(i + " is odd number.");
    }
    else{
        console.log(i + " is even number."); 
    }

}


/*
2. Write a program to sum the multiples of 3 and 5 under 1000.
*/

var x = 0;
var sum = 0;

while (x<1000) {
    
    if (x%3===0 && x%5===0) {
      sum +=  x;
    }
    x++;
}

console.log(sum);


/*
3. Write a program to compute the sum and product of an array of integers.
*/

var array = [1, 0.1, 2, 5 , 0.3];
var sumElement = 0;
var productElement = 0;

for (var i = 0; i < array.length; i++) {
    
    if(array[i]%1===0){
        sumElement += array[i];
        productElement += array[i] * array[i];
    }
      
}

console.log(sumElement);
console.log(productElement);

/*
4. Write a program which prints the elements of the 
following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var i = 0;
var oneString = "";

while(i<x.length){
    oneString += x[i];
    i++
}

console.log(oneString);


/*
5. Write a program that prints the elements of the following array.

var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];
*/

//var element = 0;
//var a = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27] ];



/* 6. Write a program that outputs the sum of 
   squares of the first 20 numbers.*/


var i = 0;
var squares = 0;

while (i < 21) {
    squares += i * i;
    i++;
}

console.log(squares);


/* 7. Write a program that computes average marks of the following students. 
Then use this average to determine the corresponding grade. 
*/
var David = 80;
var Marko = 77;
var Dany = 88;
var John = 95;
var Thomas = 68;
var marks = [David, Marko, Dany, John, Thomas];
var i = 0;
var sumMarks = 0;

while (i < marks.length)  {
    sumMarks += marks[i];
    i++;
}

var avg = sumMarks / marks.length;
var grade;

if ( avg > 90 && avg <=100) {
    grade = "A";
} else if  ( avg > 80 && avg <=90) {
    grade = "B";
} else if  ( avg > 70 && avg <=80) {
    grade = "C";
} else if  ( avg > 60 && avg <=70) {
    grade = "D";
} else if  ( avg < 60) {
    grade = "F";
} 

console.log(grade);

/*
8. Write a program that uses console.log to print all the numbers from 1 
to 100, with two exceptions. For numbers divisible by 3, print "Fizz" 
instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead. When you have that working, modify your program 
to print "FizzBuzz", for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of 
those).
*/

var number = 1;

while (number < 101){
    if(number%5===0 && number%3===0){
        console.log("FizzBuzz");
    }
    else if(number%3===0){
        console.log("Fizz");   
    }
    else if(number%5===0 && !number%3===0){
        console.log("Buzz");  
    }
    else{
        console.log(number);
    }
   
    number++;
}










