gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2.5,
  smoothTouch: 0.1,
  effects: true,
});

const tl = gsap.timeline();

