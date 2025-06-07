const tl = gsap.timeline()

tl.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})
.from(".textBox h1", {
    y: 200,
    duration: 0.5,
})
.from(".text p, .btn", {
    y: 100,
    opacity: 0,
    durtion: 0.5,
    stagger: 0.3
})
.from(".lineone", {
    left: "50%",
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
})

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1",
        start: "50% 50%",
        end: "200% 50%",
        // markers: true,
        scrub: 2,
        pin: true,
    }
});

tl1.to("#firstline", {
    marginTop: "-170vh",
}, 'variable')
.to("#secondline", {
    marginTop: "20vh",
}, 'variable');