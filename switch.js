
/* 1. Write a program that shows text representation of a day in a week for a number 
input from 1 to 7. Print output in console. 
For input 1, output should be “Monday”.
*/

var dayInWeek = 5;

switch (dayInWeek) {
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Cetvrtak");
        break
    case 5:
        console.log("Petak");
        break
    case 6:
        console.log("Subota");
        break
    case 7:
        console.log("Nedelja");
        break  
    default:
        console.log("Uneti podatak ne predstavlja dan u nedelji.");
        break;

}


/* 2. Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.
*/

var dayInWeek1 = 10;

switch (dayInWeek1) {
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Cetvrtak");
        break
    case 5:
        console.log("Petak");
        break
    case 6:
        console.log("Subota");
        break
    case 7:
        console.log("Nedelja");
        break  
    default:
        console.log("Input must be a number between 1 and 7.");
        break;

}

/* 3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
		For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
*/

var dayInWeek2 = 1;

switch (dayInWeek2) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It’s weekday");
        break
    case 6:
    case 7:
        console.log("It’s weekend");
        break  
    default:
        console.log("Input must be a number between 1 and 7.");
        break;

}

/* 4. Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
		For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.
*/

var mount = 10;

switch (mount) {
    case 1:
        console.log("Januar");
        break;
    case 2:
        console.log("Februar");
        break;
    case 3:
        console.log("Mart");
        break;
    case 4:
        console.log("April");
        break
    case 5:
        console.log("Maj");
        break
    case 6:
        console.log("Jun");
        break
    case 7:
        console.log("Jul");
        break  
    case 8:
        console.log("Avgust");
        break;
    case 9:
         console.log("Septembar");
        break
    case 10:
         console.log("Oktobar");
        break
    case 11:
         console.log("Novembar");
        break
    case 12:
         console.log("Decembar");
        break 
    default:
        console.log("Input must be a number between 1 and 12.");
        break;

}

/* 5. Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. 
All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. 
*/

var mount1 = 5;

switch (mount1) {
    case 1:
    case 2:
    case 3:
    case 12:
        console.log("Zima");
        break;
    case 4:
    case 5:
        console.log("Prolece");
        break
    case 6:
    case 7: 
    case 8:
        console.log("Leto");
        break;
    case 9:     
    case 10:    
    case 11:
        console.log("Jesen");
        break;  
    default:
        console.log("Input must be a number between 1 and 12.");
        break;

}

/* 6. Write a program that for a string input of a grade from “A”-“F” 
outputs a proper info message about that grade in the following manner: 
A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", 
F - "Failed". Input different from letters A-F outputs a message "Unknown grade".
*/

var grade = "A";

switch (grade) {
    case "A":
        console.log("Good job");
        break;
    case "B":
        console.log("Pretty good");
        break;
    case "C":
        console.log("Passed");
        break;
    case "D":
        console.log("Not so good");
        break
    case "E":
        console.log("Worse");
        break
    case "F":
        console.log("Failed");
        break
    default:
        console.log("Unknown grade");
        break;

}

/* 7. Write a program that takes as input a city name and outputs the country
 where the city is. You may choose which cities and countries you want to output 
 yourself, however there has to be at least 5 countries and 15 cities. 
 Note that each country must have a different number of cities. 
 Input different from the listed cities should output a message
 "Please choose a different city". */

 var city = "Tivat";

 switch (city) {
    case "Beograd":
    case "Novi Sad":
    case "Kragujevac":
        console.log("Srbija");
        break;
    case "Zagreb":
    case "Split":
    case "Vukovar":
        console.log("Hrvatska");
        break
    case "Skopje":
    case "Gevgelija": 
    case "Ohrid":
        console.log("Makedonija");
        break;
    case "Sarajevo":     
    case "Banja Luka":    
    case "Bjeljina":
        console.log("BIH");
        break;  
    case "Podgorica":     
    case "Tivat":    
    case "Kotor":
        console.log("Crna Gora");
        break;  
    default:
        console.log("Please choose a different city");
        break;

}

/* 8. Write a program that takes as input two numbers and a string denoting 
the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. 
Watch out for division by zero!
*/

var a = 1;
var b = 0;
var operator = "+";

switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break

    default:
        console.log("Data is not operator!");
        break;
}

