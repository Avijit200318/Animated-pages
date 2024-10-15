const width = window.innerWidth;
console.log(width);
let mm = gsap.matchMedia();

gsap.set("#fanta", {
    width: "40%",
});
gsap.set("#orange-cut", {
    width: "20%",
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "60% 50%",
        scrub: true,
        markers: true,
    }
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "8% 95%",
        end: "20% 50%",
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
    
    mm.add("(max-width: 1100px)", () => {
        tl.to("#fanta", {
            top: "140%",
            left: "0%",
            duration: 0.5
        }, 'orange')
        
        tl.to("#orange-cut", {
            top: "160%",
            left: "23%"
        }, 'orange')

        tl2.to("#fanta", {
            width: "30%",
            left: '35%',
            top: "222%",
            duration: 0.5
        }, 'lemon')

        tl2.to("#orange-cut", {
            left: '41%',
            width: "18%",
            top: "212%",
            duration: 0.5
        }, 'lemon')
})

mm.add("(max-width: 960px)", () => {
    tl2.to("#fanta", {
        width: "35%",
        left: '33%',
    }, 'lemon')
})

mm.add("(max-width: 780px)", () => {
    tl.to("#fanta", {
        top: "145%",
    }, 'orange')
    
    tl2.to("#fanta", {
        width: "43%",
        left: '29%',
        top: "227%",
    }, 'lemon')

    tl2.to("#orange-cut", {
        top: "218%",
    }, 'lemon')
})

mm.add("(max-width: 620px)", () => {
    tl.to("#fanta", {
        top: "150%",
    }, 'orange')

    tl.to("#orange-cut", {
        left: "20%"
    }, 'orange')

    tl2.to("#fanta", {
        width: "50%",
        left: '27%',
    }, 'lemon')

    tl2.to("#orange-cut", {
        top: "218%",
        width: "30%",
        left: "37%",
    }, 'lemon')
})

mm.add("(max-width: 550px)", () => {
    tl.to("#fanta", {
        top: "115%",
        width: "50%",
        left: "25%",
    }, 'orange')

    tl.to("#orange-cut", {
        left: "50%",
        top: "130%",
    }, 'orange')

    tl.to("#orange", {
        width: "20%",
        top: "130%",
        right: "8%"
    }, 'orange')
})

mm.add("(max-width: 460px)", () => {
    gsap.set("#fanta", {
        width: "50%",
    });

    tl.to("#orange", {
        width: "20%",
        right: "5%"
    }, 'orange')

    tl2.to("#fanta", {
        left: '25%',
        width: "55%",
        top: "230%",
    }, 'lemon')

    tl2.to("#orange-cut", {
        top: "222%",
    }, 'lemon')
})

mm.add("(max-width: 400px)", () => {
    tl.to("#fanta", {
        width: "55%",
    }, 'orange')

    tl.to("#orange-cut", {
        left: "50%",
        width: "25%",
        top: "130%",
    }, 'orange')

    tl.to("#orange", {
        width: "30%",
        left: "5%"
    }, 'orange')

    tl.to("#leaf", {
        left: "55%"
    }, 'orange')

    tl2.to("#fanta", {
        width: "57%",
        left: "24%",
        top: "236%",
    }, 'lemon')

    tl2.to("#orange-cut", {
        top: "228%",
    }, 'lemon')
})

mm.add("(max-width: 360px)", () => {
    tl2.to("#fanta", {
        width: "60%",
        left: "23%",
        top: "237%",
    }, 'lemon')

    tl2.to("#orange-cut", {
        top: "229%",
    }, 'lemon')
})