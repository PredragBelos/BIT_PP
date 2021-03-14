
// Exercise for loops 2

/*
1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

var a = [5, -4.2, 3, 7];
var e = 1;

switch (e) {
    case a[0]:
        console.log("yes");
        break;
    case a[1]:
        console.log("yes");
        break;
    case a[2]:
        console.log("yes");
        break;
    case a[3]:
        console.log("yes");
        break;

    default:
        console.log("no");
        break;
}


// Second way to solve this task is with loop

var a = [5, -4.2, 3, 7];
var e = 8;
var match;

for ( var i = 0; i < a.length; i++) {

    if (a[i] === e) {
        match = true;
    }
   
}

if (match === true) {

    console.log("yes");
}
else {
    console.log("no");
}


/*
2. Write a program that multiplies every positive element of 
a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

var a = [-3, 11, 5, 3.4, -8];

for (var i = 0; i < a.length; i++) {

    if (a[i] > 0) {
        
        a[i] = a[i] * 2;

    }
    else {
        a[i] = a[i];
    }

}

console.log(a);


/*
3. Write a program that finds the minimum of a given array and
prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var a = [4, 2, 2, -1, 6];
var minElement = a[0];
var elementIndex;

for ( var i = 0; i < a.length; i++) {

    if (a[i] <= minElement) {

        minElement = a[i];
        elementIndex = i;
    }
}

console.log("Value min. element of array is : " + minElement);
console.log("Index min. element of array is : " + elementIndex);


/*
4. Write a program that finds the first element larger than 
minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var a = [4, 2, 2, -2, 6];
var minElement = a[0];


for ( var i = 0; i < a.length; i++) {

    if (a[i] <= minElement) {

        minElement = a[i];
    }
}

var secondElement = a[0]; 

for (var j = 0; j < a.length; j++) {

    if (a[j] < secondElement && a[j] !== minElement){

        secondElement = a[j];
    }
}

console.log(secondElement);




/* 5. Write a program that calculates the sum of positive 
elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

var a = [3, 11, -5, -3, 2];
var sumPositiveNumber = 0;

for (var i = 0; i < a.length; i++) {

    if (a[i] > 0) {

        sumPositiveNumber += a[i];
    }

}

console.log(sumPositiveNumber);


/*
6. Write a program that checks if a given array is symmetric. 
An array is symmetric if it can be read the same way both from 
the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
*/

var a = [6, 2, 4, -2, 7, -2, 4, 2, 7];
var middleIndex = (a.length / 2) - 0.5;
var typeOfArray;

if (a.length % 2 === 0) {

    console.log("The array is not symmetric.")
}
else {

    for (var i = 1; i <= middleIndex; i++){

        if (a[middleIndex - i] !== a[middleIndex + i]) {
            typeOfArray = true;
        }
    }

    if (typeOfArray === true) {
        console.log("The array is not symmetric.")
    }
    else {
        console.log("The array is symmetric.")
    }

}


/*
7. Write a program that intertwines two arrays. You can assume 
the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var j = 0;


for (var i = 0; i < a.length; i++) {

    c[j] = a[i];
    c[j + 1] = b[i];
    j+=2;

}

console.log(c);


/*
8. Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var j = 0;


for (var i = 0; i < a.length; i++) {

    c[j] = a[i];
    c[j + a.length] = b[i];
    j++;

}

console.log(c);

// If lenght of array isn't equals

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9, 15];
var c = [];
var j = 0;

for (var i = 0; i < a.length; i++) {

    c[j] = a[i];
    j++;
}

j = a.length;

for (var k = 0; k < b.length; k++) {

    c[j] = b[k];
    j++;
}

console.log(c);


/*
9. Write a program that deletes a given element e from 
the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var b = [];
var j = 0;

for (var i = 0; i < a.length; i++) {
    
    if(a[i] === e) {

    }
    else{
        b[j] = a[i];
        j++;
    }
    
}

console.log(b);



/*
10. Write a program that inserts a given element e on the given 
position p in the array a. If the value of the position is greater 
than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

var e = 78;
var p = 5;
var a = [2, -2, 33, 12, 5, 8];
var b = [];
var j = 0;

if(p < a.length) {
    for (var i = 0; i < a.length; i++) {

        if (i === p) {
            b[j] = e;
            b[j + 1] = a[i];
            j+=2;

        }
        else {
            b[j] = a[i];
            j++
        }
    }

    console.log(b);
}
else {
    console.log("p is greter than a array.")
}




