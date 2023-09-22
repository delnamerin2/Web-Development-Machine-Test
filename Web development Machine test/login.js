document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (username.value === 'delna' && password.value === '12345') {
            window.location.href = 'employeepage.html';
        }
        else if(username.value === 'admin' && password.value === '123'){
            window.location.href = 'adminhome.html';
        }
        else
            alert('Invalid username or password');
    });
});