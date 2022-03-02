/* eslint-disable require-jsdoc */
/*function widenItem() {
  anime({
    targets: itemSelect,
    duration: 1000,
    width: '120%'
  });
}
*/

// Ocultar o mostrar paneles no seleccionados 

var backToHome = document.getElementById('backToHome');
var selectedItems = document.querySelectorAll('.main-selection__item');
var briefText = document.querySelectorAll('.main-selection__wrapper');
var longText = document.querySelectorAll('.longText');

backToHome.addEventListener('click', backHome);

function hidePanels(i) {
  if (i == 'first-item') {
    selectedItems[1].style.display = 'none';
    selectedItems[2].style.display = 'none';
    selectedItems[0].style.transform = 'none';
    selectedItems[0].style.width = '90%';
    selectedItems[0].style.clipPath = 'polygon(10% 0, 100% 0%, 100% 100%, 0% 100%)';
    hideBriefText();
    showLongText();
  }
  else if (i == 'second-item') {
      selectedItems[2].style.display = 'none';
      selectedItems[0].style.display = 'none';
      selectedItems[1].style.transform = 'none';
      selectedItems[1].style.width = '80%';
      selectedItems[1].style.clipPath = 'polygon(20% 0, 100% 0%, 100% 100%, 0% 100%)';
      hideBriefText();
      showLongText();
  }
  else {
    selectedItems[0].style.display = 'none';
    selectedItems[1].style.display = 'none';
    selectedItems[2].style.transform = 'none';
    selectedItems[2].style.width = '80%';
    selectedItems[2].style.clipPath = 'polygon(10% 0, 100% 0%, 100% 100%, 0% 100%)';
    hideBriefText();
    showLongText();
  }
}

function backHome() {
  location.reload();
}

function hideBriefText() {
  for (i=0; i < briefText.length; i++) {
    briefText[i].style.display = 'none';
  }
}

function showLongText() {
  for (i=0; i < longText.length; i++) {
    longText[i].style.display = 'block';
  }
}

function showPanels() {
  for (i=0; i < selectedItems.length; i++) {
    selectedItems[i].style.display = 'inline-block';
  }
}