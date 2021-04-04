
/*
1. Write a function that converts an array of strings into an array of numbers. 
Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/

function stringToNumber(arr) {
    var result = [];

    for(var i = 0; i < arr.length; i++){

        if(isFinite(arr[i]) === true){
    
            result[result.length] = parseFloat(arr[i]);
        }
    
    }

    return result;  
}

var a = ["1", "21", undefined, "42", "1e+3", Infinity];
console.log(stringToNumber(a));


/*
2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”
*/

function arrayToString(array) {
    var string ="";
    
    for (var i = 0; i < array.length; i++){
    
        if( !isFinite(array[i]) || array[i] === undefined || array[i] === null){
    
        }
        else{
            string += array[i];
        }
 
    }
   
    return string;

}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(arrayToString(a));


/*
3. Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
    Output: [15, -22, 47]
*/

function trueArray(array) {
    var array2 = []; 
    
    for(var i = 0; i < array.length; i++){
        if(!!array[i] === true){
            array2[array2.length] = array[i]; 
        }
        
    }
    
  return array2;  
}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(trueArray(a));


/*
4. Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
*/

function numberOfInteger(arr) {
    var result = 0; 

    for(var i = 0; i < arr.length; i++){

        if(isFinite(arr[i]) && typeof arr[i] === "number" && parseInt(arr[i]) === arr[i]){
    
            result++;
    
        }
    
    }

    return result;
    
}

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
console.log(numberOfInteger(a));


/*
5. Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
*/

function numberOfInteger(arr) {
    var result = 0; 

    for(var i = 0; i < arr.length; i++){

        if(isFinite(arr[i]) && typeof arr[i] === "number" && parseFloat(arr[i]) % 1 !== 0){
    
            result++;
    
        }
    
    }

    return result;
    
}

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
console.log(numberOfInteger(a));


