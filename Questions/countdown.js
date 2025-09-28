        // --- JavaScript for Countdown Logic ---

        // Set the initial time for the countdown
        let countdownTime = 3;

        // Get the elements from the DOM
        const countdownTimerElement = document.getElementById('countdown-timer');
        const countdownBannerElement = document.getElementById('countdown-banner');
        const mainContentElement = document.getElementById('main-content');
        
        // Update the timer display initially
        countdownTimerElement.textContent = countdownTime;

        // Set an interval to run every second
        const timerInterval = setInterval(() => {
            // Decrease the time
            countdownTime--;

            // Update the timer on the screen
            countdownTimerElement.textContent = countdownTime;

            // When the countdown reaches zero
            if (countdownTime <= 0) {
                // Stop the interval
                clearInterval(timerInterval);

                // Add the 'hidden' class to start the fade-out animation
                countdownBannerElement.classList.add('hidden');

                // Wait for the fade-out transition to finish before hiding the banner completely
                setTimeout(() => {
                    // Hide the banner from the layout
                    countdownBannerElement.style.display = 'none';
                    // Show the main content
                    mainContentElement.style.display = 'block';
                }, 1000); // This timeout should match the CSS transition duration
            }
        }, 1000); // 1000 milliseconds = 1 second
