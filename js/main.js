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
      formularioEnviado.textContent = `Listo ${form['0'].value}. Recibirás nuestro contenido en un futuro`;
      form.style = 'display: none';
  });
});

// Anime JS

/*const hoverPanel = document.querySelectorAll('.main-selection__backface');

anime({
  targets: hoverPanel[0],
  duration: 2000,
  easing: 'linear',
  width: ['100%','120%'],
})
*/

// Consulta API Binance


/*

const btcPrice = 'https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
const btcPriceVariation = 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT';

const ethPrice = 'https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
const ethPriceVariation = 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT';

var coinTagBtc = document.getElementById('bitcoinPrice');
var priceArrow = document.getElementById('priceArrow');

window.onload = actualizarPrecio(btcPrice,btcPriceVariation)

function actualizarPrecio(coinPrice,coinVariation) {

    fetch(coinPrice)
      .then((resp) => resp.json())
      .then(function(data) {
        let precioSinDecimales = Math.floor(data.price);
        coinTagBtc.textContent = `${precioSinDecimales} USD`;
        console.log(data.price)
        }
      )
      .catch(function(error) {
        coinTag.textContent = "Precio No Disp";
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

setInterval( () => {actualizarPrecio(btcPrice,btcPriceVariation)}, 10000);


*/