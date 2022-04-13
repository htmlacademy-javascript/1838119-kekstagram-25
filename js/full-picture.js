// Реализовать сценарий просмотра фотографий в полноразмерном режиме

import { isEscapeKey } from './util.js';

const closeFullPictureButton = document.querySelector('.big-picture__cancel');
const viewFullSizePictureWindow = document.querySelector('.big-picture');

const closeWindow = () => {
  viewFullSizePictureWindow.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.comments-uploaded-counts').innerHTML = '';
};

closeFullPictureButton.addEventListener('click', () =>{
  closeWindow();
});

document.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow();
  }
});


