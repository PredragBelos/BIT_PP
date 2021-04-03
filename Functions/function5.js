// This exercises are for functions

/*
1. Find the min and max element in the following array and switch their places. 
Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function swichMinMax(arr) {
    var minElem = arr[0];
    var maxElem = arr[0];
    var minIndex = 0;
    var maxIndex = 0;

    for(var i = 0, j = 0; i < arr.length, j < arr.length; i++, j++){

        if(arr[i] < minElem){
            minElem = arr[i];
            minIndex = i;
        }
        else if(arr[j] > maxElem){
            maxElem = arr[j];
            maxIndex = j;
        }
    }
    
    arr[minIndex] = maxElem;
    arr[maxIndex] = minElem;

   return arr; 
}

var a = [ 3, 500, 12, 149, 53, 414, 1, 19 ];
console.log(swichMinMax(a));


/*
2. Use the following array to make a new one by dividing its values by two and adding 5. 
If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function changeArr(arr) {
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        if((arr[i] / 2) + 5 === 0){
            newArr[newArr.length] = 20;
        }
        else{
            newArr[newArr.length] = (arr[i] / 2) + 5;
        }
    }
    
    return newArr;
    
}

var a = [ 3, 500, -10, 149, 53, 414, 1, 19 ];
console.log(changeArr(a));


/*
3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. 
Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

function studentsRanges(students, points) {

    for(var i = 0; i < points.length; i++){
        var result = "";
    
        if(points[i] > 50 && points[i] < 61){
            console.log(students[i] + " acquired " + points[i] + " points and earned 6. ");
           
        }
        else if(points[i] > 60 && points[i] < 71){
            console.log(students[i] + " acquired " + points[i] + " points and earned 7. ");
        }
        else if(points[i] > 70 && points[i] < 81){
            console.log(students[i] + " acquired " + points[i] + " points and earned 8. "); 
        }
        else if(points[i] > 80 && points[i] < 91){
            console.log(students[i] + " acquired " + points[i] + " points and earned 9. "); 
        }
        else if(points[i] > 90 && points[i] <= 100){
            console.log(students[i] + " acquired " + points[i] + " points and earned 10. "); 
        }
        else if(points[i] < 50){
            console.log(students[i] + " acquired " + points[i] + " and failed to complete the exam. ");
        }
    }
    return result;
    
}

var a = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var b = [ 50, 39, 63, 72, 99, 51, 83, 59 ];

console.log(studentsRanges(a,b));

/*
6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd 
numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/
var sumEven = 0;

for(var i = 1; i <= 1000; i++){
    if(i % 2 === 0){
        sumEven += i
    }

}

