const inputEvent = document.getElementById('name-input')
const outputEvent = document.getElementById('name-output')
const noName = "Anonymous"
const minLength = 1;

inputEvent.addEventListener("input" , (event) => {
    if (event.currentTarget.value) {
        outputEvent.textContent = event.currentTarget.value;
    } 
    else {
        outputEvent.textContent = noName;
    }
        
    }
  )

