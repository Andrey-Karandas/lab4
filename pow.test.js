const Calculator = require('./app')
test('Pow should return sum of two values', () => {
  expect(Calculator.pow(2, 2)).toBe(4)
})
