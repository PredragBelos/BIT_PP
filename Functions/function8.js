
// Task for exercise 7

/*
1. Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4]
*/

var arr = [4, 5, 11, 9];

(
    function () {
        var newArr = []; 
        
        for (var i = 0; i < arr.length; i++){

            if(i === 0){
                newArr[i] = arr[arr.length - 1];
            }

            else if(i === arr.length - 1){
                newArr[arr.length - 1] = arr[0];
            }

            else{
                newArr[i] = arr[i];
            }
          
        }

        console.log(newArr);
        
    }
)();


/*
2. Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 
*/

var a = 4;
var b = 5;

(
function () {
    var surface;

    surface = a * b;

    console.log(surface);  
}
)();


/*
3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2
*/

var a = "prograMming";

(
function (string) {
    var newString = "";
    var count = 0; 

    for(var i = 0; i < string.length; i++){

        if(string[i] === "m" || string[i] === "M"){
            newString += "*";
            count++;
                
        }
        
        else if(string[i] !== "m" || string[i] !== "M"){
            newString += string[i];
        }
            
           
    }

    console.log(newString, ", " ,count);
}
)(a);

/*
4. Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
	Output: pera.peric@gmail.com
*/

var a = "pera";
var b = "peric";

(
function (name, surname) {

    console.log(name + "." + surname + "@gmail.com");
    
}
)(a, b);


/*
5. Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
*/

var octalNumber = 034;

(
function (octalNum) {
    var octalNumberString = "" + octalNumber;

    console.log(octalNumberString);
    
}
)(octalNumber);


/*
6. Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

	Input: JSGuru123
	Output: Your password is cool! 

*/

var password = "JSGuru123";

(
function (pass) {
    var successCallback = "Your password is cool!" ;
    var errorCallback = "Your password is invalid!";
    var letterCount = 0;
    var digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var isDigit = false;

    
    for(var i = 0; i < password.length; i++){
        letterCount++;
    }

    for(var j = 0; j < password.length; j++){
        for(var k = 0; k < digit.length; k++){
            if(digit[k] == password[j]){
                isDigit = true;
                break;
            }
        }
    }

    if(letterCount >= 6 && isDigit === true){
        console.log(successCallback);
    }
    else{
        console.log(errorCallback); 
    }
    
}
)(password);

/*
7. Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/

var arr = [2, 8, 11, 4, 9, 3];

(
function (array) {
    var newArr = [];
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            newArr[newArr.length] = arr[i];
        }
    }
    
    console.log(newArr);

}
)(arr);

