// Для валидации данных формы
const form = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const commentsInput = document.querySelector('.text__description');

console.log(hashtagInput);
console.log(commentsInput );
console.log(form);

const pristine = new Pristine(form, {
  classTo: 'text__el--description',
  errorTextParent: 'text__el--description',
  errorTextClass: 'text__error',
});

const validateHashtag = (value) => {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const severalHashtags = value.split(' ');
  if (severalHashtags.length <= 5 === false) {
    return false
  };

  for (let i = 0; i < severalHashtags.length; i++) {
    if (re.test(severalHashtags[i])=== false) {
      return false
    }
  };

  //проверка на уникальность хэштегов
  const hashtagsSet = new Set(severalHashtags);
   if (hashtagsSet.size !== severalHashtags.length) {
    return false;
   };
   return true;
};



const validateComments = (value) => value.length <= 140;

pristine.addValidator(hashtagInput, validateHashtag, 'От 2 до 20 символов вместе с #');
pristine.addValidator(commentsInput, validateComments, 'Длина комментария не должна быть больше 140 символов');


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

hashtagInput.addEventListener('change', function(evt) {
  pristine.validate();
});

commentsInput.addEventListener('change', function(evt) {
  pristine.validate();
});

