// This exercises are for functions

/*
1. Find the min and max element in the following array and switch their places. 
Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function swichMinMax(arr) {
    var minElem = arr[0];
    var maxElem = arr[0];
    var minIndex = 0;
    var maxIndex = 0;

    for(var i = 0, j = 0; i < arr.length, j < arr.length; i++, j++){

        if(arr[i] < minElem){
            minElem = arr[i];
            minIndex = i;
        }
        else if(arr[j] > maxElem){
            maxElem = arr[j];
            maxIndex = j;
        }
    }
    
    arr[minIndex] = maxElem;
    arr[maxIndex] = minElem;

   return arr; 
}

var a = [ 3, 500, 12, 149, 53, 414, 1, 19 ];
console.log(swichMinMax(a));


/*
2. Use the following array to make a new one by dividing its values by two and adding 5. 
If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function changeArr(arr) {
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        if((arr[i] / 2) + 5 === 0){
            newArr[newArr.length] = 20;
        }
        else{
            newArr[newArr.length] = (arr[i] / 2) + 5;
        }
    }
    
    return newArr;
    
}

var a = [ 3, 500, -10, 149, 53, 414, 1, 19 ];
console.log(changeArr(a));


/*
3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. 
Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

function studentsRanges(students, points) {

    for(var i = 0; i < points.length; i++){
        var result = "";
    
        if(points[i] > 50 && points[i] < 61){
            console.log(students[i] + " acquired " + points[i] + " points and earned 6. ");
           
        }
        else if(points[i] > 60 && points[i] < 71){
            console.log(students[i] + " acquired " + points[i] + " points and earned 7. ");
        }
        else if(points[i] > 70 && points[i] < 81){
            console.log(students[i] + " acquired " + points[i] + " points and earned 8. "); 
        }
        else if(points[i] > 80 && points[i] < 91){
            console.log(students[i] + " acquired " + points[i] + " points and earned 9. "); 
        }
        else if(points[i] > 90 && points[i] <= 100){
            console.log(students[i] + " acquired " + points[i] + " points and earned 10. "); 
        }
        else if(points[i] < 50){
            console.log(students[i] + " acquired " + points[i] + " and failed to complete the exam. ");
        }
    }
    return result;
    
}

var a = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var b = [ 50, 39, 63, 72, 99, 51, 83, 59 ];

console.log(studentsRanges(a,b));

/*
6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd 
numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/

function numbers() {
    var sumEven = 0;
    var sumOdd = 0;
    var result = 0;

    for(var i = 1; i <= 1000; i++){
        if(i % 2 === 0){
            sumEven += i
        }else if (i <= 500 && i % 2 !==0){
            sumOdd += i;
        }
    
    }

    result = (sumEven - sumOdd) * 12.5;

    return result; 
}

console.log(numbers());


/*
7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) 
in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa
*/

function createNewString(arr1) {
    var result = "";

    for(var i = 0; i < arr1.length; i++){
        
        if(typeof arr1[i] === "string"){
            
            if(arr1[i].length > 1){
                result += arr1[i][0] + arr1[i][1];
            }
        }
    }
    return result;
}

var arr1 = [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ];
console.log(createNewString(arr1));

/*
8. Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/

function reversedString(string) {
    var newString = "";

    for(var i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }

    return newString;
    
}

var a = "Belgrade Institute of Technology";
console.log(reversedString(a));



/*
9. Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. 
Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/

function combinationsTwoNuber(num1, num2) {
    var result = "";
    
    for (var i = num1; i <= num2; i++){
    
        for (var j = num1; j <= num2; j++){
    
            if(i !== j){
                result += i + ", " + j + "\n";
            }
        }
    }
    return result;
}


var a = 1;
var b = 7;

console.log(combinationsTwoNuber(a, b));


/*
10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
*/

function primeNumber(number) {
    var result = true;

    for(var i = 2; i < number; i++){
        if(number % i === 0){
            result = false;
        }
    }

    return result;  
}

var a = 15;
console.log(primeNumber(a));


/*
11. Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/

function palindromeWord(word) {
    var result = true;
    var newWord = "";

    for(var k = 0; k < word.length; k++){
        if(word[k] !== " "){

            newWord += word[k];
        
        }
    }

    for(var i = 0, j = newWord.length - 1; i < j, j > i; i++, j--){
    
        if(newWord[i].toLowerCase() !== newWord[j].toLowerCase()){
            result = false;
        }
    }
    return result;
    
}

var a = "a nut for a jar of tuna";
console.log(palindromeWord(a)); 


/*
12. Write a program that calculates the greatest common divisor of two integers. 
Note: The greatest common divisor of two non-zero integers is the greatest positive 
number that divides both numbers with no remainder.

Input:  192 42 | 81 9
Output: 6      | 9
*/

function commonDivisor(num1, num2) {
    var divisor1 = [];
    var divisor2 = [];
    var greatestDivisor;

    
    for(var i = 1, j = 1; i <= num1, j <= num2; i++, j++){
        if(num1 % i === 0){
            divisor1[divisor1.length] = i;
        }

        if(num2 % j === 0){
            divisor2[divisor2.length] = j;
        }
    }

    for(var k = 0; k < divisor1.length; k++){

        for (var l = 0; l < divisor2.length; l++){

            if(divisor1[k] === divisor2[l]){
                greatestDivisor = divisor1[k];
            }
        }
    }

    return greatestDivisor;
}
    
var a = 9;
var b = 81;
console.log(commonDivisor(a, b));
