const recipes = [
  {
    mealName: "Shrimp Scampi",

    mealDesc: "Garlicky shrimp in white wine butter sauce",

    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",

    level: "Easy",

    category: "Seafood",

    rating: 4.8,

    reviews: 356,

    prepTime: "10 min",

    cookTime: "15 min",

    servings: "2 people",

    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],

    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],

    nutrition: {
      calories: "520 kcal",
      protein: "36g",
      carbs: "54g",
      fat: "18g",
      fiber: "3g",
      sodium: "620mg",
    },

    tips: [
      "Use fresh shrimp for the best flavor.",
      "Do not overcook the shrimp or they may become rubbery.",
      "Serve the pasta immediately while it is hot.",
    ],
  },

  // --------------------------------------------------

  {
    mealName: "Creamy Chicken Pasta",

    mealDesc: "Tender chicken and pasta in a rich creamy garlic sauce",

    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",

    level: "Easy",

    category: "Pasta",

    rating: 4.9,

    reviews: 428,

    prepTime: "15 min",

    cookTime: "25 min",

    servings: "4 people",

    ingredients: [
      "400g penne pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1/2 cup Parmesan cheese",
      "4 cloves garlic, minced",
      "2 tablespoons olive oil",
      "1 tablespoon butter",
      "Fresh parsley, chopped",
      "Salt",
      "Black pepper",
    ],

    instructions: [
      "Cook the pasta according to package directions and reserve some pasta water.",
      "Season chicken with salt and black pepper.",
      "Heat olive oil in a large pan and cook chicken until golden and fully cooked.",
      "Add butter and garlic and cook for 1 minute.",
      "Pour in the heavy cream and bring to a gentle simmer.",
      "Add Parmesan cheese and stir until the sauce becomes creamy.",
      "Add cooked pasta and toss everything together.",
      "Garnish with fresh parsley and serve.",
    ],

    nutrition: {
      calories: "680 kcal",
      protein: "42g",
      carbs: "62g",
      fat: "30g",
      fiber: "4g",
      sodium: "710mg",
    },

    tips: [
      "Use freshly grated Parmesan for a smoother sauce.",
      "Do not boil the cream sauce too aggressively.",
      "Reserve some pasta water to adjust the sauce consistency.",
    ],
  },

  // --------------------------------------------------

  {
    mealName: "Classic Beef Burger",

    mealDesc: "Juicy beef burger with cheddar cheese and fresh vegetables",

    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",

    level: "Easy",

    category: "American",

    rating: 4.7,

    reviews: 512,

    prepTime: "10 min",

    cookTime: "15 min",

    servings: "2 people",

    ingredients: [
      "300g ground beef",
      "2 burger buns",
      "2 slices cheddar cheese",
      "1 tomato, sliced",
      "Lettuce leaves",
      "1/2 onion, sliced",
      "2 tablespoons burger sauce",
      "Salt",
      "Black pepper",
    ],

    instructions: [
      "Season the ground beef with salt and black pepper.",
      "Divide the beef into two portions and shape into patties.",
      "Heat a grill pan and cook the patties for 4-5 minutes on each side.",
      "Place cheddar cheese on top during the last minute of cooking.",
      "Toast the burger buns lightly.",
      "Spread burger sauce on the buns.",
      "Add lettuce, tomato, onion, and beef patties.",
      "Serve immediately with your favorite side.",
    ],

    nutrition: {
      calories: "720 kcal",
      protein: "38g",
      carbs: "48g",
      fat: "42g",
      fiber: "3g",
      sodium: "890mg",
    },

    tips: [
      "Do not overwork the ground beef when shaping the patties.",
      "Let the burger rest for a few minutes before serving.",
      "Toast the buns for extra flavor and texture.",
    ],
  },

  // --------------------------------------------------

 

  {
    mealName: "Vegetable Curry",

    mealDesc: "Hearty vegetarian curry with coconut milk",

    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",

    level: "Easy",

    category: "Asian",

    rating: 4.7,

    reviews: 241,

    prepTime: "15 min",

    cookTime: "40 min",

    servings: "4 people",

    ingredients: [
      "2 tablespoons vegetable oil",
      "1 large onion, chopped",
      "3 cloves garlic, minced",
      "1 tablespoon fresh ginger",
      "2 tablespoons curry powder",
      "1 can coconut milk",
      "2 carrots, sliced",
      "1 bell pepper, chopped",
      "1 zucchini, chopped",
      "1 cup chickpeas",
      "Fresh cilantro",
      "Salt",
      "Black pepper",
    ],

    instructions: [
      "Heat vegetable oil in a large pot.",
      "Add onion, garlic, and ginger and cook until fragrant.",
      "Add curry powder and stir for 1 minute.",
      "Add carrots, bell pepper, and zucchini.",
      "Pour in the coconut milk and bring to a simmer.",
      "Add chickpeas and cook until the vegetables are tender.",
      "Season with salt and black pepper.",
      "Garnish with fresh cilantro and serve with rice.",
    ],

    nutrition: {
      calories: "380 kcal",
      protein: "10g",
      carbs: "42g",
      fat: "20g",
      fiber: "9g",
      sodium: "540mg",
    },

    tips: [
      "Use fresh vegetables for better texture and flavor.",
      "Toast the curry powder briefly to release its aroma.",
      "Adjust the curry seasoning according to your taste.",
    ],
  },

  // --------------------------------------------------

  {
    mealName: "Margherita Pizza",

    mealDesc: "Classic Italian pizza with tomato sauce, mozzarella and basil",

    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",

    level: "Medium",

    category: "Italian",

    rating: 4.8,

    reviews: 634,

    prepTime: "20 min",

    cookTime: "15 min",

    servings: "2 people",

    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "1 teaspoon dried oregano",
      "Salt",
      "Black pepper",
    ],

    instructions: [
      "Preheat the oven to 220°C.",
      "Roll the pizza dough into a thin circle.",
      "Spread tomato sauce evenly over the dough.",
      "Add sliced mozzarella cheese.",
      "Sprinkle with oregano, salt, and black pepper.",
      "Bake for 12-15 minutes until the crust is golden.",
      "Add fresh basil leaves and drizzle with olive oil.",
      "Slice and serve hot.",
    ],

    nutrition: {
      calories: "590 kcal",
      protein: "25g",
      carbs: "72g",
      fat: "22g",
      fiber: "4g",
      sodium: "820mg",
    },

    tips: [
      "Preheat the oven well before baking the pizza.",
      "Do not add too much sauce because it can make the crust soggy.",
      "Add fresh basil after baking for the best flavor.",
    ],
  },


  // --------------------------------------------------

  {
    mealName: "Chicken Tacos",

    mealDesc: "Spicy grilled chicken tacos with fresh salsa and avocado",

    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",

    level: "Easy",

    category: "Mexican",

    rating: 4.8,

    reviews: 347,

    prepTime: "15 min",

    cookTime: "20 min",

    servings: "4 people",

    ingredients: [
      "400g chicken breast",
      "8 small tortillas",
      "1 tomato, diced",
      "1/2 onion, diced",
      "1 avocado",
      "1/2 cup shredded lettuce",
      "1/2 cup cheddar cheese",
      "2 tablespoons taco seasoning",
      "Lime juice",
      "Fresh cilantro",
    ],

    instructions: [
      "Cut chicken breast into small pieces.",
      "Season the chicken with taco seasoning.",
      "Cook the chicken in a hot pan until fully cooked.",
      "Warm the tortillas in a dry pan.",
      "Prepare the salsa with tomato, onion, lime juice, and cilantro.",
      "Fill each tortilla with chicken and lettuce.",
      "Add avocado, cheese, and fresh salsa.",
      "Serve with lime wedges.",
    ],

    nutrition: {
      calories: "460 kcal",
      protein: "32g",
      carbs: "42g",
      fat: "19g",
      fiber: "7g",
      sodium: "760mg",
    },

    tips: [
      "Warm the tortillas before assembling the tacos.",
      "Do not overcrowd the pan when cooking the chicken.",
      "Add the avocado and salsa just before serving.",
    ],
  },

  // --------------------------------------------------

  {
    mealName: "Creamy Tomato Soup",

    mealDesc: "Warm and comforting tomato soup with herbs and cream",

    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",

    level: "Easy",

    category: "Soup",

    rating: 4.6,

    reviews: 198,

    prepTime: "10 min",

    cookTime: "30 min",

    servings: "4 people",

    ingredients: [
      "6 ripe tomatoes",
      "1 onion, chopped",
      "4 cloves garlic",
      "2 cups vegetable broth",
      "1/2 cup heavy cream",
      "2 tablespoons olive oil",
      "Fresh basil",
      "1 teaspoon dried oregano",
      "Salt",
      "Black pepper",
    ],

    instructions: [
      "Heat olive oil in a large pot.",
      "Add onion and garlic and cook until soft.",
      "Add chopped tomatoes and oregano.",
      "Pour in the vegetable broth.",
      "Simmer for 20 minutes.",
      "Blend the soup until smooth.",
      "Add heavy cream and season with salt and pepper.",
      "Garnish with fresh basil and serve warm.",
    ],

    nutrition: {
      calories: "240 kcal",
      protein: "6g",
      carbs: "28g",
      fat: "13g",
      fiber: "5g",
      sodium: "570mg",
    },

    tips: [
      "Use ripe tomatoes for a richer flavor.",
      "Blend the soup until completely smooth for a creamy texture.",
      "Add the cream at the end and avoid boiling it.",
    ],
  },

  // --------------------------------------------------

  {
    mealName: "Beef Stir Fry",

    mealDesc: "Tender beef strips with colorful vegetables in a savory sauce",

    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",

    level: "Medium",

    category: "Asian",

    rating: 4.8,

    reviews: 326,

    prepTime: "15 min",

    cookTime: "15 min",

    servings: "3 people",

    ingredients: [
      "400g beef strips",
      "1 bell pepper",
      "1 carrot",
      "1 broccoli head",
      "1 onion",
      "3 cloves garlic",
      "3 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "1 tablespoon honey",
      "1 teaspoon fresh ginger",
    ],

    instructions: [
      "Slice the beef into thin strips.",
      "Mix soy sauce, honey, sesame oil, and ginger.",
      "Heat a large pan or wok over high heat.",
      "Cook the beef quickly until browned.",
      "Remove the beef and set aside.",
      "Stir-fry the vegetables until slightly tender.",
      "Return the beef to the pan and add the sauce.",
      "Toss everything together and serve with rice.",
    ],

    nutrition: {
      calories: "490 kcal",
      protein: "38g",
      carbs: "35g",
      fat: "22g",
      fiber: "6g",
      sodium: "980mg",
    },

    tips: [
      "Slice the beef thinly so it cooks quickly.",
      "Use high heat to get a good sear on the beef.",
      "Prepare all ingredients before cooking because stir-frying is very quick.",
    ],
  },
];
var randomIndex = Math.floor(Math.random() * recipes.length);
displayRecipe(randomIndex);

function displayRandomRecipe() {
  randomIndex = Math.floor(Math.random() * recipes.length);
  displayRecipe(randomIndex);
}

function displayRecipe(_currentIndex) {
  document.getElementById("meal-name").textContent =
    recipes[_currentIndex].mealName;
  document.getElementById("meal-desc").textContent =
    recipes[_currentIndex].mealDesc;
  document.getElementById("meal-img").src = recipes[_currentIndex].image;
  document.getElementById("rating").textContent = recipes[_currentIndex].rating;
  document.getElementById("reviews").textContent =
    `(${recipes[_currentIndex].reviews})`;
  document.getElementById("prep-time").textContent =
    recipes[_currentIndex].prepTime;
  document.getElementById("cook-time").textContent =
    recipes[_currentIndex].cookTime;
  document.getElementById("servings").textContent =
    recipes[_currentIndex].servings;
  document.getElementById("level").textContent = recipes[_currentIndex].level;
  document.getElementById("category").textContent =
    recipes[_currentIndex].category;

  warningLoad(_currentIndex);
  ingredientsLoad(_currentIndex);
  instructionsLoad(_currentIndex);
  nutritionLoad(_currentIndex);
  tipsLoad(_currentIndex);
}
function warningLoad(_currentIndex) {
  var prepTime = parseInt(recipes[_currentIndex].prepTime);
  var cookTime = parseInt(recipes[_currentIndex].cookTime);

  var totalTime = prepTime + cookTime;

  var warning = "";
  if (totalTime > 45) {
    warning = `
    <div  class="warning d-flex justify-content-start p-2 gap-2 align-items-center"
            >
            <i class="fa-solid fa-triangle-exclamation text-danger fs-4"></i>
            <div class="warning-text text-danger">
            <span class="fw-bold">Extended Preparation Time</span>
            <p>
                This recipe requires more than 45 minutes to prepare. Plan
                accordingly!
            </p>
            </div></div>
            `;
  } else {
    warning = "";
  }
  document.getElementById("warning").innerHTML = warning;
}
function ingredientsLoad(_currentIndex) {
  var ingredients = "";
  for (var i = 0; i < recipes[_currentIndex].ingredients.length; i++) {
    ingredients += `
    <div
                  class="ingredient d-flex justify-content-start gap-2 align-items-baseline"
                >
                  
                
<span
                    class="text-white border border-0 rounded-circle py-1 px-2 bg-main"
                    >${i + 1}</span
                  >
                  <p class="text-secondary">${recipes[_currentIndex].ingredients[i]}</p>
</div>
`;
  }
  document.getElementById("ingredients").innerHTML = ingredients;
}
function instructionsLoad(_currentIndex) {
  var instruc = "";
  for (var i = 0; i < recipes[_currentIndex].instructions.length; i++) {
    instruc += ` <div
                  class="instructions d-flex justify-content-start gap-2 align-items-baseline"
                >
                  <span
                    class="text-white border border-0 rounded-4 py-2 px-3 bg-main"
                    >${i + 1}</span
                  >
                  <p class="text-secondary">
                   ${recipes[_currentIndex].instructions[i]}
                  </p>
                </div>
                `;
  }
  document.getElementById("instructions").innerHTML = instruc;
}
function nutritionLoad(_currentIndex) {
  document.getElementById("calories").textContent =
    recipes[_currentIndex].nutrition.calories;
  document.getElementById("protein").textContent =
    recipes[_currentIndex].nutrition.protein;
  document.getElementById("cabrs").textContent =
    recipes[_currentIndex].nutrition.carbs;
  document.getElementById("fat").textContent =
    recipes[_currentIndex].nutrition.fat;
  document.getElementById("fiber").textContent =
    recipes[_currentIndex].nutrition.fiber;
  document.getElementById("sodium").textContent =
    recipes[_currentIndex].nutrition.sodium;
}
function tipsLoad(_currentIndex) {
  var tips = "";
  for (var i = 0; i < recipes[_currentIndex].tips.length; i++) {
    tips += ` <div
                  id="tips"
                  class="tips bg-main-light p-4 d-flex gap-3 mb-3 align-items-baseline"
                >
                  <i class="fa-solid fa-circle-check txt-main"></i>
                  <span class="text-secondary"
                    >${recipes[_currentIndex].tips[i]}</span
                  >
                </div>
                `;
  }
  document.getElementById("tips").innerHTML = tips;
}
