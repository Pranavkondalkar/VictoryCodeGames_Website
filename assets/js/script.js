'use strict';

/**
 * Navbar toggle (mobile)
 */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

if (navbarToggler) {
  navbarToggler.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
  });
}

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    if (navbarToggler) navbarToggler.classList.remove("active");
  });
}

/**
 * Header scroll & back to top button
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    if (backTopBtn) backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    if (backTopBtn) backTopBtn.classList.remove("active");
  }
});

/**
 * Games Carousel with auto-scroll and manual controls
 */
const carousel = document.querySelector("[data-carousel]");
const carouselDots = document.querySelectorAll(".carousel-dot");
const prevBtn = document.querySelector(".carousel-btn-prev");
const nextBtn = document.querySelector(".carousel-btn-next");

if (carousel) {
  const gameCards = carousel.querySelectorAll(".game-card-featured");
  let currentIndex = 0;
  let autoScrollInterval;
  const autoScrollDelay = 5000; // 5 seconds

  // Function to update carousel position
  function updateCarousel(index) {
    currentIndex = index;
    
    // Handle wrap-around
    if (currentIndex >= gameCards.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = gameCards.length - 1;
    
    // Scroll to the current card
    const scrollAmount = currentIndex * carousel.offsetWidth;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    
    // Update dots
    carouselDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  // Auto-scroll function
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, autoScrollDelay);
  }

  // Stop auto-scroll on user interaction
  function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
  }

  // Previous button
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      updateCarousel(currentIndex - 1);
      resetAutoScroll();
    });
  }

  // Next button
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      updateCarousel(currentIndex + 1);
      resetAutoScroll();
    });
  }

  // Dot navigation
  carouselDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateCarousel(index);
      resetAutoScroll();
    });
  });

  // Pause auto-scroll on hover
  carousel.addEventListener("mouseenter", () => {
    clearInterval(autoScrollInterval);
  });

  carousel.addEventListener("mouseleave", () => {
    startAutoScroll();
  });

  // Start auto-scroll
  startAutoScroll();
}