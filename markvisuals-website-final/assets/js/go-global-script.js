document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeIn 1s forwards"; // Trigger fade-in animation
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the section is visible
    }
  );

  sections.forEach((section) => {
    observer.observe(section); // Observe each section
  });
});
