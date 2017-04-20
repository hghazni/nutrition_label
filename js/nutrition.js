/**
 * Nutritional Traffic Light Labels
 * @author Haroon Ghazni <hghazni@gmail.com>
 * www.hghazni.com
 */

// Class Colour Variables
let energyColour = "none";
let fatColour = "";
let saturatesColour = "";
let sugarColour = "";
let saltColour = "";

let trafficLights = {

    // RI (Reference Intake) Maximum per 100g
    ri: {
        fat: {
            green: 3,
            amber: 17.5,
            red: 70
        },
        saturates: {
            green:1.5,
            amber:5,
            red: 20
        },
        sugar: {
            green:5,
            amber:25.5,
            red: 90
        },
        salt: {
            green:0.3,
            amber:1.5,
            red: 6
        }
    },

    serving: {
        // Serving Configuration
        portion_label: 'grilled burger',
        total_grams: 248, //grams
        portion_amount: 4,
        portion_amount_grams: 62, //grams
        portion_amount_ml: '', //ml
    },

    data: {
        // Data for product per 100g
        kj: 924, // kj
        kcal: 220, // kcal
        fat: 13, // grams
        saturates: 5.9, // grams
        sugar: 0.8, // grams
        salt: 0.7, // grams
    },

        // Add the 'each pack contains' paragraph
        addPackPara: function(){
            let newPara = document.createElement('p');
            trafficLights.appendChild(newPara);
        },

        // Add the nutrition label details to the page
         addLabel: function(){
            // Convert the object value to a string value
            let data = trafficLights.data;
            // Convert the RI value to a string value
            let ri = trafficLights.ri;
            // Grab the Nutritional Traffic Light Element where everything will go
            let nutritionLabel = document.getElementById("nutritionLabel");
            // Create a listed item element
            let li = document.createElement("li");
            // Create a unlisted item element
            let ul = document.createElement("ul");
            // Portion amount in grams
            let portionAmountGrams = trafficLights.serving.portion_amount_grams + "G";
            // Portion amount in ml
            let portionAmountMl = trafficLights.serving.portion_amount_ml + "ml";
            // Accessing serving
             let serving = trafficLights.serving;


            // Add the data to the HTML

            // Create an array with all the 'data' object values in them
            let dataArray = [
                this.data.kj + " kj" + "<br>" + this.data.kcal,
                this.data.fat,
                this.data.saturates,
                this.data.sugar,
                this.data.salt
            ];

            // Name of each nutritional label data item
            let dataNameArray = [
                "Energy", "Fat", "Saturates", "Sugar", "Salt"
            ];

            // Measurement of each data item
            let measureArray = [
                " kcal", "g <br>", "g <br>", "g <br>", "g <br>"
            ];

         // ----------- % RI / Per Portion Calculations-------------->

            // An array to store maximum daily intake amounts
             let maxIntake = [
                 //kj
                 8400,
                 //kcal
                 2000,
                 //Fat
                 70,
                 //Saturates
                 20,
                 //Sugars
                 90,
                 //Salt
                 6
             ];

            // %RI Calculations
             let kjRi = Math.floor(this.data.kj / maxIntake[0] * 100); //kj RI%
             let kcalRi = Math.floor(this.data.kcal / maxIntake[1] * 100); //kcal RI%
             let fatRi = Math.floor(this.data.fat / maxIntake[2] * 100); //Fat RI%
             let saturatesRi = Math.floor(this.data.saturates / maxIntake[3] * 100); //Saturates RI%
             let sugarRi = Math.floor(this.data.sugar / maxIntake[4] * 100); //Sugar RI%
             let saltRi = Math.floor(this.data.salt / maxIntake[5] * 100); //Salt RI%

             // <--------------Food Per Portion Calculations-------------->
             // Gram per portion
             let gramPerPortion = trafficLights.serving.total_grams / trafficLights.serving.portion_amount;

             // Calculating per portion amounts
             let fatPortion = (this.data.fat / 100 * gramPerPortion).toPrecision(1); //fat
             let saturatesPortion = (this.data.saturates / 100 * gramPerPortion).toPrecision(1); //saturates
             let sugarPortion = (this.data.sugar / 100 * gramPerPortion).toPrecision(1); //sugar
             let saltPortion = (this.data.salt / 100 * gramPerPortion).toPrecision(1); //salt
             let kjPortion = Math.floor(this.data.kj / 100 * gramPerPortion);
             let kcalPortion = Math.floor(this.data.kcal / 100 * gramPerPortion);

             // Per amount array
             portionArray = [
                 kjPortion + " kj" + "<br>" + kcalPortion,
                 fatPortion,
                 saturatesPortion,
                 sugarPortion,
                 saltPortion
             ];

            // <--------------Food Per Portion Calculations-------------->

            // An array of all the RI Calculations
             let riArray = [
                 kcalRi,
                 fatRi,
                 saturatesRi,
                 sugarRi,
                 saltRi
             ];

            //For loop with all RI calculations
             for (i = 0; i < riArray.length; i++) {
                 console.log(riArray[i] + "% ");
             }

        // <----------- % RI / Per Portion Calculations--------------

                // Fat Colour Assigner
                 if (data.fat >= 0 && fatRi <= this.ri.fat.green) {
                    fatColour = "low";
                     console.log("Fat is Green");
                 } else if (data.fat >= this.ri.fat.green && data.fat <= this.ri.fat.amber) {
                    fatColour = "medium";
                     console.log("Fat is Amber!");
                 } else if (data.fat >= this.ri.fat.amber && data.fat <= this.ri.fat.red) {
                    fatColour = "high";
                     console.log("Fat is Red!!");
                 } else {
                    console.log('This is healthy af');
                 }

                 // Saturates Colour Assigner
                 if (data.saturates >= 0 && saturatesRi <= this.ri.saturates.green) {
                     saturatesColour = "low";
                     console.log("Saturates is Green");
                 } else if (data.saturates >= this.ri.saturates.green && data.saturates <= this.ri.saturates.amber)
                 {
                     saturatesColour = "medium";
                     console.log("Saturates is Amber!");
                 } else if (data.saturates >= this.ri.saturates.amber && data.saturates <= this.ri.saturates.red) {
                     saturatesColour = "high";
                     console.log("Saturates is Red!!");
                 } else {
                     console.log('This is healthy af');
                 }

                 // Sugar Colour Assigner
                 if (data.sugar >= 0 && sugarRi <= this.ri.sugar.green) {
                     sugarColour = "low";
                     console.log("Sugar is Green");
                 } else if (data.sugar >= this.ri.sugar.green && data.sugar <= this.ri.sugar.amber) {
                     sugarColour = "medium";
                     console.log("Sugar is Amber!");
                 } else if (data.sugar >= this.ri.sugar.amber && data.sugar <= this.ri.sugar.red) {
                     sugarColour = "high";
                     console.log("Sugar is Red!!");
                 } else {
                     console.log('This is healthy af');
                 }

                 // Salt Colour Assigner
                 if (data.salt >= 0 && saltRi <= this.ri.salt.green) {
                     saltColour = "low";
                     console.log("Salt is Green");
                 } else if (data.salt >= this.ri.salt.green && data.salt <= this.ri.salt.amber) {
                     saltColour = "medium";
                     console.log("Salt is Amber!");
                 } else if (data.salt >= this.ri.salt.amber && data.salt <= this.ri.salt.red) {
                     saltColour = "high";
                     console.log("Salt is Red!!");
                 } else {
                     console.log('This is healthy af');
                 }

             // Colour Class Array
             let nutriColour = [
                 energyColour,
                 fatColour,
                 saturatesColour,
                 sugarColour,
                 saltColour
             ];


    // ADDING TO HTML LOOP START ------------->

             html = `<p>Each <b><u>${trafficLights.serving.portion_label}</u></b> contains <b>(${trafficLights.serving.portion_amount_grams}g)</p></b><br>`;
             // for loop through the object values in data
             for (i = 0; i < dataArray.length; i++) {
                 let nutriLevel = `${nutriColour[i]}`;
                  // create new 'li' elements for each as they are output to html
                 // Also assigns each 'li' element an ID which is the name of nutrition data it holds i.e. Energy
                 html += (`<li id="${dataNameArray[i]}" class="${nutriLevel}">` + dataNameArray[i] + "<br>" + " " + portionArray[i] + measureArray[i] + "<br>" + riArray[i] + "%" + "<br>" + "</li>");
             }

             // Adults reference intake text
             adultRef = `<p>of an adults reference intake <b>(8400kj/2000kj)</b></p>`

             // add data to 'ul'
             nutritionLabel.innerHTML = `<ul>  ${html} </ul>  <br><br><br> ${adultRef}`;

        },

    // ADDING TO HTML LOOP END <---------------


        // Ensure the DOM has loaded (for future use)
        domReady: function () {
        },

    // Set user defined options for the popup
    setOptions: function(opts) {
        this.serving.portion_amount_grams = (typeof opts.serving.portion_amount_grams === 'undefined') ? this.serving.portion_amount_grams : opts.serving.portion_amount_grams;

        this.serving.portion_amount_ml = (typeof opts.serving.portion_amount_ml === 'undefined') ? this.serving.portion_amount_ml : opts.serving.portion_amount_ml;

        this.serving.portion_label = (typeof opts.serving.portion_label === 'undefined') ? this.serving.portion_label : opts.serving.portion_label;
    },

        // Initialize the Nutritional Traffic Lights App
        init: function () {
        }
    }

window.onload = trafficLights.addLabel();