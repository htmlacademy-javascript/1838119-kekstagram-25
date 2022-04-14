// Реализовать сценарий просмотра фотографий в полноразмерном режиме

import { isEscapeKey } from './util.js';
import {loadMoreComments} from './makepicture.js';

const closeFullPictureButton = document.querySelector('.big-picture__cancel');
const viewFullSizePictureWindow = document.querySelector('.big-picture');

const onUploadFormEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow();
  }
};

const closeWindow = () => {
  viewFullSizePictureWindow.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.comments-uploaded-counts').innerHTML = '';
  document.removeEventListener('keydown', onUploadFormEscKeydown);
  document.querySelector('.big-picture__cancel').removeEventListener ('click',  loadMoreComments);
};

closeFullPictureButton.addEventListener('click', () =>{
  closeWindow();
});



