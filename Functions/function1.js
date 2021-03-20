// In this file are code of exercise 1 for functions

/*
1. Write a program that calculates the maximum of two given numbers. 
*/

function maxNumber(a, b) {
    
    if (a > b) {
       
        return a;

    } else if (b > a) {

        return b;

    } else if (a === b){

        return "Numbers are equal"
    }
    else {

        return "Input is not a number"
    }
   
}

var a = 5;
var b = 6;
var result = maxNumber(a, b);

console.log(result);

/*
2. Write a program that checks if a given number is odd.
*/

function oddOrEven (a) {

    if (a % 2 === 0) {
        return "Even";
    }
else {
        return "Odd";
    }
}

var a = 3;
var result = oddOrEven(a);

console.log(result);


/* 3. Write a program that checks if a given number is 
a three digit long number.
*/

function longNumber (a) {

    if (a > 99 && a < 1000) {
        return "The number have a three digits"
    }
    else {
        return "The number have not a three digits"
    }
}

var a = 156;
var result = longNumber(a);

console.log(result);


/* 4. Write a program that calculates an arithmetic mean 
of four numbers.
*/

function aritmeticMean(a, b, c, d) {
    
    if (typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number"){
        var sum = (a + b + c + d)/4;
        return sum;
    }
    else {
        return "Imputs are not a number"
    }
}

var a = 4;
var b = 5;
var c = 6;
var d = 7;

var result = aritmeticMean(a, b, c, d);

console.log(result);


/* 5. 
Write a program that draws a square of a given size. 
For example,  if the size of square is 5 the program 
should draw: 
*****
*   *
*   *
*   *
*****
*/

function square(a){

    var string1 = "";
    var elem = "*";
    var space = " ";

    for (var j = 1; j <= a; j++) {
       
        if(j === 1 || j === a) {
            string1 += elem.repeat(a) + "\n";
        } else if(j > 1 && j < a){
            string1 += "*" + space.repeat(a - 2) + "* \n";
        }

    }

   return string1; 

}

var f = 5;
var result = square(f);

console.log(result);

// Second way to resolve this problem is:


function square(a){
    var string1 = "";
    var elem = "*";
    var space = " ";

    for(var j = 1; j <= a; j++){

        if (j === 1 || j === a){

            for(var i = 1; i <= a; i++){

                if(i >= 1 && i < a){
                    string1 += elem;
                } else if(i === a){
                    string1 += elem + "\n";
                }
            }
            
        } else if(j > 1 && j < a){
            
            for(var k = 1; k <= a; k++){

                if(k === 1){
                    string1 += elem;
                }else if(k > 1 && k < a){
                    string1 += space;
                }else if(k === a){
                    string1 += elem + "\n";
                }
            }
        }
    }

    return string1;
}

var f = 5;
var result = square(f);

console.log(result);


/* 6.
Write a program that draws a horizontal chart representing three given values. 
For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/

function stars(a, b, c) {
    var star = "*";
    var string2 = "";

    for(var i = 1; i <= a; i++){

        if(i < a){
            string2 += star;
        } else if(i === a){
            string2 += star + "\n";
        }
    }

    for(var j = 1; j <= b; j++){

        if(j < b){
            string2 += star;
        } else if(j === b){
            string2 += star + "\n";
        }

    }

    for(var k = 1; k <= c; k++){

        string2 += star;

    }

    return string2;
}

var a = 5;
var b = 3;
var c = 7;
var result = stars(a, b, c);

console.log(result);

// Second way to resolve this problem is:

function stars(a, b, c) {
    var star = "*";
    var string2 = "";

    string2 += star.repeat(a) + "\n";
    
    string2 += star.repeat(b) + "\n";
    
    string2 += star.repeat(c);
    

    return string2;
}

var a = 5;
var b = 3;
var c = 7;
var result = stars(a, b, c);

console.log(result);


/*
7. Write a program that calculates a number of digits of a 
given number. 
*/

function numberOfDigits(a) {
    
    var b = "";
    b += a;

    return b.length;
}

var e = 238;
var result = numberOfDigits(e);

console.log(result);


/*
8. Write a program that calculates a number of appearances 
of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
*/

function apperance(a, b) {
    
    var sum = 0;

    for (var i = 0; i < a.length; i++){

        if(a[i] === b){
            sum += 1;
        }
    }

    return sum;
}

var e = [2, 4, 7, 8, 7, 7, 1];
var f = 7;
var result = apperance(e, f);

console.log(result);


/*
9. Write a program that calculates the sum of odd elements 
of a given array. 
*/

function sumOdd(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++){

        if(a[i] % 2 === 0){

        }
        else {
            sum += a[i];
        }
    }

    return sum;
}

var e = [1, 2, 3, 4];

console.log(sumOdd(e));


/* 10. Write a program that calculates the number of appearances
 of a letter a in a given string. Modify the program so it 
 calculates the number of both letters a and A.
*/

function numberOfA(a) {
    
    var number1 = 0;
    var number2 = 0;

    for (var i = 0; i < a.length; i++){

        if(a[i] === "a"){

            number1 += 1;
        }
        else if(a[i] === "A"){
            number2 += 1;
        }
    }

    var number ="Number of a is: " + number1 + " , Number of A is: " + number2;

    return number;

}

var f = "asdafgagfArtAyjada";
var result = numberOfA(f);
console.log(result);


/* 11. Write a program that concatenates a given string given 
number of times. For example, if “abc” and 4 are given values, 
the program prints out abcabcabcabc. 
*/

function concatenates(a, b) {
    
    var c = "";

    for (var i = 1; i <=b; i++){

        c += a;
    }

    return c;
}

var e = "abc";
var f = 4;
var result = concatenates(e, f);

console.log(result);





