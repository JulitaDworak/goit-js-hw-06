const btnIncrease = document.querySelector('[data-action="increment"]')
const btnDecrease = document.querySelector('[data-action="decrement"]')
const value = document.querySelector('#value')

let counterValue = 0

const increase = () => {
    counterValue += 1
    value.textContent = counterValue
}

const decrease = () => {
    counterValue -=1
    value.textContent = counterValue
}

btnIncrease.addEventListener('click', increase)
btnDecrease.addEventListener('click', decrease)

