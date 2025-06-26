export function displayDefaultError() {
  const form = document.querySelector("form");
  const emailInput = document.querySelector("#mail");

  function clearMessage(input) {
    input.setCustomValidity("");
  }

  emailInput.addEventListener("blur", showEmailError);
  emailInput.addEventListener("input", () => {
    clearMessage(emailInput);
  });

  function showEmailError() {
    if (emailInput.validity.valueMissing) {
      emailInput.setCustomValidity("You need to enter an email address.");
    } else if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity("That's not real email address.");
    } else {
      emailInput.setCustomValidity("");
    }
    // emailInput.reportValidity();
  }

  const countryInput = document.querySelector("#country");

  countryInput.addEventListener("blur", showCountryError);
  countryInput.addEventListener("input", () => {
    clearMessage(countryInput);
  });

  function showCountryError() {
    if (countryInput.validity.valueMissing) {
      countryInput.setCustomValidity("You need to enter a country");
    } else if (countryInput.validity.tooShort) {
      countryInput.setCustomValidity(
        "Every country name has at least four letters.",
      );
    } else if (countryInput.validity.tooLong) {
      countryInput.setCustomValidity(
        "The longest country name has only 56 characters.",
      );
    } else {
      countryInput.setCustomValidity("");
    }
    // countryInput.reportValidity();
  }

  const postalCodeInput = document.querySelector("#postal-code");

  postalCodeInput.addEventListener("blur", showPostalCodeError);
  postalCodeInput.addEventListener("input", () => {
    clearMessage(postalCodeInput);
  });

  function showPostalCodeError() {
    if (postalCodeInput.validity.valueMissing) {
      postalCodeInput.setCustomValidity("You need to give your postal code");
    } else if (postalCodeInput.validity.patternMismatch) {
      postalCodeInput.setCustomValidity("That postal code does not exist.");
    } else {
      postalCodeInput.setCustomValidity("");
    }
    // postalCodeInput.reportValidity();
  }

  const passwordInput = document.querySelector("#password");

  passwordInput.addEventListener("blur", showPasswordError);
  passwordInput.addEventListener("input", () => {
    clearMessage(passwordInput);
  });

  function showPasswordError() {
    if (passwordInput.validity.valueMissing) {
      passwordInput.setCustomValidity("You need to give password");
    } else if (passwordInput.validity.tooShort) {
      passwordInput.setCustomValidity(
        "Password need to have atleast 8 characters",
      );
    } else if (passwordInput.validity.patternMismatch) {
      passwordInput.setCustomValidity(
        "You need to have one number, capital letter and symbol",
      );
    } else {
      passwordInput.setCustomValidity("");
    }
    // passwordInput.reportValidity();
  }

  const passwordConfirmInput = document.querySelector("#password-confirm");

  passwordConfirmInput.addEventListener("blur", showConfirmPasswordError);
  passwordConfirmInput.addEventListener("input", () => {
    clearMessage(passwordConfirmInput);
  });

  function showConfirmPasswordError() {
    if (passwordConfirmInput.validity.valueMissing) {
      passwordConfirmInput.setCustomValidity("You need to confirm password");
    } else if (passwordConfirmInput.value !== passwordInput.value) {
      passwordConfirmInput.setCustomValidity(
        "Password confirmation does not match the password.",
      );
    } else {
      passwordConfirmInput.setCustomValidity("");
    }
    // passwordConfirmInput.reportValidity();
  }

  const submitError = document.querySelector(".text");

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      submitError.textContent = "Error";
      form.reportValidity();
    } else {
      submitError.textContent = "Good job!";
    }
    e.preventDefault();
  });
}
