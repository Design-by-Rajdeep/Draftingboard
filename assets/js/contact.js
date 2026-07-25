/* ============================================================
   CONTACT.JS
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /*====================================
        BACK TO TOP BUTTON
    ====================================*/

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({ top: 0, behavior: "smooth" });

        });

    }

    /*====================================
        SCROLL TO STATUS MESSAGE
        (after a PHP form submit/reload)
    ====================================*/

    const alertBox = document.querySelector(".contact-alert");

    if (alertBox) {

        alertBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

    /*====================================
        SIMPLE CLIENT-SIDE VALIDATION
        (mirrors the required PHP fields)
    ====================================*/

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", (e) => {

            const name = form.querySelector("#contact_name");
            const email = form.querySelector("#contact_email");
            const message = form.querySelector("#contact_message");

            let hasError = false;

            [name, email, message].forEach((field) => {

                if (!field.value.trim()) {
                    field.style.borderColor = "#ee5149";
                    hasError = true;
                } else {
                    field.style.borderColor = "";
                }

            });

            if (hasError) {
                e.preventDefault();
            }

        });

    }

});



const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});