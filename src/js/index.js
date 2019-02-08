var btn_prev = document.querySelector('#slider .button-wrap .button-prev');
var btn_next = document.querySelector('#slider .button-wrap .button-next');

var images = document.querySelectorAll('#slider .service__img-wrap img');
var i = 0;

btn_prev.onclick = function() {
    images[i].className = '';
    i--;

    if(i < 0) {
        i =  images.length - 1;
    }

    images[i].className = 'showed';
};

btn_next.onclick = function() {
    images[i].className = '';
    i++;

    if(i >= images.length) {
        i = 0;
    }

    images[i].className = 'showed';
};