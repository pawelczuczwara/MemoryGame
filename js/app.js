
// ------------------ consts & variables -----------------------

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

const stars_def = [30,40,50,60,70]; //tresholds to subsract stars
let stars_cur = 0; //hollow stars count
let moves_cur = 0; //moves count
let open_card_list = []; //list of open cards to match - max 2

// ------------------ Cards initial layout -----------------------

function removeCards() {
    while (deck.firstChild) {
        deck.removeChild(deck.firstChild);
    }
}

function createCards() {
    const deck_content = document.createDocumentFragment();
    // duplicates symbols to match cards numer and shuffles them
    symbols = shuffle([...symbols_def, ...symbols_def]);

    for (let symbol of symbols) {
        card_list = document.createElement('li');
        card_list.classList.add('card');
        // creates element with font awesome defined in CSS
        card_list.innerHTML = `<i class="fas fa-${symbol}"></i>`;
        deck_content.appendChild(card_list);
    }

    deck.appendChild(deck_content);
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

// ------------------------ Card Matching ---------------------------

function checkMatch(cur_card) {
    // check if some card is already selected or if there is no more than 2 cards to match
    if ((open_card_list.length <= 1) || (open_card_list.length > 2))  { return; };
    let click_elem = cur_card.querySelector('.fas');
    let list_elem = open_card_list[0].querySelector('.fas')
    //check if cards symbols match
    if (click_elem.classList.value === list_elem.classList.value) {
        updateMatch();
    } else {
        setTimeout(closeCards, 1000);
    }
}

function closeCards() {
    console.log('close cards')
    for (card of open_card_list) {
        card.classList.toggle('open');
    }
    open_card_list = [];
}

function updateMatch() {
    for (card of open_card_list) {
        card.classList.toggle('match');
    }
    open_card_list = [];
    showMatchWin();
}

function openCard(cur_card) {
    cur_card.classList.toggle('open');
    open_card_list.push(cur_card);
}

function clickCard(event) {
    let cur_card = event.target;
    // check if the card was clicked & is not yet matched
    if ((cur_card.tagName === 'LI') && !(cur_card.classList.contains('match'))) {
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
    // removeStars();
    // getStars();
}

function resetMoves() {
    moves_cur = 0;
    moves_node.textContent = moves_cur;
}

// show winner moves and stars count
function showMatchWin() {
    let x = countMatch();
    matched.textContent = x;
    if (x === deck.childNodes.length) {
        console.log('win win');
        setTimeout(() => {
            removeCards();
            showScores();
        },
        1000);
    }
}

function showScores() {
    let deck_content = document.createDocumentFragment();
    let scores = document.createElement('span');
    scores.classList.add('win');

    scores.innerHTML = `<h1>YOU WIN !!!</h1>
                        <h1>Your moves: ${moves_node.textContent}</h1>`;

    deck_content.appendChild(scores);
    deck_content.appendChild(stars_node);
    deck.appendChild(deck_content);
}


// ---------------- Stars -----------------

function removeStars() {
    while (stars_node.firstChild) {
        stars_node.removeChild(stars_node.firstChild);
    }
}

// generate stars
function getStars() {
    let stars_frag = document.createElement('span');
    let stars_html = '';
    for (star_level of stars_def) {
        if (star_level > moves_cur) {
            stars_html = stars_html + `<li><i class="fas fa-star"></i></li>`;
        } else {
            stars_html = stars_html + `<li><i class="far fa-star"></i></li>`;
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
        removeStars();
        getStars();
    }
}


// ---------------- Game init -----------------

function restartGame() {
    removeCards();
    createCards();
    resetMoves();
    showMatchWin();
    removeStars();
    getStars();
}
restartGame()

restart.addEventListener('click', restartGame);
deck.addEventListener('click', clickCard);
/*
* Display the cards on the page
*   - shuffle the list of cards using the provided "shuffle" method below
*   - loop through each card and create its HTML
*   - add each card's HTML to the page

* set up the event listener for a card. If a card is clicked:
*  - display the card's symbol (put this functionality in another function that you call from this one)
*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
*  - if the list already has another card, check to see if the two cards match
*    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
*    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
*    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
*    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
*/
