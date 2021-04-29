const btnsEl = document.querySelector('.btns');
const choiceEl = document.querySelectorAll('.choice');
const playerScoreEl = document.querySelector('.p-score');
const computerScoreEl = document.querySelector('.c-score');
const res = document.querySelector('.pop-up');
const reset = document.querySelector('.btn');

btnsEl.addEventListener('click', event => {
    if (btnsEl.hasAttribute('disabled')) {
        return;
    }
    
    disableControls(btnsEl);

    const pChoice = event.target.getAttribute('type');
    const cChoice = randomChoice();

    choiceEl[0].classList.add('shaking');
    choiceEl[1].classList.add('shaking');

    setTimeout(() => {
        choiceEl[0].classList.remove('shaking');
        choiceEl[1].classList.remove('shaking');

        setPlayerChoice(choiceEl[0], pChoice); 
        setComputerChoice(choiceEl[1], cChoice);

        const c = competition(pChoice, cChoice);

        if (c === 1) {
            score.c++;
            computerScoreEl.textContent = score.c;
            res.textContent = 'COMPUTER WIN';

        } else if (c === -1) {
            score.p++;
            playerScoreEl.textContent = score.p;
            res.textContent = 'PLAYER WIN';
        } else {
            res.textContent = 'TIE';
        }

        setScore(score);

        setTimeout(() =>{
            setPlayerChoice(choiceEl[0], ROCK);
            setComputerChoice(choiceEl[1], ROCK);
            res.textContent = '';
            enableControls(btnsEl);
        }, 1500);
    }, 300 * 3);
});

reset.addEventListener('click', () => {
    localStorage.clear();
    renderScore();
});

let score;

function renderScore() {
    score = getScore({p: 0, c: 0});
    playerScoreEl.textContent = score.p;
    computerScoreEl.textContent = score.c;
} 

renderScore();  