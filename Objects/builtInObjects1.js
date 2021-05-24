
/*
1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
*/

// First way to solve task 1:

var arr = [2, 4, 7, 11, -2, 1];

function concatElemetOfArray(array) {
    var newArr1 = [];

    for (var i = 0; i < array.length; i++) {

        newArr1 = newArr1.concat(array[i]);

    }

    console.log(newArr1);
}

(function creteDuplicateElementOfArray(array, fun) {

    var duplicateElementToArray = function (item, index, array) {
        return [item, item];
    }

    var newArr = [];

    newArr = array.map(duplicateElementToArray);

    // [[2,2], [4,4] ....]

    fun(newArr);

})(arr, concatElemetOfArray);


// Second way to solve task 1:

var arr = [2, 4, 7, 11, -2, 1];

var duplicateElementToArray = function (item, index, array) {
    return [item, item];
}

var newArr = arr.map(duplicateElementToArray);

// newArr = [[2,2], [4,4]....]

var newArr1 = newArr.reduce(function (acumulator, currentValue, currentIndex, array) {

    return acumulator.concat(currentValue);

})

console.log(newArr1);


// Third way to solve task1

var arr = [2, 4, 7, 11, -2, 1];

var duplicateElementToArray = function (item, index, array) {
    return [item, item];
}

var newArr = arr.map(duplicateElementToArray).reduce(function (acumulator, currentValue, currentIndex, array) {

    return acumulator.concat(currentValue);

});

console.log(newArr);



/*
2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
*/

var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

(function removeDuplicateElementOfArray(array) {
    var filteredArr = [];

    //Callback function for filter builtin function

    var filterCriteria = function (value, index, array) {
        return index === array.indexOf(value);
    }

    filteredArr = arr.filter(filterCriteria);

    filteredArr.sort(function (a, b) {
        return a - b;
    });

    console.log(filteredArr);

})(arr);


/*
3.

a) Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true

b)Write a function that counts the number of elements less than the middle element. If the given array 
has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4

*/

// a)

var arr = [1, 2, 9, 2, 1];

var lastIndex = arr.length % 2 !== 0;

console.log(lastIndex);

// b)

var arr = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

function elementsLessThanMiddleElement(array) {

    var filterCriteria = function (value, index, array) {

        return value < middleElement;
    }

    var middleElement = array[(array.length / 2) - 0.5];

    var sortArr = array.filter(filterCriteria);

    console.log(sortArr.length);
}

elementsLessThanMiddleElement(arr);



/*
4. Write a function that finds the smallest element of a given array. The function should return an object that contains 
the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }
*/

var arr = [1, 4, -2, 11, 8, 1, -2, 3];
(
    function createObjectWidthPropertyOfMinElementOfArrayAndTheirIndex(array) {

        //Constructor function for object
        function ObjectWithMinElementAndIndex(minElement, indexOfMinElement) {
            this.minElement = minElement;
            this.indexOfMinElement = indexOfMinElement;
        }

        // Variables in function scope
        var minElement;
        var indexOfMinElement;
        var object;

        //Use Math function for find a min element of array
        minElement = Math.min(...array);

        // Use lastIndexOf function to find last index of minElement
        indexOfMinElement = array.lastIndexOf(minElement);

        object = new ObjectWithMinElementAndIndex(minElement, indexOfMinElement);

        console.log(object);

    })(arr);


/*
5.

a)  Write a function that finds all the elements in a given array less than a given element.
    Input: [2, 3, 8, -2, 11, 4], 6
    Output: [2, 3, -2, 4]

b)  Write a function that finds all the elements in a given array that start with the “pro” substring. 
    The function should be case insensitive.
    Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
    Output: [’Programming’, ‘product’]
*/

// a)

var arr = [2, 3, 8, -2, 11, 4];
var givenElement = 6;

(function findAElementLessThanGivenElement(array, givenElement) {
    // CallBack function for filter function
    var criteria = function (value, index, array) {

        return value < givenElement;
    }
    // Variabla that contain filtered array elements
    var newArr = array.filter(criteria);

    console.log(newArr);

})(arr, givenElement);


// b)

var arr = ["JavaScript", "Programming", "fun", "product"];
var string = "Pro";

(function findElementThatStartWithString(array, string) {

    // Function for filter criteria function
    var filterCriteria = function (value, index, array) {
        return value.startsWith(stringWidthUpercaseFirstLetter) || value.startsWith(stringWidthLowercaseFirstLetter);
    }

    // Create a strings with uppercase and lowercas first letter
    var stringWidthUpercaseFirstLetter = string.charAt(0).toUpperCase() + string.slice(1);
    var stringWidthLowercaseFirstLetter = string.charAt(0).toLowerCase() + string.slice(1);

    var newArr = array.filter(filterCriteria);

    console.log(newArr);
})(arr, string);

// c)


/*
6. 
a) Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
    [
    {name: ‘apples’, price: 100}, 
    {name: ‘milk’, price: 80}, 
    {name:’bananas’, price: 150}
    ]

b) Write a function that calculates the total price of your shopping list. 
c) Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
d) Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 
*/

// a)

// Constructor function for create product object
function Product(name, price) {
    this.productName = name;
    this.price = price;
}

// Create three object using constructor function
var product1 = new Product("apples", 100);
var product2 = new Product("milk", 80);
var product3 = new Product("bananas", 150);

// Creat array that contain product objects with name and price propertys
var listOfProducts = (function createLIst() {
    var list = [];

    list[list.length] = arguments;

    return list;
})(product1, product2, product3);

console.log(listOfProducts);


// b)

var listOfProduct1 = [{ name: "apples", price: 100, }, { name: "milk", price: 80, }, { name: "bananas", price: 150, }];

(function calculateTotalPriceOfProducts(array) {

    var listOfPrice = [];

    for (var i = 0; i < array.length; i++) {
        listOfPrice.push(array[i].price);
    }

    var totalPrice = listOfPrice.reduce(function (acumulator, currentValue) {
        return acumulator + currentValue;
    })

    console.log(totalPrice);

})(listOfProduct1);


// c) 

var listOfProduct1 = [{ name: "apples", price: 100, }, { name: "milk", price: 80, }, { name: "bananas", price: 150, }];

(function (array) {

    var listOfPrice = [];

    for (var i = 0; i < array.length; i++) {
        listOfPrice.push(array[i].price);
    }

    var totalPrice = listOfPrice.reduce(function (acumulator, currentValue) {
        return acumulator + currentValue;
    });

    var averagePrice = totalPrice / array.length;

    console.log(averagePrice);

})(listOfProduct1);

//d

var listOfProduct1 = [{ name: "apples", price: 100, }, { name: "milk", price: 80, }, { name: "bananas", price: 150, }];

(function findAMostExpensiveProduct(array) {
    var maxPrice = 0;
    var theExpensiveProduct = [];

    var filterCriteria = function (value, index, array) {
        return value.price === maxPrice;
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i].price > maxPrice) {
            maxPrice = array[i].price;
        }
    }

    theExpensiveProduct = listOfProduct1.filter(filterCriteria);

    console.log(theExpensiveProduct[0].name.toUpperCase());

})(listOfProduct1);


/*
7. 
a) Write a function that checks if a given string is written in all capitals.
b) Write a function that checks if a given string contains any digits.
c) Write a function that checks if a given string is a valid hexadecimal color.
d) Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
e) Write a function named validator that returns an object with properties stringValidator, passwordValidator, 
colorValidator, and yearValidator referencing the functions from a) to d).
*/

// a)

var string = "BANNANAS";

(function checkString(string) {
    console.log(string === string.toUpperCase())
})(string);


// b)

var string = "Bananas";

// Convert string to array
var array = [...string];

//Function who check digits in string
(function checkDigitsInString(array) {

    var filterCriteria = function (value, index, array) {
        return parseFloat(value);
    }

    var arrayWidthDigits = array.filter(filterCriteria);

    console.log(arrayWidthDigits.length > 0);

})(array);


// d)

var number = 2015;

(function checkNumber(num) {
    var chechPoint;

    chechPoint = num >= 1900 && num <= 2018;

    console.log(chechPoint);

})(number);



/*
8.
Write a function that calculates a number of days to your birthday.
Input: 25 February 
Output: 5 days
*/

function calculateDaysBetwinBirthdayAndToday(birday,) {
    var today = new Date();
    var birday = new Date(birday);

    // Time in miliseconds since start calculating time to birday
    var timeSinceBigins2 = birday.getTime();

    // Time in miliseconds since start calculating time to today
    var timeSinceBigins1 = today.getTime();

    // Milisecondt in one day
    var milisecondPerDay = 86400000;

    // Time in days since start calculating time to birday
    var timeSineBigins2InDays = timeSinceBigins2 / milisecondPerDay;

    // Time in days since start calculating time to today
    var timeSineBigins1InDays = timeSinceBigins1 / milisecondPerDay;

    //Diference in days between birday and today
    var diferenceInDays = timeSineBigins2InDays - timeSineBigins1InDays;

    console.log(diferenceInDays.toFixed(0));
}

calculateDaysBetwinBirthdayAndToday("05/24/2021");


/*
9. Write a function that for a given departure and arrival time calculates the time the trip takes.
    Input: 8:22:13 11:43:22
    Output: 3 hours 21 minutes 9 seconds
*/

var time1 = "8:22:13";
var time2 = "11:43:22";

function calculateTimeBetweenTime2AndTime1(time1, time2) {
    var time1Elements;
    var time2Elements;
    var differenceBetweenHours;
    var differenceBetweenMinutes;
    var differenceBetweenSeconds;
    var differenceArray = [];
    var hour;
    var minutes;
    var seconds;
    var result;

    // Change string elements to array elements
    time1Elements = time1.split(":");
    time2Elements = time2.split(":");

    // Calculate difference between array elements
    differenceBetweenHours = time2Elements[0] - time1Elements[0];
    differenceBetweenMinutes = time2Elements[1] - time1Elements[1];
    differenceBetweenSeconds = time2Elements[2] - time1Elements[2];

    // Save value in new array
    differenceArray = [differenceBetweenHours, differenceBetweenMinutes, differenceBetweenSeconds];


    hour = parseInt(differenceArray[0]);
    minutes = parseInt(differenceArray[1]);
    seconds = parseInt(differenceArray[2]);

    // Check relation between seconds, minutes and hours
    if (seconds < 0) {
        seconds = 60 + seconds;
        minutes--;
    }
    if (minutes < 0) {
        minutes = 60 + minutes;
        hour--;
    }

    result = hour + ":" + minutes + ":" + seconds;

    console.log(result);
}

calculateTimeBetweenTime2AndTime1(time1, time2);


/*
10.
a) Write a constructor function that creates points in space. Each point in space has 
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.


b) Write a function that calculates the distance between two points in the space.

*/

var point1 = [3, 5, 1];
var point2 = [5, 3, 4];

function distanceBetweenTwoPoints(arr1, arr2) {
    //Constructor function for creating points
    function Point(posX, posY, posZ) {
        this.x = posX;
        this.y = posY;
        this.z = posZ;
    }

    // Use try and catch for check type of input for cordinates
    try {

        if (typeof (arr1[0]) === "number" && typeof (arr1[1]) === "number" && typeof (arr1[2]) === "number" && typeof (arr2[0]) === "number" && typeof (arr2[1]) === "number" && typeof (arr2[2]) === "number") {

            // Create two points for calculating length
            var point1 = new Point(arr1[0], arr1[1], arr1[2]);
            var point2 = new Point(arr2[0], arr2[1], arr2[2]);

            var xDifference = Math.abs(point1.y - point2.y);
            var zDifference = Math.abs(point1.z - point2.z);
            var yDifference = Math.abs(point1.y - point2.y);

            var a = Math.sqrt(xDifference ** 2 + yDifference ** 2);

            var result = Math.sqrt(a ** 2 + zDifference ** 2).toFixed(2);

            return result;
        }
        else {
            throw new Error("Cordinates for points isn't number.");
        }

    } catch (error) {
        console.log(error.message);
    }
}

var distance = distanceBetweenTwoPoints(point1, point2)

console.log(distance);


/*
11.
a) Write a function that generates a random integer value between 5 and 20.
b) Write a function that generates a random integer value between 50 and 100. 
c) Write a function which expects a number and a callback generator function 
   and returns an array of numbers produced by the generator function.  
*/

// a), b)
function generateNumberBetween0And100(max, min) {
    var random = Math.floor((Math.random() * max) + min);

    if (random > max) {
        random = min + Math.floor((0.05 * random));
    }
    else {
        random = random;
    }

    try {
        if (random > max) {
            throw new Error("Uhvatio je veci broj");
        }
    } catch (error) {
        console.log(error.message);
    }

    return random;
}

console.log(generateNumberBetween0And100(50, 20));

// c)

function generateRandomNumber(min, max, numberOfArrayElements) {
    var elements = [];
    function generateNumberBetween0And100(max, min) {
        var random = Math.floor((Math.random() * max) + min);
    
        if (random > max) {
            random = min + Math.floor((0.05 * random));
        }
        else {
            random = random;
        }
    
        try {
            if (random > max) {
                throw new Error("Uhvatio je veci broj");
            }
        } catch (error) {
            console.log(error.message);
        }
    
        return random;
    }

    for (var i = 0; i <= numberOfArrayElements; i++) {
        elements[elements.length] = generateNumberBetween0And100(max, min);
    }

    console.log(elements);
}

generateRandomNumber(40, 80, 20);










