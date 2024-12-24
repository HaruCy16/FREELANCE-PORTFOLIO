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
const navbar = document.getElementById("navigationBar");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition < lastScrollPosition && isHidden) {
    // Scrolling up: Show the navbar smoothly
    navbar.style.transform = "translateY(0)";
    navbar.style.transition = "top 2s ease-in";
    isHidden = false;
  } else if (currentScrollPosition > lastScrollPosition && !isHidden) {
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "top 2s ease-in-out";
    isHidden = true;
  }

  lastScrollPosition = currentScrollPosition; // Update the scroll position
});

/*SUBMIT BUTTON WHEN CLICK SHOW UNDER DEVELOP*/
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  alert("Form back-end is under development");
  alert(
    "Please contact through email/phone number or any of my social media links"
  );
  alert("Thank you for understanding");
});
