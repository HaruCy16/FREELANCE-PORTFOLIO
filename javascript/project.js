/*PROJECTS LOGIC, CHANGING VIEW FROM WEB DEV TO VIDEO EDIT AND VICE VERSA*/

/*Variables*/
const videoEditing = document.getElementById("videoEditing");
const webDev = document.getElementById("webDevelopment");
const switchBtn = document.getElementById("swapProjects");

/*FUNCTION CHANGE PROJECTS WHEN CLICK, WEB DEV TO VID EDITING VICE VERSA*/
switchBtn.addEventListener("click", () => {
  if (webDev.classList.contains("active")) {
    // Hide web development and show video editing
    webDev.classList.remove("active");
    webDev.classList.add("hidden");
    videoEditing.classList.remove("hidden");
    videoEditing.classList.add("active");
    switchBtn.innerHTML = "Web Development";
  } else if (videoEditing.classList.contains("active")) {
    // Opposite
    videoEditing.classList.remove("active");
    videoEditing.classList.add("hidden");
    webDev.classList.remove("hidden");
    webDev.classList.add("active");
    switchBtn.innerHTML = "Video Editing";
  }
});

/*VIDEO EDITING CHANGE PROJECT, SHORT TO LONG*/
const swapBtn = document.getElementById("swapVideoEditing");
const shortForm = document.getElementById("shortForm");
const longForm = document.getElementById("longForm");

swapBtn.addEventListener("click", (e) => {
  const shortFormDisplay = window.getComputedStyle(shortForm).display;
  const longFormDisplay = window.getComputedStyle(longForm).display;

  if (shortFormDisplay === "block") {
    shortForm.style.display = "none";
    longForm.style.display = "block";
    swapBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
  } else if (longFormDisplay === "block") {
    longForm.style.display = "none";
    shortForm.style.display = "block";
    swapBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
  }
});
