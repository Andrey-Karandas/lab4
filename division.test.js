const Calculator = require('./app')
test('Division should return sum of two values', () => {
  expect(Calculator.division(16, 4)).toBe(4)
})
