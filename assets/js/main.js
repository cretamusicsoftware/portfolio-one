import { animate, splitText, stagger } from "animejs";

const { animate } = anime;

const { chars: char1 } = splitText(".home__profession-1", {
  chars: true,
});
const { chars: char2 } = splitText(".home__profession-2", {
  chars: true,
});

animate(chars1, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});
