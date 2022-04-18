import {showSuccessMessage, showErrorMessage} from './submit-form-messages.js';
import {sendData} from './api.js';
import {closeEditPictureWindow} from './upload-picture-form.js';


// Для валидации данных формы
const form = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const commentsInput = document.querySelector('.text__description');
const hashTagsValidText = document.querySelector('.text__error-hashtag');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'text__el--description',
  errorTextParent: 'text__el--description',
  errorTextClass: 'text__error',
});

const validateHashtag = (value) => {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

  if (value === '') {
    return true;
  }

  const severalHashtags = value.split(' ');

  if (severalHashtags.length > 5) {
    return false;
  }

  for (let i = 0; i < severalHashtags.length; i++) {
    if (re.test(severalHashtags[i])=== false) {
      hashTagsValidText.textContent = 'Хэштег должен начинаться с #, от 2 до 19 символов, максимально можно ввести 5 хэштегов';
      return false;
    }
  }

  //проверка на уникальность хэштегов
  const hashtagsSet = new Set(severalHashtags);
  if (hashtagsSet.size !== severalHashtags.length) {
    return false;
  }
  hashTagsValidText.textContent = '';
  return true;
};

const validateComments = (value) => value.length <= 140;

pristine.addValidator(hashtagInput, validateHashtag, 'От 2 до 20 символов вместе с #');
pristine.addValidator(commentsInput, validateComments, 'Длина комментария не должна быть больше 140 символов');

//Блокировка кнопки на время отправки формы

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

//Отправка формы

const setUploadPictureFormSubmit = (onSuccess) => {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessMessage();
        },
        () => {
          unblockSubmitButton();
          showErrorMessage();
          closeEditPictureWindow();
        },
        new FormData(evt.target),
      );
    }
  });
};

hashtagInput.addEventListener('change', () => {
  pristine.validate();
});

commentsInput.addEventListener('change', () => {
  pristine.validate();
});

//Закрытие окна после отправки формы
setUploadPictureFormSubmit(closeEditPictureWindow);

