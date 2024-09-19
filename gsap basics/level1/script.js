var tl = gsap.timeline();
tl.from("header", {
    y: -100,
    duration: 0.2,
})
tl.from(".middleBox a", {
    opcity: 0,
    y: -50,
    stagger: 0.1,
})
tl.from(".rightBox", {
    y: -100,
    duration: 0.3
})
tl.from(".left h2", {
    opacity: 0,
    duration: 0.2,
    y: -30,
    delay: 0.5
})
tl.from(".left h1", {
    opacity: 0,
    duration: 0.3,
    y: -30
})
tl.from(".left p", {
    opacity: 0,
    duration: 0.3,
    y: -30
})
tl.from(".leftImg", {
    opacity: 0,
    x: 500,
    duration: 0.5
})
tl.from(".right img", {
    opacity: 0,
    scale: 1.2,
    duration: 0.5
})