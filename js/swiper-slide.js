// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 5,
//   spaceBetween: 30,
//   loop: true,
//   grabCursor: true,
//   autoplay: {
//     delay: 700, // 2 detik
//     disableOnInteraction: false
//   },
//   speed: 5000, // Kecepatan transisi slide
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 0,  // Jeda hampir tidak ada (minimal harus > 0 untuk bekerja)
    disableOnInteraction: false
  },
  speed: 6000, // Kecepatan transisi slide (di sini diatur menjadi 5 detik per transisi)
});

