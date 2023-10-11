var swiper = new Swiper(".mainBg", {
    slidePerView:1,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

var swiper = new Swiper(".mainAg", {
    slidePerView:1,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
});


/* AOS_JS */
/* AOS.init();
 */
AOS.init({
    disable: false,
    once: true,
    duration: 1500,
  });