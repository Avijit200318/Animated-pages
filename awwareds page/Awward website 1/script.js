const bgVideo = document.getElementById("bgVideo");
const box = document.querySelector(".box");

const videoLinks = ["./images/grass video.mp4","./images/stone video.mp4"];
let currentIndex = 0;

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
