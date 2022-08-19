function topScoringHand(hand) {
    const pokerhandList = require('./pokerhandList');
    let playerCardValues = [];
    let playerCardSuits = [];

    // Convert face cards into numbers
    hand.cards.forEach((ele, i) => {
        if (hand.cards[i].value == 'JACK')
            playerCardValues.push(11);

        else if (hand.cards[i].value == 'QUEEN')
            playerCardValues.push(12);

        else if (hand.cards[i].value == 'KING')
            playerCardValues.push(13);

        else if (hand.cards[i].value == 'ACE')
            playerCardValues.push(14);

        else
            playerCardValues.push(hand.cards[i].value);

        playerCardSuits.push(hand.cards[i].suit);
    })


    playerCardValues = playerCardValues.map(i => Number(i));

    // Conditional Statements decide the winning hand
    if (pokerhandList.straight(playerCardValues) && pokerhandList.flush(playerCardSuits))
        return pokerhandList.playerHand[0];

    if (pokerhandList.fourOfAKind(playerCardValues))
        return pokerhandList.playerHand[1];

    if (pokerhandList.threeOfAKind(playerCardValues) && pokerhandList.onePair(playerCardValues))
        return pokerhandList.playerHand[2];

    if (pokerhandList.flush(playerCardSuits))
        return pokerhandList.playerHand[3];

    if (pokerhandList.straight(playerCardValues))
        return pokerhandList.playerHand[4];

    if (pokerhandList.threeOfAKind(playerCardValues))
        return pokerhandList.playerHand[5];

    if (pokerhandList.twoPair(playerCardValues))
        return pokerhandList.playerHand[6];

    if (pokerhandList.onePair(playerCardValues))
        return pokerhandList.playerHand[7];

    return pokerhandList.playerHand[8];
}

// we require the https standard Node module
const http = require('http');

const url = 'http://www.deckofcardsapi.com/api/deck/new/draw/?count=5'

callback = function (res) {
    let str = '';

    //another chunk of data has been received, so append it to `str`
    res.on('data', function (chunk) {
        str += chunk;
    });

    //the whole response has been received, so we just print it out here
    res.on('end', function () {
        const obj = JSON.parse(str);
        let displayHand = "";

        console.log('Your hand: \n');

        obj.cards.forEach((ele, i) => {
            displayHand += " / " + obj.cards[i].value + ' OF ' + obj.cards[i].suit + " / ";
        })
        console.log(displayHand + '\n');

        console.log(topScoringHand(obj));
    });
}

http.request(url, callback).end();
