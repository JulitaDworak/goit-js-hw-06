const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('ul')

for( let i = 0; i < ingredients.length; i++) {
  const liList = document.createElement('li')
  liList.textContent = ingredients[i]
  liList.classList.add('item')
  ulList.appendChild(liList)
}
console.log(ingredients.length);
console.log(ulList);


// ----------------------------------------
// inny sposób/
// const listOfProducts = ingredients
// .map((ingredient) => `<li class="item"> ${ingredient}</li>`)

// ulList.innerHTML = listOfProducts


// console.log(listOfProducts);