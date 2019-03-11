var menu = document.querySelector(".header__button");
var nav = document.querySelector(".header__nav-list");
var img = document.querySelector(".banner-section__img-wrap");

menu.addEventListener("click", function(evt) {
    evt.preventDefault();
    nav.classList.toggle("show-nav");
});

/*menu.addEventListener("click", function(evt) {
    evt.preventDefault();
   img.classList.toggle("remove-img");
});*/