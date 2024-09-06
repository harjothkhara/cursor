const authButton = document.getElementById('authButton');
const authModal = document.getElementById('authModal');
const closeBtn = document.querySelector('.close');
const authForm = document.getElementById('authForm');

authButton.addEventListener('click', () => {
    authModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    authModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === authModal) {
        authModal.style.display = 'none';
    }
});

authForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle authentication logic here
    console.log('Authentication submitted');
    authModal.style.display = 'none';
});