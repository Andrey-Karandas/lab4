const Calculator = require('./app')
test('HCD should return value', () => {
  expect(Calculator.HCD(24, 36)).toBe(12)
})
