/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
     const form = document.getElementById("contact-form");
     const emailInput = document.getElementById("email");
     const messagediv = document.querySelector(".message");

     form.addEventListener("submit", function(event) {
         event.preventDefault(); // Prevent the default form submission

         const emailValue = emailInput.value.trim();

          if (emailValue) {
               messageDiv.textContent = `Thank you! Your email address '${email}' has been added to our mailing list!`;
               messageDiv.style.color = "white"; // ensures visibility on green background
        } else {
               messageDiv.textContent = "Please enter a valid email address.";
               messageDiv.style.color = "white";
        }
    });
});
 
               
