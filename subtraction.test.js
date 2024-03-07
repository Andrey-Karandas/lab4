const Calculator = require('./app')
test('Subtraction should return sum of two values', () => {
  expect(Calculator.subtraction(7, 3)).toBe(4)
})
