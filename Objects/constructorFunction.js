// This exercise is for constructor  functions

/*
1. Create constructor function for creating objects that represents your favourite coffee. Please include coffee name, 
strength, flavour, milk, sugar, … everything you like!
*/

// In this section created constructor functions that create objects of coffee

function Coffee($name, $strength, $flavour, $milkContent, $sugarContent) {
    this.name = $name;
    this.strength = $strength;
    this.flavour = $flavour;
    this.milkContent = $milkContent;
    this.sugarContent = $sugarContent;
}

var turkishCoffee = new Coffee("Turkish", "mild", "oriental", false, 5);
var instantCoffee1 = new Coffee("Nescafe 3 in 1", "strong", "orange", true, 5);
var instantCoffee2 = new Coffee("Nescafe 3 in 1", "normal", "apple ", true, 5);
var instantCoffee3 = new Coffee("Nescafe 3 in 1", "late", "banana", true, 5);
var instantCoffee4 = new Coffee("Nescafe 2 in 1", "late", "banana", false, 5);

console.log(turkishCoffee);
console.log("____________________\n");
console.log(instantCoffee1);
console.log("____________________\n");
console.log(instantCoffee2);
console.log("____________________\n");
console.log(instantCoffee3);
console.log("____________________\n");
console.log(instantCoffee4);


// In this section was created object with method that creates objects inside an object.

// Function who list a menu items

function getMenu(typeOfItems) {
    console.log(typeOfItems);
}

function Coffee($name, $strength, $flavour, $milkContent, $sugarContent) {
    this.name = $name;
    this.strength = $strength;
    this.flavour = $flavour;
    this.milkContent = $milkContent;
    this.sugarContent = $sugarContent;
}

function Drink($name, $price) {
    this.name = $name;
    this.price = $price;
}

var coffees = {

    createCoffees: function (name, strength, flavour, milkContent, sugarContent, objectName) {
        coffees[objectName] = new Coffee(name, strength, flavour, milkContent, sugarContent);
    }
}

var drinks = {

    createDrinks: function (name, price, objectName) {
        drinks[objectName] = new Drink(name, price);
    }
}

// These are coffees that are inserted inside an object named coffees

coffees.createCoffees("Turkish", "mild", "oriental", false, 5, "coffee1");
coffees.createCoffees("Brazilska", "mild", "oriental", false, 5, "coffee2");
coffees.createCoffees("Kubanska", "mild", "oriental", false, 5, "coffee3");

// These are drinks that are inserted inside an object named drinks

drinks.createDrinks("Coca Cole", 150, "drink1");
drinks.createDrinks("Fanta", 130, "drink2");
drinks.createDrinks("Sprite", 140, "drink3");


//There call function that print menu items

console.log("Coffe on menu:");
getMenu(coffees);
console.log("Drinks on menu:");
getMenu(drinks);




/*
2. Create an object that represents your favourite movie. Please include title, 
actors, director, genre, popularity. 
*/

function Movies($title, $actors, $director, $genre, $popularity) {
    this.title = $title;
    this.actors = $actors;
    this.director = $director;
    this.genre = $genre;
    this.popularity = $popularity;
}

var titanic = new Movies("Titanic", ["Leonardo DiCaprio", "Kate Winslet"], "James Cameron", "drama", 10);
var spiderMan = new Movies("Spider-Man", ["Kirsten Dunst", "Tobey Maguire"], "Sam Raimi", "action", 8);

console.log(titanic);
console.log("____________________\n");
console.log(spiderMan);




/*
3. Write a function that creates an object that represents a project. Each project is described by: description,  
programming language, git repository, boolean status that says if the project is in development or not. Add a method 
that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method 
that checks if the project is in development or not.
*/

function Project($description, $language, $gitRepository, $developmentStatus) {
    this.description = $description;
    this.language = $language;
    this.gitRepository = $gitRepository;
    this.developmentStatus = $developmentStatus;

    //metods

    this.projectRepository = function () {
        console.log(this.gitRepository);
    }

    this.isJavaScript = function () {
        if (this.language === "Java Script") {
            console.log("Project was writen in Java Script.")
        }
        else {
            console.log("Project wasn't writen in Java Script.")
        }
    }

    this.isDevelopment = function () {
        if (this.developmentStatus === true) {
            console.log("Project is in development.")
        }
        else {
            console.log("Project isn't in development.")
        }
    }
}

var object = new Project("School suport", "Java Script", "www.gitHub.com", true);

object.projectRepository();
object.isJavaScript();
object.isDevelopment();



/*
4.
Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine,
complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
Add a method that prints out all the ingredients necessary for the meal preparation.
Add a method that checks if a meal can be prepared for 15 minutes.
Add a method that changes the type of cuisine to the given value.
Add a method that delete a given ingredient from the list of ingredients.
*/

function Recipe($name, $cuisine, $complexity, $ingredients, $time, $instructions) {
    this.name = $name;
    this.cuisine = $cuisine;
    this.complexity = $complexity;
    this.ingredients = $ingredients;
    this.preparingTime = $time;
    this.instructions = $instructions;

    this.ingredientsList = function () {
        console.log("Ingredients for this recipe are: " + this.ingredients.join(","));
    }

    this.preparingFor15Minutes = function () {
        if (this.preparingTime <= 15) {
            console.log("Meal can be prepared for 15 minutes.");
        }
        else {
            console.log("Meal can't be prepared for 15 minutes.");
        }
    }

    this.changeCuisine = function (newCuisine) {
        this.cuisine = newCuisine;
    }

    this.removeIngredient = function (ingredientForRemove) {
        var newIngredients = [];
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i] != ingredientForRemove) {
                newIngredients[newIngredients.length] = this.ingredients[i];
            }
        }

        this.ingredients = newIngredients.slice();
    }
}

var applePie = new Recipe("Apple pie", "American", 3, ["water", "eggs", "milk", "flour"], 45, "Pie must put in oven 30 minutes")

console.log(applePie);
console.log("______________________________________________\n");
applePie.ingredientsList();
console.log("______________________________________________\n");
applePie.preparingFor15Minutes();
console.log("______________________________________________\n");
applePie.changeCuisine("German");
applePie.removeIngredient("milk");

console.log(applePie);