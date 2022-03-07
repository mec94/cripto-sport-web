/* eslint-disable */

// Ocultar o mostrar paneles no seleccionados 

const hiddenPanel = document.getElementsByClassName('hiddenPanel');

function showPanels(p) {
  if (p == 'first-panel') {
    hiddenPanel[0].classList.toggle('active');
  }
  else {
    hiddenPanel[1].classList.toggle('active');
  }
}

// Anime JS

const hoverPanel = document.querySelectorAll('.main-selection__backface');

/*anime({
  targets: hoverPanel,
  duration: 1000,
  width: '120%',
})
*/

// Consulta API Binance

/*

const btcPrice = 'https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
const btcPriceVariation = 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT';

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