import "./styles.css";

const email = document.querySelector(".email");
const emailInput = document.querySelector("#mail");
const emailError = document.querySelector(".email > .error");

emailInput.addEventListener("input", () => {
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

countryInput.addEventListener("input", () => {
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

postalCodeInput.addEventListener("input", () => {
    if (!postalCodeInput.validity.valid) {
        showPostalCodeError()
    } else {
        postalCodeError.textContent = "";
    }
})

function showPostalCodeError() {
    if (postalCodeInput.validity.valueMissing) {
        postalCodeError.textContent = "You need to give your postal code";
    } else if (postalCodeInput.validity.patternMismatch) {
        postalCodeError.textContent = "That postal code does not exist."
    }
}
