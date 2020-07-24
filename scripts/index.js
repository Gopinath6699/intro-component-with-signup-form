/* FORM VALIDATION */
function formSubmit() {
  event.preventDefault();
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let email = document.getElementById("mail");
  let password = document.getElementById("pass");
  let checkEmail = email.value;

  /* ON KEY PRESS REMOVE WARNING */
  firstName.addEventListener("keypress", () => {
    firstName.classList.remove("invalid");
    document.getElementById("first-name").style.visibility = "hidden";
  });
  lastName.addEventListener("keypress", () => {
    lastName.classList.remove("invalid");
    document.getElementById("last-name").style.visibility = "hidden";
  });
  email.addEventListener("keypress", () => {
    email.classList.remove("invalid");
    document.getElementById("email-id").style.visibility = "hidden";
  });
  password.addEventListener("keypress", () => {
    password.classList.remove("invalid");
    document.getElementById("password").style.visibility = "hidden";
  });

  /* CHECKING IF VALID OR NOT */
  if (firstName.value == "") {
    document.getElementById("first-name").style.visibility = "visible";
    document.getElementById("fname").placeholder = "";
    firstName.classList.add("invalid");
  } else {
    document.getElementById("fname").placeholder = "First Name";
  }
  if (lastName.value == "") {
    document.getElementById("last-name").style.visibility = "visible";
    document.getElementById("lname").placeholder = "";
    lastName.classList.add("invalid");
  } else {
    document.getElementById("lname").placeholder = "Last Name";
  }
  if (checkEmail == "" || !checkEmail.includes("@")) {
    email.value = "";
    document.getElementById("email-id").style.visibility = "visible";
    document.getElementById("mail").placeholder = "email@example/com";
    email.classList.add("invalid");
  } else {
    document.getElementById("mail").placeholder = "Email Address";
  }
  if (password.value == "") {
    document.getElementById("password").style.visibility = "visible";
    document.getElementById("pass").placeholder = "";
    password.classList.add("invalid");
  } else {
    document.getElementById("pass").placeholder = "Password";
  }
}
