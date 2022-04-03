const getData = (onSuccess) => {

  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response)=> response.json())
    .then((pictures)=>{
      onSuccess(pictures);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
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


