$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        margin: 26,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });
  });
/*function switchSlide(id) {

    var slider = document.querySelector(id);
    var btn_prev = slider.querySelector('.button-wrap .button-prev');
    var btn_next = slider.querySelector('.button-wrap .button-next');

    var items = slider.querySelectorAll('.img-slide');
    var i = 0;

    btn_prev.onclick = function() {
        items[i].className = '';
        i--;

        if(i < 0) {
            i =  items.length - 1;
        }

        items[i].className = 'showed';
    };

    btn_next.onclick = function() {
        items[i].className = '';
        i++;

        if(i >= items.length) {
            i = 0;
        }

        items[i].className = 'showed';
    }
};

switchSlide('#slider');
switchSlide('#comments__slider');*/

var menu = document.querySelector('.header__button');
var nav = document.querySelector('.header__nav-list');

menu.addEventListener('click', function(evt) {
    evt.preventDefault();
    nav.classList.toggle('show-nav');
});