/* eslint-disable */

// Ocultar o mostrar ventanas modales

const modalWindow = document.getElementsByClassName('modalWindow');

function showPanels(b) {
    modalWindow[0].classList.toggle('active');
}

// Formulario Subscripcion

var form = document.getElementById('formularioSubscripcion');
var formularioEnviado = document.getElementById('formularioEnviado')

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("formularioSubscripcion")),
  }).then(
      response => response.json()
  ).then((html) => {
      form.style = 'display: none';
      formularioEnviado.textContent = `Listo, ${form['0'].value}. Recibirás nuestro contenido próximamente`;
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

