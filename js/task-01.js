

const numOfCategories = document.querySelectorAll('.item')

console.log(`Number of categories ${numOfCategories.length}`)

for( const element of numOfCategories) {
    console.log(`Category: ${element.children[0].innerText}`);
    console.log(`Elements: ${element.children[1].children.length}`);
}

console.log(`----------------`);

console.log(`Number of categories ${numOfCategories.length}`)
numOfCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})