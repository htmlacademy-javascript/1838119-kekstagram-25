// Для загрузки, открытия и закрытия формы редактирования изображения
import {isEscapeKey} from './util.js';
import {returnEffectsToOrigin} from './change-effects.js';
import { returnSizetoDefault } from './change-picture-size.js';

const modalWindow = document.querySelector('body');
const editPictureWindow = document.querySelector('.img-upload__overlay');
const uploadPictureInput = document.querySelector('#upload-file');
const closeEditWindowButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentsInput = document.querySelector('.text__description');


const openEditPictureWindow = () => {
  modalWindow.classList.add('modal-open');
  editPictureWindow.classList.remove('hidden');
};

const closeEditPictureWindow = () => {
  editPictureWindow.classList.add('hidden');
  modalWindow.classList.remove('modal-open');
  uploadPictureInput.value = '';
};

uploadPictureInput.addEventListener ('click', () => {
  returnEffectsToOrigin();
  returnSizetoDefault();
  commentsInput.value = '';
  hashtagInput.value = '';
});

uploadPictureInput.addEventListener ('change', () => {
  openEditPictureWindow();
});

closeEditWindowButton.addEventListener ('click', (evt) => {
  evt.preventDefault();
  closeEditPictureWindow();
  uploadPictureInput.value = '';
});

document.addEventListener ('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditPictureWindow();
    uploadPictureInput.value = '';
  }
});

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
  if(isEscapeKey(evt)) {
    evt.preventDefault();
  }
});

commentsInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
  if(isEscapeKey(evt)) {
    evt.preventDefault();
  }
});

export {openEditPictureWindow,closeEditPictureWindow};


