const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}


// Wait until the page content is loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#Contact form");
    const nameInput = form.querySelector('input[placeholder="Enter Your Full Name"]');
    const emailInput = form.querySelector('input[placeholder="Enter Your Email"]');
    const messageInput = form.querySelector('input[placeholder="Enter Your Message"]');
    const submitBtn = form.querySelector(".btn");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        let name = nameInput.value.trim();
        let email = emailInput.value.trim();
        let message = messageInput.value.trim();

        if (name === "" || email === "" || message === "") {
            alert("⚠ Please fill in all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("⚠ Please enter a valid email address.");
            return;
        }

        emailjs.send("service_z3sbw4i", "template_haq6dym", {
            from_name: name,
            from_email: email,
            message: message
        }).then(
            function () {
                alert("✅ Your message has been sent!");
                nameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";
            },
            function (error) {
                alert("❌ Failed to send message. Please try again.");
                console.error(error);
            }
        );
    });
});






