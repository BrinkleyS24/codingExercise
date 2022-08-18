
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