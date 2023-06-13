const toggleButton = document.getElementById('toggle-button');
const toggleMessage = document.getElementById('toggle-message');
const messages = [
  "Don't worry, we'll get you back on track!",
  "Looks like you've taken a wrong turn.",
  "Sorry, the page you're looking for doesn't exist.",
  "Uh-oh! This is not where you wanted to be.",
  "Lost in the digital wilderness? We'll help you find your way.",
  "The page you're looking for has vanished into thin air!",
  "Well, this is awkward. Anyone know how to turn around?",
  "Who says wrong turns can't lead to the right place?",
  "Who ate the 404 error page? We need answers!",
  "Looks like the page went out for coffee, try again later.",
  "Looks like we misplaced that page, have you seen it?",
  "Whoops! Looks like we misplaced that page, sorry about that!",
  "Well, this is awkward... but have you tried turning it off and on again?",
  "Looks like we've lost our marbles, try again later!",
  "Looks like we just hit a dead end, whoops!",
"Well, that's one way to avoid a typo.",
"The only thing missing is the sound of a sad trombone.",
  "Looks like we've hit a dead end, time to U-turn!",
  "Error 404: File not found. Did you try turning it off and on again?"
];

toggleButton.addEventListener('click', () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  toggleMessage.textContent = randomMessage;
  toggleMessage.classList.toggle('hidden');
});

toggleButton.addEventListener('mouseover', () => {
  toggleButton.style.cursor = 'pointer';
});
