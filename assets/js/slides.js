"use strict";

const mainSlider = tns({
  container: ".main-slide-list",
  items: 4,
  slideBy: "page",
  autoplay: true,
  navContainer: ".main-slide-nav-list",
  navPosition: "bottom",
  autoplayTimeOut: 2000,
  slideBy: 1,
  controls: false,
  autoplayButtonOutput: false,
});
