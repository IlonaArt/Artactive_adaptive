var e=document.querySelector("#slider .button-wrap .button-prev"),t=document.querySelector("#slider .button-wrap .button-next"),n=document.querySelectorAll("#slider .service__img-wrap img"),c=0;e.onclick=function(){n[c].className="",--c<0&&(c=n.length-1),n[c].className="showed"},t.onclick=function(){n[c].className="",++c>=n.length&&(c=0),n[c].className="showed"};var o=document.querySelector(".header__button"),r=document.querySelector(".header__nav-list");o.addEventListener("click",function(e){e.preventDefault(),r.classList.toggle("show-nav")});