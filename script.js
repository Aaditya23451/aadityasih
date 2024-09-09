document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const category = document.getElementById('category').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!category || !username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Example of handling the login
    // Here you would typically send the data to a server for authentication
    console.log('Category:', category);
    console.log('Username:', username);
    console.log('Password:', password);

    // For demo purposes, just show an alert
    alert(`Logged in as ${category === 'alumni' ? 'Alumni' : category === 'student' ? 'Student' : 'Administrator'}`);
});
