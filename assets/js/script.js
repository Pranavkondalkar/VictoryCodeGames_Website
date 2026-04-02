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
 * Newsletter form submission
 */
const newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("newsletter-email").value;

    // Send email via mailto (opens user's mail client as fallback)
    const subject = encodeURIComponent("New Newsletter Subscription - Victory Code Games");
    const body = encodeURIComponent("New subscriber email: " + email);
    
    // Create a hidden iframe to send mailto without navigating away
    const mailtoLink = document.createElement("a");
    mailtoLink.href = "mailto:pranavkondalkar@gmail.com?subject=" + subject + "&body=" + body;
    mailtoLink.style.display = "none";
    document.body.appendChild(mailtoLink);
    mailtoLink.click();
    document.body.removeChild(mailtoLink);

    // Show thank you message
    newsletterForm.style.display = "none";
    document.getElementById("newsletter-thankyou").style.display = "block";
  });
}