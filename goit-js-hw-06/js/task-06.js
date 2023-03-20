const inputEl = document.getElementById("validation-input")

const borderColors = () => {
    if ( inputEl.value.length === +inputEl.dataset.length) {
        inputEl.className = 'valid'
    }
    else {
        inputEl.className = 'invalid'
    }

}


inputEl.addEventListener('blur', borderColors)

console.log(inputEl.value.length);
console.log(typeof inputEl.dataset.length);
console.log(inputEl.dataset.length);
console.log(typeof Number(inputEl.dataset.length.innerText));
