

/*
1. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

    12345 -> 54321
*/

function reverseIniger(num) {
    var result = parseInt(num.toString()
        .split("")
        .reverse()
        .join(""));

    return result;
}

var reverseNumber = reverseIniger(12345);

console.log(reverseNumber);


/* 2. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw”
*/

function strintToAlphabeticalOrder(string) {
    var result = "";

    result = string.toLowerCase()
        .split("")
        .sort()
        .join("");

    return result;
}

var alphaString = strintToAlphabeticalOrder("Webmaster");

console.log(alphaString);


/*
3. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
    "Republic Of Serbia" -> "Rbceilpu Of Sabeir"
*/

function strintToAlphabeticalOrder(string) {
    var result;

    result = string
        .split("")
        .sort()
        .join("");

    return result;
}

function alphabetFirstAndLastWord(string, action) {
    var array = [];
    var firstWord;
    var lasttWord;
    var result;

    array = string.split(" ");

    firstWord = action(array[0]);
    lasttWord = action(array[2]);

    array[0] = firstWord;
    array[2] = lasttWord;

    result = array.join(" ");

    return result;
}

var result = alphabetFirstAndLastWord("Republic Of Serbia", strintToAlphabeticalOrder);

console.log(result);


/*
4. Write a function to split a string and convert it into an array of words.

    "John Snow" -> [ 'John', 'Snow' ]
*/

function splitStringToArray(string) {
    var result = [];

    result = string.split(" ");

    return result;
}

var result = splitStringToArray("John Snow");

console.log(result);


/*
5. Write a function to convert a string to its abbreviated form. 

    "John Snow" -> 	"John S."
*/

function abbreviatedForm(string) {
    var arr = [];
    var lasttWord;
    var result;

    arr = string.split(" ");

    lasttWord = arr[1].slice(0, 1) + ".";

    result = arr[0] + " " + lasttWord;

    return result;
}

var result = abbreviatedForm("John Snow");

console.log(result);


/*
6. Write a function that adds string to the left or right of string, by replacing it’s characters.

    '0000', ‘123’, 'l' -> 0123 
'00000000', ‘123’, 'r' -> 12300000
*/

function addStringLeftOrRight(zeros, string, side) {
    var charactersNumber;
    var result = " ";
    var errorMessage = "";

    charactersNumber = zeros.length - string.length;

    try {
        if (charactersNumber <= 0) {
            throw new Error("Input of zeros must be longer than input of string!!!");
        }
    } catch (error) {
        console.log(error.message);
        errorMessage = error.name;
    }

    if (errorMessage === "") {

        if (side === "l") {
            result = zeros.slice(0, charactersNumber) + string;
        }
        else if (side === "r") {
            result = string + zeros.slice(0, charactersNumber);
        }
        else {
            console.log("Wrong letter for side parameter.");
        }
    }

    return result;

}

var result = addStringLeftOrRight("0000", "123", "l");

console.log(result);


/*
7. Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"
*/

function capitalizeTheFirstLetter(string) {
    var secondPartOfString;
    var firstLetter;
    var result;

    secondPartOfString = string.slice(1);
    firstLetter = string.slice(0,1).toUpperCase();
    result = firstLetter + secondPartOfString;

    return result;
}

var result = capitalizeTheFirstLetter("js string exercises");

console.log(result);

/*
8. Write a function to hide email addresses to protect them from unauthorized users.

	"somerandomaddress@example.com" -> "somerand...@example.com"
*/

function hideEmailPart(email) {
    var position;
    var firstPart;
    var secondPart;
    var result;

    position = email.indexOf("@");
    firstPart = email.substr(0, Math.floor(position / 2)) + "...";
    secondPart = email.substr(position);
    result = firstPart + secondPart;

    return result;
}

var email = hideEmailPart("somerandomaddress@example.com");

console.log(email);

/*
9. Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';

"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
*/

function lowerCaseFirstLetter(string) {
    var array;
    var result = "";

    array = string.toUpperCase().split(" ");

    for (var i = 0; i < array.length; i++){
        result += array[i][0].toLowerCase() + array[i].slice(1) + " ";
    }

    return result;

}

var result = lowerCaseFirstLetter("The Quick Brown Fox");

console.log(result);
