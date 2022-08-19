
const hand = [
    'HIGHEST POSSIBLE HAND: STRAIGHT FLUSH',
    'HIGHEST POSSIBLE HAND: FOUR OF A KIND',
    'HIGHEST POSSIBLE HAND: FULL HOUSE',
    'HIGHEST POSSIBLE HAND: FLUSH',
    'HIGHEST POSSIBLE HAND: STRAIGHT',
    'HIGHEST POSSIBLE HAND: THREE OF A KIND',
    'HIGHEST POSSIBLE HAND: TWO PAIR',
    'HIGHEST POSSIBLE HAND: ONE PAIR',
    'HIGHEST POSSIBLE HAND: HIGH CARD'
];

function fourOfAKind(cards) {
    const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let handValue = [];

    // sort card values
    cardValues.forEach((ele, i) => {
        handValue.push(cards.filter(value => value == cardValues[i]))
    })

    // counting values
    handValue.forEach((ele, i) => {
        if (handValue[i].length == 4) {
            return true
        }
    })
}

function flush(cards) {
    let handValue = [];
    var suits = ['CLUBS', 'HEARTS', 'SPADES', 'DIAMONDS'];

    suits.forEach((ele, i) => {
        handValue.push(cards.filter((suit) => suit == suits[i]))
    })

    handValue.forEach((ele, i) => {
        if (handValue[i].length == 5) {
            return true
        }
    })
}

function lowToHigh(a, b) {
    return a - b;
}

function isStraight(cards) {
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
        const cardCheck = cards[0] + 1;

        for (i = 1; i < 5; i++) {
            if (cards[i] != cardCheck)
                return false;

            cardCheck++;
        }

        return true;
    }
}


function isThreeOfAKind(cards) {
    const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let handValue = [];

    cardValues.forEach((ele, i) => {
        handValue.push(cards.filter(value => value == cardValues[i]))
    })

    handValue.forEach((ele, i) => {
        if (handValue[i].length == 3) {
            return true
        }
    })
}

function isTwoPair(cards) {
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
}

function isOnePair(cards) {
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

    if (pairCount == 1)
        return true;
}