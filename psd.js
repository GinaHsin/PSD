$(document).ready(function(){
    /*在header的連結列做下拉式選單*/
    $(".navbar-link").click(function(e) {
        e.preventDefault();
        $(this).siblings().slideToggle();
        $(this).parent().siblings().find(".dropdown").slideUp();
    })
    /*在banner做swiper*/
    const swiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: true,
        pagination: {
         el: ".swiper-pagination",
        },
        navigation: {
         nextEl: ".swiper-button-next",
         prevEl: "swiper-button-prev"
        },
        scrollbar: {
         el: ".swiper-scrollbar"
        },
        speed: 3000,
        autoplay:{
            delay: 5000
        }
    })
    lightbox.option({
        resizeDuration: 600,
        wrapAround: true,
        imageFadeDuration: 2000,
        fadeDuration: 2000
      });
    $(".top-arrow").click(function (e) { 
        e.preventDefault();
        $("html, body").animate({
              scrollTop: 0
        }, 700);      
    });
});