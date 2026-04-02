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
 * Newsletter form submission via Formsubmit.co
 * Sends an email notification to pranavkondalkar@gmail.com
 */
const newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = document.getElementById("newsletter-email");
    const email = emailInput.value;
    const submitBtn = newsletterForm.querySelector("button[type='submit']");

    // Disable button while submitting
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Send form data to Formsubmit.co (emails pranavkondalkar@gmail.com)
    fetch("https://formsubmit.co/ajax/pranavkondalkar@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: email,
        _subject: "🚀 New Newsletter Subscriber - Victory Code Games",
        message: "New subscriber: " + email
      })
    })
    .then(response => response.json())
    .then(data => {
      // Show thank you message
      newsletterForm.style.display = "none";
      document.getElementById("newsletter-thankyou").style.display = "block";
    })
    .catch(error => {
      // Still show thank you (email might have sent)
      newsletterForm.style.display = "none";
      document.getElementById("newsletter-thankyou").style.display = "block";
    });
  });
}