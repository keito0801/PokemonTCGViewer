const API_URL = 'https://api.pokemontcg.io/v2/cards';

function insertCards(data) {
    const card = data.data[0];

    document.querySelector(".js-container").innerHTML = `
    <div class="card-container">
        <h2>Name: ${card.name}</h2>
        <h2>Type: ${card.types[0]}</h2>
        <img class="card-image" src="${card.images.small}" alt="${card.name}" />
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
    