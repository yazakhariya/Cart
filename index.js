document.addEventListener("DOMContentLoaded", () => {
  // валидация пустого поля по нажатию на кнопку

  const button = document.querySelector(".concluding-card_order_button");
  const fields = document.querySelectorAll(".field");

  function RemoveError() {
    for (const field of fields) {
      field.addEventListener("keyup", () => {
        field.classList.remove("empty_field");
      });
    }
  }

  RemoveError();

  function FormValidation() {
    let result = true;
    for (const field of fields) {
      if (!field.value) {
        field.classList.add("empty_field");
        result = false;
      } else {
        field.classList.remove("empty_field");
        result = true;
      }
    }
    return result;
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (FormValidation(this) === true) {
      alert("Submitted");
    } else {
      alert("Please, fill all the fields in");
    }
  });
});
