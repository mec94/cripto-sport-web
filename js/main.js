/* eslint-disable require-jsdoc */


// Ocultar o mostrar paneles no seleccionados 

var hiddenPanel = document.getElementsByClassName('hiddenPanel');

function showPanels(p) {
  if (p == 'first-item') {
    hiddenPanel[0].classList.toggle('active');
  }
  else {
    hiddenPanel[1].classList.toggle('active');
  }
}