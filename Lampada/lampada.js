const turnOnOff = document.getElementById("turnOnOff");
const reset = document.getElementById("reset");
const lamp = document.getElementById("lamp");

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}
function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}
function lampOnOff() {
  if (!isLampBroken()) {
    if (turnOnOff.textContent == "Ligar") {
      lampOn();
      turnOnOff.textContent = "Desligar";
    } else {
      lampOff();
      turnOnOff.textContent = "Ligar";
    }
  }
}
function lampReset() {
  lamp.src = "./img/desligada.jpg";
}
function lampBroken() {
  lamp.src = "./img/quebrada.jpg";
}

turnOnOff.addEventListener("click", lampOnOff);
reset.addEventListener("click", lampReset);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);
