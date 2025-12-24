
gsap.from(".img-box", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});



// About section
gsap.to(".circle1", { y: -10, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to(".circle2", { y: 15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to(".circle3", { y: -20, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });


// mission Vision Section

gsap.registerPlugin(ScrollTrigger);

gsap.from(".vision", {
  scrollTrigger: {
    trigger: ".vision",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  x: -100,
  duration: 1
});

gsap.from(".image", {
  scrollTrigger: {
    trigger: ".image",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  scale: 0.8,
  opacity: 0,
  duration: 1
});

gsap.from(".mission", {
  scrollTrigger: {
    trigger: ".mission",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  x: 100,
  duration: 1
});













