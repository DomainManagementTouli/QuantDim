// Add this script to any page you want to protect
document.addEventListener('DOMContentLoaded', function() {
    if (!Auth.isAuthenticated()) {
        const currentPath = window.location.pathname.split('/').pop();
        window.location.href = 'login.html?redirect=' + encodeURIComponent(currentPath);
    }
});