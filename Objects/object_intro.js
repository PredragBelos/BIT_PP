/* In this file are exercise for object*/

/*
1. Create an object that represents your favourite coffee. Please include coffee name, 
strength, flavour, milk, sugar, … everything you like!
*/

var coffe = {
    name: "Turkish",
    strength: "midle",
    flavour: "normal",
    milk: "without milk",
    sugar: "width sugar",
}

console.log(coffe.name);


/*
2. Create an object that represents your favourite movie. Please include title, 
actors, director, genre, popularity. 
*/

var movie = {
    title: "Life Is Beautiful",
    actors: ["Roberto Benigni", "Nicoletta Braschi"],
    director: "Gianluigi Braschi",
    genre: "comedy-drama",
    popularity: 7.9,
}

console.log(movie.title);
console.log("Actors: " + movie.actors);


/*
3. Write a function that creates an object that represents a project. Each project is described by: description,  
programming language, git repository, boolean status that says if the project is in development or not. Add a method 
that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method 
that checks if the project is in development or not.
*/

var description = "School reform";
var programLanguage = "Java Script";
var girRepository = "www.github.com";
var developmentStatus = true;

(
    function (desc, lang, repository, status) {
        var project;

        project = {
            description: desc,
            programLanguage: lang,
            gitRepository: repository,
            developmentStatus: status,

            //metods
            projectStructure: function () {
                console.log(desc);
                console.log(lang);
                console.log(repository);
                console.log(status);
            },

            isLanguageJS: function () {
                if (lang === "Java Script") {
                    console.log("Project was writen in Java Script");
                }
                else {
                    console.log("Project was not writen in Java Script");
                }
            },

            developmentStat: function () {
                if (status) {
                    console.log("Project is on the development status");
                }
                else {
                    console.log("Project isn't on the development status");
                }
            }
        }

        //Returns
        console.log("Structure of object Project is:");
        console.log(project);
        console.log("\n");
        console.log("Value who return a method project property are:");
        project.projectStructure();
        console.log("\n");
        console.log("Project language:") + project.isLanguageJS();
        console.log("\n");
        console.log("Project status:") + project.developmentStat();

    }
)(description, programLanguage, girRepository, developmentStatus);

/*
4.
Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine,
complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
Add a method that prints out all the ingredients necessary for the meal preparation.
Add a method that checks if a meal can be prepared for 15 minutes.
Add a method that changes the type of cuisine to the given value.
Add a method that delete a given ingredient from the list of ingredients.
*/

var rName = "Apple pie";
var rType = "Flour food";
var rComplex = 3;
var rIngredients = ["flour", "water", "eggs", "apple"];
var rTime = 45;
var rInstruction = "Bake the pie for exactly 45 minutes";
var cousine = "Japan ciusine";
var ingredientForRemove = "eggs";

(
    function createRecipe($Name, $TypeOfCuisine, $Comlexity, $Ingredients, $PreparingTime, $Instruction, cousine, ingredientForRemove) {

        var recipe;

        recipe = {
            recipeName: $Name,
            typeOfCuisine: $TypeOfCuisine,
            comlexity: $Comlexity,
            ingredients: $Ingredients,
            preparingTime: $PreparingTime,
            instruction: $Instruction,

            //Metods

            ingredientsOfMeal: function () {
                console.log($Ingredients.join(", "));
            },

            prepTime: function () {
                if ($PreparingTime <= 15) {
                    console.log("Meal can be prepared for 15 minuts");
                }
                else {
                    console.log("Meal can't be prepared for 15 minuts");
                }
            },

            changeCousine: function () {
                recipe.typeOfCuisine = cousine;
            },

            removeIngredient: function () {
                var changedArray = [];
                for (var i = 0; i < recipe.ingredients.length; i++) {
                    if (recipe.ingredients[i] != ingredientForRemove) {
                        changedArray[changedArray.length] = recipe.ingredients[i];
                    }
                }

                recipe.ingredients = changedArray;
            },

        }

        console.log(recipe);
        console.log("\n");
        console.log("Meal ingredients:") + recipe.ingredientsOfMeal();
        console.log("\n");
        console.log("Preparing time:") + recipe.prepTime();
        console.log("\n");
        console.log("Cuisine was changed to: " + cousine);
        recipe.changeCousine();
        console.log(recipe);
        console.log("\n");
        console.log("Remove " + ingredientForRemove + " from ingredients");
        recipe.removeIngredient();
        console.log(recipe);
    }
)(rName, rType, rComplex, rIngredients, rTime, rInstruction, cousine, ingredientForRemove)

