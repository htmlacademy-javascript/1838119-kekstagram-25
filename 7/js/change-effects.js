const effects = document.querySelectorAll('.effects__radio');
const uploadedImage = document.querySelector('.img-upload__preview-img');

//Смена эффекта

const changeEffects = () => {
  effects.forEach(function (effect){
    effect.addEventListener('click', function(){
      effects.forEach(function(effect){
        uploadedImage.classList.remove(`effects__preview--${effect.value}`);
      });
    });
  });
  for (let effect of effects) {
  effect.addEventListener('click', function(){
    uploadedImage.classList.add(`effects__preview--${effect.value}`);
  });
};
};



//Регулировка интенсивности
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update',() => {
  valueElement.value = sliderElement.noUiSlider.get();
  console.log(valueElement.value);

  // effects.forEach (function (effect){
  //   if (effect.value === 'chrome') {
  //     uploadedImage.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;
  //   };

  //   if (effect.value === 'sepia') {
  //     uploadedImage.style.filter = `sepia(${sliderElement.noUiSlider.get()})`;
  //   };

  //   if (effect.value === 'marvin') {
  //     uploadedImage.style.filter = `invert(${sliderElement.noUiSlider.get()})`;
  //   };

  //   if (effect.value === 'phobos') {
  //     uploadedImage.style.filter = `blur(${sliderElement.noUiSlider.get()})`;
  //   };

  //   if (effect.value === 'heat') {
  //     uploadedImage.style.filter = `brightness(${sliderElement.noUiSlider.get()})`;
  //   };
  // });
});


effects.forEach (function (effect) {
  effect.addEventListener('change', function(evt){
    if(evt.target.value === 'chrome') {
      document.querySelector('.effect-level').classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
        format: {
          to: function (value) {
            if (Number.isInteger(value)) {
              return value.toFixed(0);
            }
            return value.toFixed(1);
          },
          from: function (value) {
            return parseFloat(value);
          },
        },
      });
    };

    if(evt.target.value === 'sepia') {
      document.querySelector('.effect-level').classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
        format: {
          to: function (value) {
            if (Number.isInteger(value)) {
              return value.toFixed(0);
            }
            return value.toFixed(1);
          },
          from: function (value) {
            return parseFloat(value);
          },
        },
      });
    };

    if(evt.target.value === 'marvin') {
      document.querySelector('.effect-level').classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
        format: {
          to: function (value) {
            if (Number.isInteger(value)) {
              return value.toFixed(0) + ' %';
            }
          },
          from: function (value) {
            return parseFloat(value) + ' %';
          },
          //почему-то в консоли что-то странное выводится
        },
      });
    };

    if(evt.target.value === 'phobos') {
      document.querySelector('.effect-level').classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
        format: {
          to: function (value) {
            if (Number.isInteger(value)) {
              return value.toFixed(0) + 'px';
            }
            return value.toFixed(1)+ 'px';
          },
          from: function (value) {
            return parseFloat(value);
          },
        },
      });
    };

    if(evt.target.value === 'heat') {
      document.querySelector('.effect-level').classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
        format: {
          to: function (value) {
            if (Number.isInteger(value)) {
              return value.toFixed(0);
            }
            return value.toFixed(1);
          },
          from: function (value) {
            return parseFloat(value);
          },
        },
      });
    };

    if(evt.target.value === 'none') {
      document.querySelector('.effect-level').classList.add('hidden');
    };
  });
});


changeEffects();
