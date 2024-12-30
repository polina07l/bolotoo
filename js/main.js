"use strict";

// MAIN SLIDER
var mainSlider = document.querySelector(".merch-slider .swiper");
var mainSwiper = new Swiper(mainSlider, {
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 1,
    depth: 61,
    modifier: 1,
    slideShadows: false
  },
  loopAdditionalSlides: 1,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  paginationClickable: true,
  initialSlide: 0,
  spaceBetween: 0,
  slidesPerView: "auto",
  centeredSlides: true,
  speed: 1100,
  breakpoints: {
    300: {
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      effect: "slide",
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: false
    },
    767.98: {
      effect: "coverflow"
    }
  }
});