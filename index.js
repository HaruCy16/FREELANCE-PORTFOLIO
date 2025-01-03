/*Navigation*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/*NAVIGATION AUTO HIDE WHEN SCROLL*/
let lastScrollPosition = 0;
let isHidden = true; // Track if the navbar is hidden
const navbar = document.getElementById("burgerMenu");

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

document.getElementsByClassName("nav-links");

/*HERO SECTION IMAGE CHANGED EVERY 3 SECS*/
let heroImage = document.getElementById("heroImage");

let heroImages = [
  "skills_images/javaScript.jpg",
  "skills_images/vid_editing.jpg",
  "skills_images/content_creation.jpg",
  "profiles/hero_profile.jpg",
];

let heroImageIndex = 0;

function heroImageChanged() {
  heroImage.classList.remove("fade-in");
  heroImage.classList.add("fade-out");

  setTimeout(() => {
    heroImage.src = `${heroImages[heroImageIndex]}`;
    heroImageIndex = (heroImageIndex + 1) % heroImages.length;
    heroImage.classList.remove("fade-out");
    heroImage.classList.add("fade-in");
  }, 1000);
}

setInterval(heroImageChanged, 3000);

heroImageChanged();

/*HERO SECTION H2 TITLE CHANGED EVERY 3 SECS*/
let myTitle = document.getElementById("myTitle");

let myTitles = [
  "Student Website Developer",
  "Video Editor",
  "Content Creator",
  "Freelancer",
];

let myTitleIndex = 0;

function myTitleChanged() {
  myTitle.classList.remove("fade-in");
  myTitle.classList.add("fade-out");

  setTimeout(() => {
    myTitle.textContent = `${myTitles[myTitleIndex]}`;
    myTitleIndex = (myTitleIndex + 1) % myTitles.length;
    myTitle.classList.remove("fade-out");
    myTitle.classList.add("fade-in");
  }, 1000); // Match this duration with the CSS transition duration
}

setInterval(myTitleChanged, 3000);

myTitleChanged();
