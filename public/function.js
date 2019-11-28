// get form element
const form = document.querySelector("form");

// add event listener of submit and prevent form from refreshing page
form.addEventListener("submit", handleFormSubmit);

// function that is being called within the event listener
function handleFormSubmit(e) {
    e.preventDefault();
    validateForm();
}

function validateForm() {
    // declare variables
    let firstName = document.querySelector("#input-fname");
    let lastName = document.querySelector("#input-lname");
    let phone = document.querySelector("#input-number");
    let email = document.querySelector("#input-mail");
    let age = document.querySelector("#input-age");
    let formMsg = document.querySelector("#form-msg");
    let successMessage = document.querySelector("#success");

    //   array for error messages
    let errorMessages = [];

    //   regex expressions
    let checkForNumbers = /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/;
    let checkValidEmail = /^\S+@\S+\.\S+$/;

    if (
        firstName.value == "" ||
        lastName == "" ||
        phone.value == "" ||
        email.value == ""
    ) {
        errorMessages.push(`<li>Please fill in empty field's</li>`);
    } else if (!checkValidEmail.test(email.value)) {
        errorMessages.push(`<li>Invalid E-mail address</li>`);
    }

    if (
        firstName.value.match(checkForNumbers) ||
        lastName.value.match(checkForNumbers)
    ) {
        errorMessages.push(
            `<li>First name/last name cannot contain any numbers</li>`
        );
    }

    if (isNaN(phone.value)) {
        errorMessages.push(`<li>Phone number must only contain numbers</li>`);
    }

    if (age.value === "Select your age") {
        errorMessages.push(`<li>Please choose an age</li>`);
    }

    if (errorMessages.length > 0) {
        formMsg.classList.add("animated", "shake");
        formMsg.style.display = "block";
        formMsg.innerHTML = errorMessages.join(" ");
        return false;
    }
    form.remove();
    successMessage.style.display = "block";
    successMessage.innerHTML = "Thank you for registering!";
    return true;
}