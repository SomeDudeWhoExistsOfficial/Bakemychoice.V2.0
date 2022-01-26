function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.form_message');

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`)
} 

function setInputError(inputElement, message) {
        inputElement.classList.add("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');
    const accountCreateForm = document.querySelector('#createAccount');
    const linkAcct = document.querySelector('#linkCreateAccount');

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        accountCreateForm.classList.remove("form-hidden");
        linkAcct.classList.add("form-hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        accountCreateForm.classList.add("form-hidden");
        linkAcct.classList.remove("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
       e.preventDefault();
       
       // ajax something or the other

       setFormMessage(loginForm, "error", "Wrong Password / Email! Try Again.");
    });

    document.querySelectorAll(".form-control").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });
    });
});