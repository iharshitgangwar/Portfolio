// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-80px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// jQuery(document).ready(function(){
//   jQuery('.skillbar').each(function(){
//     jQuery(this).find('.skillbar-bar').animate({width:jQuery(this).attr('data-percent')},4000);
//   });
// });
// smooth scroll locomotive
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let x = document.getElementsByClassName("landingPage");
window.onload = () => {
  let skillbar = document.querySelectorAll(".skillbar-bar");
  skillbar.forEach((e, i) => {
    let y = skillbar[i].getAttribute("value");
    skillbar[i].style.width = `${y}%`;
  });
};

// window.addEventListener('scroll',reveal);

//
//     var windowheight=window.innerHeight;
//     console.log(reveal)
//     if(windowheight>500){
//         reveal
//     else{
//         reveal.style.marginLeft='-500vh';
//     }
//     function getScrollMaxY(){
//         return ( 'scrollMaxY' in window ) ? window.scrollMaxY : (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//     }
//     console.log(getScrollMaxY())

//     alert( window.innerWidth ); // full window width
// alert( document.documentElement.clientWidth );
// let imgs=document.getElementsByClassName('col-md-6')[0].getElementsByTagName('img')[0];
// let desc=document.getElementsByClassName('col-md-6 txt')[0]

// console.log(desc)
// window.addEventListener('scroll',()=>{
//     let scrol=window.scrollY;
//     if(scrol>175){
//         imgs.style.right='30px'
//         desc.style.left=''
//     }
// })

const swiper = new Swiper(".x-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 15,
  disableOnInteraction: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    541: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  },
});

// $(window).mousemove(function(event) {

//     $('.cursor').css({
//       left: event.pageX,
//        top: event.pageY
//     })

//   })

//   $('a')
//   .on('mouseenter', function() {
//     $('.cursor').addClass('focus')
//   })
//   .on('mouseleave', function() {
//     $('.cursor').removeClass('focus')
//   })

const sidebar_on = document.getElementById("sidebar");
const sidebar_mobile_viewport = document.getElementById("sidebar-mobile");
const sideBar_off = document.getElementById("sidebar_off");
const theme_select = document.getElementById("switch");
const stylesheet_N = document.getElementById("theme_x");
const stylesheet_pos = document.getElementById("theme-changer");
sidebar_on.addEventListener("click", () => {
  sidebar_mobile_viewport.classList.toggle("active");
  stylesheet_pos.classList.toggle("theme-right-active");
});
sideBar_off.addEventListener("click", () => {
  sidebar_mobile_viewport.classList.toggle("active");
  setTimeout(() => {
    stylesheet_pos.classList.toggle("theme-right-active");
  }, 100);
});

theme_select.addEventListener("click", () => {
  if (stylesheet_N.getAttribute("href") == "style.css") {
    document.getElementById("theme_x").href = "xyz.css";
  } else {
    document.getElementById("theme_x").href = "style.css";
  }
});
