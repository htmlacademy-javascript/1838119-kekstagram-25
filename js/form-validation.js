// Для валидации данных формы
const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'text__input'
});

const validateHashtag = (value) => {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const severalHashtags = value.split('');
  severalHashtags.length <= 4;
  severalHashtags.forEach ((value) => {
  re.test(value);
  });

  //проверка на уникальность хэштегов
  const hashtagsSet = Array.from(new hashtagsSet(severalHashtags));
  hashtagsSet.length === severalHashtags.length;
};



const validateComments = (value) => value.length <= 140;

pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtag, 'От 2 до 20 символов вместе с #');
pristine.addValidator(form.querySelector('.text__description'), validateComments, 'Длина комментария не должна быть больше 140 символов');


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


