/*
1. Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

function createString(array) {

    function emptyStrings(arrMember) {
        var emtyString = ""; 
    
        for(var i = 1; i <= maxWordLength - arrMember.length; i++){
            emtyString += " ";
        }
        return emtyString; 
    }

    var maxWordLength = 0;
    var starLength;
    var firstAndLastString = "";
    var midleString = "";
    
    // Pronaci rec u nizu sa maksimalnim brojem karaktera i upisati broj karaktera u toj reci
    for(var i = 0; i < array.length; i++){
        if(array[i].length > maxWordLength){
            maxWordLength = array[i].length;
        }
    }

    // Definisati broj karaktera u prvom i poslednjem redu
    starLength = maxWordLength + 4;

    // Kreirati string za prvi i poslednji red
    for(var j = 1; j <= starLength; j++){
        firstAndLastString += "*";
    }

    firstAndLastString +="\n";
    // Kreirati string koji ce popuniti redove izmedju prvog i poslednjeg
    for(var k = 0; k < array.length; k++){
        midleString += "* " + array[k] + emptyStrings(array[k]) + " *\n";
    }

    // Kreirati konacan rezultat

    return firstAndLastString + midleString + firstAndLastString;
    
}

var a = ["Hello", "World", "in", "a", "frame"];
console.log(createString(a));



//_________________________________________________________________________________________________

// FUNKCIJA U DRUGACIJEM OBLIKU(Upotreba varijabli kao anonimnih funkcija)

function createString(array) {
    
    function emptyStrings(arrMember) {
        var emtyString = ""; 
    
        for(var i = 1; i <= maxWordLength - arrMember.length; i++){
            emtyString += " ";
        }
        return emtyString; 
    }

    var maxWordLength = 0;
    var firstAndLastString = "";

    // Deklarisanje varijable kao anonimne funkcije
    var starLength = function () {
        for(var i = 0; i < array.length; i++){
            if(array[i].length > maxWordLength){
                maxWordLength = array[i].length;
            }
        }
        return maxWordLength + 4;
    }

    // Kreirati string za prvi i poslednji red
    for(var j = 1; j <= starLength(); j++){
        firstAndLastString += "*";
    }

    firstAndLastString +="\n";

    // Deklarisanje varijable kao anonimne funkcije
    
    var midleString = function () {
        var result = "";

        for(var k = 0; k < array.length; k++){
            result += "* " + array[k] + emptyStrings(array[k]) + " *\n";
        }
        return result; 
    }
      
    // Kreirati konacan rezultat
    return console.log(firstAndLastString + midleString() + firstAndLastString);
    
}

var a = ["Hello", "World", "in", "a", "frame"];
console.log(createString(a));



/*
2. Make program that will show report about BMI for a patient (Usage of function literal notation and example of immediate function).
*/

var mass = function (pressure, index) {
    return pressure * index;  
}

var patient = ["Petar", "Petrovic", 123456, 1506985840023];

// This values are taken from the scale
var heightFromInstrument = 1.8;
var pressure = 3.48;
var index = 20;

// Device will start when patient steps on scale
(
function report() {
    var bmi;
    var result = "";

    bmi = mass(pressure, index) / (heightFromInstrument * heightFromInstrument);

    result += "REPORT ABOUT BMI: \n" + patient[0] + " " + patient[1] + "\n" + "Carton number: " + patient[2] + "\n" + "JMBG: " + patient[3] + "\n" + "Have a index body mass: " + bmi.toFixed(2);

    return console.log(result);
  
}
)();
