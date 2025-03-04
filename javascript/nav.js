//Navigation

//NAVIGATION SMOOTH WHEN TOGGLED
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//NAVIGATION AUTO HIDE WHEN SCROLL
let prevScrollpos = window.scrollY;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigationBar").style.top = "0";
  } else {
    document.getElementById("navigationBar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
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
