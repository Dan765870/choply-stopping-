// Bannière fade-in
window.addEventListener("load", () => {
    const banner = document.querySelector(".banner");
    banner.style.opacity = 1;
});

// Animation logo
const logo = document.querySelector("header h1 img");
logo.addEventListener("mouseenter", () => {
    logo.style.transform = "scale(1.2) rotate(360deg)";
});
logo.addEventListener("mouseleave", () => {
    logo.style.transform = "scale(1) rotate(0deg)";
});

// Scroll navigation
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}
