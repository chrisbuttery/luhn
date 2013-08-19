var validate = function (cardNumber){

  var trimmed = cardNumber.trim(),
    length = trimmed.length,
    cardNum = parseInt(trimmed, 10),
    total = 0,
    calc,
    calc2;

  if (length === 0){
    return true;
  }

  if (isNaN(cardNum) || !/^[0-9]+$/.test(trimmed)) {
    return false;
  }

  // traverse through card digits starting for the most right
  for (var i = length; i > 0; i--) {
    calc = Math.floor(cardNum) % 10; // right most calc
    total += calc;
    cardNum = cardNum / 10; // move decimal

    calc = Math.floor(cardNum) % 10; // the next right most calc
    calc2 = calc * 2;

    switch (calc2) {
      case 10: calc2 = 1; break;
      case 12: calc2 = 3; break;
      case 14: calc2 = 5; break;
      case 16: calc2 = 7; break;
      case 18: calc2 = 9; break;
      default: calc2 = calc2;
    }

    cardNum = cardNum / 10; // move decimal
    total += calc2;
    i--;
  }

  return ((total % 10) === 0);
};

module.exports = {
  validate: validate
};