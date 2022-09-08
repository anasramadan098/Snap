let myMenu = document.querySelector("#menu1");
let myMenu2 = document.querySelector("#menu2");
let myMenu3 = document.querySelector("#menu3");
let myMenu4 = document.querySelector("#menu4");
let link = document.querySelector(".links li");
let link2 = document.querySelector("#link2")
let link3 = document.querySelector("#link3")
let link4 = document.querySelector("#link4")
let mobileMenu = document.querySelector(".mobile-menu")

link.onclick = function() {
    myMenu.classList.toggle("block")
}

link2.onclick = function() {
    myMenu2.classList.toggle("block")
}
// mobile
link3.onclick = function() {
    myMenu3.classList.toggle("block")
}

link4.onclick = function() {
    myMenu4.classList.toggle("block")
}
let myToggle = document.querySelector(".toggle")
        myToggle.onclick = function () {
            myToggle.classList.toggle("active")
            mobileMenu.classList.toggle("translate")
        }