let position = 1;
addEventListener("DOMContentLoaded", function () {
  // Appelle la fonction circle toutes les 1000 millisecondes (1 seconde)
  setInterval(circle, 3000);
});

function circle() {
  var cercle = document.getElementById("cercle");
  var motor = document.getElementById("text-motor");
  var cockpit = document.getElementById("text-cockpit");
  var tail = document.getElementById("text-tail");
  var wing = document.getElementById("text-wing");
  var window = document.getElementById("text-window");
  if (position === 1) {
    cercle.style.top = "18%";
    cercle.style.left = "50%";
    textDisapear(cockpit)
  }
  if (position === 2) {
    cercle.style.top = "47%";
    cercle.style.left = "55%";
    textDisapear(window)
  }
  if (position === 3) {
    cercle.style.top = "54%";
    cercle.style.left = "76%";
    textDisapear(wing)
  }
  if (position === 4) {
    cercle.style.top = "82%";
    cercle.style.left = "50%";
    textDisapear(tail)
  }
  if (position === 5) {
    cercle.style.top = "40%";
    cercle.style.left = "37%";
    position = 0
    textDisapear(motor)
  }
  position +=1;
  console.log(position);
}

function textDisapear(appear) {
  var motor = document.getElementById("text-motor");
  var cockpit = document.getElementById("text-cockpit");
  var tail = document.getElementById("text-tail");
  var wing = document.getElementById("text-wing");
  var window = document.getElementById("text-window");
  motor.style.display = "none";
  cockpit.style.display = "none";
  tail.style.display = "none";
  wing.style.display = "none";
  window.style.display = "none";
  setTimeout(function() {
    appear.style.display = "block";
  }, 500); // 500 milliseconds (0.5 second)
}
