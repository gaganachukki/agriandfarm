document.addEventListener('DOMContentLoaded', () => {
    
    // Helper function for showing errors
    const showError = (input, message) => {
        const formControl = input.parentElement;
        formControl.classList.add('error');
        formControl.classList.remove('success');
        let errorEl = formControl.querySelector('.error-message');
        if (!errorEl) {
            errorEl = document.createElement('small');
            errorEl.className = 'error-message';
            formControl.appendChild(errorEl);
        }
        errorEl.innerText = message;
        
        // simple GSAP shake animation
        if(typeof gsap !== 'undefined') {
            gsap.fromTo(input, {x: -5}, {x: 5, duration: 0.1, yoyo: true, repeat: 3});
        }
    };

    const showSuccess = (input) => {
        const formControl = input.parentElement;
        formControl.classList.remove('error');
        formControl.classList.add('success');
        const errorEl = formControl.querySelector('.error-message');
        if (errorEl) errorEl.remove();
    };

    // Email validation regex
    const isValidEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    // Login Validation
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const role = document.querySelector('input[name="role"]:checked');

            if (!email.value.trim()) {
                showError(email, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Email is invalid');
                isValid = false;
            } else {
                showSuccess(email);
            }

            if (!password.value.trim()) {
                showError(password, 'Password is required');
                isValid = false;
            } else {
                showSuccess(password);
            }

            if (isValid) {
                // Simulate authentication
                if (role && role.value === 'admin') {
                    window.location.href = 'AdminDashboard.html';
                } else {
                    window.location.href = 'FarmerDashboard.html';
                }
            }
        });
    }

    // Signup Validation
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        const nameInput = document.getElementById('name');
        if (nameInput) {
            nameInput.addEventListener('input', function(e) {
                this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
            });
        }
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm-password');

            if (!name.value.trim()) {
                showError(name, 'Full name is required');
                isValid = false;
            } else {
                showSuccess(name);
            }

            if (!email.value.trim() || !isValidEmail(email.value)) {
                showError(email, 'Valid email is required');
                isValid = false;
            } else {
                showSuccess(email);
            }

            if (!password.value.trim() || password.value.length < 6) {
                showError(password, 'Password must be at least 6 characters');
                isValid = false;
            } else {
                showSuccess(password);
            }

            if (password.value !== confirmPassword.value) {
                showError(confirmPassword, 'Passwords do not match');
                isValid = false;
            } else {
                showSuccess(confirmPassword);
            }

            if (isValid) {
                window.location.href = 'Login.html';
            }
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const contactNameInput = document.getElementById('contact-name');
        if (contactNameInput) {
            contactNameInput.addEventListener('input', function(e) {
                this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
            });
        }

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if(!input.value.trim()) {
                    showError(input, 'This field is required');
                    isValid = false;
                } else if (input.id === 'contact-name' && input.value.trim().length < 3) {
                    showError(input, 'Name must be at least 3 characters');
                    isValid = false;
                } else if (input.id === 'contact-email' && !isValidEmail(input.value)) {
                    showError(input, 'Please enter a valid email');
                    isValid = false;
                } else if (input.id === 'contact-message' && input.value.trim().length < 10) {
                    showError(input, 'Message must be at least 10 characters');
                    isValid = false;
                } else {
                    showSuccess(input);
                }
            });
            
            if(isValid) {
                const btn = contactForm.querySelector('button[type="submit"]');
                const origText = btn.innerText;
                btn.innerText = "Sending...";
                setTimeout(() => {
                    btn.innerText = "Sent Successfully!";
                    btn.style.backgroundColor = 'var(--primary-color)';
                    contactForm.reset();
                    setTimeout(() => btn.innerText = origText, 3000);
                }, 1500);
            }
        });
    }
});
