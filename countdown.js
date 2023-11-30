document.addEventListener('DOMContentLoaded', function () {
    // Function to calculate and display the countdown
    function calculateCountdown() {
      // Get the current date
      const currentDate = new Date();
  
      // Set the target date (New Year's Day)
      const targetDate = new Date(currentDate.getFullYear() + 1, 0, 1);
  
      // Calculate the difference in milliseconds
      const timeDifference = targetDate - currentDate;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      // Display the countdown
      document.getElementById('countdown').textContent = `Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
  
    // Calculate and display the countdown
    calculateCountdown();
  
    // Update the countdown every second
    setInterval(calculateCountdown, 1000);
  });
  