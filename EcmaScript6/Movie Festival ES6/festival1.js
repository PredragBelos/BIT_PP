
(function () {

    // Declaration function

    function createMovie(title, genre, length) {
        let gen = new Genre(genre);
        return new Movie(title, gen, length);
    }

    //Constructor functions

    //GENRE
    class Genre {
        constructor(name) {
            if (!name) {
                throw new Error("Name of genre must be defined.");
            }

            if (typeof name !== "string") {
                throw new Error("Name must be input how string.");
            }

            this.name = name;
        }

        getData() {
            let result = "";
            result = this.name.slice(0, 1).toUpperCase() + this.name[this.name.length - 1].toUpperCase();
            return result;
        }
    }

    //MOVIE
    class Movie {
        constructor(title, genre, length) {
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
        }

        getData() {
            let result = ``;
            result += `${this.title}, ${this.length} min, ${this.genre.getData()}`;
            return result;
        }
    }

    //PROGRAM
    class Program {
        constructor(date, totalNumberMoviesInProgram) {
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
        }

        numberOfMovies() {
            return this.listOfMovies.length;
        }

        addMovie(movie) {

            if (!(movie instanceof Movie)) {
                throw new Error("Movie must be instance of Movie constructor.");
            }

            try {
                if (this.numberOfMovies() < this.totalNumberMoviesInProgram) {
                    this.listOfMovies.push(movie);
                }
                else {
                    throw new Error(`List of movies on program for ${this.date.getDate()}.${(this.date.getMonth() + 1)}.${this.date.getFullYear()} is full. Can't add another movie\n\n`);
                }
            }
            catch (error) {
                console.log(error.message);
            }
        }

        getData() {
            let result = ``;
            result = `${this.date.getDate()}.${(this.date.getMonth() + 1)}.${this.date.getFullYear()}, program duration: `;

            let length = 0;
            this.listOfMovies.forEach(function (movie) {
                length += movie.length;
            })
            result += length + " min.\n\t\t";

            for (let i = 0; i < this.listOfMovies.length; i++) {
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
    class Festival {
        constructor(name, maxNumberOfMoviesInFestival) {
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
        }

        numberOfMoviesInFestival() {
            let result = 0;
            this.listOfPrograms.forEach(function (programs) {
                result += programs.listOfMovies.length;
            })
            return result;
        }

        addProgram(program) {
            if (!(program instanceof Program)) {
                throw new Error("Program must be instance of Program constructor")
            }

            try {
                let count = this.numberOfMoviesInFestival();

                if (program.listOfMovies.length <= this.maxNumberOfMoviesInFestival - count) {
                    this.listOfPrograms.push(program);
                }
                else {
                    throw new Error(`Program for ${program.date.getDate()}.${(program.date.getMonth() + 1)}.${program.date.getFullYear()} can't be added because list of movies on this program is large\n\n`);
                }
            }
            catch (error) {
                console.log(error.message);
            }
        }

        getData() {
            let result = `FESTIVAL: `;
            result += `${this.name} has ${this.numberOfMoviesInFestival()} movie titles\n\t`;

            this.listOfPrograms.forEach(function (program) {
                result += program.getData() + "\t";
            })

            return result;
        }
    }


    //TESTING

    //Festivals
    festival1 = new Festival("Museum night", 6);
    let festival2 = new Festival("Museum night 2", 6);

    //Programs
    let program1 = new Program("06.05.2021", 3);
    let program2 = new Program("06.12.2021", 2);
    let program3 = new Program("06.19.2021", 2);

    //Movies

    let movie1 = createMovie("Troya", "drama", 70);
    let movie2 = createMovie("Wrat of titans", "drama", 80);
    let movie3 = createMovie("Agora", "drama", 80);
    let movie4 = createMovie("Batman", "fantasy", 70);
    let movie5 = createMovie("Batman 2", "fantasy", 90);
    let movie6 = createMovie("300", "fantasy", 80);
    let movie7 = createMovie("American Pie 1", "comedy", 70);

    //Create a festivals

    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);

    program2.addMovie(movie4);
    program2.addMovie(movie5);

    program3.addMovie(movie6);

    festival1.addProgram(program1);
    festival1.addProgram(program2);
    festival1.addProgram(program3);

    festival2.addProgram(program1);
    festival2.addProgram(program2);
    festival2.addProgram(program3);


    console.log(festival1.getData());
    console.log(festival2.getData());







































})();