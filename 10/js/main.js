import {debounce} from './util.js';
import './makepicture.js';
import './upload-picture-form.js';
import './form-validation.js';
import './full-picture.js';
import './change-picture-size.js';
import './change-effects.js';
import {getData} from './api.js';
import './submit-form-messages.js';
import {renderInstaPosts, renderRandomInstaPosts,rerenderInstaPosts } from './makepicture.js';
import {openImageFilter, setRandomFilter, setDefaultFilter} from './image-filter.js';
import './avatar.js';

const INSTA_POSTS_COUNT = 25;
const RERENDER_DELAY = 500;

getData((pictures) => {
  renderInstaPosts(pictures.slice(0, INSTA_POSTS_COUNT));
  setRandomFilter(debounce(()=>renderRandomInstaPosts(pictures), RERENDER_DELAY));
  setDefaultFilter(debounce(()=>rerenderInstaPosts(pictures.slice(0, INSTA_POSTS_COUNT)), RERENDER_DELAY));
  // debounce(()=>renderRandomInstaPosts(pictures), RERENDER_DELAY);
  // debounce(()=>rerenderInstaPosts(pictures.slice(0, INSTA_POSTS_COUNT)), RERENDER_DELAY);
  openImageFilter();
});
