//ENSURE INPUTS
//NAME INPUT
const nameInput = document.getElementById("name");

if (nameInput) {
  nameInput.addEventListener("input", function () {
    nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, "");
    if (nameInput.value.length > 50) {
      nameInput.value = nameInput.value.substring(0, 50);
    }
  });
}

//EMAIL INPUT
function validateEmailInput() {
  const emailElement = document.getElementById("email");
  const emailValue = emailElement.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailValue)) {
    emailElement.placeholder = ""; // This now refers to the input element
  } else {
    alert("Please enter a valid email address.");
  }
}

//SEND EMAIL
fetch("/api/env")
  .then((response) => response.json())
  .then((env) => {
    emailjs.init(env.EMAILJS_PUBLIC_KEY);

    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs
          .send(env.EMAILJS_SERVICE_ID, env.EMAILJS_TEMPLATE_ID, {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
          })
          .then(() => alert("Message sent successfully!"))
          .catch((error) =>
            alert("Error fetching environment variables: " + error.message)
          );
      });
  })
  .catch((error) =>
    console.log("Error fetching environment variables: " + error.message)
  );
