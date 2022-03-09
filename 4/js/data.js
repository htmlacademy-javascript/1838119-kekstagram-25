import {getRandomArrayElement, getRandomIntInclusive} from './util.js';

const ID = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25
];

const URL = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

const  DESCRIPTION = [
  'Отдыхаю',
  'Прекрасный весенний день',
  'Вся в работе',
  'Мое домашнее животное',
  'Без комментариев',
  'Жду от вас лайки',
  'Лучший день!',
  'Когда жизнь удалась',
  'Заберите меня с работы',
];

const AVATAR = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const MESSAGE = [
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Всё отлично!',
];

const NAME = [
  'Артём',
  'Аня',
  'Тимофей',
  'Иван',
  'Анжела',
];

const COMMENTS = [

  {
    id: getRandomIntInclusive(1, 200),
    avatar: getRandomArrayElement(AVATAR),
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
  },

  {
    id: getRandomIntInclusive(1, 200),
    avatar: getRandomArrayElement(AVATAR),
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
  },

];

const createInstaPost = () => ({
  id: getRandomArrayElement(ID),
  url: getRandomArrayElement(URL),
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomIntInclusive(15, 200),
  comments: COMMENTS[0],
});

const similarInstaPost = () => Array.from({length: 25}, createInstaPost);

export {similarInstaPost};
