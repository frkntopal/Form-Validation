const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid'
}
form.addEventListener('submit', function(e) {
    e.preventDefault(); // form submit edilmez. Tekrar tekrar yüklenmez
    if (username.value === "") {
        error(username, 'username gerekli')
    } else {
        success(username)
    }
    if (email.value === "") {
        error(email)
    } else {
        success(email)
    }
    if (password.value === "") {
        error(password)
    } else {
        success(password)
    }
    if (repassword.value === "") {
        error(repassword)
    } else {
        success(repassword)
    }
});