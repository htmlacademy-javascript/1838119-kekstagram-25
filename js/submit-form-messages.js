import {isEscapeKey} from './util.js';

const successMessageBlock = document.querySelector('.success-message');
const successMessageTemplate = document.querySelector('#success').content;
const errorMessageBlock = document.querySelector('.error-message');
const errorMessageTemplate = document.querySelector('#error').content;

//Закрытие окна сообщения

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeMessageBlock();
  }
};

const onMessageClick = (evt) => {
  if(evt.target !== errorMessageBlock && evt.target !== successMessageBlock) {
    closeMessageBlock();
  }
};

//Сообщение об успешной отправке данных
const showSuccessMessage = () => {
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('keydown', onMessageClick);
  const successMessageFragment = document.createDocumentFragment();
  const successMessageElement = successMessageTemplate.cloneNode(true);
  successMessageFragment.appendChild(successMessageElement);
  successMessageBlock.appendChild(successMessageFragment);
  successMessageBlock.classList.remove('hidden');
  const successButton = document.querySelector('.success__button');

  successButton.addEventListener ('click', () => {
    successMessageBlock.classList.add('hidden');
  });
};

//Сообщение об ошибке при отправке данных
const showErrorMessage = () => {
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('keydown', onMessageClick);
  const errorMessageFragment = document.createDocumentFragment();
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  errorMessageFragment.appendChild(errorMessageElement);
  errorMessageBlock.appendChild(errorMessageFragment);
  errorMessageBlock.classList.remove('hidden');
  const errorButton = document.querySelector('.error__button');

  errorButton.addEventListener ('click', () => {
    errorMessageBlock.classList.add('hidden');
  });
};

const closeMessageBlock = () => {
  errorMessageBlock.classList.add('hidden');
  successMessageBlock.classList.add('hidden');
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('keydown', onMessageClick);
};

export {showSuccessMessage, showErrorMessage};
