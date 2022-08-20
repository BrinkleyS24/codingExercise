
const playerHand = [
    'Top-Scoring Hand: STRAIGHT FLUSH',
    'Top-Scoring Hand: FOUR OF A KIND',
    'Top-Scoring Hand: FULL HOUSE',
    'Top-Scoring Hand: FLUSH',
    'Top-Scoring Hand: STRAIGHT',
    'Top-Scoring Hand: THREE OF A KIND',
    'Top-Scoring Hand: TWO PAIR',
    'Top-Scoring Hand: ONE PAIR',
    'Top-Scoring Hand: HIGH CARD'
];

function fourOfAKind(cards) {
    const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let handValue = [];

    // sort card values
    for (let i = 0; i < cardValues.length; i++) {
        handValue.push((cards || []).filter(value => value == cardValues[i]))
    }

    // counting values
    for (let i = 0; i < handValue.length; i++) {
        if (handValue[i].length == 4) {
            return true
        }
    }

}

function flush(cards) {
    const suits = ['CLUBS', 'HEARTS', 'SPADES', 'DIAMONDS'];
    let handValue = [];

    for (let i = 0; i < suits.length; i++) {
        handValue.push(cards.filter((suit) => suit == suits[i]))
    }

    for (let i = 0; i < handValue.length; i++) {
        if (handValue[i].length == 5) {
            return true
        }
    }

}

function lowToHigh(a, b) {
    return a - b;
}
function straight(cards) {
    // Sorts hand from low to high
    cards.sort(lowToHigh);

    // checks if straight has an ace
    if (cards[4] == 14) {
        if (cards[0] == 2 && cards[1] == 3 && cards[2] == 4 && cards[3] == 5) {
            return true;
        }
        else if (cards[0] == 10 && cards[1] == 11 && cards[2] == 12 && cards[3] == 13) {
            return true;
        }
    }

    else {
        let cardCheck = cards[0] + 1;

        for (i = 1; i < 5; i++) {
            if (cards[i] != cardCheck)
                return false;
            cardCheck++;
        }

        return true;
    }
}

function threeOfAKind(cards) {
    const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let handValue = [];

    for (let i = 0; i < cardValues.length; i++) {
        handValue.push(cards.filter(value => value == cardValues[i]))
    }

    for (let i = 0; i < handValue.length; i++) {
        if (handValue[i].length == 3) {
            return true
        }
    }

}

function twoPair(cards) {
    const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let handValue = [];
    let pairCount = 0;

    cardValues.forEach((ele, i) => {
        handValue.push(cards.filter(value => value == cardValues[i]))
    })

    handValue.forEach((ele, i) => {
        if (handValue[i].length == 2) {
            pairCount++
        }
    })

    if (pairCount == 2)
        return true;

    let cardCheck = cards[0] + 1;

    for (i = 1; i < 5; i++) {
        if (cards[i] != cardCheck)
            return false;
        cardCheck++;
    }
}

function onePair(cards) {
    const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let handValue = [];
    let pairCount = 0;

    cardValues.forEach((ele, i) => {
        handValue.push((cards || []).filter(value => value == cardValues[i]))
    })

    handValue.forEach((ele, i) => {
        if (handValue[i].length == 2) {
            pairCount++
        }
    })

    if (pairCount == 1)
        return true;

    let cardCheck = cards[0] + 1;

    for (i = 1; i < 5; i++) {
        if (cards[i] != cardCheck)
            return false;
        cardCheck++;
    }

    return true;
}

module.exports = { straight, flush, fourOfAKind, threeOfAKind, twoPair, onePair, playerHand };