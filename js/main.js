// Panel Crew

const modalWindow = document.getElementsByClassName('modalWindow');
const modalWindowCategory = document.querySelectorAll('.modalWindow__category')

window.onload = teamCategory('gerencia');

function teamCategory(selection) {

  for (i=0; i < modalWindowCategory.length; i++ ) {
    modalWindowCategory[i].classList.remove('active');
  }

  if (selection == 'gerencia') {
    modalWindowCategory[0].classList.add('active');
  }

  if (selection == 'administracion') {
    modalWindowCategory[1].classList.add('active');
  }

  if (selection == 'contenidos') {
    modalWindowCategory[2].classList.add('active');
  }

  if (selection == 'exchange') {
    modalWindowCategory[3].classList.add('active');
  }

}

function closePanel() {
  modalWindow[0].classList.remove('active');
}

function showPanels(b) {
  modalWindow[0].classList.toggle('active');
}

// Formulario Subscripcion

var form = document.getElementById('formulario');
var formularioEnviado = document.getElementById('formularioEnviado')

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("formulario")),
  }).then(
      response => response.json()
  ).then((html) => {
      formularioEnviado.textContent = `Listo, ${form['0'].value}. Recibirás nuestro contenido próximamente.`;
      form.style = 'display: none';
  });
});


// Consulta API Binance



const btcPrice = 'https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
const btcPriceVariation = 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT';

const ethPrice = 'https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT';
const ethPriceVariation = 'https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT';

var coinName = document.querySelectorAll('.coinPrice');
var priceArrow = document.querySelectorAll('.priceArrow');

window.onload = actualizarPrecio(btcPrice,btcPriceVariation,coinName[0],priceArrow[0])
window.onload = actualizarPrecio(ethPrice,ethPriceVariation,coinName[1],priceArrow[1])

function actualizarPrecio(coinPrice,coinVariation,coinName,priceArrow) {

    fetch(coinPrice)
      .then((resp) => resp.json())
      .then(function(data) {
        let precioSinDecimales = Math.floor(data.price);
        coinName.textContent = `${precioSinDecimales} USD`;
        console.log(data.price)
        }
      )
      .catch(function(error) {
        coinName.textContent = "Precio No Disp";
        }
      )

    fetch(coinVariation)
      .then((resp) => resp.json())
      .then(function(data) {

        if (data.priceChangePercent.includes('-')) {
          priceArrow.src = './img/pricedown.svg'
        }
        else {
          priceArrow.src = './img/priceup.svg'
        }

      })
}

setInterval( () => {actualizarPrecio(btcPrice,btcPriceVariation,coinName[0],priceArrow[0])}, 10000);
setInterval( () => {actualizarPrecio(ethPrice,ethPriceVariation,coinName[1],priceArrow[1])}, 10000);