const track = document.querySelector(".carousel__card-container ul");
const cards = Array.from(track.children);
const leftButton = document.querySelector("#carousel__btn--left");
const rightButton = document.querySelector("#carousel__btn--right");
var currentIndex = 0;
var shifted = 0;

export const handleItemCarousel = () => {
  leftButton.addEventListener("click", () => {
    let currentCard = cards[currentIndex];
    let style =
      currentCard.currentStyle || window.getComputedStyle(currentCard);
    let size =
      currentCard.clientWidth +
      parseFloat(style.marginLeft) +
      parseFloat(style.marginRight);

    if (currentIndex - 1 < 0) {
      currentIndex = cards.length - 1;
      console.log(cards.length);
      shifted = size * (cards.length - 1);
    } else {
      currentIndex--;
      shifted -= size;
    }

    track.style.transform = "translateX(" + -shifted + "px)";
  });

  rightButton.addEventListener("click", () => {
    let currentCard = cards[currentIndex];
    let style =
      currentCard.currentStyle || window.getComputedStyle(currentCard);
    let size =
      currentCard.clientWidth +
      parseFloat(style.marginLeft) +
      parseFloat(style.marginRight);
    if (currentIndex + 1 >= cards.length) {
      currentIndex = 0;
      shifted = 0;
    } else {
      currentIndex++;
      shifted += size;
    }

    track.style.transform = "translateX(" + -shifted + "px)";
  });
};
