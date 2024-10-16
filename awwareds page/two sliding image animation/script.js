const tl0 = gsap.timeline({
    delay: 0.5,
    duration: 1,
})

tl0.from(".textBox h1", {
    y: 200,
    duration: 0.5,
    stagger: 0.1,
})
.from(".text p", {
    y: 100,
    opacity: 0,
})
.from(".text a", {
    x: -100,
    opacity: 0,
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1",
        start: "50% 50%",
        end: "150% 50%",
        // markers: true,
        scrub: 2,
        pin: true,
    }
});

tl.to("#firstline", {
    marginTop: "-120vh",
}, 'variable')
.to("#secondline", {
    marginTop: "20vh",
}, 'variable');