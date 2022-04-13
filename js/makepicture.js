const pictureBlock = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture').content;
const commentsCount = document.querySelector('.comments-uploaded-counts');

//Отрисовка при загрузке страницы

const renderInstaPosts = (instaPosts) => {
  document.querySelectorAll('.picture').forEach((el) => el.remove());

  const userPictureFragment = document.createDocumentFragment();
  console.log(instaPosts);

  instaPosts.forEach( ({url, likes, comments}) => {

    const userPictureElement = userPictureTemplate.cloneNode(true);
    userPictureElement.querySelector('.picture__img').src = url;
    userPictureElement.querySelector('.picture__likes').textContent = likes;
    userPictureElement.querySelector('.picture__comments').textContent = comments.length;
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

      //Отрисовка комментариев

      const commentsArrayCopy = instaPosts[index].comments.slice();
      const fivecomments = commentsArrayCopy.splice(0, 5);

      const commentsFragment = document.createDocumentFragment();

      fivecomments.forEach(({avatar,name, message})=>{

        const newCommentElement = document.querySelector('.social__comment').cloneNode(true);
        newCommentElement.querySelector('.social__picture').src = avatar;
        newCommentElement.querySelector('.social__picture').alt = name;
        newCommentElement.querySelector('.social__text').textContent = message;

        commentsFragment.appendChild(newCommentElement);

      });


      document.querySelector('.social__comments').innerHTML = '';
      document.querySelector('.social__comments').appendChild(commentsFragment);

      //Подстановка новых комментариев

      const uploadMoreCommentsButton = document.querySelector('.social__comments-loader');
      let currentCommentsAmmount = fivecomments.length;
      commentsCount.textContent = currentCommentsAmmount;
      let newCommentsAmount;

      uploadMoreCommentsButton.addEventListener ('click', () => {

        const newfivecomments = commentsArrayCopy.splice(Number(newCommentsAmount + 5), 5);

        newfivecomments.forEach(({avatar,name, message})=>{

          const newCommentElement = document.querySelector('.social__comment').cloneNode(true);
          newCommentElement.querySelector('.social__picture').src = avatar;
          newCommentElement.querySelector('.social__picture').alt = name;
          newCommentElement.querySelector('.social__text').textContent = message;

          commentsFragment.appendChild(newCommentElement);
          document.querySelector('.social__comments').appendChild(commentsFragment);
        });

        newCommentsAmount = newCommentsAmount + 5;
        currentCommentsAmmount = currentCommentsAmmount + newfivecomments.length;
        commentsCount.textContent = currentCommentsAmmount;
      });
    });
  });
};


//Отрисовка для фильтра "случайные"

const renderRandomInstaPosts = (instaPosts) => {
  const shuffledArray = instaPosts
    .sort(() => Math.random() - 0.5)
    .slice(0,10);

  renderInstaPosts(shuffledArray);
};


//Отрисовка для фильтра "Самые обсуждаемые"

const renderDiscussedInstaPosts = (instaPosts) => {

  const compareDiscussedImages = (imageA, imageB) => imageB.comments.length - imageA.comments.length;

  const shuffledArray =  instaPosts
    .slice()
    .sort(compareDiscussedImages)
    .slice(0,25);

  renderInstaPosts(shuffledArray);

};


export {renderInstaPosts, renderRandomInstaPosts, renderDiscussedInstaPosts};
