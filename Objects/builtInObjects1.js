
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

(function checkNumber(num){
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


