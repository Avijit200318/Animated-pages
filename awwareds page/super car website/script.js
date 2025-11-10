window.onload = function () {
  document.addEventListener('dragstart', (e) => e.preventDefault());

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2.5,
    smoothTouch: 0.1,
    effects: true,
  });

  const tl = gsap.timeline();

  tl.from("nav", {
    delay: 1.5,
    duration: 1,
    y: -200
  }, 'a')
  tl.from("#top .left, #bottom .left", {
    delay: 1.5,
    duration: 2,
    left: "-50%",
    stagger: 0.4
  }, 'a')
  tl.from("#top .right, #bottom .right", {
    delay: 1.5,
    duration: 2,
    right: "-30%",
    stagger: 0.4
  }, 'a')


  // style for page2

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      start: "30% 30%",
      end: "400% 30%",
      // markers: true,
      scrub: true,
      pin: true,
    }
  })


  tl2.to(".page2 .box", {
    width: "305%",
    height: "100%",
    top: "-55%"
  }, 'a')
    .to(".box .line", {
      height: "100%"
    }, 'a')
    .to(".line .imgBox", {
      height: "100%"
    }, 'a')
    .from(".imgBox h1, .imgBox p, #rightText", {
      opacity: 0,
      x: 100,
      duration: 0.5
    })
  tl2.to({}, { duration: 0.4 }, "+=0")

  // page4

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      start: "40% 40%",
      end: "300% 100%",
      scrub: true,
      // markers: true,
      pin: true
    }
  })

  tl3.to(".textBox", {
    left: "-250%"
  }, 'a')
    .from(".textBox h1", {
      color: "#fff"
    }, 'a')
  tl3.to({}, { duration: 0.4 }, "+=0")

  // page5

  const videoElement = document.querySelector(".container video")
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page5",
      start: "30% 30%",
      end: "200% 30%",
      scrub: true,
      // markers: true,
      pin: true,

      onEnter: () => {
        // Check if the video element exists before trying to play
        if (videoElement) {
          videoElement.play();
        }
      },

      // OPTIONAL: Add onLeaveBack to pause or rewind when scrolling back up
      onLeaveBack: () => {
        if (videoElement) {
          // videoElement.pause(); // Pause the video
          videoElement.currentTime = 0; // Or just rewind to the start
        }
      }
    }
  })

  tl4.to(".page5 .container", {
    clipPath: "inset(0% 0%)",
  })
  tl4.to({}, { duration: 0.4 }, "+=0")

  //page6

  const phrases = [
    "Tourbillon",
    "Tourbillonade",
    "Tourbillone",
    "Tourbilloned",
    "Tourbillones",
    "Tourbillonian",
    "Tourbillonism",
    "Tourbillons",
    "Tourbilloning",
    "Tourbillonnant",
    "Tourbillon",
    "Tourbillonade",
    "Tourbillone",
    "Tourbilloned",
    "Tourbillones",
    "Tourbillonian",
    "Tourbillonism",
    "Tourbillons",
    "Tourbilloning",
    "Tourbillonnant",
    "Tourbillons",
    "Tourbilloning",
    "Tourbillonnant",
    "Tourbillon",
    "Tourbillonade",
    "Tourbillone",
    "Tourbilloned",
    "Tourbillones",
    "Tourbillonian",
    "Tourbillonism",
    "Tourbillons",
    "Tourbilloning",
    "Tourbillonnant"
  ];

  const changeTextSequence = () => {
    const h1 = document.querySelector(".page6 h1"); // be specific
    if (!h1) return;

    // create a new timeline for the sequence
    const tl = gsap.timeline();

    phrases.forEach((text) => {
      tl.to(h1, {
        duration: 0.04,
        onComplete: () => (h1.textContent = text)
      });
      tl.to(h1, { duration: 0.04 });

    });

    return tl;
  }

  // Trigger sequence only when the section is entered
  tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page6",
      start: "20% 90%",
      end: "100% 90%",
      // markers: true,
      toggleActions: "play none none none",
      onEnter: () => {
        changeTextSequence();
      },

    }
  });


  const videos = document.querySelectorAll('.videoDiv video');

  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
    });
  });
}
