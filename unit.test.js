const Calculator = require('./app')
class Test {
  static addTest() {
    //Arrange
    let a = 3
    let b = 4

    //act
    const result = Calculator.add(a, b)

    //Assert
    test('add values', () => expect(result).toBe(a + b))
  }
  static subTest() {
    //Arrange
    let a = 3
    let b = 4

    //act
    const result = Calculator.subtraction(a, b)

    //Assert
    test('sub values', () => expect(result).toBe(a - b))
  }

  static multiplicationTest() {
    //Arrange
    let a = 3
    let b = 4

    //act
    const result = Calculator.multiplication(a, b)

    //Assert
    test('multiplication values', () => expect(result).toBe(a * b))
  }

  static divisionTest() {
    //Arrange
    let a = 3
    let b = 4

    //act
    const result = Calculator.division(a, b)

    //Assert
    test('division values', () => expect(result).toBe(a / b))
  }

  static powTest() {
    //Arrange
    let a = 3
    let b = 4

    //act
    const result = Calculator.pow(a, b)

    //Assert
    test('pow values', () => expect(result).toBe(a ** b))
  }

  static HCKTest() {
    //Arrange
    let a = 3
    let b = 4

    //act
    const result = Calculator.HCK(a, b)

    //Assert
    test('HCK', () => expect(result).toBe(12))
  }

  static HCDTest() {
    //Arrange
    let a = 4
    let b = 4

    //act
    const result = Calculator.HCD(a, b)

    //Assert
    test('HCD', () => expect(result).toBe(4))
  }

  static divisionZeroTest() {
    //Arrange
    let a = 10
    let b = 0
    let error = 'Ділення на нуль'

    //act
    const result = Calculator.division(a, b)

    //Assert
    test('division zero', () => expect(result).toBe(error))
  }

  static powZeroTest() {
    //Arrange
    let a = 0
    let b = 0
    let error = 'Невизначене значення'

    //act
    const result = Calculator.pow(a, b)

    //Assert
    test('Pow zero', () => expect(result).toBe(error))
  }
}
Test.addTest()
Test.subTest()
Test.multiplicationTest()
Test.divisionTest()
Test.divisionZeroTest()
Test.HCDTest()
Test.HCKTest()
Test.powTest()
Test.powZeroTest()
