const numberOfEl = document.querySelector('input')


const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const box = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let sticky = ""


const createBoxes = (amount) => {
  amount = document.querySelector('input[type="number]')
  sticky = document.createElement('div');
  box.append(sticky);
  sticky.style.width = "30px" 
  sticky.style.height = "30px"
  sticky.style.backgroundColor = getRandomHexColor()
  sticky.style.marginTop = "20px"
  }

const destroyBoxes = () => {
  box.innerHTML = null
}


// const newOne = () => {
//   const newOne = document.createElement('div');
//   box.append(newOne);
//   newOne.textContent = 'sdfghjkl'
//   newOne.style.width = "100px"
//   newOne.style.height = "100px"
//   newOne.style.color = "blue"
//   newOne.style.backgroundColor = "blue"
//   newOne.style.marginTop = "50px"
//   }



createBtn.addEventListener('click', createBoxes );
destroyBtn.addEventListener('click', destroyBoxes )