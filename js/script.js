//const API_URL = 'https://api.pokemontcg.io/v2/cards';

function getApiUrl(cardType) {
    if(cardType == "All"){
    return `https://api.pokemontcg.io/v2/cards`;
    }
    else {
        return `https://api.pokemontcg.io/v2/cards?q=supertype:pokemon types:${cardType}`;
    }
}

    function getSearch(cardName) {
        return `https://api.pokemontcg.io/v2/cards?q=supertype:pokemon name:${cardName}`;
    }

function getCardHtml(card) {
    return `
    <div class="card-container">
        <h2>Name: ${card.name}</h2>
        <h2>Type: ${card.types[0]}</h2>
        <img class="card-image" src="${card.images.small}" alt="${card.name}" />
    </div>
    `;
}
function insertCards(cards) {
    const cardsHTML = cards.data.map(getCardHtml).join('');
    document.querySelector(".js-container").innerHTML = cardsHTML;
}

function downloadCards() {
    
    const cardType = document.querySelector("[name=type]").value;
    
    const api_url = getApiUrl(cardType);
    
    fetch(api_url)
    
    .then((data) => data.json())
    .then(insertCards);
}

function downloadCards2() {
    
    
    const cardName = document.querySelector("[name=card-name]").value;
    
    const api_search = getSearch(cardName);
    
    fetch(api_search)
    .then((data) => data.json())
    .then(insertCards);
}
document
    .querySelector(".js-get-cards")
    .addEventListener("click", downloadCards);

    document
    .querySelector(".js-get-name")
    .addEventListener("click", downloadCards2);
    