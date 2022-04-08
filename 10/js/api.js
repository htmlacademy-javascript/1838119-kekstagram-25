const getData = (onSuccess) => {

  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response)=> response.json())
    .then((pictures)=>{
      onSuccess(pictures);
      console.log(pictures);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://25.javascript.pages.academy/kekstagram',
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


