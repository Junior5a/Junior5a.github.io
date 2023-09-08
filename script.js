const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav ul li a');

header.addEventListener('mouseenter', () => {
  header.style.backgroundColor = '#555';
});

header.addEventListener('mouseleave', () => {
  header.style.backgroundColor = '#333';
});

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#ff0';
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = '#fff';
  });
});

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const underline = window.getComputedStyle(link, '::after');
    underline.setProperty('width', '100%');
  });

  link.addEventListener('mouseleave', () => {
    const underline = window.getComputedStyle(link, '::after');
    underline.setProperty('width', '0');
  });
});

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('mouseenter', () => {
    section.style.backgroundColor = '#f5f5f5';
  });

  section.addEventListener('mouseleave', () => {
    section.style.backgroundColor = 'initial';
  });
});

const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');

formInputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.style.borderColor = '#ff0';
  });

  input.addEventListener('blur', () => {
    input.style.borderColor = '#ccc';
  });
});

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
window.addEventListener('scroll', function () {
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

// Animate the Contact Us section when it comes into view or goes out of view
function animateContactSection() {
  var contactSection = document.getElementById('contact');
  if (isElementInViewport(contactSection)) {
    contactSection.classList.add('fade-in');
    contactSection.classList.remove('fade-out');
  } else {
    contactSection.classList.remove('fade-in');
    contactSection.classList.add('fade-out');
  }
}

// Listen for scroll events and animate the Contact Us section
window.addEventListener('scroll', animateContactSection);
