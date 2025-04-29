// Optional JavaScript for form feedback

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const response = document.getElementById("form-response");
  
    form.addEventListener("submit", (e) => {
      response.innerHTML = "Sending message...";
    });
  });
  