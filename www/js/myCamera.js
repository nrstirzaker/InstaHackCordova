



//module.exports = function () {
$('#textarea').val('func called');

$(document).on('pageinit', function () {
  $('#textarea').val('doc ready');
  $('.ui-btn').click(function () {



      pictureSource = navigator.camera.PictureSourceType;
      destinationType = navigator.camera.DestinationType;

      capturePhoto();
    
  });
})


function onPhotoDataSuccess(imageData) {
  $('#textarea').val('onPhotoDataSuccess');


  var image = "data:image/jpeg;base64," + imageData;
  $("#largeImage").attr("src", image);
}

// function onPhotoDataSuccess(theImagesFileURI) {

//   $('#textarea').val('onPhotoDataSuccess');
//   $('#textarea').val(theImagesFileURI);
//   $("#image").attr("src", theImagesFileURI);
//   $("#image").css("display", 'block');

// }

function onFail(message) {
  $('#textarea').val(message);
}

function capturePhoto() {
  $('#textarea').val('capturePhoto');
  // Take picture using device camera and retrieve image as base64-encoded string



  $('#textarea').val('navigator.camera:' + navigator.camera + ';');
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: 1
  });

}








