const illustration = document.querySelector(
  ".about__container__illustration-box"
);

const observerParams = {
  rootMargin: "-30% 2000px -30% 2000px",
  threshhold: 1,
};

export const handleAbout = () => {
  const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      let illustration = entry.target;
      let illustrationImages = Array.from(illustration.children);
      if (entry.isIntersecting) {
        illustrationImages.forEach((image) => {
          image.style.transform = "translateX(0px)";
          if (
            image.classList.contains(
              "about__container__illustration-box__guitar"
            )
          ) {
            if (!image.classList.contains("rotate-anim-active"))
              image.classList.add("rotate-anim-active");
          }
          if (
            image.classList.contains("about__container__illustration-box__note")
          ) {
            if (!image.classList.contains("rise-anim-active"))
              image.classList.add("rise-anim-active");
          }
        });
      }
    });
  }, observerParams);

  aboutObserver.observe(illustration);
};
