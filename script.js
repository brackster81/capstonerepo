
function submitForm() {
  // Get form values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const age = document.getElementById('age').value;
  const bio = document.getElementById('bio').value;
  const weight = document.getElementById('weight').value;
  const feet = document.getElementById('feet').value;
  const inches = document.getElementById('inches').value;

  // Create an object with form data
  const formData = {
    'first-name': firstName,
    'last-name': lastName,
    'email': email,
    'password': password,
    'age': age,
    'bio': bio,
    'weight': weight,
    'feet': feet,
    'inches': inches,
  };

  // Store the form data in local storage
  localStorage.setItem('userProfile', JSON.stringify(formData));

  // Redirect to the profile page
  window.location.href = 'profile.html';
}
