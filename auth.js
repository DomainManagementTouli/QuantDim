// Simple user storage (in a real app, this would be on a server)
// For demo purposes, we'll store one user. In production, consider using a proper backend.
const validUsers = [
    {
        email: 'user@example.com',
        password: 'password123', // In real apps, never store plain passwords!
        id: 1
    }
];

// Hash function for basic password "security" (still not secure for production)
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}

// Store hashed passwords (in real app, do this during user registration)
validUsers.forEach(user => {
    user.passwordHash = simpleHash(user.password);
});

class Auth {
    static isAuthenticated() {
        return localStorage.getItem('authenticated') === 'true';
    }

    static login(email, password) {
        const user = validUsers.find(u => u.email === email);
        if (user && simpleHash(password) === user.passwordHash) {
            localStorage.setItem('authenticated', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userId', user.id);
            return true;
        }
        return false;
    }

    static logout() {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userId');
        window.location.href = 'login.html';
    }

    static getCurrentUser() {
        if (this.isAuthenticated()) {
            return {
                email: localStorage.getItem('userEmail'),
                id: localStorage.getItem('userId')
            };
        }
        return null;
    }
}

// Login form handler
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('error');

        if (Auth.login(email, password)) {
            // Redirect to the page they were trying to access or dashboard
            const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || 'dashboard.html';
            window.location.href = redirectUrl;
        } else {
            errorDiv.textContent = 'Invalid email or password';
            errorDiv.style.display = 'block';
        }
    });
}