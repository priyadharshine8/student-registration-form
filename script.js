document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const hobbies = document.querySelectorAll('input[name="hobby"]:checked');
  const course = document.getElementById("course").value;

  // Clear errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  }

  // Password validation
  if (password.length < 8) {
    document.getElementById("passwordError").textContent = "Password must be at least 8 characters";
    valid = false;
  }

  // Gender validation
  if (!gender) {
    document.getElementById("genderError").textContent = "Select a gender";
    valid = false;
  }

  // Hobbies validation
  if (hobbies.length === 0) {
    document.getElementById("hobbiesError").textContent = "Select at least one hobby";
    valid = false;
  }

  // Course validation
  if (course === "") {
    document.getElementById("courseError").textContent = "Select a course";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    document.getElementById("regForm").reset();
  }
});
