document.getElementById('contact-us-btn').onclick = function() {
    document.getElementById('popup-form').style.display = 'block';
};

document.getElementById('close-btn').onclick = function() {
    document.getElementById('popup-form').style.display = 'none';
};

document.getElementById('submit-btn').onclick = function() {
    let userName = document.getElementById('name').value.trim();
    let greetingElement = document.getElementById('greeting');
    
    if (userName) {
        greetingElement.textContent = `Hello, ${userName}! Welcome! Thank you for reaching out! We will get back to you shortly.`;
    } else {
        greetingElement.textContent = `Please enter your name before submitting the form.`;
    }
    document.getElementById('name').value = '';
    document.getElementById('country').value = '';
    document.getElementById('message').value = '';
};

window.onclick = function(event) {
    if (event.target === document.getElementById('popup-form')) {
        document.getElementById('popup-form').style.display = 'none';
    }
};