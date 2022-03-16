// Для валидации данных формы
const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'text__input'
});

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const validateHashtag = (value) => re.test('value');

const validateComments = (value) => value.length <= 140;

pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtag, 'От 2 до 20 символов вместе с #');
pristine.addValidator(form.querySelector('.text__description'), validateComments, 'Длина комментария не должна быть больше 140 символов');


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


