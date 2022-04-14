// Реализовать сценарий просмотра фотографий в полноразмерном режиме

import { isEscapeKey } from './util.js';

const closeFullPictureButton = document.querySelector('.big-picture__cancel');
const viewFullSizePictureWindow = document.querySelector('.big-picture');

const onUploadFormEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow();
  }
};

function closeWindow() {
  viewFullSizePictureWindow.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.comments-uploaded-counts').innerHTML = '';
  document.removeEventListener('keydown', onUploadFormEscKeydown);
  const uploadMoreCommentsButton = document.querySelector('.social__comments-loader');
  const copy = uploadMoreCommentsButton.cloneNode(true);
  document.querySelector('.big-picture__social').replaceChild(copy, uploadMoreCommentsButton);
}

closeFullPictureButton.addEventListener('click', () =>{
  closeWindow();
});

export {onUploadFormEscKeydown};
