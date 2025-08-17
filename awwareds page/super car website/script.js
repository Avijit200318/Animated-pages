document.addEventListener('dragstart', (e) => e.preventDefault());

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2.5,
  smoothTouch: 0.1,
  effects: true,
});

const tl = gsap.timeline();

tl.from("nav", {
  delay: 1.5,
  duration: 1,
  y: -200
}, 'a')
tl.from("#top .left, #bottom .left", {
  delay: 1.5,
  duration: 2,
  left: "-50%",
  stagger: 0.4
}, 'a')
tl.from("#top .right, #bottom .right", {
  delay: 1.5,
  duration: 2,
  right: "-30%",
  stagger: 0.4
}, 'a')
