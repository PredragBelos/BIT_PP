
/*
1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd” 
Output: true


Input: “1bser9re”
Output: false
*/

function isDigit(letter) {
    return letter === controlDigit;
}

function contain5(string, action) {

    var result = false;

    for (var i = 0; i < string.length; i++) {

        if (action(string[i])) {
            result = true;
            break;
        }
    }

    console.log(result);
}

var string = "1b895abd";
var inputDigit = "b";
var controlDigit = inputDigit;

contain5(string, isDigit);

/*
2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”
*/

var string = "Programming in JS is super JS interesting!"

function convertJSstring(string) {
    var result = "";
    var positionJ = [];
    var a = 0;

    for (var i = 0; i < string.length; i++) {

        if (string[i - 1] === " ") {
            if (string[i] === "J") {
                if (string[i + 1] === "S") {
                    if (string[i + 2] === " ") {
                        positionJ[positionJ.length] = i;
                    }

                }
            }
        }

    }

    for (var j = 0; j < string.length; j++) {
        if (a / 1 === a && j === positionJ[a]) {
            result += "**";
            j++;
            a++;
        }
        else {
            result += string[j];
        }

    }

    console.log(result);

}

convertJSstring(string);

/*
3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” 
*/

(
    function insertString(string, position, letter) {
        var newString = "";

        for (var i = 0; i < string.length; i++) {
            if (i === position - 1) {
                newString += letter;
                newString += string[i];
            }
            else {
                newString += string[i];
            }
        }

        console.log(newString);

    })("Goo morning", 4, "d");


/*
4. Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!” 
*/

(
    function deleteLetter(string, position) {
        var newString = "";

        for (var i = 0; i < string.length; i++) {
            if (i === position) {
                newString += "";
            }
            else {
                newString += string[i];
            }
        }

        console.log(newString);

    })("Goodd morning!", 3);


/*
5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]
*/

var array = [3, 5, 1, 8, 90, -4, 23, 1, 67];

(
    function seconElementOfArray(array) {
        var newArray = [];

        for (var i = 0; i < array.length; i += 2) {
            newArray[newArray.length] = array[i];
        }

        console.log(newArray);

    })(array);


/*
6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
*/

var startIndex = 2;
var endIndex = 6;
var array = [3, 5, 1, 8, 90, -4, 23, 1, 67];

(
    function replaceArrayElement(array, startIndex, endIndex) {

        function doubleValues(value) {
            return value * 2;
        }

        var newArray = [];

        for (var i = 0; i < array.length; i++) {
            if (i < startIndex || i > endIndex) {
                newArray[newArray.length] = array[i];
            }
            else {
                newArray[newArray.length] = doubleValues(array[i]);
            }
        }

        console.log(newArray);

    }
)(array, startIndex, endIndex);


/*
8. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
*/

var inspectArray = [3, 4, 1, 3];
var checkedArray = [8, 9, 3, 1, 11, 4, 3];
var controlArray;

function createControlArray(inspectArray, checkedArray) {
    var controlArray = [];

    for (var i = 0; i < inspectArray.length; i++) {
        for (var j = 0; j < checkedArray.length; j++) {
            if (inspectArray[i] === checkedArray[j]) {
                controlArray[controlArray.length] = true;
                break;
            }
        }
    }

    return controlArray;
}

controlArray = createControlArray(inspectArray, checkedArray);

(
    function (inspectArray, controlArray) {

        if (controlArray.length === inspectArray.length) {
            console.log(true);
        }
        else {
            console.log(false);
        }

    }
)(inspectArray, controlArray);


/*
9. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
*/

var array = ["apple", "tea", "amazing", "morning", "JavaScript"];
var numberOfLetter = [];
var count = 0;

for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        if (array[i][j] === "a") {
            count++;
        }
    }
    numberOfLetter[numberOfLetter.length] = count;
    count = 0;

}

console.log(numberOfLetter);


/*
10. Write a function that prints out the date of the next day. 
Output:  25. 10. 2018. 
*/

var date = "24.10.2018.";
var nextDay = "";
var day = "";
var month = "";
var year = "";

function convertStringToNumber(string) {
    return parseInt(string);
}

for (var i = 0; i < date.length; i++) {
    if (i === 0 || i === 1) {
        day += date[i];
    }
    else if (i === 3 || i === 4) {
        month += date[i];
    }
    else if (i === 6 || i === 7 || i === 8 || i === 9) {
        year += date[i];
    }
}

day = convertStringToNumber(day);
month = convertStringToNumber(month);
year = convertStringToNumber(year);

day++;

console.log(nextDay = day + "." + month + "." + year + ".");


/*
11. Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018.
*/

var date = "24.10.2018.";
var nextDay = "";
var day = "";
var month = "";
var year = "";

function convertStringToNumber(string) {
    return parseInt(string);
}

for (var i = 0; i < date.length; i++) {
    if (i === 0 || i === 1) {
        day += date[i];
    }
    else if (i === 3 || i === 4) {
        month += date[i];
    }
    else if (i === 6 || i === 7 || i === 8 || i === 9) {
        year += date[i];
    }
}

day = convertStringToNumber(day);
month = convertStringToNumber(month);
year = convertStringToNumber(year);

day--;

console.log(nextDay = day + "." + month + "." + year + ".");

/*
12. 

Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]

Output: 78 
       111  
         4 
      4321
*/

var array = [78, 111, 4, 4321];

(
function alignedRightArrayElements(array) {

    var maxWidth;
    var result = "";

    function maxLetterInArray(array) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i].toString(10);
            if (array[i].length > count) {
                count = array[i].length;
            }
        }
        return count;
    }

    function emptySpace(maxWidth, string) {
        var eSpace = "";
        for (var k = 0; k < maxWidth - string.length; k++) {
            eSpace += " ";
        }
        return eSpace;
    }

    maxWidth = maxLetterInArray(array);

    for (var i = 0; i < array.length; i++) {
        array[i].toString(10);
        result += emptySpace(maxWidth, array[i].toString(10)) + array[i] + "\n";
    }

    console.log(result);
})(array);








