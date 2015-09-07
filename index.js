// regex
var pattern = /^[0-9]+$/

/**
 * [isNaN description]
 * @param  {[type]}  num [description]
 * @return {Boolean}     [description]
 */

function isNotANumber (num) {
  return (isNaN(num) || !pattern.test(num))
}

/**
 * [exports description]
 * @param  {[type]} cardNumber [description]
 * @return {[type]}            [description]
 */

module.exports = function (cardNumber) {
  if (!cardNumber) return
  if (typeof (cardNumber) !== 'string') {
    cardNumber = String(cardNumber)
  }

  // trim the string and validate it has length
  var trimmed = cardNumber.trim()
  var trimmedLength = trimmed.length
  if (trimmedLength === 0) return

  // parse the string to an int and validate it's a number
  var cardNum = parseInt(trimmed, 10)
  if (isNotANumber(cardNum)) return

  var total = 0
  var calc1
  var calc2

  // traverse through card digits
  // starting from  the most right
  for (var i = trimmedLength; i > 0; i--) {
    // right most digit
    calc1 = Math.floor(cardNum) % 10
    total += calc1

    // move the decimal
    cardNum = cardNum / 10

    // the next right most digit
    calc1 = Math.floor(cardNum) % 10
    calc2 = calc1 * 2

    switch (calc2) {
      case 10:
        calc2 = 1
        break
      case 12:
        calc2 = 3
        break
      case 14:
        calc2 = 5
        break
      case 16:
        calc2 = 7
        break
      case 18:
        calc2 = 9
        break
      default:
        calc2 = calc2
    }

    // move decimal
    cardNum = cardNum / 10

    total += calc2
    i--
  }

  // return a boolean
  return ((total % 10) === 0)
}
