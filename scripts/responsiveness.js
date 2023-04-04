if (window.innerWidth <= 700) {
    body.style.margin = "2% 3%"

    nav.style.display = "none"

    menuButton.style.display = "inline-block"
    enabled = true

    main.style.display = "flex"

    headlineImage.style.display = "flex"
    headlineImage.style.alignSelf = "center"
    headlineImage.style.width = "90%"

    mainNews.style.display = "flex"
    mainNews.style.height = "200px"

    otherNews.style.flexDirection = "column"
    otherNews.querySelectorAll("section").forEach((section) => {
        section.style.margin = "10px 0px"
        section.querySelector("p").style.maxWidth = "100%"
    })

} else if (window.innerWidth > 700 && window.innerWidth <= 900) {
    body.style.margin = "2% 3%"

    nav.style.display = "flex"

    menuButton.style.display = "none"
    enabled = true

    main.style.display = "grid"

    headlineImage.style.width = "unset"

    otherNews.style.flexDirection = "column"
    otherNews.querySelectorAll("section").forEach((section) => {
        section.style.margin = "10px 0px"
        section.querySelector("p").style.maxWidth = "100%"
    })

} else if (window.innerWidth > 900) {
    body.style.margin = "1% 15%"

    nav.style.display = "flex"

    menuButton.style.display = "none"
    enabled = false
    isOpen = false    
    mobileMenu.style.display = "none"

    main.style.display = "grid"

    headlineImage.style.display = "normal"
    headlineImage.style.alignSelf = "unset"
    headlineImage.style.width = "unset"

    mainNews.style.display = "grid"
    mainNews.style.height = "unset"

    otherNews.style.flexDirection = "row"

    otherNews.querySelectorAll("section").forEach((section) => {
        section.style.margin = "10px 0px"
        section.querySelector("p").style.maxWidth = "90%"
    })
}

window.addEventListener("resize", () => {
    if (window.innerWidth <= 700) {
        body.style.margin = "2% 3%"

        nav.style.display = "none"

        menuButton.style.display = "inline-block"
        enabled = true
    
        main.style.display = "flex"
    
        headlineImage.style.display = "flex"
        headlineImage.style.alignSelf = "center"
        headlineImage.style.width = "90%"
    
        mainNews.style.display = "flex"
        mainNews.style.height = "200px"
    
        otherNews.style.flexDirection = "column"
        otherNews.querySelectorAll("section").forEach((section) => {
            section.style.margin = "10px 0px"
            section.querySelector("p").style.maxWidth = "100%"
        })

    } else if (window.innerWidth > 700 && window.innerWidth <= 900) {
        body.style.margin = "2% 3%"

        nav.style.display = "flex"

        menuButton.style.display = "none"
        enabled = true

        main.style.display = "grid"

        headlineImage.style.width = "unset"
    
        otherNews.style.flexDirection = "column"
        otherNews.querySelectorAll("section").forEach((section) => {
            section.style.margin = "10px 0px"
            section.querySelector("p").style.maxWidth = "100%"
        })

    } else if (window.innerWidth > 900) {
        body.style.margin = "1% 15%"

        nav.style.display = "flex"

        menuButton.style.display = "none"
        enabled = false
        isOpen = false
        mobileMenu.style.display = "none"
    
        main.style.display = "grid"
    
        headlineImage.style.display = "normal"
        headlineImage.style.alignSelf = "unset"
        headlineImage.style.width = "unset"
    
        mainNews.style.display = "grid"
        mainNews.style.height = "unset"
    
        otherNews.style.flexDirection = "row"
    
        otherNews.querySelectorAll("section").forEach((section) => {
            section.style.margin = "10px 0px"
            section.querySelector("p").style.maxWidth = "90%"
        })
    }
}) 