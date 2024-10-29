const loginForm = document.getElementById('loginForm');
const loginSection = document.getElementById('login-section');
const accountSection = document.getElementById('account-section');
const userDisplay = document.getElementById('userDisplay');
const userGender = document.getElementById('userGender');
const logoutBtn = document.getElementById('logoutBtn');
const passwordHelp = document.getElementById('passwordHelp');

function checkUserSession() {
    const username = localStorage.getItem('username');
    const gender = localStorage.getItem('gender');

    if (username && gender) {
        showAccountSection(username, gender); 
    } else {
        showLoginSection(); 
    }
}

function showLoginSection() {
    loginSection.classList.remove('d-none');
    accountSection.classList.add('d-none');
}

function showAccountSection(username, gender) {
    loginSection.classList.add('d-none');
    accountSection.classList.remove('d-none');
    userDisplay.textContent = username;
    userGender.textContent = gender;
}

function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);       
    const hasNumber = /[0-9]/.test(password);           
    const hasSpecialChar = /[!@#$%^&*]/.test(password); 

    return password.length >= minLength && hasUpperCase && hasNumber && hasSpecialChar;
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;

    if (!validatePassword(password)) {
        passwordHelp.classList.remove('d-none'); 
        return; 
    } else {
        passwordHelp.classList.add('d-none');
    }

    if (username && password && gender) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password); 
        localStorage.setItem('gender', gender);

        showAccountSection(username, gender); 
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('gender');
    showLoginSection();
});

checkUserSession();
