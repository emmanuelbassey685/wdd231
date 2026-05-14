const hamButton = document.getElementById("hamButton");
const navLinks = document.getElementById("navLinks");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active");
    navLinks.classList.toggle("active");
})