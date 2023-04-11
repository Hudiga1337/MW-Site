hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
}

$(document).ready(function(){ 
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
   const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
loop: true,

pagination: {
el: '.swiper-pagination',
clickable: true,
},

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});
