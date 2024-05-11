import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardValue = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const cardType = ["♦", "♥", "♠", "♣"];

  const randomValueIndex = Math.floor(Math.random() * cardValue.length);
  const randomTypeIndex = Math.floor(Math.random() * cardType.length);

  const randomCardValue = cardValue[randomValueIndex];
  const randomCardType = cardType[randomTypeIndex];

  const displayUp = document.querySelector(".card-symbol-up");
  const displayDown = document.querySelector(".card-symbol-down");
  const displayNumber = document.querySelector(".card-number");

  displayUp.innerHTML = randomCardType;
  displayDown.innerHTML = randomCardType;
  displayNumber.innerHTML = randomCardValue;

  const isRed = randomCardType === "♥" || randomCardType === "♦";

  if (isRed) {
    displayUp.classList.add("red-text");
    displayDown.classList.add("red-text");
    displayNumber.classList.add("red-text");
  }
};
