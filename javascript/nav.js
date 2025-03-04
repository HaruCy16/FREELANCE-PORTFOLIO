/*Navigation*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// /*NAVIGATION AUTO HIDE WHEN SCROLL*/
let lastScrollPosition = 0;
let isHidden = true; // Track if the navbar is hidden
const navbar = document.getElementById("navigationBar");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition < lastScrollPosition && isHidden) {
    isHidden = false;
  } else if (currentScrollPosition > lastScrollPosition && !isHidden) {
    isHidden = true;
  }

  lastScrollPosition = currentScrollPosition; // Update the scroll position

  // Hide nav links on mobile when scrolling
  if (window.innerWidth <= 768) {
    const navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  }
});

/*NAVIGATION IN MOBILE*/

/*Burger menu*/
document.getElementById("burgerMenu").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("active");
});

/* Hide nav on touch outside */
document.addEventListener("touchstart", function (e) {
  const navLinks = document.getElementById("navLinks");
  const burgerMenu = document.getElementById("burgerMenu");

  if (!navLinks.contains(e.target) && !burgerMenu.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});
