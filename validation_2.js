document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".receiver-info-wrapper");
  const email = document.getElementById("user-email");
  const name = document.getElementById("user-name");
  const lastname = document.getElementById("user-lastname");
  const phone = document.getElementById("user-tel");
  const regnum = document.getElementById("user-regnum");

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re =
      /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
    return re.test(phone);
  }

  function InputsValidation() {
    if (email.value && !validateEmail(email.value)) {
      email.classList.add("empty_field");
    } else {
      email.classList.remove("empty_field");
    }

    if (phone.value && !validatePhone(phone.value)) {
      phone.classList.add("empty_field");
    } else {
      phone.classList.remove("empty_field");
    }

    if (name.value && name.value.length < 2) {
      name.classList.add("empty_field");
    } else {
      name.classList.remove("empty_field");
    }

    if (lastname.value && lastname.value.length < 2) {
      lastname.classList.add("empty_field");
    } else {
      lastname.classList.remove("empty_field");
    }

    if (regnum.value && regnum.value.length !== 10) {
      regnum.classList.add("empty_field");
    } else {
      regnum.classList.remove("empty_field");
    }
  }

  form.addEventListener("click", InputsValidation);
});
