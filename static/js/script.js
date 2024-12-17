document.addEventListener('DOMContentLoaded', function() {
    // Update local time
    function updateLocalTime() {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        const timeString = now.toLocaleDateString('en-US', options);
        document.getElementById('localTime').textContent = timeString;
    }

    // Update time immediately and then every second
    updateLocalTime();
    setInterval(updateLocalTime, 1000);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation class to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });
});