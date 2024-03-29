const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    if(window.scrollY > 0){
        header.classList.add("nav-active")
    }
    else {
        header.classList.remove("nav-active")
    }
})