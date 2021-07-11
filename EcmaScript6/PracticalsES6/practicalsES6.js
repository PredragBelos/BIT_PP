

/*
1. Write a function that capitalizes the first letter of each string argument it receives.
    Function arguments: ['hello', 'there', 'ES', 6]
    Output: ['Hello', 'There', 'ES']
*/

let array = ['hello', 'there', 'ES', 6];

let changeFirstLetterOfArrayElements = array => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let string = ``;

        if (typeof array[i] === "string") {

            string += `${array[i].slice(0, 1).toUpperCase()}${array[i].slice(1, array[i].length).toLowerCase()}`;

            result.push(string);
        }
    }
    return result;
}

let newArray = changeFirstLetterOfArrayElements(array);



/*
2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
    Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
    Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
    Output2: [ 24, 20 ] // tax only
*/

let products = [{ name: "Banana", price: 120 }, { name: "Orange", price: 100 }];
let tax = 0.20;

const productsDetailsWithTax = (array, tax) => {
    let result = [];
    
    for (let i = 0; i < array.length; i++) {
        
        result[i] = {...array[i], price: array[i].price * (1 + tax)};
        
    }
    return result;
    
}

let newProducts = productsDetailsWithTax(products, tax);

console.log(newProducts);

const taxs = (array, products) => {
    let result = [];
    for( let i = 0; i < array.length; i++){
        result.push(array[i].price - products[i].price);
    }
    return result;
}

let taxes = taxs(productsDetailsWithTax(products, tax), products);

console.log(taxes);


/*
3. 
    Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1]
*/

let array1 = [4, 6, 11, -9, 2.1];

const increasesArrayElements = (array, number = 1) => {
    return array.map(function(value){
        return value + number;
    }); 
}

let newArray1 = increasesArrayElements(array1, 2);

console.log(newArray1);


/*
4. Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]
*/

let array2 = [6, 11, 9, 0, 3];

const evenElements = array => {
    let result = array.filter(function(value, index, array){
        return value %2 === 0;
    })
    return result;
}

let newArray2 = evenElements(array2);

console.log(newArray2);


/*
5. Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard']
*/

let array3 = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

const elementContainJS = array => {
    result = [];

    array.forEach(element => {
        if(element.includes("js")){
           result.push(element);
        }
        else if (element.includes("JS")){
            result.push(element);
        }
    });
    return result;
}

let newArray3 = elementContainJS(array3);

console.log(newArray3);


/*
6. Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
	Output: [7, 8]
*/

let array4 = [1.6, 11.34, 9.23, 7, 3.11, 8];

const integerElementsOfArray = array => {
    let result = [];

    array.forEach(element => {
        if(element % 1 === 0){
            result.push(element);
        }
    });
    return result;
}

let newArray4 = integerElementsOfArray(array4);

console.log(newArray4);


/*
7. Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
	Output: [45, 553]
*/

let integerWith5 = (...args) => {
    let integerArray = args.filter(element => {
        return element %1 === 0;
    })
    .map(element => {
        return `${element}`;
    })
    .filter(element => {
        return element.includes("5");
    })
    .map(value => {
        return parseInt(value);
    });

    return integerArray;
} 

console.log(integerWith5(23, 11.5, 9, 'abc', 45, 28, 553 ));


/*
8. Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: 1, 2, 5
*/

let array5 = [1.6, 11.34, 29.23, 7, 3.11, 18];

const indexOfElementsGreaterOf10 = array => {
    
    let result = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] > 10){
            result.push(i);
        }
    }
    return result;
}

let newArray5 = indexOfElementsGreaterOf10(array5);

console.log(newArray5);


/*
9. 
- Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
- Write a function that prints out the names of persons older than 25. 
- Write a function that check if there is a person older than 40.
- Write a function that checks if all persons are older than 20.   

*/

let persons = [
    {name: "Pera", age: 30},
    {name: "Milos", age: 35},
    {name: "Jovan", age: 40},
    {name: "Milan", age: 45},
    {name: "Dragan", age: 32},
    {name: "Stefan", age: 25},
    {name: "Nikola", age: 21},
    {name: "Davor", age: 42},
    {name: "Milana", age: 38},
    {name: "Dragana", age: 20},
];

const checkPersonOlderThan25 = array => {

    let result = [];

    array.forEach(element => {
        if(element.age > 25){
            result.push(element.name);
        }
    });
    return result;
}

let personOlderThan25 = checkPersonOlderThan25(persons);

console.log(personOlderThan25);


const checkPersonOlderThan40 = array => {

    let result = [];

    array.forEach(element => {
        if(element.age > 40){
            result.push(element.name);
        }
    });
    return result;
}

let personOlderThan40 = checkPersonOlderThan40(persons);

console.log(personOlderThan40);


const ifAllPersonOlderThan20 = array => {

    let result = true;

    array.forEach(element => {
        if(element.age <= 20){
            result = false;
        }
    });
    return result;
}

let ifPersonsOlderThan20 = ifAllPersonOlderThan20(persons);

console.log(ifPersonsOlderThan20);


/*
10. Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes
*/

let array6 = [3, 11, 9, 5, 6];

const arrayWithPositiveIntegerElements = array => {
    let result = "yes";

    array.forEach(element => {
        if(element % 1 !== 0 || element < 0){
            result = "no";
        }
    });
    return result;
}

console.log(arrayWithPositiveIntegerElements(array6));



/*
11. Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48
*/

let array7 = [2, 8, 3];

const productOfArrayElements = array => {

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return array.reduce(reducer);
    
}

console.log(productOfArrayElements(array7));


/*
12. Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
	Output: 8
*/

let array8 = [2, 7, 3, 8, 5.4];

console.log(Math.max(...array8));


