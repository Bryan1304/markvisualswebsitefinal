// Navbar scroll behavior with throttling
let lastScroll = 0;
let ticking = false;

function handleScroll() {
  const navbar = document.querySelector(".navbar");
  const currentScroll = window.pageYOffset;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Add/remove scrolled class based on scroll position
      navbar.classList.toggle("scrolled", currentScroll > 50);

      // Hide/show navbar based on scroll direction
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add("hidden");
        navbar.classList.remove("visible");
      } else {
        navbar.classList.remove("hidden");
        navbar.classList.add("visible");
      }

      lastScroll = currentScroll;
      ticking = false;
    });

    ticking = true;
  }
}

window.addEventListener("scroll", handleScroll, { passive: true });

// Navigation active state with enhanced animations
const navLinks = document.querySelectorAll(".nav-links a");
let activeLink = null;

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    if (activeLink) {
      activeLink.classList.remove("active");
    }

    activeLink = link;
    activeLink.classList.add("active");

    // Animate icon
    const icon = activeLink.querySelector("i");
    if (icon) {
      icon.style.animation = "none";
      icon.offsetHeight; // Trigger reflow
      icon.style.animation = "bounce 0.5s ease";
    }

    // Navigate after animation
    setTimeout(() => {
      window.location.href = link.href;
    }, 300);
  });
});

// Slideshow functionality with fade transitions
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

if (slides.length > 0) {
  showSlides();
}

function showSlides() {
  // Hide all slides with opacity transition
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    setTimeout(() => {
      slides[i].style.display = "none";
    }, 500); // Match this with CSS transition time
  }

  slideIndex = (slideIndex % slides.length) + 1;

  // Show new slide with fade in
  slides[slideIndex - 1].style.display = "block";
  setTimeout(() => {
    slides[slideIndex - 1].style.opacity = "1";
  }, 50);

  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Explore button animation and navigation
const exploreButton = document.querySelector(".explore-button");
if (exploreButton) {
  exploreButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Add fade-out animation
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";

    // Navigate after animation
    setTimeout(() => {
      window.location.href = this.href;
    }, 500);
  });
}

// Add keyframe animations dynamically
const style = document.createElement("style");
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
    }

    @keyframes rotate360 {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    .mySlides {
        transition: opacity 0.5s ease-in-out;
    }

    body {
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);

// Initialize page with fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  requestAnimationFrame(() => {
    document.body.style.opacity = "1";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loadingSpinner = document.createElement("div");
  loadingSpinner.classList.add("loading");
  loadingSpinner.innerHTML = "<p>Loading...</p>";
  document.body.appendChild(loadingSpinner);

  window.onload = function () {
    loadingSpinner.style.display = "none";
  };
});
