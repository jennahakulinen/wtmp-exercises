// B
import fazerMenu from './assets/fazerLunch.json';
// A

const menu = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

// A 1.

menu.forEach(meal => {
  const regexp = /^[A-ZÖÄÅ]{1}[a-zöäå,A-ZÖÄÅ/0-9()-\s]{4,64}$/;
  const test = regexp.test(meal.name);

  if(!test) {
    console.log(meal.name + 'is not valid');
  } else {
    console.log('All names are valid');
  }
});

// A 2.

  const sortedPrice = menu.sort((a, b) => {
    return b.price - a.price;
  });
  console.log('Sorted meals', sortedPrice);

// A 3.

const filter = menu.filter(f => f.price < 5);
console.log('Filtered meals', filter);

//A 4.

const raisedPrice = menu.map(n => (n.price * 1.15).toFixed(2));
console.log('Raised prices', raisedPrice);

// A 5.

const total = menu.reduce((a, b) => ({price: a.price + b.price}));
console.log('Whole menu total', total);

// A funcion calls

sortedPrice();
filter();
raisedPrice();
total();

// B

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

parseFazerMenu(fazerMenu.LunchMenus[0]);
console.log('Vegan dishes', vegan);

// B function call



