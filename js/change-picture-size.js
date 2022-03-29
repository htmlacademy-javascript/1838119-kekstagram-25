//Изменение масштаба загруженного изображения
const biggerButton = document.querySelector('.scale__control--bigger');
const smallerButton = document.querySelector('.scale__control--smaller');
const changeInput = document.querySelector('.scale__control--value');
const uploadedImage = document.querySelector('.img-upload__preview-img');


// При изменении значения поля .scale__control--value изображению внутри .img-upload__preview
//должен добавляться соответствующий стиль CSS, который с помощью трансформации scale задаёт масштаб.
//Например, если в поле стоит значение 75%,
//то в стиле изображения должно быть написано transform: scale(0.75).

const sliderElement = document.querySelector('.level-form__slider');

changeInput.value = 100;

noUiSlider.create(sliderElement, {
  range: {
    min: 25,
    max:100,
  },
  start: 100,
  step: 25,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0) + ' %';
      }
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', (...rest)=>{
  changeInput.value = sliderElement.noUiSlider.get();
});

function manualStep (direction) {
  let currentPosition = parseInt(sliderElement.noUiSlider.get());
  let stepSize = 25;

  if(direction == 'f') {
    currentPosition += stepSize;
  }

  if(direction == 'b') {
    currentPosition -= stepSize;
  }

  currentPosition = (Math.round(currentPosition / stepSize) * stepSize);
  sliderElement.noUiSlider.set(currentPosition);
};

biggerButton.addEventListener ('click', function(){
  manualStep('f');
});

smallerButton.addEventListener ('click', function(){
  manualStep('b');
});

changeInput.addEventListener('change', function() {
  if (changeInput.value === 25) {
    console.log(25);
    uploadedImage.classList.add('img-upload__preview-img--25');
  };

  //Не понимаю, что делаю не так. Консоль лог даже не срабатывает

  // if (sliderElement.noUiSlider.get(50)) {
  //   uploadedImage.classList.remove('img-upload__preview-img--25');
  //   uploadedImage.classList.add('img-upload__preview-img--50');
  // };

  // if (sliderElement.noUiSlider.get(75)) {
  //   uploadedImage.classList.add('img-upload__preview-img--50');
  //   uploadedImage.classList.add('img-upload__preview-img--75');
  // };

  // if (sliderElement.noUiSlider.get(100)) {
  //   uploadedImage.classList.remove('img-upload__preview-img--75');
  // };
});
