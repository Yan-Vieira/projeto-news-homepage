const body = document.querySelector("body")
const main = document.querySelector("main")
const nav = document.querySelector("nav")
const otherNews = document.querySelector("main > section#other-news")
const mainNews = document.querySelector("main > section#main-news")
const menuButton = document.querySelector("header > button#menu-button")

if (window.innerWidth < 700) {
    menuButton.style.display = "inline-block"

    nav.style.display = "none"

    main.style.display = "flex"
    main.style.flexDirection = "column"
    body.style.margin = "0 5%"
    nav.style.display = "none"

    mainNews.style.display = "flex"
    mainNews.style.flexDirection = "column"
    mainNews.style.height = "200px"

    otherNews.style.flexDirection = "column"
    otherNews.style.flexWrap = "wrap"
    otherNews.style.justifyContent = "space-between"
    otherNews.style.height = "380px"
} else {
    menuButton.style.display = "none"

    nav.style.display = "flex"

    main.style.display = "grid"
    body.style.margin = "1% 15%"
    nav.style.display = "flex"

    otherNews.style.flexDirection = "row"
    otherNews.style.flexWrap = "nowrap"
    otherNews.style.alignContent = "none"
    otherNews.style.height = "fit-content"
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 700) {
        menuButton.style.display = "inline-block"

        nav.style.display = "none"

        main.style.display = "flex"
        main.style.flexDirection = "column"
        body.style.margin = "0 5%"
        nav.style.display = "none"

        mainNews.style.display = "flex"
        mainNews.style.flexDirection = "column"
        mainNews.style.height = "200px"

            otherNews.style.flexDirection = "column"
        otherNews.style.flexWrap = "wrap"
        otherNews.style.justifyContent = "space-between"
        otherNews.style.height = "380px"
    } else {
        menuButton.style.display = "none"

        nav.style.display = "flex"

        main.style.display = "grid"
        body.style.margin = "1% 15%"
        nav.style.display = "flex"

        otherNews.style.flexDirection = "row"
        otherNews.style.flexWrap = "nowrap"
        otherNews.style.alignContent = "none"
        otherNews.style.height = "fit-content"
    }
})