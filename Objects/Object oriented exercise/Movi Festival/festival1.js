"use strict";

(function () {

    // Declaration function

    function createMovie(title, genre, length) {
        var genre = new Genre(genre);
        return new Movie(title, genre, length);
    }

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
    function Program(date, totalNumberMoviesInProgram) {

        if (!date) {
            throw new Error("Programs date must be defined.");
        }

        if (!totalNumberMoviesInProgram) {
            throw new Error("Programs date must be defined.");
        }

        if (typeof totalNumberMoviesInProgram !== "number") {
            throw new Error("Total number of movies in program must be number");
        }

        this.date = new Date(date);
        this.totalNumberMoviesInProgram = totalNumberMoviesInProgram;
        this.listOfMovies = [];

        this.numberOfMovies = function () {
            return this.listOfMovies.length;
        }

        this.addMovie = function (movie) {

            if (!(movie instanceof Movie)) {
                throw new Error("Movie must be instance of Movie constructor.");
            }

            try {
                if (this.numberOfMovies() < this.totalNumberMoviesInProgram) {
                    this.listOfMovies.push(movie);
                }
                else {
                    throw new Error("List of movies on program for " + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + " is full. Can't add another movie\n\n")
                }
            }
            catch (error) {
                console.log(error.message);
            }
        }

        this.getData = function () {
            var result = "";
            result = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", program duration: ";

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

    function Festival(name, maxNumberOfMoviesInFestival) {
        if (!name) {
            throw new Error("Name of festival must be defined.");
        }

        if (!maxNumberOfMoviesInFestival) {
            throw new Error("Max number of movies on festival must be defined.");
        }

        if ((typeof maxNumberOfMoviesInFestival !== "number")) {
            throw new Error("Max number of movies must be a number");
        }

        this.name = name;
        this.listOfPrograms = [];
        this.maxNumberOfMoviesInFestival = maxNumberOfMoviesInFestival;

        this.numberOfMoviesInFestival = function () {
            var result = 0;
            this.listOfPrograms.forEach(function (programs) {
                result += programs.listOfMovies.length;
            })
            return result;
        }

        this.addProgram = function (program) {
            if (!(program instanceof Program)) {
                throw new Error("Program must be instance of Program constructor")
            }

            try {
                var count = this.numberOfMoviesInFestival();

                if (program.listOfMovies.length <= this.maxNumberOfMoviesInFestival - count) {
                    this.listOfPrograms.push(program);
                }
                else {
                    throw new Error("Program for " + program.date.getDate() + "." + (program.date.getMonth() + 1) + "." + program.date.getFullYear() + " can't be added because list of movies on this program is large\n\n");
                }
            }
            catch (error) {
                console.log(error.message);
            }
        }

        this.getData = function () {
            var result = "FESTIVAL: ";
            result += this.name + " has " + this.numberOfMoviesInFestival() + " movies titles\n\t";

            this.listOfPrograms.forEach(function (program) {
                result += program.getData() + "\t";
            })

            return result; 
        }
    }


    //TESTING

    //Festivals
    var festival1 = new Festival("Museum night", 6);
    var festival2 = new Festival("Museum night 2", 6);

    //Programs
    var program1 = new Program("06.05.2021", 3);
    var program2 = new Program("06.12.2021", 2);
    var program3 = new Program("06.19.2021", 2);

    //Movies
   
    var movie1 = createMovie("Troya", "drama", 70);
    var movie2 = createMovie("Wrat of titans", "drama", 80);
    var movie3 = createMovie("Agora", "drama", 80);
    var movie4 = createMovie("Batman", "fantasy", 70);
    var movie5 = createMovie("Batman 2", "fantasy", 90);
    var movie6 = createMovie("300", "fantasy", 80);
    var movie7 = createMovie("American Pie 1", "comedy", 70);

    //Create a festivals

    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    
    program2.addMovie(movie4);
    program2.addMovie(movie5);

    program3.addMovie(movie6);
    //program3.addMovie(movie7);
    //program3.addMovie(movie7);

    festival1.addProgram(program1);
    festival1.addProgram(program2);
    festival1.addProgram(program3);

    festival2.addProgram(program1);
    festival2.addProgram(program2);
    festival2.addProgram(program3);
    
    
    console.log(festival1.getData());
    console.log(festival2.getData());
   






































})();