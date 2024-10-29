function changeBackgroundColor() {
    const colors = ['#f8f9fa', '#d1e7dd', '#f8d7da', '#cff4fc', '#fef3c7'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById('timeButton').addEventListener('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('currentTimeDisplay').textContent = 'Current Time: ' + currentTime;
});

function setGreeting() {
    const hours = new Date().getHours();
    let greeting = 'Good Day!';
    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    document.getElementById('greeting').textContent = greeting;
}

let currentStep = 0;
const steps = document.querySelectorAll('.step');

function showStep(step) {
    steps.forEach((s, index) => {
        s.classList.toggle('d-none', index !== step);
    });
    if (step === 1) {
        document.getElementById('reviewName').textContent = document.getElementById('nameInput').value;
        document.getElementById('reviewEmail').textContent = document.getElementById('emailInput').value;
    }
    document.getElementById('nameInput').focus();
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function submitForm() {
    alert('Form submitted successfully!');
    currentStep = 0;
    showStep(currentStep);
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
}

window.onload = function() {
    setGreeting();
    showStep(currentStep);
};

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextStep();
    } else if (event.key === 'ArrowLeft') {
        previousStep();
    }
});