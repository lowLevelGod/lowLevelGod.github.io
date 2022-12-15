window.addEventListener("DOMContentLoaded", function () {
  // Look for .hamburger
  const hamburger = document.querySelector(".hamburger");
  const navLinksWrapper = document.querySelector(".nav-links-wrapper");
  const navLinks = document.querySelectorAll(".nav-links-wrapper li");
  hamburger.classList.remove("is-active");
  navLinksWrapper.classList.remove("show-navLinksWrapper");
  // On click
  hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    navLinksWrapper.classList.toggle("show-navLinksWrapper");
    const navLinks_array = [...navLinks];
    navLinks_array.forEach((i) => {
      i.classList.toggle("show-nav-link");
    });
  });
});