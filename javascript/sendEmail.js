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
          .catch((error) => console.error("EmailJS Error:", error));
      });
  })
  .catch((error) =>
    console.error("Error fetching environment variables:", error)
  );
