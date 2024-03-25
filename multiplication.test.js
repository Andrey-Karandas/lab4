const Calculator = require('./app')
test('Multiplication should return sum of two values', () => {
  expect(Calculator.multiplication(1, 4)).toBe(4)
})
