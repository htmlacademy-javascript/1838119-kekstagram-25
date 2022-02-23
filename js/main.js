function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//взяла из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_целого_числа_в_заданном_интервале_включительно

function checkStringLength (str, stringLength ) {
  if (str.length <= stringLength) {
    return true;
  }
    return false;
}

console.log(checkStringLength('hello world', 12));

console.log(getRandomIntInclusive(10,50));
