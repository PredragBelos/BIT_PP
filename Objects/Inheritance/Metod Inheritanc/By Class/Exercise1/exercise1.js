(function () {

    //COMPANY
    function Company(name, address, pib, email) {

        if (!name) {
            throw new Error("Name of company must be defined")
        }

        if (!address) {
            throw new Error("Address of company must be defined")
        }

        if (!pib) {
            throw new Error("PIB of company must be defined")
        }

        if (!email) {
            throw new Error("Email of company must be defined")
        }

        if (typeof name !== "string") {
            throw new Error("Name of company must be a string")
        }

        if (typeof address !== "string") {
            throw new Error("Address of company must be a string")
        }

        if (typeof pib !== "number") {
            throw new Error("PIB of company must be a number")
        }

        if (typeof email !== "string") {
            throw new Error("Email of company must be a string")
        }

        this.name = name;
        this.address = address;
        this.pib = pib;
        this.email = email;
        this.listOfEmployer = [];

        this.addEmployee = function (employee) {
            if (!(employee instanceof Employee)) {
                throw new Error("Employee must be instance of Employee constructor")
            }
            this.listOfEmployer.push(employee);
        };

        this.getData = function () {
            var result = "";
            result += this.name + ", " + this.address + ", PIB:" + this.pib + ", email:" + this.email + ":\n\nLIST OF EMPLOYEES:\n\n" + this.managers() + "\n" + this.developers();

            return result;
        }

        this.developers = function () {
            var result = "";
            this.listOfEmployer.forEach(function (employee) {
                if (employee.position === "developer") {
                    result += employee.getData() + "\n";
                }
            })
            return "Developers in company are:\n" + result;
        }

        this.managers = function () {
            var result = "";
            this.listOfEmployer.forEach(function (employee) {
                if (employee.position === "manager") {
                    result += employee.getData() + "\n";
                }
            })
            return "Managers in company are:\n" + result;
        }


    }

    //PERSON

    class Person {

        constructor(name, surname) {

            if (!name) {
                throw new Error("Name of person must be defined");
            }

            if (!surname) {
                throw new Error("Surname of person must be defined");
            }

            if (typeof name != "string") {
                throw new Error("Name of person must be input as string");
            }

            if (typeof surname != "string") {
                throw new Error("Surname of person must be input as string");
            }

            this.name = name;
            this.surname = surname;
        }
    }

    //EMPLOYEE
    class Employee extends Person {
        constructor(name, surname, job, salary, position) {

            if (!name) {
                throw new Error("Name of employee must be defined");
            }

            if (!surname) {
                throw new Error("Surname of employee must be defined");
            }

            if (!job) {
                throw new Error("Job of employee must be defined");
            }

            if (!salary) {
                throw new Error("Salary of employee must be defined");
            }

            if (!position) {
                throw new Error("Position of employee must be defined");
            }

            if (typeof name != "string") {
                throw new Error("Name of employee must be input as string");
            }

            if (typeof surname != "string") {
                throw new Error("Surname of employee must be input as string");
            }

            if (typeof job != "string") {
                throw new Error("Job of employee must be input as string");
            }

            if (typeof salary != "number") {
                throw new Error("Salary of employee must be input as number");
            }

            if (typeof position != "string") {
                throw new Error("Position of employee must be input as string");
            }

            super(name, surname);

            this.job = job;
            this.salary = salary;
            this.position = position;
        }

        getData() {
            return this.name + " " + this.surname + " salary: " + this.salary + " din.";
        }

        getSalary() {
            return "Salary: " + this.salary + " din.";
        }

        increaseSalary(percent) {
            return this.salary = Math.round(this.salary * (1 + (percent / 100)));
        }
    }

    //DEVELOPER
    class Developer extends Employee {
        constructor(name, surname, job, salary, position, specialization) {

            if (!specialization) {
                throw new Error("Specialization of developer must be defined");
            }

            if (typeof specialization !== "string") {
                throw new Error("Specialization of developer must be string");
            }

            super(name, surname, job, salary, position);

            this.specialization = specialization;
        }

        getSpecialization() {
            console.log(this.specialization);
        }

    }

    //MANAGER
    class Manager extends Developer {
        constructor(name, surname, job, salary, position, specialization, department) {

            if (!department) {
                throw new Error("Department of manager must be defined");
            }

            if (typeof department !== "string") {
                throw new Error("Department of manager must be string");
            }

            super(name, surname, job, salary, position, specialization);

            this.department = department;
        }

        getDepartment() {
            console.log(this.department);
        };

        changeDepartment(depart) {
            this.department = depart;
        }
    }





    //TESTING

    var company1 = new Company("Company DOO", "Narodnog fronta 43, Novi Sad", 123456, "company@gmail.com");

    var developer1 = new Developer("Jovan", "Mitrovic", "JS junior", 75000, "developer", "HTML");
    var developer2 = new Developer("Milan", "Jovanovic", "JS junior", 75000, "developer", "CSS");
    var developer3 = new Developer("Zoran", "Stankovic", "JS junior", 75000, "developer", "JS");
    var developer4 = new Developer("Stanko", "Miskovic", "JS medium", 10000, "developer", "database");
    var developer5 = new Developer("Dragan", "Stainic", "JS medium", 10000, "developer", "animation");
    var developer6 = new Developer("Filip", "Strbac", "JS senior", 150000, "developer", "HTML, CSS, JS, database, animation");

    var menager1 = new Manager("Stefan", "Bozic", "teamlider", 250000, "manager", "project manager", "development");

    company1.addEmployee(developer1);
    company1.addEmployee(developer2);
    company1.addEmployee(developer3);
    company1.addEmployee(developer4);
    company1.addEmployee(developer5);
    company1.addEmployee(developer6);
    company1.addEmployee(menager1);

    console.log(company1.getData());





























})();