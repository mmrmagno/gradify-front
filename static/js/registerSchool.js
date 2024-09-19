document.addEventListener('DOMContentLoaded', () => {
    // Add 'page-loaded' class for fade-in effect
    document.body.classList.add('page-loaded');

    // Form submission handling
    const form = document.getElementById('school-registration-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('School registered successfully!');
    });
});
