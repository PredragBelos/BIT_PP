"use strict";

(function () {

    //Constructor functions

    //GENRE
    function Genre(name) {

        if (!name) {
            throw new Error("Name of genre must be defined.");
        }

        if (typeof name !== "string") {
            throw new Error("Name must be input how string.");
        }

        this.name = name;

        this.getData = function () {
            var result = "";
            result = this.name.slice(0, 1).toUpperCase() + this.name[this.name.length - 1].toUpperCase();
            return result;
        }
    }

    //MOVIE
    function Movie(title, genre, length) {
        if (!title) {
            throw new Error("Title must be defined.");
        }

        if (!genre) {
            throw new Error("Genre must be defined.");
        }

        if (!length) {
            throw new Error("Length of movie must be defined.");
        }

        if (!(genre instanceof Genre)) {
            throw new Error("Genre must be instance of Genre constructor.");
        }

        if (typeof length !== "number") {
            throw new Error("Input for movie length must be type number.");
        }

        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function () {
            var result = "";
            result += this.title + ", " + this.length + " min, " + this.genre.getData();
            return result;
        }
    }

    //PROGRAM
    function Program(date) {

        if (!date) {
            throw new Error("Programs date must be defined.");
        }

        this.date = new Date(date);
        this.listOfMovies = [];

        this.numberOfMovies = function () {
            return this.listOfMovies.length;
        }

        this.addMovie = function (movie) {

            if (!(movie instanceof Movie)) {
                throw new Error("Movie must be instance of Movie constructor.");
            }

            this.listOfMovies.push(movie);
        }

        this.getData = function () {
            var result = "";
            result = this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear() + ", program duration: ";

            var length = 0;
            this.listOfMovies.forEach(function (movie) {
                length += movie.length;
            })
            result += length + " min.\n\t\t";

            for (var i = 0; i < this.listOfMovies.length; i++) {
                if (i != this.listOfMovies.length - 1) {
                    result += this.listOfMovies[i].getData() + "\n\t\t";
                }
                else {
                    result += this.listOfMovies[i].getData() + "\n";
                }
            }
            return result;
        }

    }

    //FESTIVAL
    function Festival(name, maxNumberMovies) {

        if (!name) {
            throw new Error("Name of festival must be defined.");
        }

        if (!maxNumberMovies) {
            throw new Error("Max number of movies on festival must be defined.");
        }

        if ((typeof maxNumberMovies !== "number")) {
            throw new Error("Max number of movies must be a number");
        }

        this.name = name;
        this.listOfPrograms = [];
        this.maxNumberMovies = maxNumberMovies;


        this.numberOfMoviesInFestival = function () {
            var result = 0;
            this.listOfPrograms.forEach(function (programs) {
                result += programs.listOfMovies.length;
            })
            return result;
        }

        this.addProgram = function (program) { 
            if(!(program instanceof Program)){
                throw new Error("Program must be instance of Program constructor")
            }
            this.listOfPrograms.push(program);
        }

        this.listOfPrograms = [];

        this.getData = function () {

            // Checking the total number of films at the festival  
            try {
                if (this.numberOfMoviesInFestival() > this.maxNumberMovies) {
                    throw new Error("List of movie is full. You can't add more films!");
        
                }
            }
            catch (error) {
                console.log(error.message);
                if (error.message !== "") {
                    var count = this.numberOfMoviesInFestival() - this.maxNumberMovies;
                    var array = this.listOfPrograms[this.listOfPrograms.length - 1].listOfMovies;
                    var element = array.length - count -1;
                    var ind = array.indexOf(array[element]);
                    
                    this.listOfPrograms[this.listOfPrograms.length - 1].listOfMovies = array.filter(function(value, index, array){
                        return index <= ind;
                    }); 
                }
                
            }

            // Create report of festival programs
            var result = "";
            result += this.name + " has " + this.numberOfMoviesInFestival() + " movies titles\n\t";

            this.listOfPrograms.forEach(function (program) {
                result += program.getData() + "\t";
            })

            return result;
        }
    }

    function createMovie(title, length, genre) {
        var genre = new Genre(genre);
        return new Movie(title, genre, length);
    }



    //TESTING
    var festival = new Festival("Movie night in Novi Sad", 6);
    var movie1 = createMovie("Troja", 70, "Drama");
    var movie2 = createMovie("Wrat of titans", 80, "Drama");
    var movie3 = createMovie("Agora", 80, "Drama");
    var movie4 = createMovie("Batman", 80, "Fantasy");
    var movie5 = createMovie("Batman 2", 90, "Fantasy");
    var movie6 = createMovie("300", 80, "Fantasy");
    var movie7 = createMovie("American Pie 1", 70, "Comedy");



    var program1 = new Program("08/13/2021");
    var program2 = new Program("02/13/2021");
    


    festival.addProgram(program1);
    festival.addProgram(program2);
    



    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program1.addMovie(movie4);
    program2.addMovie(movie5);
    program2.addMovie(movie6);
    program2.addMovie(movie7);
    program2.addMovie(movie7);

    console.log(festival.getData());

  




































})();
