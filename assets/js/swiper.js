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
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// WORK TABS
const worktab = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

worktab.forEach((e) => {
  e.addEventListener("click", () => {
    const targetSelector = e.dataset.target,
      targetContent = document.querySelector(targetSelector);

    //disable all content and active tabs
    tabContents.forEach((content) => content.classList.remove("work-active"));

    worktab.forEach((t) => t.classList.remove("work-active"));

    // Activate the tab
    e.classList.add("work-active");
    targetContent.classList.add("work-active");
  });
});
