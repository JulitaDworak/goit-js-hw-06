
const form = document.querySelector(".login-form");
const p = document.createElement('p')
form.append(p)


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!")
    // return console.log("Please fill in all the fields!");
p.textContent = "Come on... You have to fill in all the fields"
p.style.fontSize = "20px"
p.style.color = "red"
  }

  else{
p.textContent = "Welcome on our website!! Have fun!"
p.style.fontSize = "20px"
p.style.color = "green"
  }
  
  console.log(`Email: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
});


