// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') 
        ? 'Toggle Light Mode' 
        : 'Toggle Dark Mode';
});

// Counter Game Functionality
let score = 0;
const counterScore = document.getElementById('counterScore');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

incrementBtn.addEventListener('click', () => {
    score++;
    counterScore.textContent = score;
    // Add animation for visual feedback
    counterScore.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterScore.style.transform = 'scale(1)';
    }, 200);
});

resetBtn.addEventListener('click', () => {
    score = 0;
    counterScore.textContent = score;
});

// Form Validation Functionality
const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

// Validate name (at least 2 characters, only letters and spaces)
function validateName(name) {
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    return nameRegex.test(name);
}

// Validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate password (at least 8 characters, 1 number, 1 uppercase, 1 special character)
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Real-time validation on input
nameInput.addEventListener('input', () => {
    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Name must be at least 2 characters (letters and spaces only)';
    } else {
        nameError.textContent = '';
    }
});

emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailError.textContent = '';
    }
});

passwordInput.addEventListener('input', () => {
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be 8+ characters with 1 uppercase, 1 number, 1 special character';
    } else {
        passwordError.textContent = '';
    }
});

// Form submission handling
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate all fields
    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Name must be at least 2 characters (letters and spaces only)';
        isValid = false;
    }
    
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be 8+ characters with 1 uppercase, 1 number, 1 special character';
        isValid = false;
    }
    
    // Show success message if all validations pass
    if (isValid) {
        formSuccess.textContent = 'Form submitted successfully!';
        userForm.reset();
        // Clear error messages
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        // Clear success message after 3 seconds
        setTimeout(() => {
            formSuccess.textContent = '';
        }, 3000);
    }
});