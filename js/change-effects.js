const effects = document.querySelectorAll('.effects__radio');
let currentEffect = '';
const uploadedImage = document.querySelector('.img-upload__preview-img');

//Смена эффекта

const changeEffects = () => {
  effects.forEach((effect)=> {
    effect.addEventListener('click', ()=> {
      effects.forEach((effect)=> {
        uploadedImage.classList.remove(`effects__preview--${effect.value}`);
      });
    });
  });
  for (const effect of effects) {
    effect.addEventListener('click', ()=> {
      uploadedImage.classList.add(`effects__preview--${effect.value}`);
    });
  }
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
  const newValue = sliderElement.noUiSlider.get();
  valueElement.value = newValue;
  console.log(currentEffect);
  console.log(valueElement.value);

  const filterMap = {
    chrome: 'grayscale',
    sepia: 'sepia',
    marvin: 'invert',
    phobos: 'blur',
    heat: 'brightness',
  };

  uploadedImage.style.filter = `${filterMap[currentEffect]}(${newValue})`;
});


effects.forEach ((effect) => {
  effect.addEventListener('change', (evt)=> {
    currentEffect = evt.target.value;
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
    }

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
    }

    if(evt.target.value === 'marvin') {
      document.querySelector('.effect-level').classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 50,
        step: 1,
        format: {
          to: function (value) {
            console.log(value);
            if (Number.isInteger(value)) {
              return `${value.toFixed(0)  }%`;
            }
          },
          from: function (value) {
            return `${parseFloat(value)  }%`;
          },
          //почему-то в консоли что-то странное выводится
        },
      });
    }

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
            console.log(value);
            if (Number.isInteger(value)) {
              return `${value.toFixed(0)  }px`;
            }
            return `${value.toFixed(1) }px`;
          },
          from: function (value) {
            return parseFloat(value);
          },
        },
      });
    }

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
    }

    if(evt.target.value === 'none') {
      document.querySelector('.effect-level').classList.add('hidden');
    }
  });
});


changeEffects();
