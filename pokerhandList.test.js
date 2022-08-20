const pokerHand = require('./pokerhandList');

test('test if hand has a four of a kind', () => {
    expect(pokerHand.fourOfAKind([9, 9, 9, 9, 13])).toBe(true)
})

test('test if hand has a flush', () => {
    expect(pokerHand.flush(['DIAMONDS', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS'])).toBe(true)
})

test('test if hand has a straight', () => {
    expect(pokerHand.straight([9, 10, 11, 12, 13, 14])).toBe(true)
})

test('test if hand has a three of a kind', () => {
    expect(pokerHand.threeOfAKind([6, 6, 6, 3, 7])).toBe(true)
})

test('test if hand has two pairs', () => {
    expect(pokerHand.twoPair([6, 6, 3, 3, 7])).toBe(true)
})

test('test if hand has a pair', () => {
    expect(pokerHand.onePair([6, 6, 3, 4, 8])).toBe(true)
})





