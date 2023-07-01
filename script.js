        // Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll-triggered animation to sections
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (isElementInViewport(section)) {
      section.classList.add('animate');
    } else {
      section.classList.remove('animate');
    }
  });
});

// Helper function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


// Check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Animate the Contact Us section when it comes into view or goes out of view
function animateContactSection() {
  var contactSection = document.getElementById('contact');
  if (isInViewport(contactSection)) {
    contactSection.classList.add('fade-in');
    contactSection.classList.remove('fade-out');
  } else {
    contactSection.classList.remove('fade-in');
    contactSection.classList.add('fade-out');
  }
}

// Listen for scroll events and animate the Contact Us section
window.addEventListener('scroll', animateContactSection);
