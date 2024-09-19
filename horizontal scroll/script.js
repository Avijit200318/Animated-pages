gsap.to(".races", {
    x: () => {
        let racesWidth = document.querySelector(".races").scrollWidth;
        return -(racesWidth - window.innerWidth); // Calculate the scroll amount dynamically
    },
    ease: "none",
    scrollTrigger: {
        trigger: ".racesWrapper",
        start: "top 20%",
        end: () => {
            let racesWidth = document.querySelector(".races").scrollWidth;
            return `+=${racesWidth - window.innerWidth}`; // Adjust end dynamically based on scroll amount
        },
        pin: true,
        scrub: 2,
        invalidateOnRefresh: true,  // Recalculate values on refresh
        markers: true
    }
});
