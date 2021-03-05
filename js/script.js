const API_URL = 'https://api.pokemontcg.io/v1/cards';

function insertCards(cards) {
    const card = cards.cards[0];

    document.querySelector(".js-container").innerHTML = `
    <div class="card-container">
        <h2>name: ${card.name}</h2>
        <h2>Type: ${card.types[0]}</h2>
        <img class="card-image" src="${card.imageUrl}" alt="${card.name}" />
    </div>
    `;
}

function downloadCards() {
    fetch(API_URL)
    .then(data => data.json())
    .then(insertCards);
}

document
    .querySelector(".js-get-cards")
    .addEventListener("click", downloadCards);