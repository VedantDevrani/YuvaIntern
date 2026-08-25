/* =====================================================
   TASK 3 - JAVASCRIPT INTERACTIVITY
===================================================== */


/* =====================================================
   1. MOBILE NAVIGATION MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


/* Close mobile menu after clicking a link */

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* =====================================================
   2. DARK / LIGHT MODE
===================================================== */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* Load previously selected theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

}


/* =====================================================
   3. CLICK COUNTER
===================================================== */

const countButton = document.getElementById("countButton");
const clickCount = document.getElementById("clickCount");

let count = 0;

countButton.addEventListener("click", function () {

    count++;

    clickCount.textContent = count;

});


/* =====================================================
   4. FEATURE DEMO BUTTONS
===================================================== */

const demoButtons = document.querySelectorAll("[data-message]");

demoButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const message = button.getAttribute("data-message");

        alert(message);

    });

});


/* =====================================================
   5. RANDOM NUMBER GENERATOR
===================================================== */

const randomButton = document.getElementById("randomNumber");
const randomResult = document.getElementById("randomResult");

randomButton.addEventListener("click", function () {

    const number = Math.floor(Math.random() * 100) + 1;

    randomResult.textContent = number;

});


/* =====================================================
   6. THEME DEMO BUTTON
===================================================== */

const themeDemo = document.getElementById("themeDemo");

themeDemo.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* =====================================================
   7. FAQ ACCORDION
===================================================== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem = question.parentElement;

        const allItems = document.querySelectorAll(".faq-item");

        allItems.forEach(function (item) {

            if (item !== currentItem) {

                item.classList.remove("active");

            }

        });

        currentItem.classList.toggle("active");

    });

});


/* =====================================================
   8. CONTACT FORM VALIDATION
===================================================== */

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;


    /* Clear previous errors */

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    document.querySelectorAll(".form-group").forEach(function (group) {

        group.classList.remove("error-field");

    });


    /* Validate name */

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Please enter your name.";

        nameInput.parentElement.classList.add("error-field");

        isValid = false;

    } else if (nameInput.value.trim().length < 2) {

        nameError.textContent =
            "Name must contain at least 2 characters.";

        nameInput.parentElement.classList.add("error-field");

        isValid = false;

    }


    /* Validate email */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        emailInput.parentElement.classList.add("error-field");

        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent =
            "Please enter a valid email.";

        emailInput.parentElement.classList.add("error-field");

        isValid = false;

    }


    /* Validate message */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter a message.";

        messageInput.parentElement.classList.add("error-field");

        isValid = false;

    } else if (messageInput.value.trim().length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        messageInput.parentElement.classList.add("error-field");

        isValid = false;

    }


    /* Success */

    if (isValid) {

        successMessage.classList.add("show");

        contactForm.reset();

        setTimeout(function () {

            successMessage.classList.remove("show");

        }, 5000);

    }

});


/* =====================================================
   9. SCROLL TO TOP BUTTON
===================================================== */

const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


scrollTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   10. BUTTON ANIMATION
===================================================== */

const buttons = document.querySelectorAll(".btn, .demo-btn");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.96)";

        setTimeout(function () {

            button.style.transform = "";

        }, 120);

    });

});