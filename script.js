document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registration-form');

  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Extract form data
    const formData = {
      'first-name': document.getElementById('first-name').value,
      'last-name': document.getElementById('last-name').value,
      'email': document.getElementById('email').value,
      'password': document.getElementById('password').value,
      'age': document.getElementById('age').value,
      'bio': document.getElementById('bio').value,
      'weight': document.getElementById('weight').value,
      'feet': document.getElementById('feet').value,
      'inches': document.getElementById('inches').value,
    };

    // Save the form data to localStorage
    localStorage.setItem('userProfile', JSON.stringify(formData));

    // Redirect to the profile page
    window.location.href = 'profile.html';
  });
});
function validatePassword() {
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('password-error');

  if (passwordInput.checkValidity()) {
    // Password meets the pattern requirements
    passwordError.textContent = '';
  } else {
    // Password does not meet the pattern requirements
    passwordError.textContent = 'Password must be at least 8 characters and include lowercase and uppercase letters, digits, and special characters.';
  }
}

document.getElementById('registration-form').addEventListener('submit', function (event) {
  validatePassword();

  // Prevent form submission if password is invalid
  if (!document.getElementById('password').checkValidity()) {
    event.preventDefault();
  }
});
