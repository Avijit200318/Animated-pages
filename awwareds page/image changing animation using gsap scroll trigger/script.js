const bgImage = document.querySelector(".bgImage");
const bgVideo = document.querySelector(".bgVideo");

window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;
    console.log(scrollValue)
    if (scrollValue >= 10) {
        bgImage.style.opacity = 1;
        gsap.to(".links a, #logo h3", {
            opacity: 0,
            duration: 0.4,
            y: 30,
            stagger: 0.1,
        })
    }

    if (scrollValue === 0) {
        gsap.to(".links a, #logo h3", {
            opacity: 1,
            duration: 0.4,
            y: 0,
            stagger: 0.1,
        })
    }

    if (scrollValue >= 1420) {
        bgImage.classList.add("updateBgImage");
    } else {
        bgImage.classList.remove("updateBgImage");
    }
});

const tl = gsap.timeline();

tl.from(".hide h1, .hide p", {
    y: 100,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3,
})
.from(".content", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
})


const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        start: "38% 90%",
        end: "70% 90%",
        // markers: true,
        scrub: true,
    }
})

tl1.to(".bgVideo", {
    clipPath: "inset(0 0 100% 0)",
})