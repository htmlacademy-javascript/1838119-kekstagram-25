//Изменение масштаба загруженного изображения
const biggerButton = document.querySelector('.scale__control--bigger');
const smallerButton = document.querySelector('.scale__control--smaller');
const changeInput = document.querySelector('.scale__control--value');
const uploadImageClass = '.img-upload__preview-img';
const uploadedImage = document.querySelector(uploadImageClass);

let currentSize = 100;
changeInput.value = 100;

function updateImageClasses() {
  uploadedImage.className = '';
  uploadedImage.classList.add(uploadImageClass);
  smallerButton.disabled = false;
  biggerButton.disabled = false;

  if (currentSize >= 100) {
    uploadedImage.classList.add('img-upload__preview-img--100');
    biggerButton.disabled = true;
    return;
  }

  if (currentSize>= 75) {
    uploadedImage.classList.add('img-upload__preview-img--75');
    return;
  }

  if (currentSize >= 50) {
    uploadedImage.classList.add('img-upload__preview-img--50');
    return;
  }

  if (currentSize >= 25) {
    uploadedImage.classList.add('img-upload__preview-img--25');
    smallerButton.disabled = true;

  }
}

function manualStep (direction) {
  const stepSize = 25;

  if(direction === 'f' && currentSize < 100) {
    currentSize += stepSize;
  }

  if(direction === 'b'&& currentSize > 0) {
    currentSize -= stepSize;
  }
  changeInput.value = currentSize;
}

biggerButton.addEventListener ('click', ()=> {
  manualStep('f');
  updateImageClasses();
});

smallerButton.addEventListener ('click', ()=> {
  manualStep('b');
  updateImageClasses();
});
