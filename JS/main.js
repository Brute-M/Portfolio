import Cards from "./Cards.js";


const card = new Cards("allCards" /* ID where I want to append all cards */)

$.getJSON("./JS/data.json", data => {
    data.forEach(e => {
        const newCard = card.createCard(e);
        card.appendCard(newCard)
    })
});
