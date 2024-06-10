document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  
    ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 1,
      effects: true,
      horizontal: true,
    });
  
    // For horizontal scroll, we need to set the height of the wrapper to be the width of the content
    document.querySelector('.wrapper').style.height = document.querySelector('.content').scrollWidth + 'px';
  });
  