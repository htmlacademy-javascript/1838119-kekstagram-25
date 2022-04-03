import {getData} from "./api.js";

// Реализовать сценарий просмотра фотографий в полноразмерном режиме
const pictures = document.querySelectorAll('.picture');
const viewFullSizePictureWindow = document.querySelector('.big-picture');


//Подстановка данных

const fillPostInformation = (instaPost) => {
  viewFullSizePictureWindow.querySelector('.big-picture__img').src = picture.querySelector('.picture__img').url;
  viewFullSizePictureWindow.querySelector('.likes-count').textContext = picture.likes;
  viewFullSizePictureWindow.querySelector('.comments-count').textContext = picture.comments;
  viewFullSizePictureWindow.querySelector('.social__caption').textContext = picture.description;
  viewFullSizePictureWindow.querySelector('.social__picture').src = picture.comments[avatar];
  viewFullSizePictureWindow.querySelector('.social__picture').alt = picture.comments[name];
  viewFullSizePictureWindow.querySelector('.social__text').textContext = picture.comments[message];
};

//Открытие окна
for (picture of pictures) {
  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    viewFullSizePictureWindow.classList.remove('hidden');
    getData((pictures)=> {
      fillPostInformation(picture);
    });
  });
};
//не понимаю почему не открывается окно




