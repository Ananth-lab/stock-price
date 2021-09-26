var purchasePrice = document.querySelector("#purchased-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var checkButton = document.querySelector("#check-button");
var display = document.querySelector(".output");

function percentageLoss(lossesBook, invested) {
  var loss = (lossesBook / invested) * 100;

  return loss;
}

function lossInPrice(invested, currentValue) {
  var currentLoss = invested - currentValue;

  return currentLoss;
}

function calculatePercentageGain(profitBook, invested) {
  var percentGained = (profitBook / invested) * 100;

  return percentGained;
}

function changeInPrice(invested, currentValue) {
  var difference = currentValue - invested;

  return difference;
}

function stockPriceHandler() {
  var invested = Number(purchasePrice.value) * Number(stockQuantity.value);
  var currentValue = Number(currentPrice.value) * Number(stockQuantity.value);
  var invested = Number(purchasePrice.value) * Number(stockQuantity.value);
  var currentValue = Number(currentPrice.value) * Number(stockQuantity.value);
  if (purchasePrice.value > 0 && stockQuantity.value > 0 && currentPrice.value > 0) {
    if (Number(currentPrice.value) >= Number(purchasePrice.value)) {
      var profitBook = changeInPrice(invested, currentValue);

      var percentGained = calculatePercentageGain(profitBook, invested);

      display.innerText =
        "Your profit is " +
        profitBook +
        " and Percent Gained " +
        percentGained +
        "%.";
    } else {
      var lossesBook = lossInPrice(invested, currentValue);
      var losses = percentageLoss(lossesBook, invested);

      display.innerText =
        "You lossed  " + lossesBook + " and Percent Loss " + losses + "%.";
    }
  }
  else {
      display.innerText="Please enter the valid input"
  }
}

checkButton.addEventListener("click", stockPriceHandler);
