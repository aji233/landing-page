document.addEventListener('DOMContentLoaded', function () {
    const swiper1 = new Swiper('.swiper1', {
      slidesPerView: 7,
      spaceBetween: 2,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 700,
        disableOnInteraction: false
      },
      speed: 5000,
    });
  });