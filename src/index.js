// Tarkastukset kommentteina!
// A Implement functions, use the following data array when needed.
const menu = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

// A 1. Create a function that validates a name for a meal
//      -takes input string as a parameter, returns true/false
//      -example of valid title: "Mushroom and bean casserole"
//      -use regexp (.test()), rules for the string:
//      -starts with a capital letter
//      -min length 4, max 64
//       -can contain letters, numbers, whitespaces, hyphens, slashes, commas & parentheses

// const validateMealName = mealName => {
//   const mealNamePattern = /^[A-ZÖÄÅ]{1}[a-zäöåA-ZÖÄÅ \-\/,()]{3,36}$/;
//   return mealNamePattern.test(mealName);
// };
// for (const item of menu) {
// console.log('validating', item.name,validateMealName(item.name));
// }
menu.forEach(meal => {
  const regexp = /^[A-ZÖÄÅ]{1}[a-zöäå,A-ZÖÄÅ/0-9()-\s]{4,64}$/;
  const test = regexp.test(meal.name);

  if(!test) {
    console.log(meal.name + 'is not valid');
  } else {
    console.log('All names are valid');
  }
});

// A 2. Sort the menu based on price (lowest to highest)
const sortedPrice = menu.sort((a, b) => a.price - b.price);
console.log('Sorted meals', sortedPrice);

// A 3. Display only items costing less than 5 € (filtering)
// console.log('filter', menu.filter(item => item.price < 5));
const filter = menu.filter(f => f.price < 5);
console.log('Filtered meals', filter);

//A 4. Raise all prices 15 % (use map)
// console.log('inflation',menu.map(item => item.price * 1.15));
const raisedPrice = menu.map(n => (n.price * 1.15).toFixed(2));
console.log('Raised prices', raisedPrice);

// A 5. How much does it cost to eat the whole menu (use reduce)
const total = menu.reduce((a, b) => ({price: a.price + b.price}));
// const total = menu.reduce((a, b) => {
//   return {price: a.price + b.price};
// });
console.log('Whole menu total', total.price);

////////////////////////////////////////////////////////////////////////////////////////////

// B 1. Get Fazer lunch menu json file
import FazerMenu from './assets/fazerLunch.json';

// B 2. Implement a function that displays vegan dishes only. (Choosing just one day is ok.)
// (Kaikki päivät)
// const getVegeMeals = dayOfWeek => {
//   let vegeMeals = [];
//   for (const menu of FazerMenu.LunchMenus[dayOfWeek].SetMenus) {
//     for (const meal of menu.Meals) {
//       if (meal.Diets.includes('Veg')) {
//       vegeMeals.push(meal.Name);
//       }
//     }
//   }
//   return vegeMeals;
// };
// for(let i = 0; i <FazerMenu.LunchMenus.length; i++) {
// console.log(getVegeMeals(i));
// }

const vegan = [];

const parseFazerMenu = (menu) => {
  const setMenus = menu.SetMenus;
  for (const setMenu of setMenus) {
    const meals = setMenu.Meals;
    for (const meal of meals) {
      const name = meal.Name;
      const diets = meal.Diets;
      for (const diet of diets) {
        if (diet === 'Veg') {
          vegan.push(name);
        }
      }
    }
  }

};

parseFazerMenu(FazerMenu.LunchMenus[0]);
console.log('Vegan dishes', vegan);



