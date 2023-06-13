const toggleButton = document.getElementById('toggle-button');
const toggleMessage = document.getElementById('toggle-message');
const messages = [
  "Don't worry, we'll get you back on track!",
  "Looks like you've taken a wrong turn.",
  "Sorry, the page you're looking for doesn't exist.",
  "Uh-oh! This is not where you wanted to be.",
  "Lost in the digital wilderness? We'll help you find your way.",
  "The page you're looking for has vanished into thin air!"
];

toggleButton.addEventListener('click', () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  toggleMessage.textContent = randomMessage;
  toggleMessage.classList.toggle('hidden');
});

toggleButton.addEventListener('mouseover', () => {
  toggleButton.style.cursor = 'pointer';
});
