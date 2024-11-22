// Redirect to voting.html when the Login button is clicked
document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = 'voting.html';
});

// Redirect to voting.html when the Register button is clicked
document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = 'voting.html';
});

// Show the register form and hide the login form
function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// Show the login form and hide the register form
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}
