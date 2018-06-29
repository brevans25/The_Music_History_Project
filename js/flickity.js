var elem = document.querySelector('#carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  draggable: false,
});

// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity('#carousel', {
//   // options
// });
//
// var flkty = new Flickity('#carousel', {
//   imagesLoaded: true,
//   percentPosition: false
// });
//
// var caption = document.querySelector('.caption');
//   flkty.on( 'select', function() {
//     caption.textContent = flkty.selectedElement.alt;
// });
