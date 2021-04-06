
/*
1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

function fortuneTeller(childNum, partner, location, job) {
    return "You will be a " + job + " in " + location + ", and married to " + partner + " with " + childNum + " kids."; 
}

console.log(fortuneTeller(2, "Jelena", "Kikinda", "Engineer"));
console.log(fortuneTeller(1, "Milena", "Novi Sad", "Driver"));
console.log(fortuneTeller(5, "Jovana", "Beograd", "Worker"));


/*
2. You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
    - takes 1 argument: your puppy's age.
    - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
    - outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(dogage, humanage) {
    return "Your doggie is " + (dogage * 7) + " years old in dog years, and " + humanage + " in human age!";
    
}

console.log(calculateDogAge(7, 49));
console.log(calculateDogAge(5, 35));
console.log(calculateDogAge(4, 28));


/*
3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
    - takes 2 arguments: age, amount per day.
    - calculates the amount consumed for rest of the life (based on a constant max age).
    - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function lifetimeSupply(age, amountPerDay) {
    var _NN =parseInt((85 - age) * 365 * amountPerDay);

    return "You will need " + _NN + " to last you until the ripe old age of 85."
    
}

console.log(lifetimeSupply(50, 2.1564));
console.log(lifetimeSupply(30, 1));
console.log(lifetimeSupply(60, 3));


/*
4. It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:
    - Store a celsius temperature into a variable.
    - Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
    - Now store a fahrenheit temperature into a variable.
    - Convert it to celsius and output "NN°F is NN°C."
*/

function centigradeToFahrenheit(centigrade) {

    return (centigrade * (9 / 5)) + 32;
    
}

var a = 0;
console.log(centigradeToFahrenheit(a));


function fahrenhiteToCentigrade(fahrenhite) {

    return ((fahrenhite - 32) * (5 / 9));
    
}

var a = 32;
console.log(fahrenhiteToCentigrade(a));
