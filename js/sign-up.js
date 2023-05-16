const passwordInput = document.querySelector('#password-input');
const passwordConfirmInput = document.querySelector('#password-confirm-input');
const passwordMatchError = document.querySelector('#password-match-error');

passwordConfirmInput.addEventListener('input', () => {
    if (passwordInput.value !== passwordConfirmInput.value) {
        passwordMatchError.style.display = 'block';
    } else {
        passwordMatchError.style.display = 'none';
    }
});
