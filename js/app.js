'use strict';
// ------------------ global consts & variables ---------------------
// DOM nodes
const deck = document.querySelector('.deck');
const restart = document.querySelector('.restart');

//  object cards symbols, properties and methods
const cardDef = {
    cards: document.querySelectorAll('.card'),
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

    flipCard: function flipCard(card_nr, rotate_deg) {
        let root = document.documentElement;
        root.style.setProperty("--" + card_nr, rotate_deg + "deg");
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
    }
};

// object scores panel properties and methods
const scoresDef = {
    score_node: document.querySelector('.score-panel'),
    stars_node: document.querySelector('.stars'),
    stars_def: [30,40,50,60,70], //tresholds to subsract stars
    stars_cur: 0, //lost points - stars count
    open_card_list: [], //list of open cards to match - max 2

    shakePanel: function () {
        this.score_node.classList.toggle('animated');
        this.score_node.classList.toggle('shake');
    }
}

// object timerDef variables and node
const timerDef = {
    time_node: document.querySelector(".time"),
    time_interval: '',
    time_started: false
}

// ------------------------ constructor function ------------------
//
function Counter (node, step) {
    this.node = node;
    this.step = step;
    this.moves_cur = 0;
    this.get = function() {
        return this.moves_cur;
    };
    this.add =  function() {
        this.moves_cur += this.step;
        this.set();
        return this.moves_cur;
    };
    this.reset = function() {
        this.moves_cur = 0;
        this.set();
        return this.moves_cur;
    };
    this.set = function() {
        this.node.textContent = this.moves_cur;
    };
};
const moves = new Counter(document.querySelector('.moves'), 1);

//  commented to show module design pattern below
//  using that same properties and methods
// const scores = new Counter(document.querySelector('.matched'), 2);


// ------------------------ Module design pattern ------------------
//
//   with private variables, objects return and IIFE
//

const scores = (function() {
    const node = document.querySelector('.matched');
    let counter = 0;
    let step = 2;
    return {
        get: function() {
            return counter;
        },
        add: function() {
            counter += step;
            this.set();
            return counter;
        },
        reset: function() {
            counter = 0;
            this.set();
            return counter;
        },
        set: function() {
            node.textContent = counter;
        }
    }
})();


// ------------------ Utilities -----------------------

function removeChilds(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

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
    if(!audio) return; //stop if no audio definition
    audio.volume = 0.25;
    audio.currentTime = 0; //rewind to start
    audio.play();
}

// ------------------ Cards initial layout -----------------------

function createCards(cardDef) {
    const deck_content = document.createDocumentFragment();
    // duplicates symbols to match cards numer and shuffles them
    let symbols = shuffle([...cardDef.symbols_def, ...cardDef.symbols_def]);
    let i = 1;
    for (let symbol of symbols) {
        let card_list = document.createElement('div');
        card_list.classList.add('card');
        card_list.classList.add('n' + i);
        // creates element with font awesome defined in CSS
        card_list.innerHTML = `<div class="fas fa-${symbol}"></div>`;
        deck_content.appendChild(card_list);
        i++
    }

    deck.appendChild(deck_content);
}

// positon cards around circle
function startCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.classList.toggle('start');
    });
}

// ------------------------ Card Matching ---------------------------

function checkMatch(cur_card) {
    // check if some card is already selected or if there is no more than 2 cards to match
    if ((scoresDef.open_card_list.length <= 1) || (scoresDef.open_card_list.length > 2))  { return; };

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

    for (let card of cards) {
        card.classList.toggle('nomatch');
    }

    playSound('bad');

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

    (timerDef.time_started) ? "" : startTime(timerDef);
    // check if the card was clicked & is not yet matched
    // console.log(cur_card.classList.value);

    if ((cur_card.classList.contains('card')) && !(cur_card.classList.contains('nomatch')) && !(cur_card.classList.contains('match'))) {
        cardDef.openCard(cur_card);
        playSound('flip');
        scoresDef.open_card_list.push(cur_card);
        checkMatch(cur_card);
        // addMoves(scoresDef);
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


// ---------------- timerDef -----------------

function startTime(timer){
    let time_sec = 0;
    let time_min = 0;
    timer.time_started = true;
    timer.time_interval = setInterval(function(){
        let s_pref = (time_sec < 10) ? "0" : "";
        let m_pref = (time_min < 10) ? "0" : "";
        timer.time_node.innerHTML = m_pref + time_min + ":" + s_pref + time_sec;
        time_sec++;
        if(time_sec == 60){
            time_min++;
            time_sec = 0;
        }
    },1000);
}

function resetTime(timer) {
    clearInterval(timer.time_interval);
    timer.time_node.innerHTML = "00:00";
    timer.time_started = false;
}


// ---------------- Game init / restart -----------------

function restartGame() {
    //clean deck
    removeChilds(deck);

    //pepare cards
    createCards(cardDef);
    //animate cards
    setTimeout(startCards, 0);

    //reset moves conuter, private variable
    moves.reset();
    scores.reset();

    //reset stars
    setStars();

    resetTime(timerDef);
}

restartGame();


restart.addEventListener('click', restartGame);
deck.addEventListener('click', clickCard);

