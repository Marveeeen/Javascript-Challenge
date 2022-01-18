//Challenge 1: Age in Days

const ageBtn = document.getElementById('ageBtn')
const ageReset = document.getElementById('ageReset')


ageBtn.addEventListener('click', () => ageInDays())
ageReset.addEventListener('click', () => reset())

function ageInDays() {
    let birthYear = prompt('Enter your birth year!!');
    let ageInDays = (2021 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode(
        `Your are ${ageInDays} days old!`
    );

    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}


// Challenge 2: Generate a cat

const catBtn = document.getElementById('cat-gen-button')

catBtn.addEventListener('click', () => generateCat())

function generateCat() {
    let image = document.createElement('img');
    let flexbox = document.getElementById('flex-box')
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    flexbox.appendChild(image)
    
}


// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt()); // number randomizer 0-2
    results = decideWinner(humanChoice,botChoice); // [0,1] human Lost | bot won
    message = finalMessage(results); // {'message': 'You won!', 'color' : 'green'}

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDataBase = {
        rock: {'scissors': 1, 'rock': 0.5, 'paper': 0},
        paper: {'rock': 1, 'paper': 0.5, 'scissors': 0},
        scissors: {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    let yourScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0) {
        return {'message': 'You lost!', 'color' : 'red'};
    } else if (yourScore === 0.5) {
        return {'message' : 'You Tied!', 'color' : 'yellow'};
    } else {
        return { 'message': 'You Win!', 'color' : 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        rock: document.getElementById('rock').src,
        paper: document.getElementById('paper').src,
        scissors: document.getElementById('scissors').src,
    }

    // remove all the images.
    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(52, 119, 219, 0.7);'>";
    messageDiv.innerHTML =
        "<h1 style='color: " +
        finalMessage["color"] +
        "; font-size: 60px padding:30px; '>" +
        finalMessage["message"];
    +"</h1>";
    botDiv.innerHTML =
        "<img src='" +
        imagesDatabase[botImageChoice] +
        "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(219, 52, 60, 0.7);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// Challenge 4: Change the Color of All buttons

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}


function buttonColorChange(buttonThing) {
    if(buttonThing.value === 'red') {
        buttonRed();
    } else if (buttonThing.value === 'green') {
        buttonGreen();
    } else if (buttonThing.value === 'reset') {
        buttonReset();
    } else if (buttonThing.value === 'random') {
        buttonRandom();
    }

}

function buttonRed() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for(let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for(let i = 0; i < all_buttons.length; i++) {
        let randomNumbers = Math.floor(Math.random() * 4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumbers]);
    }
}

//Challenge 5: BlackJack
let blackjackGame = {
    you: {
        scoreSpan: "#your-blackjack-result",
        div: "#your-box",
        score: 0,
    },

    dealer: {
        scoreSpan: "#dealer-blackjack-result",
        div: "#dealer-box",
        score: 0,
    },

    cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"],

    cardMap: {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        K: 10,
        J: 10,
        Q: 10,
        A: [1, 11],
    },

    wins: 0,
    losses: 0,
    draws: 0,
    isStand: false,
    turnsOver: false,

}

console.log(blackjackGame)

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitBtn = document.getElementById('blackjack-hit-button');
const standBtn = document.getElementById('blackjack-stand-button');
const dealBtn = document.getElementById('blackjack-deal-button');


const hitSound = new Audio("/sounds/swish.m4a");
const winSound = new Audio("/sounds/cash.mp3");
const lossSound = new Audio("/sounds/aww.mp3");


hitBtn.addEventListener("click", () => blackJackHit());
standBtn.addEventListener("click", () => dealerLogic());
dealBtn.addEventListener("click", () => blackJackDeal());


function blackJackHit() {
    if(blackjackGame["isStand"] === false) {
        let card = randomCard();
        showCard(YOU, card);
        updateScore(card, YOU);
        showScore(YOU);  
    }
}

function blackJackDeal() {
    if (blackjackGame["turnsOver"] === true) {
        let yourImages = document
            .querySelector("#your-box")
            .querySelectorAll("img");
        let dealerImages = document
            .querySelector("#dealer-box")
            .querySelectorAll("img");

        for(let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for(let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        document.querySelector("#your-blackjack-result").textContent = 0;
        YOU.score = 0;
        document.querySelector("#your-blackjack-result").style.color = "white";

        document.querySelector("#dealer-blackjack-result").textContent = 0;
        DEALER.score = 0;
        document.querySelector("#dealer-blackjack-result").style.color = "white";

        document.querySelector("#blackjack-result").textContent = "Let's play";
        document.querySelector("#blackjack-result").style.color = "black";

        blackjackGame["turnsOVer"] = false;
        blackjackGame["isStand"] = false;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic() {
    blackjackGame["isStand"] = true;

    while(DEALER['score'] < 16 && blackjackGame["isStand"] === true) {
        let card = randomCard();
        showCard(DEALER,card);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame["turnsOver"] = true;
    let winner = computeWinner();
    showResult(winner);

}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13)
    return blackjackGame["cards"][randomIndex];
}

function showCard(activePlayer, card) {
    if(activePlayer["score"] <= 21) {
        let cardImage = document.createElement("img");
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer["div"]).appendChild(cardImage);
        hitSound.play();
    }
}

function updateScore(card, activePlayer) {

    if (card === "A") {
        if(activePlayer["score"] + blackjackGame["cardMap"][card][1] <= 21) {
            activePlayer["score"] += blackjackGame["cardMap"][card][1];
        } else {
            activePlayer["score"] += blackjackGame["cardMap"][card][0];
        }
    } else {
        activePlayer["score"] += blackjackGame["cardMap"][card]
    }
}


function showScore(activePlayer) {
    if(activePlayer["score"] > 21) {
        document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
        document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
    } else {
        document.querySelector(activePlayer["scoreSpan"]).textContent = activePlayer["score"];
    }
}


function computeWinner() {
    let winner;

    if (YOU["score"] <= 21) {
        // condition: higher score than dealer or when dealer busts but you're 21 under
        if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
            blackjackGame["wins"]++;
            winner = YOU;
        } else if (YOU["score"] < DEALER["score"]) {
            blackjackGame["losses"]++;
            winner = DEALER;
        } else if (YOU["score"] === DEALER["score"]) {
            blackjackGame["draws"]++;
        }

        // condition: when user busts but dealer doen't
    } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
        winner = DEALER;

        // condition: when both of you busts
    } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    }

    return winner;

}

function showResult(winner) {

    let message, messageColor;

    if (winner === YOU) {
        document.querySelector("#wins").textContent = blackjackGame["wins"];
        message = "You Won!";
        messageColor = "green";
        winSound.play();
      } else if (winner === DEALER) {
        document.querySelector("#losses").textContent = blackjackGame["losses"];
        message = "You lost!";
        messageColor = "red";
        lossSound.play();
      } else {
        document.querySelector("#draws").textContent = blackjackGame["draws"];
        message = "You drew!";
        messageColor = "black";
      }
    
      document.querySelector("#blackjack-result").textContent = message;
      document.querySelector("#blackjack-result").style.color = messageColor;

}


