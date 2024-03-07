const Calculator = require('./app')
test('Sum should return sum of two values', () => {
  expect(Calculator.add(1, 3)).toBe(4)
})
