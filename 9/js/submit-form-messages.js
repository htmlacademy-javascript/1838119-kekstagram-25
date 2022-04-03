import {isEscapeKey} from './util.js';

//Сообщение об успешной отправке данных
const successMessageBlock = document.querySelector('.success-message');
const successMessageTemplate = document.querySelector('#success').content;
const successButton = document.querySelector('.success__button');

const showSuccessMessage = () => {
  const successMessageFragment = document.createDocumentFragment();
  const successMessageElement = successMessageTemplate.cloneNode(true);
  successMessageFragment.appendChild(successMessageElement);
  successMessageBlock.appendChild(successMessageFragment);
  successMessageBlock.classList.remove('hidden');
};

//Сообщение об ошибке при отправке данных

const errorMessageBlock = document.querySelector('.error-message');
const errorMessageTemplate = document.querySelector('#error').content;
const errorButton = document.querySelector('.error__button');

const showErrorMessage = () => {
  const errorMessageFragment = document.createDocumentFragment();
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  errorMessageFragment.appendChild(errorMessageElement);
  errorMessageBlock.appendChild(errorMessageFragment);
  errorMessageBlock.classList.remove('hidden');
};

//Закрытие окна сообщения

errorButton.addEventListener ('click', () => {
  errorMessageBlock.classList.add('hidden');
});

successButton.addEventListener ('click', () => {
  errorMessageBlock.classList.add('hidden');
});

document.addEventListener ('keydown', (evt)=> {
  if (isEscapeKey(evt)) {
    errorMessageBlock.classList.add('hidden');
    successMessageBlock.classList.add('hidden');
  }
});

document.addEventListener ('click', () =>{
  if(!errorMessageBlock && successMessageBlock) {
    errorMessageBlock.classList.add('hidden');
    successMessageBlock.classList.add('hidden');
  }
});

export {showSuccessMessage, showErrorMessage};
