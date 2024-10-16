// for single element if you want to move then use this method but if you have multiple element and you want to move using scrolltrigger then define it first.

// const tl = gsap.timeline();
// tl.to(".msk", {
//     clipPath: "circle(100% at 50% 50%)",
//     scrollTrigger: {
//         trigger: ".ad",
//         start: "top 15%",
//         end: "bottom 85%",
//         markers: true,
//         scrub: 2,
//         pin: true,
//     }
// })

// define the scrolltrigger first.
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".ad",
        start: "top 15%",
        end: "bottom 85%",
        scrub: 2,
        pin: true,
        // markers: true,
    }
});

// Animate both .msk and h1 together
tl.to(".msk", {
    clipPath: "circle(100% at 50% 50%)",
}).to(".page1 h1", {
    color: "white",
}, 0);  // '0' ensures both animations start at the same time
