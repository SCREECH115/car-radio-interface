const loopButton = document.getElementById("loop-button");
const loopImg = document.getElementById("loop");
const range = document.getElementById("volumeRange");
const volumeIcon = document.getElementById("volume-icon");
let switchedLoop = false;

loopButton.addEventListener("click", function () {
  if (!switchedLoop) {
    loopImg.classList.add("active");
    console.log("Loop enabled");
    switchedLoop = true;
  } else {
    loopImg.classList.remove("active");
    console.log("Loop disabled");
    switchedLoop = false;
  }
});

range.addEventListener("input", function () {
  console.log(range.value);

  if (range.value == 0) {
    console.log("Muted");
    volumeIcon.classList.add("muted");
  } else {
    volumeIcon.classList.remove("muted");
  }
});
