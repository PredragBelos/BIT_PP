// This file contain exercise for functions


/*
1. Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false
*/

function isString(a) {
    return typeof a === "string";
}

var b = 12;
console.log(isString(b));


/*
2. Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
*/

function isBlank(a) {

    var result;

  if(typeof a !== "string"){

      result = "Input in not a string";
  }
  else{
      result  = a.length === 0;
  }
  return result;
}

var b = " ";
console.log(isBlank(b));


/* 
3. Write a function that concatenates a given string n times 
(default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/

function multyString(string, number) {
    var result = "";

    for (var i = 1; i <= number; i++){
        result += a;
    }

    return result;
}

var a = "Ha";
var b = 3;
console.log(multyString(a, b));


/*
4. Write a function to count the number of letter occurrences in
a string.
"My random string", "n" -> 2
*/

function letterNumber(letter, string) {
    var count = 0;

    for (var i = 0; i < string.length; i++){

        if(string[i] === letter){
            count += 1;
        }
    }

    return count;
}

var a = "r";
var b = "My random string";

console.log(letterNumber(a, b));


/*
5. Write a function to find the position of the first occurrence 
of a character in a string. The result should be the position of 
character. If there are no occurrences of the character, the 
function should return -1.
*/

function firstAcc(letter, string) {

    var position = -1;

    for (var i = 0; i < string.length; i++){

        if (string[i] === letter){
            position = i + 1;
            break;
        }
    }
    return position;
}

var a = "g";
var b = "ghjkyfnbfghj";
console.log(firstAcc(a, b));


/*
6. Write a function to find the position of the last occurrence 
of a character in a string. The result should be in human 
numeration form. If there are no occurrences of the character, 
function should return -1.
*/

function firstAcc(letter, string) {

    var position = -1;

    for (var i = 0; i < string.length; i++){

        if (string[i] === letter){
            position = i + 1;
            
        }
    }
    return position;
}

var a = "s";
var b = "ghjkyfnbfghj";
console.log(firstAcc(a, b));


/*
7. Write a function to convert string into an array. Space in a 
string should be represented as “null” in new array.
*/

function stringToArray(string) {
    var array = [];

    for (var i = 0; i < string.length; i++){

        if (string[i] === " "){
            array[i] = "null";
        }
        else{
            array[i] = string[i];
        }
    
    }

    return array;
}

var a = "Random";
console.log(stringToArray(a));


/*
8. Write a function that accepts a number as a parameter and 
checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 
1 that has no positive divisors other than 1 and itself.
*/

function isPrime(number) {
    var result = "";
    
    if(typeof number !== "number"){
        result = "Input isn't number"
    }
    else{

        result = "Number is prime";

        for(var i = 2; i < number; i++){
            if((number / i) % 1 !== 0){
                
            }
            else{
                result = "Number is not prime";
            }
        }
    }

    return result;
}

var a = "j";
console.log(isPrime(a));


/*
9. Write a function that replaces spaces in a string with 
provided separator. If separator is not provided, use “-” (dash) 
as the default separator.

"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"
*/

function spaceReplace(string, separator) {
    var newString = "";

    for (var i = 0; i < string.length; i++){

        if(string[i] === " " && separator ===""){
            newString += "-"
            
        }else if(string[i] === " "){
            newString += separator;
        }
        else{
            newString += string[i];
        }
    }

    return newString;
}

var a = "My random string";
var b = "";
console.log(spaceReplace(a, b));


/*
10. Write a function to get the first n characters and
 add “...” at the end of newly created string.
*/

function shortString(string, neumberOfCharacters) {
    var newString = "";
    
    for (var i = 0; i < neumberOfCharacters; i++){

        newString += string[i];
    }

    newString += "...";

    return newString;
    
}

var a = "My first jurney was been in Australia";
var b = 15;
console.log(shortString(a, b));


/*
11. Write a function that converts an array of strings into an 
array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

function numericArray(array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++){
    
        if (isFinite(parseFloat(array[i]))){
            newArray[newArray.length] = parseFloat(array[i]);
        }  
    }
    return newArray;

}

var array = ["1", "21", undefined, "42", "1e+3", Infinity];

console.log(numericArray(array));


/*
12. Write a function to calculate how many years there are left
 until retirement based on the year of birth. Retirement for men 
 is at age of 65 and for women at age of 60. If someone is already 
 tired, a proper message should be displayed.
*/

function retirement(birthYear, year, gender){
    var manRetirement = 65;
    var womanRetirement = 60;
    var workYear = 0;
    var status = "";

    workYear = year - birthYear;

    if (gender === "m" && workYear < manRetirement){
        status = manRetirement - workYear;
    }
    else if (gender === "m" && workYear > manRetirement){
        status = "Man is in retirement";
    }
    else if (gender === "w" && workYear < womanRetirement){
        status = womanRetirement - workYear;
    }
    else if (gender === "w" && workYear > womanRetirement){
        status = "Woman is in retirement";
    }

    return status;

}

var birthYear = 1990;
var year = 2021;
var gender = "w";
console.log (retirement(birthYear, year, gender));


/*
13. Write a function to humanize a number (formats a number to 
    a human-readable string) with the correct suffix such as 1st, 
    2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
*/

function numberSuffix (a){

    var array1 = [];
    var array2 = [];
    var array3 = [];
    result = "";

    for (var i = 20; i <= 100000000; i+=10){
        array1[array1.length] = i + 1; 
    }

    for (var i = 20; i <= 100000000; i+=10){
        array2[array2.length] = i + 2; 
    }

    for (var i = 20; i <= 100000000; i+=10){
        array3[array3.length] = i + 3; 
    }

    if(array1.includes(a)){
        result = a + "st";
        
    } else if (array2.includes(a)){
        result = a + "nd";
    } else if (array3.includes(a)){
        result = a + "rd";
    } else if(a === 1){
        result = a + "st";
    } else if(a === 2){
        result = a + "nd";
    } else if(a === 3){
        result = a + "rd";
    } else if(a > 3){
        result = a + "th";
    }

    return result;
}

console.log(numberSuffix(14));


// Other way to resolve exercise 13

function humanize(number) {
    if(number % 100 >= 11 && number % 100 <= 13)
        return number + "th";
    
    switch(number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }
    
    return number + "th";
}

console.log(humanize(23));
