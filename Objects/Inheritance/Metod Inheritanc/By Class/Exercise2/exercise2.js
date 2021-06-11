
//COMPANY
function Company(name, url) {
    if (!name) {
        throw new Error("Name of company must be defined");
    }

    if (!url) {
        throw new Error("URL of company must be defined");
    }

    if (typeof name !== "string") {
        throw new Error("Name of company must be string type");
    }

    if (typeof url !== "string") {
        throw new Error("URL of company must be string type");
    }

    this.name = name;
    this.url = url;
    this.listOfApp = [];

    this.addApp = function (app) {
        this.listOfApp.push(app);
    };

    this.webApp = function () {
        var result = "";
        this.listOfApp.forEach(function (app) {
            if (app.type === "Web") {
                result += app.getData() + "\n";
            }
        })
        return result;
    };

    this.mobApp = function () {
        var result = "";
        this.listOfApp.forEach(function (app) {
            if (app.type === "Mob") {
                result += app.getData() + "\n";
            }
        })
        return result;
    };

    this.getData = function () {
        var result = "";
        result += "Our companu produced applications:\n\n" + this.webApp() + "\n" + this.mobApp();
        return result;
    }


}

//APP
class App {
    constructor(name, licence, stars, type) {
        if (!name) {
            throw new Error("Name of App must be defined");
        }

        if (!licence) {
            throw new Error("Licence of App must be defined");
        }

        if (!stars) {
            throw new Error("Stars of App must be defined");
        }

        if (!type) {
            throw new Error("Type of App must be defined");
        }

        if (typeof name !== "string") {
            throw new Error("Name of App must be string type");
        }

        if (typeof licence !== "string") {
            throw new Error("Licence of App must be string type");
        }

        if (typeof stars !== "number") {
            throw new Error("Stars of App must be number type");
        }

        this.name = name;
        this.licence = licence;
        this.stars = stars;
        this.type = type;
    }

    isCCLicence() {
        return this.licence === "CC";
    };

    increaseStarForOne() {
        this.stars++;
    };

    showStars() {
        console.log("This App have: " + this.stars + " stars.");
    };
}

//WEBAPP
class WebApp extends App {
    constructor(name, licence, stars, type, url, technologies) {
       
        if (!url) {
            throw new Error("url of WebApp must be defined");
        }

        if (!technologies) {
            throw new Error("Technologies of WebApp must be defined");
        }

        if (typeof url !== "string") {
            throw new Error("url of WebApp must be string type");
        }

        if (typeof technologies !== "string") {
            throw new Error("Technologies of WebApp must be string type");
        }

        super(name, licence, stars, type);

        this.url = url;
        this.technologies = technologies;
    }

    getData() {
        var result = "";
        result += "WEB APLLICATION INFORMATIONS:\nName of application: " + this.name + "\n" + "Licence of application: " + this.licence + "\n" + "This App have " + this.stars + " stars" + "\n" + "url: " + this.url + "\nTechnology: " + this.technologies;
        return result + "\n";
    };

    reactBased() {
        return this.technologies === "React";
    }
}

//MOBILEAPP
class MobileApp extends App{
    constructor (name, licence, stars, type,  platforms){
        
        if(!platforms){
            throw new Error("Platform of mobile aplication must be defined");
        }
    
        if(typeof platforms !== "string"){
            throw new Error("Input for platform of mobile aplication must be string");
        }

        super(name, licence, stars, type);

        this.platforms = platforms; 
    }

    getData(){
        var result = ""; 
        result += "MOBILE APLLICATION INFORMATIONS:\nName of application: " + this.name + "\n" + "Licence of application: " + this.licence + "\n" + "This App have " + this.stars + " stars" + "\n" + "Platform: " + this.platforms;
        return result + "\n";   
    };
    
    androidBased() {
        return this.platforms === "Android";
    };
}


//TESTING

var softverSolutions = new Company("Softver Solutions", "www.softversolutions.com");
var carGPSPosition = new WebApp("Car checker", "CC", 5, "Web", "www.carchecker.com", "React");
var transLogistics = new WebApp("Trans Logistics", "DS", 8, "Web", "www.translogistics.com", "Blazor");
var busLine = new MobileApp("BUS Checker", "CC", 7, "Mob", "Android");
var travelZone = new MobileApp("Travel Zone", "CC", 7, "Mob", "Android");

// console.log(carGPSPosition.getData());
// console.log(transLogistics.getData());
// console.log(busLine.getData());
// console.log(travelZone.getData());

softverSolutions.addApp(carGPSPosition);
softverSolutions.addApp(transLogistics);
softverSolutions.addApp(busLine);
softverSolutions.addApp(travelZone);

console.log(softverSolutions.getData());
