document.getElementById('loginButton').addEventListener('click', function() {
    // Redirect to voting.html when the Login button is clicked
    window.location.href = 'voting.html';
});

document.getElementById('registerButton').addEventListener('click', function() {
    // Redirect to voting.html when the Register button is clicked
    window.location.href = 'voting.html';
});

// Show register form function
function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// Show login form function
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}
