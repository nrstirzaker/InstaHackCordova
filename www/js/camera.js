//module.exports = function () {
console.log('func called');
$(document).on('pageinit', function () {
  console.log('doc ready');
  $('.media-body').click(function () {
    capturePhoto();
  });
})

function onPhotoDataSuccess(theImagesFileURI) {

  $("#image").attr("src", theImagesFileURI);
  $("#image").css("display", 'block');

}

function onFail(message) {
  alert('Failed because: ' + message);
}

function capturePhoto() {

  // Take picture using device camera and retrieve image as base64-encoded string

  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType : Camera.PictureSourceType.CAMERA
  });

}






//} ()

