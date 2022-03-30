// Реализовать сценарий просмотра фотографий в полноразмерном режиме
const pictureSmallSize = document.querySelectorAll('.picture');
const viewFullSizePictureWindow = document.querySelector('.big-picture');

for (let i = 0; i < pictureSmallSize.length; i++) {
  pictureSmallSize[i].addEventListener('click', ()=> {
    viewFullSizePictureWindow.classList.remove('hidden');
    const openPictureFullSize = function () {
      document.querySelector('.big-picture__big-img').src = pictureSmallSize[i].src;
      document.querySelector('.likes-count').textContent = pictureSmallSize[i].textContent;
    };
  });
}

