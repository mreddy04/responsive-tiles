
let items = [1,2,3,4,5,6,7,8,9];

let cardList = document.getElementById("card-list");
sort();

function sort() {
    var child = cardList.lastElementChild;
    while (child) {
        cardList.removeChild(child);
        child = cardList.lastElementChild;
    }
    appendElements(false);
}
function shuffle() {
    var child = cardList.lastElementChild;
    while (child) {
        cardList.removeChild(child);
        child = cardList.lastElementChild;
    }
    appendElements(true);
}

function ramdomShuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function appendElements(isRandom) {
    if (isRandom) {
        items = ramdomShuffle(items);
    } else {
        items = items.sort();
    }
    items.forEach((index) => {
        let cards = document.createElement("div");
        cards.classList.add("cards");
        let cardsColor = document.createElement("div");
        cardsColor.classList.add("card-color");
        let number = document.createElement("p");
        number.classList.add("title-index");
        let text = document.createTextNode(index);
        number.appendChild(text);
        cardsColor.appendChild(number);
        cards.appendChild(cardsColor);
        cardList.appendChild(cards);
    });
}
