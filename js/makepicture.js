import {createInstaPosts} from './data.js';

const pictureBlock = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture').content;

const createNewPosts = createInstaPosts();

const userPictureFragment = document.createDocumentFragment();

createNewPosts.forEach( ({url, likes, comments}) => {
  const userPictureElement = userPictureTemplate.cloneNode(true);
  userPictureElement.querySelector('.picture__img').src = url;
  userPictureElement.querySelector('.picture__likes').textContext = likes;
  userPictureElement.querySelector('.picture__comments').textContext = comments;
  userPictureFragment.appendChild(userPictureElement);
});

pictureBlock.appendChild(userPictureFragment);

export {createNewPosts};
