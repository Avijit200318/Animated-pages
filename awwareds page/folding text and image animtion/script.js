const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".part1",
        start: "50% 50%",
        end: "150% 50%",
        scrub: true,
        markers: true,
        pin: true,
    }
});

tl.to(".topContent", {
    rotateX: "110deg",
    opacity: 0,
    duration: 2,
}, 'a')
.to(".bottomContent", {
    rotateX: "-100deg",
    opacity: 0,
    duration: 2,
}, 'a')
.to(".middle", {
    width: "100%",
    height: "100%",
    duration: 5,
    delay: 1,
}, 'a')