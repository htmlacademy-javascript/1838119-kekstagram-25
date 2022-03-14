function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStringLength (str, stringLength ) {
  if (str.length <= stringLength) {
    return true;
  }
  return false;
}

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

export {checkStringLength, getRandomArrayElement, getRandomIntInclusive};