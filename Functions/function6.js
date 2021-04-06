
/*
1. Write a function to count vowels in a provided string. 
Vowels are a, e, i, o, and u as well as A, E, I, O, and U.
*/

function vowelscount(string) {
    var count = 0;

    for(var i = 0; i < string.length; i++){
    
        switch (string[i]) {
            case "a":
                count++;
                break;
            case "e":
                count++
                break;
            case "i":
                count++;
                break;
            case "o":
                count++;
                break;
            case "u":
                count++;
                break;
            case "A":
                count++;
                break;
            case "E":
                count++
                break;
            case "I":
                count++;
                break;
            case "O":
                count++;
                break;
            case "U":
                count++;
                break;
        }
    }

    return count;
}

var a = "Paris is the biggest citi in the FrAnce."
console.log(vowelscount(a));


/*
2. Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/

function combineArr(arr1, arr2) {
    var newArr = [];
    
    for(var i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++){

        newArr[newArr.length] = arr1[i];
        newArr[newArr.length] = arr2[j];
    
    }

    return newArr; 
}

var a = ["a","b","c"];
var b = [1,2,3];

console.log(combineArr(a, b));

/*
3. Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

function rotateArr(arr, rotatesElements) {
    var newArr = [];

    for(var i = rotatesElements; i < arr.length; i++){
        newArr[newArr.length] = arr[i];
    }
    
    for(var j = 0; j <= rotatesElements - 1; j++){
        newArr[newArr.length] = arr[j];
    }

    return newArr;

}

var a = [1,2,3,4,5,6];
var b = 2;
console.log(rotateArr(a, 2));

/*
4. Write a function that takes a number and returns array of its digits.
*/

function digitsOfNumber(number) {
    var string = "";
    var result = [];

    string += number;

    for(var i = 0; i < string.length; i++){
        result[result.length] = string[i];
    }

    return result;
    
}

var a = 256;
console.log(digitsOfNumber(a));

/*
5. Write a program that prints a multiplication table for numbers up to 12.
*/

function multiplication(number) {
    var result = "";

    for(var i = 1; i <= number; i++){
        for(var j = 1; j <= 10; j++){
    
            result += i + " x " + j + "= " + (i * j) + "\n";
        }
    }

    return result; 
}

var a = 12;
console.log(multiplication(a));

/*
6. Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/

function centigradeToFahrenheit(centigrade) {

    return (centigrade * (9 / 5)) + 32;
    
}

var a = 0;
console.log(centigradeToFahrenheit(a));


/*
7. Write a function to find the maximum element in array of numbers. 
Filter out all non-number elements.
*/

function maxElement(arr) {
    var result = arr[0];
    
    for(var i = 0; i < arr.length; i++){
        if(isFinite(arr[i]) && typeof arr[i] === "number"){
            if(arr[i] > result){
                result = arr[i];
            }
        }
    }
    return result;
}

var a = [1, 5, 8, 6 ,7 ,12, "a", NaN, Infinity, 2, null, 56, undefined];
console.log(maxElement(a));

/*
8. Write a function to find the maximum and minimum elements. Function returns an array.
*/

function minAndMax(arr) {
    var result = [];
    var minEl = arr[0];
    var maxEl = arr[0];

    for(var i = 0; i < arr.length; i++){
        
        if(arr[i] < minEl){
            minEl = arr[i];
        }

        if(arr[i] > maxEl){
            maxEl = arr[i];
            
        }
    }
    result[0] = minEl;
    result[1] = maxEl;

    return result;   
}

var a = [1, -2, -5 , 15 , 4 , 12];
console.log(minAndMax(a));

/*
9. Write a function to find the median element of array.
*/

function ArrMedian(arr) {
    var result = "";

    if(arr.length % 2 !== 0){
        result = arr[arr.length / 2 - 0.5];
    }
    else{
        result = "This array have a even number of elements."
    }

    return result;
    
}

var a = [1, -2, -5 , 15 , 4];
console.log(ArrMedian(a));


/*
10. Write a function to find the element that occurs most frequently.


var arr = ["a", "b", "a", "a", "c", "b"];
var sortArr = [];
sortArr[0] = arr[0];

for(var i = 0; i < arr.length; i++){
   
    for(var j = i; j < arr.length; j++){
        if(arr[j] === arr[i]){
            sortArr[sortArr.length] = arr[j];
            break;
        }
    }
    
}

console.log(sortArr);


var nesto = ["a", "b"];
var arr = ["a", "b", "a", "a", "c", "b"];
var sortArr = [];

for(var i = 0; i < arr.length; i++){
    if(nesto === arr[i]){
        sortArr[sortArr.length] = nesto;
        break;
    }
}

console.log(sortArr);

var arr = ["a", "b", "a", "a", "c", "b"];
var sortArr = [];
sortArr[sortArr.length] = arr[0];

//console.log(sortArr);
var j = 0;

for(var i = 1; i < arr.length; i++){
    if(arr[i] !== sortArr[j]){
        sortArr[sortArr.length] = arr[i];
        j++;
    }
}
console.log(sortArr);

*/


/*
11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. 
If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
*/

function arrElements(arr) {
    var result = [];

    if (arr.length < 1){
        result = arr;
    }
    else if(arr.length % 2 === 0){
        
        result[0] = arr[0];
        result[1] = arr[arr.length - 1];
    }
    else if(arr.length % 2 !== 0){
        
        result[0] = arr[0];
        result[1] = arr[arr.length / 2 - 0.5];
        result[2] = arr[arr.length - 1];
    }

    return result;
    
}

var a = [1, 2, 3, 4];
console.log(arrElements(a));


/*
12. Write a function to find the average of N elements. Make the function flexible 
to receive dynamic number or parameters.
*/

function average() {
    var sum = 0;

    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return sum / arguments.length;
    
}

console.log(average(1, 2, 4));


/*
13. Write a function to find all the numbers greater than the average.
*/

function greaterThanAverage(arr) {
    var sum = 0;
    var aver;
    var result = [];

    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    aver = sum / arr.length;
    
    for(var j = 0; j < arr.length; j++){
        if(arr[j] > aver){
            result[result.length] = arr[j];
        }
    }

    return result;  
}

var a = [1, 2, 3, 4, 5, 6, 7];
console.log(greaterThanAverage(a));

/*
14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). 
Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40
*/

function _BMI(weight, height) {
    var _BMI;
    var result = "";

    _BMI = weight / (height * height);

    if( _BMI < 15){
        result = "Starvation";
    } else if (_BMI >= 15 && _BMI < 17.5){
        result = "Anorexic";
    } else if (_BMI >= 17.5 && _BMI < 18.5){
        result = "Underweight";
    } else if (_BMI >= 18.5 && _BMI < 25){
        result = "Ideal";
    } else if (_BMI >= 25 && _BMI < 30){
        result = "Overweight";
    } else if (_BMI >= 30 && _BMI < 40){
        result = "Obese";
    } else if (_BMI > 40){
        result = "Morbidly obese";
    }

    else{
        result = "Error input"; 
    }

    return result;
    
}

var a = 75;
var b = 1.81;
console.log(_BMI(a, b));


/*
15. Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

/*
var arr = ["Hello", "World", "in", "a", "frame"];
var letter = 0;
var result = "";
var space = " ";


for(var i = 0; i < arr.length; i++){

    if(arr[i].length > letter){
        letter = arr[i].length;
    }

}

for(var j = 1; j <= arr.length + 2; j++){
    
    if(j === 1 || j === arr.length + 2){

        for(var k = 0; k < letter + 4; k++){
            result += "*";
        }
        result += "\n";
    }
    else{

            if(arr[j -2].length === letter){
                result += "* " + arr[j - 2] + " *\n";
            }
            else{

                for( var s = 1; s < letter - arr[j -2].length;s++){

                    result += "*";
                }
                result += "\n";
                
                
            }
    }
  
}

console.log(result);
*/




