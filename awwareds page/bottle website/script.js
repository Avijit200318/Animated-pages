gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2.5,
  smoothTouch: 0.1,
  effects: true,
});

const tl = gsap.timeline();

tl.to(".page1", {
  background: "#0044aa",
  color: "#ffffff",
  delay: 1,
  duration: 1
}, 'a')
  .to("#bgVideo", {
    delay: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    top: "0%",
  }, 'a')
  .to(".one .left h1, .one .left p", {
    duration: 1,
    delay: 1,
    top: "0",
    left: "0"
  }, 'a')
  .to("a", {
    color: "#ffffff",
    delay: 1,
  }, 'a')
  .from("#lastText ,.two .left", {
    delay: 1,
    top: 400,
    opacity: 0,
    duration: 1
  }, 'a')
  .to(".one .right, .two .right", {
    delay: 1.2,
    duration: 1,
    left: "0%",
    opacity: 1
  }, 'a');


const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    start: "20% 20%",
    end: "150% 20%",
    // markers: true,
    scrub: 1,
    pin: true,
  }
})

tl2.to(".nextPage", {
  transform: "translate(-50%, -50%)",
}, 'a')
  .from(".nextPage .top h1", {
    delay: 0.3,
    left: "33%",
    top: "25%",
  }, 'a')
  .from("#textContent", {
    delay: 0.3,
    top: "120%",
    left: "-25%",
  }, 'a')
  .from("#left img", {
    delay: 0.3,
    width: "10rem",
    height: "10rem",
    borderRadius: "10px",
    top: "-10%",
    rotate: "-22deg"
  }, 'a')
  .from("#right img", {
    delay: 0.3,
    width: "10rem",
    height: "10rem",
    borderRadius: "10px",
    top: "15%",
    left: "25%",
    rotate: "-22deg"
  }, 'a')
  .from("#secondImage, #firstImage", {
    delay: 0.3,
    width: "10rem",
    height: "10rem",
    borderRadius: "10px",
    top: "50%"
  }, 'a')
  .set("#left, #right", {
    overflow: "hidden"
  })
tl2.to({}, { duration: 0.2 }, "+=0")


const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "23% 20%",
    end: "280% 20%",
    // markers: true,
    scrub: true,
    pin: true,
  }
})

tl3.to(".page2 .slider", {
  left: "-160%"
})