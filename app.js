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
    const result = numOne / numTwo

    if (result === Infinity) {
      try {
        throw new Error('Ділення на нуль')
      } catch (error) {
        return error.message
      }
    }
    return result
  }
  static pow(number, pow) {
    const result = number ** pow

    if (result === 1) {
      try {
        throw new Error('Невизначене значення')
      } catch (error) {
        return error.message
      }
    }
    return result
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
  static HCK(numOne, numTwo) {
    let maxNum = Math.max(numOne, numTwo)
    let minNum = Math.min(numOne, numTwo)
    let lcm = maxNum
    while (true) {
      if (lcm % minNum === 0 && lcm % maxNum === 0) {
        return lcm
      }
      lcm += maxNum
    }
  }
}

module.exports = Calculator
