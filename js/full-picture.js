// Реализовать сценарий просмотра фотографий в полноразмерном режиме
import {createInstaPosts} from './data.js';

const pictureSmallSize = document.querySelectorAll('.picture__img')
const viewFullSizePictureWindow = document.querySelector('.big-picture');

const openpictureFullSize = createInstaPosts();

openpictureFullSize.forEach( ({url, likes, COMMENTS}) => {
  console.log(pictureSmallSize);
  pictureSmallSize.addEventListener ('click', () => {
    viewFullSizePictureWindow.classList.remove('hidden');
    viewFullSizePictureWindow.querySelector('.big-picture__big-img').src = url;
    viewFullSizePictureWindow.querySelector('.likes-count').textContent = likes;
    viewFullSizePictureWindow.querySelector('.comments-count').textContent = COMMENTS.length;
  });
});
