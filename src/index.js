module.exports = function toReadable(number) {
  const upToTen = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];

  if (number >= 0 && number < 11) {
    return upToTen[number];
  }

  const upToNineteen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const upToOneHundred = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  const numsArray = String(number).split('');

  if (number > 10 && number < 20) {
    return `${upToNineteen[numsArray[1]]}`;
  }

  if (number >= 20 && number < 100) {
    let str = '';

    if (+numsArray[1] !== 0) {
      str += `${upToOneHundred[numsArray[0]]} ${upToTen[numsArray[1]]}`;
    } else {
      str += `${upToOneHundred[numsArray[0]]}`;
    }

    return str;
  }

  if (number >= 100 && number < 1000) {
    let str = `${upToTen[numsArray[0]]} hundred`;

    if (+numsArray[1] === 0 && +numsArray[2] === 0) {
      return str;
    }

    if (+numsArray[2] === 0) {
      str += ` ${upToOneHundred[numsArray[1]]}`;
    } else if (+numsArray[1] === 0) {
      str += ` ${upToTen[numsArray[2]]}`;
    } else if (+numsArray[1] === 1) {
      str += ` ${upToNineteen[numsArray[2]]}`;
    } else {
      str += ` ${upToOneHundred[numsArray[1]]} ${upToTen[numsArray[2]]}`;
    }

    return str;
  }

  return '';
};
