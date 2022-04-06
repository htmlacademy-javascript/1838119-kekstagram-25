import './util.js';
import './makepicture.js';
import './upload-picture-form.js';
import './form-validation.js';
import {openBigPicture} from './full-picture.js';
import './change-picture-size.js';
import './change-effects.js';
import {getData} from './api.js';
import './submit-form-messages.js';
import {renderInstaPosts} from './makepicture.js';

const INSTA_POSTS_COUNT = 25;

getData((pictures) => {
  renderInstaPosts(pictures.slice(0, INSTA_POSTS_COUNT));
  openBigPicture();
});
