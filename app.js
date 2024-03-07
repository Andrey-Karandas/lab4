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
}

module.exports = Calculator
