// script.js - Improved Version with Debugging

// Initialize EmailJS
emailjs.init("IBAm_uW3wigFxl7kF");

console.log("✅ EmailJS Initialized with User ID");

function showBookingModal() {
    document.getElementById('bookingModal').classList.remove('hidden');
}

function hideBookingModal() {
    document.getElementById('bookingModal').classList.add('hidden');
}

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');

    if (!form) {
        console.error("❌ Form with id 'bookingForm' not found!");
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        console.log("📤 Form submitted - Preparing to send email...");

        const params = {
            from_name: document.querySelector('input[name="name"]').value || "No Name",
            from_email: document.querySelector('input[name="email"]').value || "No Email",
            phone: document.querySelector('input[name="phone"]').value || "No Phone",
            date: document.querySelector('input[name="date"]').value || "No Date",
            time: document.querySelector('input[name="time"]').value || "No Time",
            message: document.querySelector('textarea[name="message"]').value || "No Message",
            to_email: "cosmincosmic68@gmail.com"
        };

        console.log("📋 Data being sent:", params);

        emailjs.send("service_bl9oojc", "template_6sonmze", params)
            .then(function(response) {
                console.log("✅ SUCCESS!", response.status, response.text);
                alert("✅ Email Sent Successfully to cosmincosmic68@gmail.com!");
                hideBookingModal();
                form.reset();
            })
            .catch(function(error) {
                console.error("❌ EmailJS FAILED:", error);
                alert("❌ Failed to send email.\n\nPlease check console (F12) for details.");
            });
    });
});

// Close modal when clicking background
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) hideBookingModal();
        });
    }
});
