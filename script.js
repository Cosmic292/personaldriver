// script.js - With EmailJS Integration

// Initialize EmailJS (Replace with your actual User ID)
emailjs.init("YOUR_EMAILJS_USER_ID");   // ←←← Change this!

// Show Booking Modal
function showBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.remove('hidden');
}

// Hide Booking Modal
function hideBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.add('hidden');
}

// Handle Form Submission with EmailJS
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const params = {
                from_name: document.querySelector('input[name="name"]').value,
                from_email: document.querySelector('input[name="email"]').value,
                phone: document.querySelector('input[name="phone"]').value,
                date: document.querySelector('input[name="date"]').value,
                time: document.querySelector('input[name="time"]').value,
                message: document.querySelector('textarea[name="message"]').value,
                to_email: "cosmincosmic68@gmail.com"
            };

            // Send email using EmailJS
            emailjs.send("service_bl9oojc", "template_6sonmze", params)
                .then(function(response) {
                    alert("✅ Email Sent Successfully!");
                    hideBookingModal();
                    bookingForm.reset();
                })
                .catch(function(error) {
                    alert("❌ Failed to send email. Please try again later.");
                    console.error('EmailJS Error:', error);
                });
        });
    }
});

// Close modal when clicking outside
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
