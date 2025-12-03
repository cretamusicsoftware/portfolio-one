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

// SERVICES CLOSE AND OPEN

const servicesButtons = document.querySelectorAll(".services__button");

servicesButtons.forEach((button) => {
  const heightInfo = document.querySelector(".services__info");
  heightInfo.style.height = heightInfo.scrollHeight + "px";

  button.addEventListener("click", () => {
    const servicesCards = document.querySelectorAll(".services__card"),
      currentCard = button.parentNode,
      currentInfo = currentCard.querySelector(".services__info"),
      isCardOpen = currentCard.classList.contains("services-open");

    // close all other services
    servicesCards.forEach((card) => {
      card.classList.replace("services-open", "services-close");

      const info = card.querySelector(".services__info");
      info.style.height = "0";
    });

    //Open only if not open
    if (!isCardOpen) {
      currentCard.classList.replace("services-close", "services-open");
      currentInfo.style.height = currentInfo.scrollHeight + "px";
    }
  });
});

// Testimonial

const tracks = document.querySelectorAll(".testimonials__content");

tracks.forEach((track) => {
  const cards = [...track.children]; //static copy

  //duplicate

  for (const card of cards) {
    track.appendChild(card.cloneNode(true));
  }
});

// Contacts

const copyBtn = document.getElementById("contact-btn");
copyEmail = document.getElementById("contact-email");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'Email Copied<i class="ri-check-line"></i>';

    setTimeout(() => {
      copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>';
    }, 2000);
  });
});

// footer year

const textYear = document.getElementById("footer-year");
currentYear = new Date().getFullYear();

textYear.textContent = currentYear;

// scrollbar

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id,
      top = section.offsetTop - 50,
      height = section.offsetHeight,
      link = document.querySelector(".nav__menu a[href*=" + id + "]");

    if (!link) return;

    link.classList.toggle(
      "active-link",
      scrollY > top && scrollY <= top + height
    );
  });
};

window.addEventListener("scroll", scrollActive);

// Custom cursor

const cursor = document.querySelector(".cursor");

let mouseX = 0,
  mouseY = 0;

const cursorMove = () => {
  cursor.style.left = "${mouseX}px";
  cursor.style.top = "${mouseY}px";
  cursor.style.transform = "translate(-50%, -50%)";

  requestAnimationFrame(cursorMove);
};

document.addEventListener("mouseover", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorMove();
