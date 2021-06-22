const { expect, test, describe } = require('@jest/globals');
const { returnTwo, greeting, add, subtract, divide, multiply } = require('./functions');

test('returnTwo should return the integer 2', () => {
    expect(returnTwo()).toBe(2)
})

test('greeting should return hello, {inputed name}', () => {
    expect(greeting('jill', 'james')).toBe('Hello, jill', 'Hello, james')
})

test('add function should return the sum of the two integers', () => {
    expect(add(1, 2)).toEqual(3), expect(add(5, 9)).toEqual(14)
})

describe('Math Functions', () => {
    test('subtract function should return the value of the two integers subtracted', () => {
        expect(subtract(10, 5)).toEqual(5), expect(subtract(25, 5)).toEqual(20)
    })

    test('divide function should return the value of the two integers divided', () => {
        expect(divide(10, 2)).toEqual(5), expect(divide(100, 25)).toEqual(4)
    })

    test('multiply function should return the value of the two integers multiplied', () => {
        expect(multiply(1, 2)).toEqual(2), expect(multiply(6, 6)).toEqual(36)
    })
})