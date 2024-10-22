const tl = gsap.timeline({scrollTrigger: {
    trigger: '#main',
    start: '50% 50%',
    end: '150% 50%',
    scrub: 2,
    pin: true,
    markers: true,
}});

tl.to(".top", {
    top: "-50%",
}, 'a')
.to(".bottom", {
    bottom: "-50%",
}, 'a')
.to("#top-h", {
    top: "80%",
}, 'a')
.to("#bottom-h", {
    bottom: "-100%"
}, 'a')
.to(".content h1", {
    marginTop: "0"
},)