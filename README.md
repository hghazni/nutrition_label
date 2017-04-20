# Traffic Lights Nutrition Label (v0.8)

*By Haroon Ghazni (Front End Developer)- www.hghazni.com*

                      _[]_
                     [____]
                 .----'  '----.
             .===|    .==.    |===.
             \   |   /####\   |   /
             /   |   \####/   |   \
             '===|    `""`    |==='
             .===|    .==.    |===.
             \   |   /::::\   |   /
             /   |   \::::/   |   \
             '===|    `""`    |==='
             .===|    .==.    |===.
             \   |   /&&&&\   |   /
             /   |   \&&&&/   |   \
             '===|    `""`    |==='
                 '--.______.--'
                 
                 
***Note** *: Be aware this module is currently not finished and is subject to constant change and iterations until it reaches 1.0.*


Introduction
-



The 'Nutrition Label' module displays a Traffic Light Nutrition Label based on the portion of each product and the daily Intake Reference percentage. Each element changes colour based on the Reference Intake percentage to low, medium or high.

**Initialisation code (variables):**
```
  <script type="text/javascript">
      trafficLights.init({
      
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
  });
```
**Make sure to include this for the Nutrition label before < /body >:**
```
<script type="text/javascript" src="js/nutrition.js"></script>
```

Default Options
-
It has to be added to the element with the ID of *#nutritionLabel*

The stylesheet included has all the default styling for all the default classes and ID's set by the module.

Installation
-
Insert the JS and CSS files into your directories. Link them to the designated HTML page.

Then insert the initialisation with all the variables. Change the variables to your product and that should correspond on the label directly.

That's all!
-
You can style it further in the stylesheet if you wish. If you have any issues feel free to contact me hghazni@gmail.com