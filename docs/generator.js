var fortuneLines = [
'You will have a great day.',
'You will step in feces.',
'Some birds will poo-poo on you on purpose.',
'You will find a gold coin on the ground.',
'You look nice today. Too bad it is only for today.',
'The thing you are looking for is already near you.',
'Your next encounter might be your last.',
'Your current dice will betray you.',
'You are under a spell.',
'The next person you meet with the same class as you will be your soulmate.',
'Whether you need it high or low, today you will always have a good roll.',
'A suspicious guide might be an concealed enemy.',
'Do not let a tabaxi with black fur cross your path',
'The third chest you will open today will be a mimic',
'Necromancers are bad luck, do not trust them.',
'Gold in the hand, stones in the pond.',
'A world without black magic is like a canvas without any paint.',
'Follow the winds, doubt the waves.',
'If you meet an owlbear, you will die on that day. From the owlbear.',
'Cave trolls are scary, taxes are scarier.',
'Roll a 1 today, roll a 20 tomorrow.',
'Lady Luck is both a generous and cruel mistress.',
'If you can choost between treasures, pick three, beware because one of them, a mimic will be.',
'Use fireball, just fireball, only fireball',
'Necromancers are the best, after all they never lose their friends. Consider becoming one.',
'Look behind you.',
'Do not sleep with him, he slept with the pigs',
'If you are hungry, just eat your ancestors',
'Beware : a member of your party is keeping a secret from you',
'Look out for the horny bard',
'Mind the 7th gap in the next dungeon',
'Your natural charisma shall be useful today',
'You might feel controlled by forces you do not understand',
'Can you really rely on your perception ?',
'Animal handling might come in handy sooner than you think.',
'Do you really need that much stuff ?',
'Do not rush into the fight to come, or it will be your last.',
'Do not be afraid to cast that spell',
'Do rush into the next fight. Do it',
'The old man you will meet in a few hours is your real father.',
'Your party leader is wasting a lot of gold.',
'Spend your gold. You will not bring it with you in your grave. Your party will make sure of that.',
'Use that ability you never use today.',
'Do not trust the next shopkeeper you talk to.',
'A lot of people will die today.',
'Stop picking up junk.',
'Slow down on the alcohol',
'Be vigilant if you go into a dark alley next week.',
'Try to seduce that elf.',
'Today is not a good hair day for you. Wear a hat.'
]

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
