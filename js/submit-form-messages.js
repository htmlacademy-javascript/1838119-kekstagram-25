import {isEscapeKey} from './util.js';

const successMessageBlock = document.querySelector('.success-message');
const successMessageTemplate = document.querySelector('#success').content;
const errorMessageBlock = document.querySelector('.error-message');
const errorMessageTemplate = document.querySelector('#error').content;

//Сообщение об успешной отправке данных
const showSuccessMessage = () => {
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

//Закрытие окна сообщения
document.addEventListener ('keydown', (evt)=> {
  if (isEscapeKey(evt)) {
    errorMessageBlock.classList.add('hidden');
    successMessageBlock.classList.add('hidden');
  }
});

document.addEventListener ('click', (evt) =>{
  if(evt.target !== errorMessageBlock && evt.target !== successMessageBlock) {
    errorMessageBlock.classList.add('hidden');
    successMessageBlock.classList.add('hidden');
  }
});

export {showSuccessMessage, showErrorMessage};
