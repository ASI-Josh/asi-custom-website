// Countdown Timer
function initCountdown() {
    // Set launch date to October 1st, 2025 AEST (UTC+10)
    const launchDate = new Date('2025-10-01T00:00:00+10:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;
        
        if (distance < 0) {
            // If launch date has passed, show zeros
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update countdown immediately
    updateCountdown();
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
}

// Email notification form
function initNotifyForm() {
    const form = document.getElementById('notifyForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]').value;
        const button = form.querySelector('button');
        const originalText = button.textContent;
        
        // Simulate form submission
        button.textContent = 'Submitting...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = 'Thank You!';
            button.style.background = '#4CAF50';
        }, 2000);
    });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initNotifyForm();
});
