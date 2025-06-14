gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2.5,
  smoothTouch: 0.1,
  effects: true,
});

const tl = gsap.timeline();

tl.to(".loading", {
  width: "100%",
  duration: 0.7,
  delay: 0.3,
})
.to(".capsuleLogo", {
  scale: 2,
  duration: 0.5,
  opacity: 0,
}, 'a')
.to(".capsul", {
  clipPath: "inset(0% 0% 0% 0%)",
}, 'a')

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    start: "90% 80%",
    end: "155% 80%",
    // markers: true,
    scrub: true,
  }
})

tl1.to(".background img", {
  transform: "scale(1.05)",
})

// page2 animation

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "28% 70%",
    end: "100% 70%",
    // markers: true,
    scrub: 1,
  }
})

tl2.to(".page2 .bottom", {
  y: 760,
})

// page3 animation

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "25% 50%",
    end: "60% 50%",
    // markers: true,
    scrub: 1,
  }
})

tl3.to(".hide", {
  top: "-100%",
  stagger: 0.1
})