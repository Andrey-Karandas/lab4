class Calculator {
  static add(numOne, numTwo) {
    return numOne + numTwo
  }
  static subtraction(numOne, numTwo) {
    return numOne - numTwo
  }
  static multiplication(numOne, numTwo) {
    return numOne * numTwo
  }
  static division(numOne, numTwo) {
    return numOne / numTwo
  }
  static pow(number, pow) {
    return number ** pow
  }
  static HCD(numOne, numTwo) {
    let minNum = Math.min(numOne, numTwo)
    for (let i = minNum; i >= 1; i--) {
      if (numOne % i === 0 && numTwo % i === 0) {
        return i
      }
    }
    return 1
  }
}

module.exports = Calculator
