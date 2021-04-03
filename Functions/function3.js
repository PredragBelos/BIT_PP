// This file contain exercise from function3.

/*
Write a program to insert a string within a string at a particular 
position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/

function stringInString(string1, string2, positionElement) {
    var string3 = "";

    for (var i = 0; i < string1.length; i++){
        if (i !== positionElement){
    
            string3 += string1[i];
            
        }
        else if(i === positionElement) {
    
            string3 += string2 + string1[i];
    
        }
       
      
    }

    return string3;

}

var a = "My random string";
var b = "JS ";
var c = 10;
var result = stringInString(a,b,c);
console.log(result);

/*
2. Write a program to join all elements of the array into a 
string skipping elements that are undefined, null, NaN or 
Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]

*/

// var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

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

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
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

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(trueArray(array));

/*
4. Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number
*/

function reversesNumber(number) {
    var b = "" + number;
    var result ="";

    for (var i = (b.length-1); i >=0; i--){
        result += b[i];
    }

    return parseInt(result);

}

var a = 456789;
console.log(reversesNumber(a));


/*
5. Write a function to get the last element of an array. Passing a 
parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2] 
*/

function lastElement(array, n) {

    var result = [];

    if(n === undefined){
        result[result.length] = array[array.length - 1]; 
    }
    else{
    
        for (var i = array.length - n; i < array.length; i++){
            
            result[result.length] = array[i];
        
        }
    }

    return result;
    
}

var a = [7, 9, 0, -2];
var b = 3;
console.log(lastElement(a, b));


/*
Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] 
*/

function numberOfElement(numberOfElements,element) {
    var result = [];

    for(var i = 0; i < numberOfElements; i++){
        if (element !== undefined){ 
            result[i] = element;
        }
        else{
        result[i] = null;
        }
    }

    return result;

}

console.log(numberOfElement(4, "D"));


/*
7. Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.


Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal
to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the 
number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half
the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The 
next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/

function perfectNumber(number) {
    var array = [];
    var sum = 0;
    var result = 0;

    for (var i = 1; i <= number; i++){

        if (number % i === 0){
            array[array.length] = i;
        }
    }
    
    for (var j = 0; j < array.length; j++ ){
    
        sum += array[j];
    }
    
    result = sum / 2;

    return number === result;
}

var a = 8128;
console.log(perfectNumber(a));


/*
8. Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/






/*
9. Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"
*/

function email(email) {
    var result = "";
    var index = 0;

    for(var i = 0; i < email.length; i++){
        switch (i) {
            case 0:
                result += email[i];
                break   
            case 1:
                result += email[i];
                break
            case 2:
                result += email[i] + "...";
                break
            
        }
    
        if(email[i] === "@"){
            result += email[i];
            index = i;
    
        } 
    }
    
    for(var j = index + 1; j < email.length; j++){
        result += email[j];
    }

    return result;

}

var a = "predragbelos@gmail.com";
console.log(email(a));


/*
10. Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

*/

var b = ["jabuka", "kruska"];
var a = ["jabuka", "kruska", "sljiva", "jabuka", "kruska", "kruska"];

var ind = 0;
var c = [];


for(var i = 0; i < b.length; i++){
    
    for( var j = 0; j < a.length; j++){ 
       
        if( b[i] === a[j]){

            ind += 1;
            
        }
        else{
            
        }
        
    }
    c[c.length] = ind;
    
    ind = 0;
    
}

console.log(c);
console.log(b)
var maxelement = c[0];
var index;

for(var k = 0; k < c.length; k++){

    if(c[k] >= maxelement){
        maxelement = c[k];
        
        
    }
}
console.log(maxelement, k);









