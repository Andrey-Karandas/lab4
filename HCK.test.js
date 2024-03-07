const Calculator = require('./app')
test('HCK should return value', () => {
  expect(Calculator.HCK(6, 8)).toBe(24)
})
