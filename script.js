document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            document.getElementById("formMessage").textContent = "All fields are required.";
            document.getElementById("formMessage").style.color = "red";
            return;
        }

        // Example of a successful submission
        document.getElementById("formMessage").textContent = "Message sent successfully!";
        document.getElementById("formMessage").style.color = "green";

        form.reset();
    });
});
