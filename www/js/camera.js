//module.exports = function () {
$('#textarea').val('func called');
$(document).on('pageinit', function () {
  $('#textarea').val('doc ready');
  $('.ui-btn').click(function () {
    capturePhoto();
  });
})

function onPhotoDataSuccess(theImagesFileURI) {

  $("#image").attr("src", theImagesFileURI);
  $("#image").css("display", 'block');

}

function onFail(message) {
  $('#textarea').val(message);
}

function capturePhoto() {
  $('#textarea').val('capture Photo');
  // Take picture using device camera and retrieve image as base64-encoded string

  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType : Camera.PictureSourceType.CAMERA
  });

}






//} ()

