const board = document.querySelector('body')
const spanColor = document.querySelector('.color')
const changeBtn = document.querySelector('.change-color')


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const newColor = () => {
  board.style.backgroundColor = getRandomHexColor()
  spanColor.innerHTML = getRandomHexColor()
}

changeBtn.addEventListener("click", newColor)

console.log(getRandomHexColor());
console.log(newColor());