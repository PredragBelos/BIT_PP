"use strict";

(
    function () {

        /* Constructor functions*/

        //PERSON
        function Person(name, surname) {
            if (!name) {
                throw new Error("Name of person must be defined")
            }
            if (!surname) {
                throw new Error("Surname of person must be defined")
            }
            this.name = name;
            this.surname = surname;
            this.getData = function () {
                var result = this.name + " " + this.surname;
                return result;
            }
        }

        //SEAT
        function Seat(seatNumber, seatCategory) {

            seatCategory = seatCategory || "e";
            seatNumber = seatNumber || Math.floor(Math.random() * 101);

            if (seatCategory !== "b" && seatCategory !== "e") {
                throw new Error("Invalid category input.")
            }
            this.number = seatNumber;
            this.category = seatCategory;
            this.getData = function () {
                var result = this.number + ", " + this.category;
                return result;
            }
        }

        //PASSENGER
        function Passenger(person, seat) {
            if (!person) {
                throw new Error("Person must be defined.");
            }
            if (!seat) {
                throw new Error("Seat must be defined.");
            }
            if (!(person instanceof Person)) {
                throw new Error("Person must be instance of Person constructor");
            }
            if (!(seat instanceof Seat)) {
                throw new Error("Seat must be instance of Seat constructor");
            }

            this.person = person;
            this.seat = seat;
            this.getData = function () {
                var result = this.seat.getData() + ", " + this.person.getData();
                return result;
            }
        }

        //FLIGHT
        function Flight(relation, date) {
            this.relation = relation;
            this.date = new Date(date);
            this.listOfPasengers = [];
            this.addPessanger = function (passenger) {
                if (!(passenger instanceof Passenger)) {
                    throw new Error("Pessanger must be instance of Pessanger constructor");
                }
                this.listOfPasengers.push(passenger);
            }
            this.getData = function () {
                var result = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + this.relation + "\n\t";
                result += this.passengers();
                return result;
            }
            this.passengers = function () {
                var result = "";
                for (var i = 0; i < this.listOfPasengers.length; i++) {
                    result += this.listOfPasengers[i].getData() + "\n\t";
                }
                return result;
            }

        }

        //AIRPORT
        function Airport() {
            this.name = "Nikola Tesla";
            this.listOfFlights = [];
            this.addFlight = function (flight) {
                if (!(flight instanceof Flight)) {
                    throw new Error("Flight must be instance of Flight constructor");
                }
                this.listOfFlights.push(flight);
            }
            this.getData = function () {
                var result = "";
                result += "Airport: " + this.name + ", total passengers: " + this.numberOfPassenger() +  "\n\n\t" + this.flightReport();
                return result;
            }

            this.flightReport = function () {
                var result = "";
                for (var i = 0; i < this.listOfFlights.length; i++) {
                    result += this.listOfFlights[i].getData() + "\n\t";
                }
                return result;
            }

            this.numberOfPassenger = function () {
                var result = 0;
                for (var i = 0; i < this.listOfFlights.length; i++) {
                    result += this.listOfFlights[i].listOfPasengers.length;
                }
                return result;
            }
        }

        //Functions

        function createFlight(relation, date) {
            return new Flight(relation, date);
        }

        function createPassenger(name, surname, seatNumber, seatCategory) {
            var person = new Person(name, surname);
            var seat = new Seat(seatNumber, seatCategory);

            return new Passenger(person, seat);
        }




        /*Testing*/
        var nikolaTesla = new Airport();

        var passenger1 = createPassenger("John", "Snow", 1, "b");
        var passenger2 = createPassenger("Cersei", "Lannister", 2, "e");
        var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
        var passenger4 = createPassenger("Tyrion", "Lannister");

        var barcelonaNewYork = createFlight("Barcelona - New York", "03/20/2021");
        var barcelonaBelgrade = createFlight("Barcelona - Belgrade", "06/15/2021");

        barcelonaNewYork.addPessanger(passenger1);
        barcelonaNewYork.addPessanger(passenger2);
        barcelonaBelgrade.addPessanger(passenger3);
        barcelonaBelgrade.addPessanger(passenger4);

        nikolaTesla.addFlight(barcelonaNewYork);
        nikolaTesla.addFlight(barcelonaBelgrade);

        console.log(nikolaTesla.getData());



    })();
