
var fortuneLines = [
    'Good day to you',
    'You will step in shit',
    'Some birds will poo-poo on you',
    'You will find a gold coin on the ground',
    'You look nice today. Too bad it is only today.']

console.log(fortuneLines[getRandomInt(0, fortuneLines.length)])
console.log(getRandomInt(0, fortuneLines.length));


var newWord, previousWord;

function GenerateFortune() {

    newWord = fortuneLines[getRandomInt(0, fortuneLines.length)];
    if (previousWord == newWord) {
        newWord = fortuneLines[getRandomInt(0, fortuneLines.length)];

    }
    previousWord = newWord;


    document.getElementById("fortune").innerHTML = newWord;


}

function getRandomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

    //The maximum is exclusive and the minimum is inclusive
}
