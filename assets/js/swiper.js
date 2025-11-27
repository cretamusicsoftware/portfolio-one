/* swipper stuff */

const swiperProjects = new Swiper(".projects__swiper", {
    // Optional parameters
    loop: true,
    spaceBetween: 24,
    slidesPerview: "auto",
    grabCursor: true,
    speed: 600,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });