import {showErrorMessage} from './util.js';

const GET_DATA_LINK = 'https://25.javascript.pages.academy/kekstagram/data';
const SEND_DATA_LINK = 'https://25.javascript.pages.academy/kekstagram';

const getData = (onSuccess) => {

  fetch(GET_DATA_LINK)
    .then((response)=> {
      if(response.ok) {
        return response.json();
      } else {
        showErrorMessage();
      }
    })
    .then((pictures)=>{
      onSuccess(pictures);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SEND_DATA_LINK,
    {
      method: 'POST',
      body,
    },
  ).then((responce)=>{
    if(responce.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
    .catch(()=>{
      onFail();
    });
};

export {getData, sendData};


