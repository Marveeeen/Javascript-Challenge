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