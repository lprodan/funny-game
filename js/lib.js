const ROCK      = 'rock';
const SCISSORS  = 'scissors';
const PAPER     = 'paper';

const TIE   = 0;
const LEFT  = -1;
const RIGHT = 1;

const rules = {
    [ROCK]: SCISSORS,
    [SCISSORS]: PAPER, 
    [PAPER]: ROCK
};

function competition(choice1, choice2) {
    if (choice1 === choice2) {
        return TIE;
    } else {
        return rules[choice1] === choice2 ? LEFT : RIGHT;
    }
}

function setPlayerChoice(el, choice) {
    el.setAttribute('type', choice);
    
    if (choice === ROCK) {
        el.setAttribute('mirrored', '');
    } else {
        el.removeAttribute('mirrored');
    }
}

function setComputerChoice(el, choice) {
    el.setAttribute('type', choice);

    if (choice === ROCK) {
        el.removeAttribute('mirrored');    
    } else {
        el.setAttribute('mirrored', '');
    } 
}

function randomChoice() {
    const keys = Object.keys(rules);
    const random = Math.floor( Math.random() * keys.length );

    return keys[random];
}

function disableControls(el) {
    el.setAttribute('disabled', '');
}

function enableControls(el) {
    el.removeAttribute('disabled');
}

function setScore(score) {
    localStorage.setItem('score', JSON.stringify(score));
}

function getScore(defaultValue) {
    const score = localStorage.getItem('score');
    return Object.assign(defaultValue, (score) ? JSON.parse(score) : {});
}
