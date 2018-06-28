(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'ico'];
  const sendReviewBtn = document.querySelector('.send-review__btn');
  const sendReviewForm = document.querySelector('.send-review__form-field');
  var avatarDropZone = document.querySelector('.avatar-field__dropzone');
  var avatar = document.querySelector('.avatar__preview img');
  var avatarInput = document.querySelector('input[name="avatar"]');

  var draggedItemElement;

  sendReviewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendReviewBtn.classList.add('hidden');
    sendReviewForm.classList.remove('visually-hidden')
  });

  var checkFileOnImg = function (file) {
    var fileName = file.name.toLowerCase();

    return FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });
  };
  var renderImage = function (file, elem) {
    var reader = new FileReader();

    reader.addEventListener('load', function () {
      elem.src = reader.result;
    });

    reader.readAsDataURL(file);
  };
  //Avatar upload
  avatarInput.addEventListener('change', function () {
    renderImage(avatarInput.files[0], avatar);
  });
  avatarDropZone.addEventListener('dragenter', function (evt) {
    evt.target.style.outline = '2px solid red';
    evt.preventDefault();
  });
  avatarDropZone.addEventListener('dragleave', function (evt) {
    evt.target.style.outline = '';
    evt.preventDefault();
  });
  avatarDropZone.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });
  avatarDropZone.addEventListener('drop', function (evt) {
    evt.preventDefault();

    evt.target.style.outline = '';

    renderImage(evt.dataTransfer.files[0], avatar);
  });
})();
