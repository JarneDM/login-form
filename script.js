const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const inputForm = document.getElementById("form");

inputForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isEmailValid = emailPattern.test(emailInput.value);
  const isPasswordSecure = passwordPattern.test(passwordInput.value);
  const doPasswordsMatch = passwordInput.value === confirmPasswordInput.value && isPasswordSecure;

  emailInput.classList.toggle("success", isEmailValid);
  emailInput.classList.toggle("error", !isEmailValid);

  passwordInput.classList.toggle("success", isPasswordSecure);
  passwordInput.classList.toggle("error", !isPasswordSecure);
  confirmPasswordInput.classList.toggle("success", isPasswordSecure);
  confirmPasswordInput.classList.toggle("error", !isPasswordSecure);
 
  passwordInput.classList.toggle("error", !doPasswordsMatch);
  confirmPasswordInput.classList.toggle("error", !doPasswordsMatch);
  passwordInput.classList.toggle("success", doPasswordsMatch);
  confirmPasswordInput.classList.toggle("success", doPasswordsMatch);
});
