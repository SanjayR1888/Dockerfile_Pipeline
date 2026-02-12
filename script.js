function sayHello() {
    const message = document.getElementById('message');
    message.textContent = 'Hello! Welcome to Docker Lab! 🚀';
}

// Log when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Docker Lab page loaded successfully!');
});
