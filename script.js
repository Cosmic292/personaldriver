// script.js

// Function to show the booking modal
function showBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// Function to hide the booking modal
function hideBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // You can add Formspree or other backend logic here later
            
            alert("✅ Booking request sent successfully !\n\nI will contact you shortly.");
            
            hideBookingModal();
            this.reset();
        });
    }
});

// Optional: Close modal when clicking outside the content
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('bookingModal');
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideBookingModal();
            }
        });
    }
});
