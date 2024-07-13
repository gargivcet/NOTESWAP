// JavaScript to handle label animations for input fields
const inputFields = document.querySelectorAll('.input-container input, .input-container textarea');

inputFields.forEach((inputField) => {
    inputField.addEventListener('focus', () => {
        inputField.parentElement.querySelector('label').classList.add('active');
    });

    inputField.addEventListener('blur', () => {
        if (inputField.value === '') {
            inputField.parentElement.querySelector('label').classList.remove('active');
        }
    });
});
