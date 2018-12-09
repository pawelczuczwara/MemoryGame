'use strict';
// ------------------ global consts & variables ---------------------
// DOM nodes
const deck = document.querySelector('.deck');
const restart = document.querySelector('.restart');

//  cards symbols and variables
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

    openCard: function openCard(cur_card) {
        cur_card.classList.toggle('open');
        this.flipCard(cur_card.classList.item(1), 180);
        playSound('flip');
    },

    closeCards: function closeCards(cards) {
        for (let card of cards) {
            card.classList.toggle('open');
            card.classList.toggle('nomatch');
            this.flipCard(card.classList.item(1), 0);
            playSound('flip');
        }
    }
};

//game scores variables
const scoresDef = {
    score_node: document.querySelector('.score-panel'),
    moves_node: document.querySelector('.moves'),
    stars_node: document.querySelector('.stars'),
    stars_def: [30,40,50,60,70], //tresholds to subsract stars
    stars_cur: 0, //lost points - stars count
    moves_cur: 0, //moves count
    match_cur: 0, //matched cards
    open_card_list: [], //list of open cards to match - max 2

    shakePanel: function () {
        this.score_node.classList.toggle('animated');
        this.score_node.classList.toggle('shake');
    }
}

// timerDef variables and node
const timerDef = {
    time_node: document.querySelector(".time"),
    time_interval: '',
    time_started: false
}

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
    scoresDef.score_node.classList.toggle('animated');
    scoresDef.score_node.classList.toggle('shake');
    for (let card of cards) {
        card.classList.toggle('nomatch');
    }
    playSound('bad');
    setTimeout(() => {
        cardDef.closeCards(cards);
        scoresDef.shakePanel();
    }, 1000);
}


function updateMatch(cards) {
    playSound('ok');
    setTimeout(() => {
        for (let card of cards) {
            card.classList.toggle('match');
        }
        showMatchWin();
    }, 1000);
}


function clickCard(event) {
    (timerDef.time_started) ? "" : startTime(timerDef);
    let cur_card = event.target;
    // check if the card was clicked & is not yet matched
    // console.log(cur_card.classList.value);
    if ((cur_card.classList.contains('card')) && !(cur_card.classList.contains('nomatch')) && !(cur_card.classList.contains('match'))) {
        cardDef.openCard(cur_card);
        scoresDef.open_card_list.push(cur_card);
        checkMatch(cur_card);
        addMoves(scoresDef);
    }
}

// ----------------- Scores ---------------------

function countMatch() {
    let count = 0;
    deck.childNodes.forEach(function(node) {
        if (node.classList.contains('match')) {
            count += 1;
        }
    });
    return count;
}

function addMoves(scores) {
    scores.moves_cur += 1;
    scores.moves_node.textContent = scores.moves_cur;
    updateStars();
}

function resetMoves(scores) {
    scores.moves_cur = 0;
    scores.match_cur = 0;
    scores.moves_node.textContent = scores.moves_cur;
}

// show winner moves and stars count
function showMatchWin(scores) {
    scoresDef.match_cur = countMatch();
    const matched = document.querySelector('.matched');
    matched.textContent = scoresDef.match_cur;
    if (scoresDef.match_cur === 16) {
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

    const sco_moves = scoresDef.moves_node.textContent;
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
function getStars() {
    let stars_frag = document.createElement('span');
    let stars_html = '';
    for (let star_level of scoresDef.stars_def) {
        if (star_level > scoresDef.moves_cur) {
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
        if (star_level < scoresDef.moves_cur) {
            new_stars = new_stars + 1;
        }
    }
    if (scoresDef.stars_cur < new_stars) {
        scoresDef.stars_cur = new_stars;
        console.log(scoresDef.stars_cur);
        removeChilds(scoresDef.stars_node);
        getStars();
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
    removeChilds(deck);

    createCards(cardDef);
    setTimeout(startCards, 0);

    resetMoves(scoresDef);
    showMatchWin(scoresDef, deck);

    removeChilds(scoresDef.stars_node);
    getStars();

    resetTime(timerDef);
}

restartGame();


restart.addEventListener('click', restartGame);
deck.addEventListener('click', clickCard);

