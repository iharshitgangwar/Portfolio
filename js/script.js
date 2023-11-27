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

let x=document.getElementsByClassName('landingPage');
window.onload=()=>{
let skillbar=document.querySelectorAll('.skillbar-bar');
skillbar.forEach((e,i)=>{
    let y=skillbar[i].getAttribute('value')
    skillbar[i].style.width=`${y}%`
})}

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



const swiper = new Swiper('.x-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween:15,
    disableOnInteraction: true,
    
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    }
  
})



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