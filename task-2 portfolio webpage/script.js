// Highlight active nav link based on current page
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Dynamic greeting (for homepage only)
if (document.title.includes("Home")) {
  const greeting = document.createElement('p');
  const hour = new Date().getHours();
  let message = "Welcome to my portfolio!";

  if (hour < 12) {
    message = "Good morning, and welcome!";
  } else if (hour < 18) {
    message = "Good afternoon, glad you're here!";
  } else {
    message = "Good evening, explore my work!";
  }

  greeting.textContent = message;
  greeting.className = "greeting fade-in";
  document.querySelector('.hero').appendChild(greeting);
}
