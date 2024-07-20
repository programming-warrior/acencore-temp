let cards = ["1", "2", "3"];
let positions = [
    { top: "0%", left: "50%", zIndex: 3 },
    { top: "75%", left: "85%", zIndex: 2 },
    { top: "75%", left: "15%", zIndex: 1 }
];
let cardElements = document.querySelectorAll(".card");

function rotateCards() {
    cards.push(cards.shift()); // Rotate the card content
    for (let i = 0; i < cardElements.length; i++) {
        cardElements[i].innerHTML = cards[i];
        cardElements[i].style.top = positions[i].top;
        cardElements[i].style.left = positions[i].left;
        cardElements[i].style.zIndex = positions[i].zIndex;
    }
}

setInterval(rotateCards, 1000);
