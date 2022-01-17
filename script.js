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
