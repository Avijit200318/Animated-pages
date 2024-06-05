// var tl = gsap.timeline({scrollTrigger: {
//     trigger: ".two",
//     start: "50% 50%",
//     end: "50% 50%",
//     scrub: true,
//     markers: true,
// }})
gsap.set("#fanta", {
    width: "40%",
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "60% 50%",
        scrub: true,
        // markers: true,
    }
})

tl.to("#fanta", {
    top: "120%",
    left: "0%",
    duration: 0.5
}, 'orange')

tl.to("#orange-cut", {
    top: "160%",
    left: "23%"
}, 'orange')

tl.to("#orange", {
    width: "15%",
    top: "160%",
    right: "10%"
}, 'orange')

tl.to("#leaf", {
    top: "110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')

tl.to("#leaf2", {
    top: "110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "8% 95%",
        end: "20% 50%",
        scrub: true,
        // markers: true,
    }
})

tl2.from(".lemon1", {
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
    duration: 0.5
}, 'lemon')

tl2.from(".lemon2", {
    rotate: "90deg",
    top: "110%",
    left: "100%",
    duration: 0.5
}, 'lemon')

tl2.from("#cocacola", {
    rotate: "-90deg",
    top: "100%",
    left: "-110%",
    duration: 0.5
}, 'lemon')

tl2.from("#pepsi", {
    rotate: "90deg",
    top: "100%",
    left: "110%",
    duration: 0.5
}, 'lemon')

tl2.to("#orange-cut", {
    left: '40%',
    top: "207%",
    duration: 0.5
}, 'lemon')

tl2.to("#fanta", {
    width: "30%",
    left: '35%',
    top: "215%",
    duration: 0.5
}, 'lemon')
