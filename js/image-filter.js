// Названия фильтров
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');
const filterButtons = document.querySelectorAll('.img-filters__button');

// Открытие блока с фильтрами
const openImageFilter = () => {
  const imageFilterBlock = document.querySelector('.img-filters');
  imageFilterBlock.classList.remove('img-filters--inactive');
};

//Очистка классов кнопок
const clearButtonClass = () => {
  for ( const filterButton of filterButtons) {
    filterButton.classList.remove('img-filters__button--active');
  }
};

//Фильтр случайные
const setRandomFilter = (cb) => {
  randomFilter.addEventListener('click', () => {
    clearButtonClass();
    randomFilter.classList.add('img-filters__button--active');
    cb();
  });
};

// Фильтр по умолчанию
const setDefaultFilter = (cb) => {
  defaultFilter.addEventListener('click', () => {
    clearButtonClass();
    defaultFilter.classList.add('img-filters__button--active');
    cb();
  });
};

//Фильтр самые обсуждаемые
const setDiscussedFilter = (cb) => {
  discussedFilter.addEventListener('click', () => {
    clearButtonClass();
    discussedFilter.classList.add('img-filters__button--active');
    cb();
  });
};

export {openImageFilter, clearButtonClass,setRandomFilter, setDefaultFilter, setDiscussedFilter};
