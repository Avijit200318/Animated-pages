const tl = gsap.timeline();

tl.from("nav", {
    top: "-20%",
    opacity: 0,
    duration: 0.5,
})
.from(".main .left h1, .main .left p, .imageBox, .btn button", {
    opacity: 0,
    bottom: -100,
    duration: 0.75,
    stagger: 0.1
})
.from("#card", {
    top: "110%",
    right: "0%",
    rotate: "90deg",
    duration: 0.75,
})

// scroll animation

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        start: "90% 90%",
        end: "180% 80%",
        scrub: true,
        // markers: true,
    }
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        start: "80% 80%",
        end: "160% 60%",
        scrub: true,
        // markers: true,
    }
})

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        start: "60% 60%",
        end: "160% 60%",
        scrub: true,
        // markers: true,
    }
})

const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        start: "80% 60%",
        end: "160% 60%",
        scrub: true,
        // markers: true,
    }
})

tl1.to("#card", {
    top: "140%",
    left: "35%",
    scale: 0.9,
});

tl2.to("#card", {
    top: "235%",
    left: "15%",
    scale: "0.8",
})

tl3.to("#card", {
    top: "345%",
    left: "34.5%",
    rotate: "-90deg",
})

tl4.to("#card", {
    top: "420%",
    rotate: "90deg",
})