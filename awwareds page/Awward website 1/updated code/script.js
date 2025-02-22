const tl = gsap.timeline();
const logo = document.querySelector("#logo");

const animation = () => {
    tl.to(".main .box, nav", {
        background: "white",
    }).from(".main .box h1", {
        top: "100%",
        duration: 1,
    },'b').from("nav .logo, nav .navigation", {
        opacity: 0,
    },'b').to(".main .box, nav", {
        delay: 2,
        background: "transparent",
    }).to(".page1, .navigation a", {
        color: "white",
    },'a').add(() => {
        logo.src = "./images/logo.png";
    }, 'a');
}

animation();


// normal js
const bgVideo = document.getElementById("bgVideo");
const box = document.querySelector(".box");

const videoLinks = ["./images/grass video.mp4","./images/stone video.mp4"];
let currentIndex = 1;
// update index to 1 because we already add some delay for the animation so the 1st video its start is the stone video to change it grass update it to 1

function checkBeforeElement() {
    const beforeStyle = getComputedStyle(box, "::before");
    const topValue = beforeStyle.getPropertyValue("top");
    console.log(topValue)
    // to check the top value

    if (topValue === "0px" || topValue === "-158.2px") {
        changeVideo();
    }
}

// Function to change the video source
function changeVideo() {
    currentIndex = (currentIndex + 1) % videoLinks.length; // Toggle between 0 and 1
    bgVideo.src = videoLinks[currentIndex];
    bgVideo.load(); // Reload the video source
    // console.log("Video changed to:", videoLinks[currentIndex]);
}

setInterval(checkBeforeElement, 2000);