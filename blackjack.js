let blackjackGame = {

    'you': {
        'scoreSpan': '#your-result',
        'div': '#your-box',
        'score': 0
    },

    'dealer': {
        'scoreSpan': '#dealer-result'
        , 'div': '#dealer-box', 'score': 0
    },

    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
        '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]
    },
    'wins': 0,
    'losses': 0,
    'draws': 0

};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('sounds/swish.m4a');
document.querySelector('#blackjack-hit-btn').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-btn').addEventListener('click', blackjackStand);
document.querySelector('#blackjack-deal-btn').addEventListener('click', blackjackDeal);
var active = 'you';
var end = false;
function blackjackStand() {


    console.log("asfasf");
        active = 'dealer';
        dealerLogic();


}

function youButtons(){
    document.querySelector('#blackjack-stand-btn').addEventListener('click', blackjackStand);
        document.querySelector('#blackjack-hit-btn').addEventListener('click', blackjackHit);
        document.querySelector('#blackjack-deal-btn').removeEventListener('click', blackjackDeal); 
}
function dealerbuttons() {

   
        document.querySelector('#blackjack-stand-btn').removeEventListener('click', blackjackStand);
        document.querySelector('#blackjack-hit-btn').removeEventListener('click', blackjackHit);
        document.querySelector('#blackjack-deal-btn').removeEventListener('click', blackjackDeal);
    



}

function startAgain(){

    document.querySelector('#blackjack-deal-btn').addEventListener('click', blackjackDeal); 
}

function blackjackHit() {
   if (active == 'dealer'){
       dealerbuttons();
   }

    let card = randomCard();
    if (blackjackGame[active]['score'] < 21) {
        showCard(card, blackjackGame[active]);
        updateScore(card, blackjackGame[active]);
        if (blackjackGame[active]['score'] > 21) {
            document.querySelector(blackjackGame[active]['scoreSpan']).textContent = "BUST!";
            document.querySelector(blackjackGame[active]['scoreSpan']).style.color = "red";

            if (active == 'you') {
                document.querySelector('#blackjack-result').textContent = "YOU LOST!";
                document.querySelector('#blackjack-result').style.color = "red";
                blackjackGame['losses']++;
                document.querySelector('#losses').textContent = blackjackGame['losses'];
            }
            else {
                document.querySelector('#blackjack-result').textContent = "YOU WON!";
                document.querySelector('#blackjack-result').style.color = "green";
                blackjackGame['wins']++;
                document.querySelector('#wins').textContent = blackjackGame['wins'];
            }
        }
        else if (blackjackGame['you']['score'] == blackjackGame['dealer']['score']) {
            document.querySelector('#blackjack-result').textContent = "YOU DRAWED!";
            document.querySelector('#blackjack-result').style.color = "orange";
            blackjackGame['draws']++;

            document.querySelector('#draws').textContent = blackjackGame['draws'];


        }
        else if (blackjackGame['dealer']['score'] > blackjackGame['you']['score']) {
            document.querySelector('#blackjack-result').textContent = "YOU LOST!";
            document.querySelector('#blackjack-result').style.color = "red";
            blackjackGame['losses']++;
            document.querySelector('#losses').textContent = blackjackGame['losses'];




        }
        else if (blackjackGame[active]['score'] == 21) {


            if (active == 'you') {
                document.querySelector('#blackjack-result').textContent = "YOU WON!";
                document.querySelector('#blackjack-result').style.color = "green";
                blackjackGame['wins']++;
                document.querySelector('#wins').textContent = blackjackGame['wins'];

            }
            else {
                document.querySelector('#blackjack-result').textContent = "YOU LOST!";
                document.querySelector('#blackjack-result').style.color = "red";
                blackjackGame['losses']++;
                document.querySelector('#losses').textContent = blackjackGame['losses'];
            }

        }

    }
    var result = document.querySelector('#blackjack-result').textContent;
    if (result == 'YOU WON!' || result == 'YOU LOST!' || result == 'YOU DRAWED!') {
        active = 'you';
        end = true;
        startAgain();
    }


}
function randomCard() {
    let random = Math.floor(Math.random() * 13);

    return blackjackGame['cards'][random];
}

function showCard(card, activePlayer) {


    let cardImage = document.createElement('img');
    cardImage.src = `images/${card}.png`;

    document.querySelector(activePlayer.div).appendChild(cardImage);
    hitSound.play();

}

function blackjackDeal() {
    youButtons();
    end = false;
    document.querySelector('#blackjack-result').textContent = "Let's Play";
    document.querySelector('#blackjack-result').style.color = "black";


    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    console.log(yourImages);
    for (let index = 0; index < yourImages.length; index++) {
        yourImages[index].remove();

    }
    for (let index = 0; index < dealerImages.length; index++) {
        dealerImages[index].remove();

    }

    YOU['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector('#your-result').textContent = 0;
    document.querySelector('#dealer-result').textContent = 0;
    document.querySelector('#your-result').style.color = 'white';
    document.querySelector('#dealer-result').style.color = 'white';
}

function updateScore(card, activePlayer) {
    if (card == 'A' && (activePlayer['score'] + blackjackGame['cardsMap'][card][1]) <= 21) {
        activePlayer['score'] += 11;


    }

    else if (card == 'A' && (activePlayer['score'] + blackjackGame['cardsMap'][card][0]) != 21) {
        activePlayer['score'] += 1;


    }
    else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];

    }
    document.querySelector(activePlayer.scoreSpan).innerText = activePlayer['score'];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function dealerLogic() {

    while (blackjackGame['dealer']['score'] < blackjackGame['you']['score']) {
        blackjackHit();
        await sleep(1000);
    }
 
}

function computeWinner() {
    let winner;

    if ([YOU]['score'] <= 21) {

    }
}

function showResult(winner) {

}