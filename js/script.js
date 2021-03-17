//const API_URL = 'https://api.pokemontcg.io/v2/cards';

function getApiUrl(cardType,cardName) {
    if(cardType == "All"){
    return `https://api.pokemontcg.io/v2/cards?q=supertype:pokemon name:${cardName}`;
    }
    else {
        return `https://api.pokemontcg.io/v2/cards?q=supertype:pokemon name:${cardName} set.series:${cardType} `;
    }
}

function getCardHtml(card) {
    let description;
    if(`${card.flavorText}` == "undefined"){
        description = "";
    }
    else{
        description = `${card.flavorText}`;
    }
    
    return `
    <section class="card-container">
    <div>
        <h2>${card.name}</h2>
        <h2>Type: ${card.types[0]}</h2>
        <img class="card-image" src="${card.images.small}" alt="${card.name}" />
        <h3>Series: ${card.set.series}</h3>
        <p>${description}<p>
        </div>
    </section>
    `;
}

function insertCards(cards) {
    if(cards.data.length === 0){
        errorHandler();
        return;
    }
    else{
    const cardsHTML = cards.data.map(getCardHtml).join('');
    document.querySelector(".js-container").innerHTML = cardsHTML;
    return;
    }
}

function errorHandler() {
    document.querySelector(".js-container").innerHTML = `
      <div class="error">
        The requested cards were not found.
      </div>
    `;
  }

function downloadCards() {
    const cardType = document.querySelector("[name=type]").value;
    const cardName = document.querySelector("[name=card-name]").value;
    const api_url = getApiUrl(cardType,cardName);
    fetch(api_url)
    .then((data) => data.json())
    .then(insertCards)
    .catch(errorHandler);
}



document
    .querySelector(".js-get-cards")
    .addEventListener("click", downloadCards);


//carousel functionality
    var slideInterval = 5500;

function getFigures(){
    return document.getElementById('carousel').getElementsByTagName('figure')
}

function moveForward() {
    var pointer;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++){
        if (figures[i].className == 'visible'){
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length){
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

function startPlayback(){
    setTimeout(moveForward, slideInterval);
}
startPlayback();
    
    