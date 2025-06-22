import "./styles.css";

const form = document.querySelector("form");

const email = document.querySelector(".email");
const emailInput = document.querySelector("#mail");
const emailError = document.querySelector(".email > .error");

emailInput.addEventListener("blur", () => {
  if (!emailInput.validity.valid) {
    showEmailError();
  } else {
    emailError.textContent = "";
  }
});

function showEmailError() {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = "That's not real email address.";
  }
}

const country = document.querySelector(".country");
const countryInput = document.querySelector("#country");
const countryError = document.querySelector(".country > .error");

countryInput.addEventListener("blur", () => {
  if (!countryInput.validity.valid) {
    showCountryError();
  } else {
    countryError.textContent = "";
  }
});

function showCountryError() {
  if (countryInput.validity.valueMissing) {
    countryError.textContent = "You need to enter a country";
  } else if (countryInput.validity.tooShort) {
    countryError.textContent = "Every country name has at least four letters.";
  } else if (countryInput.validity.tooLong) {
    countryError.textContent =
      "The longest country name has only 56 characters.";
  }
}

const postalCodeInput = document.querySelector("#postal-code");
const postalCodeError = document.querySelector(".postal-code > .error");

postalCodeInput.addEventListener("blur", () => {
  if (!postalCodeInput.validity.valid) {
    showPostalCodeError();
  } else {
    postalCodeError.textContent = "";
  }
});

function showPostalCodeError() {
  if (postalCodeInput.validity.valueMissing) {
    postalCodeError.textContent = "You need to give your postal code";
  } else if (postalCodeInput.validity.patternMismatch) {
    postalCodeError.textContent = "That postal code does not exist.";
  }
}

const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector(".password > .error");

passwordInput.addEventListener("blur", showPasswordError);

function showPasswordError() {
  // password has atleast one capital letter, one number and one symbol
  const passWordRegex = /(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/;

  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = "You need to give password";
  } else if (passwordInput.validity.tooShort) {
    passwordError.textContent = "Password need to have atleast 8 characters";
  } else if (!passWordRegex.test(passwordInput.value)) {
    passwordError.textContent =
      "You need to have one number, capital letter and symbol";
  } else {
    passwordError.textContent = "";
  }
}

const passwordConfirmInput = document.querySelector("#password-confirm");
const passwordConfirmError = document.querySelector(
  ".password-confirm > .error",
);

passwordConfirmInput.addEventListener("blur", showConfirmPasswordError);

function showConfirmPasswordError() {
  if (passwordConfirmInput.validity.valueMissing) {
    passwordConfirmError.textContent = "You need to confirm password";
  } else if (passwordConfirmInput.value !== passwordInput.value) {
    passwordConfirmError.textContent =
      "Password confirmation does not match the password.";
    passwordConfirmInput.setCustomValidity("Passwords dont match");
  } else {
    passwordConfirmInput.setCustomValidity("");
    passwordConfirmError.textContent = "";
  }

}

const submitError = document.querySelector(".form-submit > .error");

form.addEventListener("submit", (e) => {
  console.log(form.checkValidity());
  // if (emailError.textContent) {
  //   submitError.textContent = "There is error with email";
  // } else if (countryError.textContent) {
  //   submitError.textContent = "There is error with country name";
  // } else if (postalCodeError.textContent) {
  //   submitError.textContent = "There is error with postal code";
  // } else if (passwordError.textContent) {
  //   submitError.textContent = "There is error with password";
  // } else if (passwordConfirmError.textContent) {
  //   submitError.textContent = "There is error with password confirmation";
  // } else {
  //   submitError.textContent = "Good job, you have now account!"
  // }

  e.preventDefault();
});
