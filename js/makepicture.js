import {getRandomIntInclusive } from './util.js';

const pictureBlock = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture').content;
// const uploadPictureBlock = document.querySelector('.img-upload__wrapper');


//Отрисовка при загрузке страницы

const renderInstaPosts = (instaPosts) => {

  const userPictureFragment = document.createDocumentFragment();

  instaPosts.forEach( ({url, likes, comments}) => {

    const userPictureElement = userPictureTemplate.cloneNode(true);
    userPictureElement.querySelector('.picture__img').src = url;
    userPictureElement.querySelector('.picture__likes').textContext = likes;
    userPictureElement.querySelector('.picture__comments').textContext = comments;
    userPictureFragment.appendChild(userPictureElement);
  });
  pictureBlock.appendChild(userPictureFragment);

  //Открытие полноразмерного поста

  document.querySelectorAll('.picture').forEach((el, index) => {
    el.addEventListener('click', () => {
      const viewFullSizePictureWindow = document.querySelector('.big-picture');
      viewFullSizePictureWindow.classList.remove('hidden');
      document.querySelector('body').classList.add('modal-open');

      document.querySelector('.big-picture__big-img').src = instaPosts[index].url;
      document.querySelector('.likes-count').textContent = instaPosts[index].likes;
      document.querySelector('.comments-count').textContent = instaPosts[index].comments.length;
      document.querySelector('.social__caption').textContent = instaPosts[index].description;

      // const commentsArray = instaPosts[comments];
      // document.querySelector('social__picture').src = commentsArray[index].avatar;
      // document.querySelector('social__picture').alt = commentsArray[index].name;
      // document.querySelector('social__text').textContent = commentsArray[index].message;
    });
  });
};

//Подстановка комментариев
const uploadMoreCommentsButton = document.querySelector('.social__comments-loader');

const updateComment = () => {
  const commentsList = document.querySelector('.social__comments');
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  commentsList.appendChild(newComment);

  const user = document.createElement('img');
  user.classList.add('social__picture');
  newComment.appendChild(user);

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  newComment.appendChild(commentText);
};

uploadMoreCommentsButton.addEventListener ('click', () => {
    updateComment();
});



//Отрисовка для фильтра "случайные"

const renderRandomInstaPosts = (instaPosts) => {

  // const compareRandomImages = (imageA, imageB) => {
  //   imageA = getRandomIntInclusive(imageA);
  //   imageB = getRandomIntInclusive(imageB);
  //   return imageB - imageA;
  // };

    const userPictureFragment = document.createDocumentFragment();

    instaPosts
      .slice()
      .sort(getRandomIntInclusive)
      .slice(0,10)
      .forEach( ({url, likes, comments}) => {
        const userPictureElement = userPictureTemplate.cloneNode(true);
        userPictureElement.querySelector('.picture__img').src = url;
        userPictureElement.querySelector('.picture__likes').textContext = likes;
        userPictureElement.querySelector('.picture__comments').textContext = comments;
        userPictureFragment.appendChild(userPictureElement);
      });
      // pictureBlock.innerHTML = '';
      // pictureBlock.appendChild(uploadPictureBlock);
    pictureBlock.appendChild(userPictureFragment);


};

//Перерисовка для фильтра "По умолчанию"

const rerenderInstaPosts = (instaPosts) => {

    const userPictureFragment = document.createDocumentFragment();

    instaPosts.forEach( ({url, likes, comments}) => {
        const userPictureElement = userPictureTemplate.cloneNode(true);
        userPictureElement.querySelector('.picture__img').src = url;
        userPictureElement.querySelector('.picture__likes').textContext = likes;
        userPictureElement.querySelector('.picture__comments').textContext = comments;
        userPictureFragment.appendChild(userPictureElement);
      });
      // pictureBlock.innerHTML = '';
    pictureBlock.appendChild(userPictureFragment);

};

//Отрисовка для фильтра "Самые обсуждаемые"

// const renderDiscussedInstaPosts = (instaPosts) => {

//   const compareDiscussedImages = (imageA, imageB) => {
//     const comments = instaPosts[i].comments;
//     imageA = imageA[comments].length;
//     imageB = imageB[comments].length;
//     return imageB - imageA;
//   };

//     const userPictureFragment = document.createDocumentFragment();

//     instaPosts
//       .slice()
//       .sort(compareDiscussedImages)
//       .slice(0,25)
//       .forEach( ({url, likes, comments}) => {
//         const userPictureElement = userPictureTemplate.cloneNode(true);
//         userPictureElement.querySelector('.picture__img').src = url;
//         userPictureElement.querySelector('.picture__likes').textContext = likes;
//         userPictureElement.querySelector('.picture__comments').textContext = comments;
//         userPictureFragment.appendChild(userPictureElement);
//       });
//     pictureBlock.innerHTML = '';
//     pictureBlock.appendChild(userPictureFragment);

// };



export {renderInstaPosts, renderRandomInstaPosts, rerenderInstaPosts};
