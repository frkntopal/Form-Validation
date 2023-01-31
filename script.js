const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, ) {
    input.className = 'form-control is-invalid'
}


function success(input) {
    input.className = 'form-control is-valid'
}
form.addEventListener('submit', function(e) {
    e.preventDefault(); // form submit edilmez. Tekrar tekrar yüklenmez
    if (username.value === "") {
        error(username);
        document.getElementById('errormessage1').innerHTML = 'Kullanıcı adı girmelisiniz.'
        document.getElementById('errormessage1').className = 'invalid-feedback'
    } else {
        success(username)
    }
    if (email.value === "") {
        error(email);
        document.getElementById('errormessage2').innerHTML = 'Mail adresinizi girmelisiniz.'
        document.getElementById('errormessage2').className = 'invalid-feedback'
    } else {
        success(email)
    }
    if (password.value == "" || password.value == null) {
        error(password);
        document.getElementById('errormessage3').innerHTML = 'Şifrenizi boş bırakmayınız.'
        document.getElementById('errormessage3').className = 'invalid-feedback'
    } else {
        success(password)
    }

    if (repassword.value == null || repassword.value == "") {
        error(repassword);
        document.getElementById('errormessage4').innerHTML = 'Şifrenizi boş bırakmayınız.'
        document.getElementById('errormessage4').className = 'invalid-feedback'
    } else {
        success(repassword)
    }
    if (!(password.value == repassword.value)) {
        error(password);
        document.getElementById('errormessage3').innerHTML = 'Şifreler eşleşmiyor'
        document.getElementById('errormessage3').className = 'invalid-feedback'
        error(repassword);
        document.getElementById('errormessage4').innerHTML = 'Şifreler eşleşmiyor'
        document.getElementById('errormessage4').className = 'invalid-feedback'
    }
});