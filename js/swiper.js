var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal', // Установка горизонтального направления свайпера
  loop: true,
  autoplay: {
      delay: 3000,
  },
  slidesPerView: 'auto', // Позволяет слайдам занимать доступное пространство
  spaceBetween: 20, // Устанавливает отступ между слайдами
});