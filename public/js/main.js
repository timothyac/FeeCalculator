require('electron-titlebar');
const electron = require('electron');
const math = require('mathjs')

var value = document.getElementById("user-input");
var resultEbay = document.getElementById("result-ebay");
var resultGoat = document.getElementById("result-goat");
var resultGrailed = document.getElementById("result-grailed");
var resultPaypal = document.getElementById("result-paypal");
var resultStockx = document.getElementById("result-stockx");

value.oninput = function() {
  resultEbay.innerHTML = mathFunc("ebay", this.value)
  resultGoat.innerHTML = mathFunc("goat", this.value)
  resultGrailed.innerHTML = mathFunc("grailed", this.value)
  resultPaypal.innerHTML = mathFunc("paypal", this.value)
  resultStockx.innerHTML = mathFunc("stockx", this.value)
}

function mathFunc (site, value) {
  if(site == "ebay") {
    if(value <= 50) {
      var answer = math.chain(value)
      .multiply(.88)
      .done() // 14
    } else if (value > 50.01 && value <= 1000) {
      var answer = math.chain(value)
      .multiply(.79)
      .done() // 14
    } else if (value > 1000.01) {
      var answer = math.chain(value)
      .multiply(.77)
      .done() // 14
    }
    return answer.toFixed(2)
  } else if (site == "goat") {
    var answer = math.chain(value)
     .multiply(.905)
     .subtract(5)
     .done() // 14

    return answer.toFixed(2)
  } else if (site == "grailed") {
    var answer = math.chain(value)
     .multiply(.911)
     .subtract(.3)
     .done() // 14

    return answer.toFixed(2)
  } else if (site == "paypal") {
    var answer = math.chain(value)
     .multiply(.971)
     .subtract(.3)
     .done() // 14

    return answer.toFixed(2)
  } else if (site == "stockx") {
    var answer = math.chain(value)
     .multiply(.875)
     .done() // 14

    return answer.toFixed(2)
  }
}