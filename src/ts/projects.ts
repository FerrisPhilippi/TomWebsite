import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: true,
  }).mount();
});
