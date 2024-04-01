/*const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    if(window.scrollY > 0){
        header.classList.add("nav-active")
    }
    else {
        header.classList.remove("nav-active")
    }
})*/
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("open");
}
function closeMenu() {
    const menu = document.querySelector(".menu-links");
    menu.classList.remove("open");
}
document.addEventListener("click", function(event) {
    const menu = document.querySelector(".menu-links");
    const hamburgerIcon = document.querySelector(".hamburger-icon");

    // Check if the click target is not the menu links or the hamburger icon
    if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        closeMenu(); // Close the menu
    }
});
