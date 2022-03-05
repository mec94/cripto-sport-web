/* eslint-disable */


// Ocultar o mostrar paneles no seleccionados 

const hiddenPanel = document.getElementsByClassName('hiddenPanel');

function showPanels(p) {
  if (p == 'first-item') {
    hiddenPanel[0].classList.toggle('active');
  }
  else {
    hiddenPanel[1].classList.toggle('active');
  }
}

// Consulta API Binance

const btcPrice = 'https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
const btcPriceVariation = 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT';
const ethPrice = 'https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT';
const ethPriceVariation = 'https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT'

var bitcoinPrice = document.getElementById('bitcoinPrice');

fetch(btcPrice)
.then((resp) => resp.json())
.then(function(data) {
  let precioSinDecimales = Math.floor(data.price);
  bitcoinPrice.textContent = `${precioSinDecimales} USD`;
  console.log(data.price);
})
.catch(function(error) {
  bitcoinPrice.textContent = "Precio No Disp";
})

fetch(btcPriceVariation)
.then((resp) => resp.json())
.then(function(data) {
  if (data.priceChangePercent.includes('-')) {
    console.log('el precio de BTC bajó')
  }
  else {
    console.log('el precio de BTC subió')
  }
})