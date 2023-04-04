let enabled
let isOpen = false

menuButton.addEventListener("click",() => {
    if (! isOpen == false || enabled == false) {return ;}

    isOpen = true

    mobileMenu.style.display = "flex"
})

MenuButtonClose.addEventListener("click", () => {
    if (! isOpen == true) {return ;}

    isOpen = false

    mobileMenu.style.display = "none"
})