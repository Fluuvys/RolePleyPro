document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Simple validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Here you would typically send the data to the server
    // For now, we will just log it to the console
    console.log("Registered:", { username, email, password });

    // Clear the form
    document.getElementById("registerForm").reset();

    // Optionally, redirect to another page or show a success message
    alert("Registration successful!");
});
