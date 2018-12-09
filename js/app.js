'use strict';
// ------------------ global consts & variables ---------------------

//  list that holds all of cards symbols
const symbols_def = [
    'chevron-circle-left',
    'clock',
    'check-circle',
    'dragon',
    'eye',
    'compass',
    'adjust',
    'cloud-sun'
];

// DOM nodes to manipulate
const deck = document.querySelector('.deck');
const restart = document.querySelector('.restart');
const matched = document.querySelector('.matched');
const moves_node = document.querySelector('.moves');
const stars_node = document.querySelector('.stars');
const score_node = document.querySelector('.score-panel');

//game functionality variables
const stars_def = [30,40,50,60,70]; //tresholds to subsract stars
let stars_cur = 0; //lost points - stars count
let moves_cur = 0; //moves count
let match_cur = 0; //matched cards
let open_card_list = []; //list of open cards to match - max 2

// css variable acces
let root = document.documentElement;

// timer variables and node
const time_node = document.querySelector(".time");
let time_interval;
let time_started = false;

// ------------------ Utilities -----------------------

//set css variable to rotate card
function flipCard(nr, deg) {
    root.style.setProperty("--" + nr, deg + "deg");
}

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

//  play sound -----------------
function playSound(sound) {
    const audio = document.querySelector(`audio[data-key='${sound}']`);
    if(!audio) return; //stop if no audio definition
    audio.volume = 0.25;
    audio.currentTime = 0; //rewind to start
    audio.play();
}


// ------------------ Cards initial layout -----------------------

function createCards() {
    const deck_content = document.createDocumentFragment();
    // duplicates symbols to match cards numer and shuffles them
    let symbols = shuffle([...symbols_def, ...symbols_def]);
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
    if ((open_card_list.length <= 1) || (open_card_list.length > 2))  { return; };
    let click_elem = cur_card.querySelector('.fas');
    let list_elem = open_card_list[0].querySelector('.fas')
    //check if cards symbols match
    if (click_elem.classList.value === list_elem.classList.value) {
        updateMatch(open_card_list);
    } else {
        updateNoMatch(open_card_list);
    }
    open_card_list = []
}

function updateNoMatch(cards) {
    score_node.classList.toggle('animated');
    score_node.classList.toggle('shake');
    for (let card of cards) {
        card.classList.toggle('nomatch');
    }
    playSound('bad');
    setTimeout(() => { closeCards(cards); }, 1000);
}

function closeCards(cards) {
    for (let card of cards) {
        card.classList.toggle('open');
        card.classList.toggle('nomatch');
        flipCard(card.classList.item(1), 0);
    }
    score_node.classList.toggle('animated');
    score_node.classList.toggle('shake');
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

function openCard(cur_card) {
    cur_card.classList.toggle('open');
    flipCard(cur_card.classList.item(1), 180);
    open_card_list.push(cur_card);
    playSound('flip');
}

function clickCard(event) {
    (time_started) ? "" : startTime();
    let cur_card = event.target;
    // check if the card was clicked & is not yet matched
    // console.log(cur_card.classList.value);
    if ((cur_card.classList.contains('card')) && !(cur_card.classList.contains('nomatch')) && !(cur_card.classList.contains('match'))) {
        openCard(cur_card);
        checkMatch(cur_card);
        addMoves();
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

function addMoves() {
    moves_cur += 1;
    moves_node.textContent = moves_cur;
    updateStars();
}

function resetMoves() {
    moves_cur = 0;
    match_cur = 0;
    moves_node.textContent = moves_cur;
}

// show winner moves and stars count
function showMatchWin() {
    match_cur = countMatch();
    matched.textContent = match_cur;
    if (match_cur === 16) {
        console.log('win win');
        setTimeout(() => {
            // removeChilds(deck);
            // startCards();
            showScores();
        },
        1000);
    }
}

function showScores() {
    // stop timer
    clearInterval(time_interval);
    //hide cards
    startCards();

    let sco_content = document.createElement('div');
    sco_content.classList.add('win');

    const sco_moves = moves_node.textContent;
    const sco_stars = stars_node.innerHTML;
    const sco_time = time_node.textContent;

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
    for (let star_level of stars_def) {
        if (star_level > moves_cur) {
            stars_html = stars_html + `<div><i class="fas fa-star"></i></div>`;
        } else {
            stars_html = stars_html + `<div><i class="far fa-star"></i></div>`;
        }
    }
    stars_frag.innerHTML = stars_html;
    stars_node.appendChild(stars_frag);

}

// update stars ONLY on treshold from stars_def
function updateStars() {
    let new_stars = 0;

    for (let star_level of stars_def) {
        if (star_level < moves_cur) {
            new_stars = new_stars + 1;
        }
    }
    if (stars_cur < new_stars) {
        stars_cur = new_stars;
        console.log(stars_cur);
        removeChilds(stars_node);
        getStars();
    }
}


// ---------------- timer -----------------

function startTime(){
    let time_sec = 0;
    let time_min = 0;
    time_started = true;
    time_interval = setInterval(function(){
        let s_pref = (time_sec < 10) ? "0" : "";
        let m_pref = (time_min < 10) ? "0" : "";
        time_node.innerHTML = m_pref + time_min + ":" + s_pref + time_sec;
        time_sec++;
        if(time_sec == 60){
            time_min++;
            time_sec = 0;
        }
    },1000);
}

function resetTime() {
    clearInterval(time_interval);
    time_node.innerHTML = "00:00";
    time_started = false;
}


// ---------------- Game init / restart -----------------

function restartGame() {
    removeChilds(deck);

    createCards();
    setTimeout(startCards, 0);

    resetMoves();
    showMatchWin();

    removeChilds(stars_node);
    getStars();

    resetTime();
}

restartGame();


restart.addEventListener('click', restartGame);
deck.addEventListener('click', clickCard);

