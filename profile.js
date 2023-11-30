document.addEventListener('DOMContentLoaded', function () {
  // Function to load saved data from local storage
  function loadProfileData() {
    const savedData = localStorage.getItem('userProfile');
    if (savedData) {
      const formData = JSON.parse(savedData);

      // Display user information
      document.getElementById('display-first-name').textContent = 'First Name: ' + formData['first-name'];
      document.getElementById('display-last-name').textContent = 'Last Name: ' + formData['last-name'];
      document.getElementById('display-email').textContent = 'Email: ' + formData['email'];
      document.getElementById('display-password').textContent = `Password:${formData['password']}`;
      document.getElementById('display-age').textContent = 'Age: ' + formData['age'];
      document.getElementById('bio').textContent = 'Bio: ' + formData['bio'];

      // Display BMI information
      document.getElementById('display-weight').textContent = 'Weight: ' + formData['weight'] + ' lbs';
      document.getElementById('display-feet').textContent = 'Feet: ' + formData['feet'];
      document.getElementById('display-inches').textContent = 'Inches: ' + formData['inches'];

      // Calculate BMI
      const heightInInches = formData['feet'] * 12 + formData['inches'];
      const heightInMeters = (formData['feet'] * 0.3048) + (formData['inches'] * 0.0254);
      const weightInKilograms = formData['weight'] * 0.453592;
      const bmi = weightInKilograms / (heightInMeters * heightInMeters);
     
      // Document BMI 
      document.getElementById('display-bmi').textContent = 'BMI: ' + bmi.toFixed();

      // Determine BMI category
      let category = '';
      if (bmi < 18.5) {
          category = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
          category = 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
          category = 'Overweight';
      } else {
          category = 'Obese';
      }

      // Display the BMI category
document.getElementById('display-category').textContent = 'Category: ' + category;
      // Update other fields as needed
    }
  }

  // Load saved data when the profile page is loaded
  loadProfileData();
});
