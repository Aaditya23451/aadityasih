document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear any previous errors
    clearErrors();

    // Input validation
    let isValid = true;

    const institution = document.getElementById('institution').value.trim();
    const state = document.getElementById('state').value.trim();
    const city = document.getElementById('city').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validate institution
    if (institution === '') {
        isValid = false;
        document.getElementById('institutionError').textContent = "Institution name is required.";
    }

    // Validate state
    if (state === '') {
        isValid = false;
        document.getElementById('stateError').textContent = "State is required.";
    }

    // Validate city
    if (city === '') {
        isValid = false;
        document.getElementById('cityError').textContent = "City is required.";
    }

    // Validate address
    if (address === '') {
        isValid = false;
        document.getElementById('addressError').textContent = "Address is required.";
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.edu$/;
    if (email === '') {
        isValid = false;
        document.getElementById('emailError').textContent = "Email is required.";
    } else if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = "Please enter a valid .edu email.";
    }

    // If form is valid, you can proceed to submit the form data
    if (isValid) {
        alert("Form submitted successfully!");
        // Add logic to handle form submission, such as sending data to a server
        this.submit();
    }
});

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.textContent = '');
}
