document.getElementById('loging-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get userPassword 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'mehedi12@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
});






