// function checkStringLength (str, stringLength ) {
//   if (str.length <= stringLength) {
//     return true;
//   }
//   return false;
// }

// const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const showErrorMessage = () => {
  const errorMessage = document.createElement('h1');
  errorMessage.textContent = 'Произошла ошибка. Пожалуйста, обновите страницу или зайдите чуть позже';
  document.querySelector('body').prepend(errorMessage);
  errorMessage.style.textAlign = 'center';
  errorMessage.style.display = 'block';
  errorMessage.style.height = '50px';
  errorMessage.style.backgroundColor = 'red';
};

// Устранение дребезгов
function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {isEscapeKey, debounce, showErrorMessage};
