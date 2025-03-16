const tl = gsap.timeline();

tl
.to("#line4", {
    top: "-100%",
    delay: 1,
}, 'a')
.to("#line3", {
    top: "100%",
    delay: 1,
}, 'a')
// two side lines animation

.to("#line1", {
    top: '-100%',
    delay: 1,
    duration: 1,
}, 'a')
.to("#line2", {
    top: "100%",
    delay: 1,
    duration: 1,
}, 'a')
// line animation done

.to("#midLogo", {
    background: "conic-gradient(from 90deg, black 0%, transparent 0%)",
    delay: 1.2,
}, 'a')
.to("#midLogo .center img", {
    opacity: 0,
    delay: 1.2,
}, 'a')
.to("#midLogo", {
    display: "none",
})
// middle logo animation completed

.to(".loading .left", {
    left: "-100%",
    duration: 1,
}, 'b').to(".loading .right", {
    left: "100%",
    duration: 1,
}, 'b')
// left and right animation completed

.from(".bgImage", {
    filter: "brightness(0)",
    duration: 1,
    delay: 0.5,
})