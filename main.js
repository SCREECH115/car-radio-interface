const loopButton = document.getElementById("loop-button");
const loopImg = document.getElementById("loop");
let switchedLoop = false;

loopButton.addEventListener("click", function () {
  if (!switchedLoop) {
    loopImg.classList.add("active");
    switchedLoop = true;
  } else {
    loopImg.classList.remove("active");
    switchedLoop = false;
  }
});
