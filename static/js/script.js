document.addEventListener('DOMContentLoaded', () => {
    // Select elements with the class 'fade-in'
    const features = document.querySelectorAll('.fade-in');
    
    // Using Intersection Observer for scroll animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-active');
                // Unobserve the entry to prevent the animation from replaying
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    features.forEach(feature => {
        observer.observe(feature);
    });

    // Other animations (as previously described)
});

// CSS included in script.js
document.write(`
    <style>
    /* Fade-in animation */
    .fade-in {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 1s ease-out, transform 1s ease-out;
    }

    .fade-in-active {
        opacity: 1;
        transform: translateY(0);
    }

    /* Page loading animation */
    body {
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }

    body.page-loaded {
        opacity: 1;
    }

    /* Button hover effect */
    .button {
        transition: background-color 0.3s, transform 0.3s;
    }

    .button-hover {
        background-color: #66e0ff;
        transform: translateY(-3px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    /* Navbar scroll effect */
    nav {
        transition: background-color 0.3s;
    }

    .nav-scrolled {
        background-color: rgba(0, 0, 0, 0.8);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    </style>
`);
