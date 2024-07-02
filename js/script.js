document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const welcomeMessage = document.getElementById('welcome-message');

    // JavaScript for "Hi Name" welcome message
    const name = prompt('Please enter your name:');
    if (name) {
        welcomeMessage.textContent = `Hi ${name}, Welcome to Website`;
    }

    // Form validation
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (name && email && phone && message) {
            alert(`Thank you for your message, ${name}!`);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
