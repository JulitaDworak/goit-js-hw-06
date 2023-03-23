const inputRange = document.getElementById('font-size-control')
const spanUpandDown = document.getElementById('text')
const spanSize = document.getElementById('size')


let fontSize = 16


const maxFontSize = 96

const swipe = (event) => { 
    fontSize += 1 && fontSize <= maxFontSize
    spanUpandDown.style.fontSize = inputRange.value + "px"
    spanSize.innerHTML = inputRange.value 
}

inputRange.addEventListener('input', swipe)