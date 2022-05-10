var lampada = document.getElementById("lampada");

lampada.addEventListener("click", () => {
  if (lampada.className == "off") {
    lampada.src = "on.png";
    lampada.className = "on";
    button.value = "Desligar";
    document.body.style.backgroundColor = "#F0F8FF";
    document.getElementById("lamp").style.color = "black";
  } else {
    lampada.src = "off.png";
    lampada.className = "off";
    button.value = "Ligar";
    document.body.style.backgroundColor = "#363636";
    document.getElementById("lamp").style.color = "white";
  }
});

const button = document.querySelector("input");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Ligar") {
    button.value = "Desligar";
    lampada.src = "on.png";
    lampada.className = "on";
    document.body.style.backgroundColor = "#F0F8FF";
    document.getElementById("lamp").style.color = "black";
  } else {
    button.value = "Ligar";
    lampada.src = "off.png";
    lampada.className = "off";
    document.body.style.backgroundColor = "#363636";
    document.getElementById("lamp").style.color = "white";
  }
}
