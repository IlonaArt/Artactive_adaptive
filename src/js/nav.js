var menu = document.querySelector(".header__button");
var nav = document.querySelector(".header__nav-list");

menu.addEventListener("click", function(evt) {
    evt.preventDefault();
    nav.classList.toggle("show-nav");
});