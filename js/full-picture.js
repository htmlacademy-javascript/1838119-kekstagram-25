// Реализовать сценарий просмотра фотографий в полноразмерном режиме

import { isEscapeKey } from './util.js';

// const openBigPicture = () => {
//   const pictureSmallSize = document.querySelectorAll('.picture');
//   const viewFullSizePictureWindow = document.querySelector('.big-picture');


//   for (let i = 0; i < pictureSmallSize.length; i++) {
//     pictureSmallSize[i].addEventListener('click', ()=> {
//       viewFullSizePictureWindow.classList.remove('hidden');
//       // const openPictureFullSize = function () {
//       //   document.querySelector('.big-picture__big-img').src = pictureSmallSize[i].src;
//       //   document.querySelector('.likes-count').textContent = pictureSmallSize[i].textContent;
//       // };
//     });
//   }

// };

// export {openBigPicture};

export {isEscapeKey} from './util.js';

const closeFullPictureButton = document.querySelector('.big-picture__cancel');
const viewFullSizePictureWindow = document.querySelector('.big-picture');

const closeWindow = () => {
  viewFullSizePictureWindow.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

closeFullPictureButton.addEventListener('click', () =>{
  closeWindow();
});

document.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow();
  };
});



