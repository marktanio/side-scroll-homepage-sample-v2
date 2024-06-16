

const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 0.5,
    end: "+=3000",
    snap: {
        snapTo: 1 / (sections.length - 1), // Calculate snapping points
        duration: { min: 0.2, max: 0.8 }, // Specify snap duration range
        ease: "power4" // Use easing for smoother snap
      }
  }
});




