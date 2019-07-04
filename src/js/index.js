$(document).ready(function(){
    function showViewPortWidth(display) {
        if(display) {
          var width = jQuery(window).width();
          jQuery('body').prepend('<div id="viewportsize" style="z-index:9999;position:fixed;top:40px;left:5px;color:#fff;background:#000;padding:10px">Width: '+ width +'</div>');
          jQuery(window).resize(function() {
            width = jQuery(window).width();
            jQuery('#viewportsize').html('Width: '+ width);
          });
        }
      }
     
    showViewPortWidth(true);
    
    $('.owl-carousel').owlCarousel({
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

var forms = document.querySelectorAll('.application-form');
var inpPhone = document.querySelectorAll('.application-input.phone');

for (var i = 0; i < inpPhone.length; i++) {
    inpPhone[i].addEventListener('input', removeNotNumbers);
}

for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', pushInputs);
}

function pushInputs(e) {
    e.preventDefault();

    outputMsg(this);
    return;
};

function removeNotNumbers() {
    this.value = this.value.replace(/[^0-9]/g, '')
};

function outputMsg(form) {
    var inpName = form.querySelector('.application-input.name');
    form.insertAdjacentHTML('afterEnd', 'Спасибо, ' + inpName.value + ', что выбрали нас! В течение нескольких минут мы с Вами свяжемся')
};



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