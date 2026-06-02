
document.addEventListener("DOMContentLoaded", function () {

    const menuBar = document.getElementById("menu_bar");
    const navbar = document.getElementById("navbar");

    // safety check (IMPORTANT)
    if (menuBar && navbar) {
        menuBar.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }

});
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navbar").classList.remove("active");
    });
});