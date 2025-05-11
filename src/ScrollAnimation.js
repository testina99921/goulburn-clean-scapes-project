
// This script will run after the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Initialize IntersectionObserver for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // Observe all elements with animate-section class
  const elements = document.querySelectorAll('.animate-section');
  elements.forEach(el => observer.observe(el));
  
  // Observe all elements with animate-on-scroll class
  const scrollElements = document.querySelectorAll('.animate-on-scroll');
  scrollElements.forEach(el => observer.observe(el));
});
