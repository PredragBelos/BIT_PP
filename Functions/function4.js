// This exercises are for functions

/*
1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

function elementInArr(arr, element) {

    var result = "no";

    for(var i = 0; i < arr.length; i++){

        if(arr[i] === element){
            result = "yes";
        }
        
    }

    return result; 
}

var a = [5, -4.2, 3, 7];
var b = 3;

console.log(elementInArr(a, b));


/*
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function multyPositElement(array) {
    var newarray = [];

    for(var i = 0; i < array.length; i++){

        if(array[i] > 0){
            newarray[newarray.length] = array[i] * 2;
        }
    
        else{
            newarray[newarray.length] = array[i];
        }
    }

    return newarray;
    
}

var a = [-3, 11, 5, 3.4, -8];

console.log(multyPositElement(a));


/*
3. Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function minElement(arr) {
    var minElement = arr[0];
    var index = 0;
    var result = [];

    for (var i = 0; i < arr.length; i++){
        if(arr[i] < minElement){
            minElement = arr[i];
            index = i;
    
        }
    }

    result[0] = minElement;
    result[1] = index;

    return result;
    
}

var a = [4, 2, 2, -1, 6];
console.log(minElement(a));


/*
4. Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

function nextEl(arr) {
    var minEl = arr[0];
    var index;
    var nextEl = arr[0];

    for(var i = 0; i < arr.length; i++){
        if(arr[i] < minEl){
            minEl = arr[i];
            index = i;
        }
    }

    for (var j = 0; j < arr.length; j++){
        if(j !== index){
           
            if(arr[j] < nextEl){
                nextEl = arr[j];
            }
        }
    }

    return nextEl;
    
}

var a = [4, 2, 2, -1, 1];
console.log(nextEl(a));


/*
5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

function sumPositiveEl(arr) {
    
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum;
    
}

var a = [3, 11, -5, -3, 2];
console.log(sumPositiveEl(a));


/*
6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be 
read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
*/

function simentricArray(arr) {

    var result = "The array is symmetric.";
    
    for(var i = 0, j = arr.length - 1; i < j, j > i; i++, j-- ){

        if(arr[i] !== arr[j]){
    
            result = "The array isn’t symmetric."
        }
    }

    return result;
    
}

var a = [2, 4, -2, 7, -2, 4, 2];
console.log(simentricArray(a));


/*
7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function intertwinesArr(arr1, arr2) {
    var newArr = [];
    
    for(var i = 0; i < arr1. length; i++){

        newArr[newArr.length] = arr1[i];
        newArr[newArr.length] = arr2[i];
    }

    return newArr;
    
}

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
console.log(intertwinesArr(a, b));


/*
8. Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatenatesArr(arr1, arr2) {
    var newArr = [];

    for (var i = 0; i < arr1.length; i++){

        newArr[newArr.length] = arr1[i];
    
    }
    
    for(var j = 0; j < arr2.length; j++){
        newArr[newArr.length] = arr2[j];
    }

    return newArr;
}

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9, 10];
console.log(concatenatesArr(a, b));


/*
9. Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function delElement(arr, element) {
    var newArr = [];
    
    for (var i = 0; i < arr.length; i++){

        if(arr[i] !== element){
            newArr[newArr.length] = arr[i];
        }
    
    }

    return newArr;
}

var a = [4, 6, 2, 8, 2, 2];
var b  = 2;
console.log(delElement(a,b));


/*
10. Write a program that inserts a given element e on the given position p in the array a. 
If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
var newArray = [];

for(var i = 0; i < a.length; i++){
    if (i === p){
        newArray[newArray.length] = e;
        newArray[newArray.length] = a[i];
    }
    else{
        newArray[newArray.length] = a[i];
    }
}

console.log(newArray);