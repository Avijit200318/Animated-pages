// Initialize Lenis
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// end of lenis code

// a.toString().padStart(3, "0")

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
// context is important to perform any thing in canvas

const frames = {
    currentIndex: 0,
    maxIndex: 342
};

let imagesLoad = 0;
const images = [];

const preloadImage = () => {
    for (var i = 1; i <= frames.maxIndex; i++) {
        const imageUrl = `./images/${i.toString().padStart(3, "0")}_pic.jpeg`;
        // console.log(imageUrl);
        // console.log("Trying to load:", imageUrl);

        // create a blank image tag which didnot have and src.
        const img = new Image();
        img.src = imageUrl;
        // console.log(img);
        img.onload = () => {
            imagesLoad++;
            // show first frame immediately
            if (i === 1) {
                loadImage(0);
            }

            if (imagesLoad === frames.maxIndex) {
                console.log("all images loaded");
                loadImage(frames.currentIndex);
                startAnimation();
            }
        }
        img.onerror = () => {
            console.error("Failed to load:", imageUrl); // see missing files
        };

        images.push(img);
    }
}

const loadImage = (index) => {
    if (index >= 0 && index <= frames.maxIndex) {
        const img = images[index];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // properly set image in canvas using aspect ratio
        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.min(scaleX, scaleY);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;


        // set offset X so the image alsways shows from the center
        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
        frames.currentIndex = index;
    }
}

const startAnimation = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".container",
            start: "top top",
            scrub: 2,
            // markers: true
        }
    });


    tl.to(".canvasContainer", {
        top: -10,
    }, 'a')
    .to(frames, {
        currentIndex: frames.maxIndex,
        onUpdate: function () {
            loadImage(Math.floor(frames.currentIndex))
        }
    }, 'a')
}

preloadImage();


// page2
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        start: "5% 95%",
        end: "103%, 95%",
        // markers: true,
        scrub: true
    }
});

tl2.from("#headingDiv h2", {
    color: "#52300f",
    stagger: 0.5,
    duration: 0.5,
})
.from("#item", {
    left: "50%",
    stagger: 0.3,
    duration: 1.5
})
.from(".box h3", {
    color: "#52300f",
    stagger: 0.5,
    duration: 0.5
})
.from(".bottomBox h2 span", {
    color: "#52300f",
    stagger: 0.2,
})


const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        start: "5% 95%",
        end: "95%, 95%",
        // markers: true,
        scrub: true
    }
});

tl3.from(".page3 h2", {
    color: "#c8852d",
    stagger: 0.2,
    duration: 0.2
})
.to(".box .card", {
    rotate: "0deg",
    stagger: 0.5,
    duration: 0.5
})