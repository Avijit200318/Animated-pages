// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "10% 50%",
        end: "70% 50%",
        markers: true,
        scrub: true,
    }
});

tl.to(".textarea-hover h1", {
    width: "100%",
})
tl.to(".textarea-hover h2", {
    delay: -0.4,
    width: "100%",
})