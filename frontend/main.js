// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(SplitText);
  // gsap code here!
  gsap.registerPlugin(SplitText);

  document.fonts.ready.then(() => {
    gsap.set(".container", { opacity: 1 });
    let split = SplitText.create(".animate-me", {
      type: "words",
      aria: "hidden",
    });

    gsap.from(split.words, {
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.1,
    });
  });
});

