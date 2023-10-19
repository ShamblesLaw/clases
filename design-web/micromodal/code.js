import MicroModal from 'micromodal';  // es6 module
// var MicroModal = require('micromodal');

// // MicroModal.init(); Así se inicializa el modal trolo
// MicroModal.show('modal-id'); // [1]
// MicroModal.close('modal-id'); // [2]    

// MicroModal.init({
//     onShow: modal => console.info(`${modal.id} is shown`), // [1]
//     onClose: modal => console.info(`${modal.id} is hidden`), // [2]
//     openTrigger: 'data-custom-open', // [3]
//     closeTrigger: 'data-custom-close', // [4]
//     openClass: 'is-open', // [5]
//     disableScroll: true, // [6]
//     disableFocus: false, // [7]
//     awaitOpenAnimation: false, // [8]
//     awaitCloseAnimation: false, // [9]
//     debugMode: true // [10]
//   });




MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-custom-open', // [3]
    closeTrigger: 'data-custom-close', // [4]
    openClass: 'is-open', // [5]
    disableScroll: true, // [6]
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: true // [10]
  });