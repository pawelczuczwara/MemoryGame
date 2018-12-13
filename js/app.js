'use strict';
// ------------------ global consts & variables ---------------------
// DOM nodes
const deck = document.querySelector('.deck');
const restart = document.querySelector('.restart');

//  object cards symbols, properties and methods
const cardDef = {
    nr: 1,
    symbols_def: [
        'chevron-circle-left',
        'clock',
        'check-circle',
        'dragon',
        'eye',
        'compass',
        'adjust',
        'cloud-sun'
    ],

    // Cards initial layout
    createCards: function createCards() {
        const deck_content = document.createDocumentFragment();
        // duplicates symbols to match cards numer and shuffles them
        let symbols = shuffle([...this.symbols_def, ...this.symbols_def]);

        for (let symbol of symbols) {
            deck_content.appendChild(this.createCard(symbol));
        }
        //reset cards nr for next game
        this.nr = 1;

        deck.appendChild(deck_content);
        //animate cards
        setTimeout(this.startCards, 0);
    },

    createCard: function createCard(symbol) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('n' + this.nr);
        // creates element with font awesome defined in CSS
        card.innerHTML = `<div class="fas fa-${symbol}"></div>`;
        this.nr++
        return card;
    },

    // positon cards around circle CSS
    startCards: function startCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(function (card) {
            card.classList.toggle('start');
        });
    },

    openCard: function openCard(current_card) {
        current_card.classList.toggle('open');
        this.flipCard(current_card.classList.item(1), 180);
    },

    closeCards: function closeCards(open_cards) {
        for (let card of open_cards) {
            card.classList.toggle('open');
            card.classList.toggle('nomatch');
            this.flipCard(card.classList.item(1), 0);
        }
    },

    flipCard: function flipCard(card_nr, rotate_deg) {
        const root = document.documentElement;
        root.style.setProperty("--" + card_nr, rotate_deg + "deg");
    },

};

// object scores panel properties and methods
const scoresDef = {
    score_node: document.querySelector('.score-panel'),
    stars_node: document.querySelector('.stars'),
    stars_def: [30, 40, 50, 60, 70], //tresholds to subsract stars
    stars_cur: 0, //lost points - stars count
    open_card_list: [], //list of open cards to match - max 2

    shakePanel: function () {
        this.score_node.classList.toggle('animated');
        this.score_node.classList.toggle('shake');
    }
}

// ------------------------ ES6 class ------------------
// object passed as atribute for constructor
class Counter{
    constructor({node, step = 1}) {
        this.step = step;
        this.node = node;
        this.moves_cur = 0;
    }
    get() {
        return this.moves_cur;
    }
    add() {
        this.moves_cur += this.step;
        this.set();
        return this.moves_cur;
    };
    reset() {
        this.moves_cur = 0;
        this.set();
        return this.moves_cur;
    };
    set() {
        this.node.textContent = this.moves_cur;
    };
};
const moves = new Counter({node: document.querySelector('.moves')});

//  commented to show module design pattern below
//  using that same properties and methods
// const scores = new Counter({ node: document.querySelector('.matched'), step: 2});


// ------------------------ Module design pattern ------------------
//
//   with private variables, objects return and IIFE
//

const scores = (function () {
    const node = document.querySelector('.matched');
    let counter = 0;
    let step = 2;
    return {
        get: function () {
            return counter;
        },
        add: function () {
            counter += step;
            this.set();
            return counter;
        },
        reset: function () {
            counter = 0;
            this.set();
            return counter;
        },
        set: function () {
            node.textContent = counter;
        }
    }
})();


// ------------------ Utilities -----------------------

// timer
const timeDef = {
    time_node: document.querySelector(".time"),
    time_sec: 0,
    time_min: 0,
    time_started: false,
    time_interval: '',

    s_pref: function() {
        return (this.time_sec < 10) ? "0" : "";
    },

    m_pref: function() {
        return (this.time_min < 10) ? "0" : "";
    },

    start: function timeStart() {
        this.time_started = true;
        this.time_interval = setInterval(() => {
            this.HTML();
            this.tick();
        }, 1000);
    },

    reset: function timeReset() {
        clearInterval(this.time_interval);
        this.time_started = false;
        this.time_min = 0;
        this.time_sec = 0;
        this.HTML();
    },

    HTML: function timeHTML() {
        this.time_node.innerHTML = this.m_pref() + this.time_min + ":" + this.s_pref() + this.time_sec;
    },

    tick: function timeTick() {
        this.time_sec++;
        if (this.time_sec == 60) {
            this.time_min++;
            this.time_sec = 0;
        }
    },
}

function removeChilds(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//  play sound_name -----------------
function playSound(sound_name) {
    const audio = document.querySelector(`audio[data-key='${sound_name}']`);
    if (!audio) return; //stop if no audio definition
    audio.volume = 0.25;
    audio.currentTime = 0; //rewind to start
    audio.play();
}


// ------------------------ Card Matching ---------------------------

function checkMatch(cur_card) {
    // check if some card is already selected or if there is no more than 2 cards to match
    if ((scoresDef.open_card_list.length <= 1) || (scoresDef.open_card_list.length > 2)) {
        return;
    };

    let click_elem = cur_card.querySelector('.fas');
    let list_elem = scoresDef.open_card_list[0].querySelector('.fas')

    //check if cards symbols match
    if (click_elem.classList.value === list_elem.classList.value) {
        updateMatch(scoresDef.open_card_list);
    } else {
        updateNoMatch(scoresDef.open_card_list);
    }

    scoresDef.open_card_list = []
}

function updateNoMatch(cards) {
    scoresDef.shakePanel();
    playSound('bad');

    for (let card of cards) {
        card.classList.toggle('nomatch');
    }

    setTimeout(() => {
        cardDef.closeCards(cards);
        playSound('flip');
        scoresDef.shakePanel();
    }, 1000);
}

function updateMatch(cards) {

    scores.add();
    playSound('ok');

    setTimeout(() => {
        for (let card of cards) {
            card.classList.toggle('match');
        }
        showMatchWin();
    }, 1000);
}

function clickCard(event) {
    let cur_card = event.target;

    (timeDef.time_started) ? '' : timeDef.start();
    // check if the card was clicked & is not yet matched
    // console.log(cur_card.classList.value);

    if ((cur_card.classList.contains('card')) && !(cur_card.classList.contains('nomatch')) && !(cur_card.classList.contains('match'))) {
        cardDef.openCard(cur_card);
        playSound('flip');
        scoresDef.open_card_list.push(cur_card);
        checkMatch(cur_card);
        moves.add();
        updateStars();
    }
}

// ----------------- Scores ---------------------

// show winner moves and stars count
function showMatchWin() {
    if (scores.get() === 16) {
        console.log('win win');
        setTimeout(() => {
                showScores();
            },
            1000);
    }
}

function showScores() {
    // stop timerDef
    clearInterval(timerDef.time_interval);
    //hide cards
    startCards();

    let sco_content = document.createElement('div');
    sco_content.classList.add('win');

    const sco_moves = moves.get();
    const sco_stars = scoresDef.stars_node.innerHTML;
    const sco_time = timerDef.time_node.textContent;

    sco_content.innerHTML = `<span><strong>YOU ARE A WINNNER !!!</strong></span>
                            <div>Your moves: ${sco_moves}</div>
                            <div class="stars">Stars: ${sco_stars}</div>
                            <div>Time: ${sco_time}</div>
                            <div class="sco_restart">
                                <i class="fa fa-redo-alt"></i>
                            </div>`;

    deck.appendChild(sco_content);
    let sco_restart = document.querySelector('.sco_restart');
    sco_restart.addEventListener('click', restartGame);
    playSound('win');
}


// ---------------- Stars -----------------

// generate stars
function setStars() {
    removeChilds(scoresDef.stars_node);
    let stars_frag = document.createElement('span');
    let stars_html = '';
    for (let star_level of scoresDef.stars_def) {
        if (star_level > moves.get()) {
            stars_html = stars_html + `<div><i class="fas fa-star"></i></div>`;
        } else {
            stars_html = stars_html + `<div><i class="far fa-star"></i></div>`;
        }
    }
    stars_frag.innerHTML = stars_html;
    scoresDef.stars_node.appendChild(stars_frag);

}

// update stars ONLY on treshold from stars_def
function updateStars() {
    let new_stars = 0;

    for (let star_level of scoresDef.stars_def) {
        if (star_level < moves.get()) {
            new_stars = new_stars + 1;
        }
    }
    if (scoresDef.stars_cur < new_stars) {
        scoresDef.stars_cur = new_stars;
        console.log(scoresDef.stars_cur);
        setStars();
    }
}




// ---------------- Game init / restart -----------------

function restartGame() {
    //clean deck
    removeChilds(deck);

    //pepare cards
    cardDef.createCards();

    //reset moves & scores
    moves.reset();
    scores.reset();

    //reset stars
    setStars();

    //resetTime(timerDef);
    timeDef.reset();
}

restartGame();


restart.addEventListener('click', restartGame);
deck.addEventListener('click', clickCard);