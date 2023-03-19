const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('ul')

// for( let i = 0; i < ingredients.length; i++) {
//   const liList = document.createElement('li')
//   liList.textContent = ingredients[i]
//   ulList.appendChild(liList)
// }
// console.log(ingredients.length);
// console.log(ulList);


const listOfProducts = ingredients
.map((ingredient) => `<li class="item"> ${ingredient}</li>`)
// .join="";
// ulList.insertAdjacentHTML("afterbegin", listOfProducts)
ulList.innerHTML = listOfProducts


console.log(listOfProducts);