const themeButton = document.getElementById("theme-button");
const form = document.getElementById('petitionForm');

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
   
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    if (validateForm()) {
        return;
    }
    
    alert('Thank you for signing the petition!');

    const resultDiv = document.getElementById('resultDiv');
    const result = document.createElement('p');
    result.textContent = name + ' supports the cause!';
    resultDiv.appendChild(result);
    form.reset();
});

const validateForm = () => {
    let containsErrors = false;
    let petitionInputs = document.getElementById("petitionForm").elements;
    for (let i = 0; i < petitionInputs.length; i++) {
        if (petitionInputs[i].value.length < 2) {
            alert("Please enter your name");
            containsErrors = true;
            petitionInputs[i].classList.add('error');
        }
        else {
            petitionInputs[i].classList.remove('error');
        }
    }
    return containsErrors;
}
 themeButton.addEventListener("click", toggleDarkMode);

// for (let i = 0; i < petitionInputs.length; i++) {
//     petitionInputs[i].value = "";
// }
// }

// var petitionInputs = document.getElementById("sign-petition").elements;


// signNowButton.addEventListener('click', validateForm);