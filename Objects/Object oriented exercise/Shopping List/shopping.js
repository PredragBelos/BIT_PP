"use strict";

(function () {

    function checkAndBuy(shopingBag, paymentCard) {

        if(!(shopingBag instanceof ShoppingBag)){
            throw new Error("Shoping bag must be instance of ShopingBag constructor.")
        }

        if(!(paymentCard instanceof PaymentCard)){
            throw new Error("Payment card bag must be instance of PaymentCard constructor.")
        }

        // Checking is shoping possible

        var bagPrice = shopingBag.calculateTotalPrice();
        var cardMoney = paymentCard.accountBalance;
        var difference = cardMoney - bagPrice;

        // Define bill report
        var bill = "";
        for(var i = 0; i < shopingBag.listOfProduct.length; i++){
            bill += shopingBag.listOfProduct[i].getInfo() + "\n";
        }
        

        if(difference >= 0){
            console.log("The current balance on your card is: " + cardMoney.toFixed(2) + " din \n\n");
            console.log("YOUR BILL IS: \n" + bill + "\n");
            console.log("Purchase is successful \n");
            console.log("The remaining amount of money on your card is: " + difference);
        }
        else{
            console.log("You need " + Math.abs(difference) + " din.");
        }

  
    }

    // Constructor function

    //PRODUCT
    function Product(name, price, expirationDate) {
        if (!name) {
            throw new Error("Name must be defined!");
        }

        if (!price) {
            throw new Error("Price must be defined!");
        }

        if (typeof price !== "number") {
            throw new Error("Price must be number!");
        }

        if (!expirationDate) {
            throw new Error("Expiration date must be defined!");
        }

        this.productId = (Math.floor( Math.random() * 89999 + 10000));
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date(expirationDate);

        this.getInfo = function () {
            var result = "";
            result += this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase() + this.productId + ", " + this.name + ", " + this.price.toFixed(2);
            return result;
        }

    }


    //SHOPPINGBAG
    function ShoppingBag() {

        this.listOfProduct = [];

        this.addProduct = function (product) {

            if (!(product instanceof Product)) {
                throw new Error("Product must be instance of Product constructor.")
            }

            // Function for checking expiration date
            (function (date) {
                var today = new Date();
                var diff;

                diff = Math.floor((date.valueOf() - today.valueOf()) / (24 * 60 * 60 * 1000));

                if (diff < 0) {
                    throw new Error("Expiration date is not valid.")
                }

                return diff;


            })(product.expirationDate);

            this.listOfProduct.push(product);
        };

        this.getAveragePrice = function () {
            var result = 0;
            var average = 0;

            this.listOfProduct.forEach(function (element, array) {
                result += element.price;
            });

            average = (result / this.listOfProduct.length).toFixed(3);
            console.log(average);
        };

        this.getMostExpensive = function () {
            var result = 0;
    
            this.listOfProduct.forEach(function (element) {
                if(element.price > result){
                    result = element.price;
                }
            });

            console.log(result.toFixed(2));
        }

        this.calculateTotalPrice = function () {

            var totalPrice = 0;

            for(var i = 0; i < this.listOfProduct.length; i++){
                totalPrice += this.listOfProduct[i].price;
            }

            return totalPrice;
        }
    }

    //PAYMENTCARD
    function PaymentCard(accountBalance, status, validDate) {

        if (!accountBalance) {
            throw new Error("Account balance must be defined!");
        }

        if (!status) {
            throw new Error("Status must be defined!");
        }

        if (!validDate) {
            throw new Error("Valid date must be defined!");
        }

        if(typeof status !== "boolean"){
            throw new Error("Status must be boolean value");
        }

        if(typeof accountBalance !== "number"){
            throw new Error("Account balance must be number value");
        }

        this.accountBalance = accountBalance;
        this.status = status;
        this.validDate = new Date(validDate);

        (function (date) {
            var today = new Date();
            var diff;

            diff = Math.floor((date.valueOf() - today.valueOf()) / (24 * 60 * 60 * 1000));

            if (diff < 0) {
                throw new Error("The card has expired!!!");
            }

            return diff;

        })(this.validDate);
    }


    // SHOOOPINGGG
    var visaCard = new PaymentCard(16000, true, "11/25/2025");
    var shopingBag = new ShoppingBag();

    var product1 = new Product("Sugar", 206.50, "5.30.2022");
    var product2 = new Product("Eggs", 100.99, "5.30.2022");
    var product3 = new Product("Flour", 250.40, "5.30.2022");
    var product4 = new Product("Salt", 150.80, "5.30.2022");
    var product5 = new Product("Rosa", 506.00, "5.30.2022");
    var product6 = new Product("Moja kravica milk", 120.00, "5.30.2022");
    var product7 = new Product("Vital oil", 80.99, "5.30.2022");
    var product8 = new Product("Milka 200g", 270.00, "5.30.2022");
    var product9 = new Product("Kinder Surprise", 300.00, "5.30.2022");
    var product10 = new Product("Orbit cold fresh", 60.90, "5.30.2022");

    shopingBag.addProduct(product1);
    shopingBag.addProduct(product2);
    shopingBag.addProduct(product3);
    shopingBag.addProduct(product4);
    shopingBag.addProduct(product5);
    shopingBag.addProduct(product6);
    shopingBag.addProduct(product7);
    shopingBag.addProduct(product8);
    shopingBag.addProduct(product9);
    shopingBag.addProduct(product10);

    checkAndBuy(shopingBag, visaCard);

































})();