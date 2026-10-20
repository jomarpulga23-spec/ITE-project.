
document.addEventListener("DOMContentLoaded", function () {

    // Automatic year
    const year = document.getElementById("currentYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Dark mode
    const themeButton = document.getElementById("themeToggle");

    if (themeButton) {
        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            themeButton.textContent =
                document.body.classList.contains("dark-mode")
                ? "☀️"
                : "🌙";
        });
    }

    // Say Hello button
    const helloButton = document.getElementById("welcomeButton");
    const message = document.getElementById("welcomeMessage");

    if (helloButton && message) {
        helloButton.addEventListener("click", function () {
            message.textContent =
                "Hello! Thanks for visiting my portfolio! 😊";
        });
    }

    // Back to Top button
    const topButton = document.getElementById("backToTop");

    if (topButton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                topButton.classList.add("visible");
            } else {
                topButton.classList.remove("visible");
            }
        });

        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
