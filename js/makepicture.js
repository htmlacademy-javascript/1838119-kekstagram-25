import {getRandomIntInclusive } from './util.js';

const pictureBlock = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture').content;
const commentCopy = document.querySelector('.social__comment').cloneNode(true);
// const uploadPictureBlock = document.querySelector('.img-upload__wrapper');


//Отрисовка при загрузке страницы

const renderInstaPosts = (instaPosts) => {
  document.querySelectorAll('.picture').forEach((el) => el.remove());

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

      const commentsFragment = document.createDocumentFragment();

      instaPosts[index].comments.forEach ((comment) => {
      const newComment = commentCopy.cloneNode(true);

      newComment.querySelector('.social__picture').src = comment.avatar;
      newComment.querySelector('.social__picture').alt = comment.name;
      newComment.querySelector('.social__text').textContent = comment.message;
      commentsFragment.appendChild(newComment);

    });

    document.querySelector('.big-picture__social').appendChild(commentsFragment);

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
   const shuffledArray = instaPosts
      .sort(() => Math.random() - 0.5)
      .slice(0,10);

    renderInstaPosts(shuffledArray);
};


//Отрисовка для фильтра "Самые обсуждаемые"

const renderDiscussedInstaPosts = (instaPosts) => {

  const compareDiscussedImages = (imageA, imageB) => {
    return imageB.comments.length - imageA.comments.length;
  };

  const shuffledArray =  instaPosts
      .slice()
      .sort(compareDiscussedImages)
      .slice(0,25);

   renderInstaPosts(shuffledArray)

};



export {renderInstaPosts, renderRandomInstaPosts, renderDiscussedInstaPosts};
