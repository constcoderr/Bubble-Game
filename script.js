let score = 0;
let hitrn = 0;

function makeBubbles() {
  let clutter = "";
  for (let i = 1; i <= 161; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".bottom").innerHTML = clutter;
}

function hitNum() {
  let hitVal = document.querySelector(".tophit");
  hitrn = Math.floor(Math.random() * 10);
  hitVal.textContent = `${hitrn}`;
}

function time() {
  let timer = 59;
  let timeVal = document.querySelector(".toptimer");
  timeVal.textContent = timer;
  setInterval(function () {
    if (timer > 0) {
      timer--;
      timeVal.textContent = timer;
    } else if (timer == 0) {
      document.querySelector(
        "body"
      ).innerHTML = `<h1 class="result">✔GAME OVER✨</h1><h1>press F5 to play again</h1>`;
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector(".topscore").textContent = score;
}

function decreaseScore() {
  score -= 10;
  document.querySelector(".topscore").textContent = score;
}

function investigation() {
  document.querySelector(".bottom").addEventListener(
    "click",
    function (dets) {
      if (dets.target.textContent > 100) {
        alert("Please click the numbers");
      } else {
        let clickedNum = Number(dets.target.textContent);
        if (clickedNum == hitrn) {
          increaseScore();
          makeBubbles();
          hitNum();
        } else if (clickedNum != hitNum) {
          decreaseScore();
          makeBubbles();
          hitNum();
        }
      }
    },
    false
  );
}

makeBubbles();
hitNum();
time();
investigation();

console.log("Js Is Done!");