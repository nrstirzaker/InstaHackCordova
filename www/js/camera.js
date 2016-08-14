var winston = require('winston');
winston.add(winston.transports.File, {
  filename: '/log/instahack.log',
  handleExceptions: true,
  humanReadableUnhandledException: true
});



//module.exports = function () {
winston.log('func called');
$(document).on('pageinit', function () {
  winston.log('doc ready');
  $('.ui-btn').click(function () {
    capturePhoto();
  });
})


function onPhotoDataSuccess(imageData) {
  winston.log('onPhotoDataSuccess');


  var image = "data:image/jpeg;base64," + imageData;
  $("#image").attr("src", image);
}

// function onPhotoDataSuccess(theImagesFileURI) {

//   $('#textarea').val('onPhotoDataSuccess');
//   $('#textarea').val(theImagesFileURI);
//   $("#image").attr("src", theImagesFileURI);
//   $("#image").css("display", 'block');

// }

function onFail(message) {
  winston.log(message);
}

function capturePhoto() {
  winston.log('capturePhoto');
  // Take picture using device camera and retrieve image as base64-encoded string

  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: 1
  });

}






//} ()

