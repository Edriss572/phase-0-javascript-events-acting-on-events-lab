const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left + 1}px`;
}

document.addEventListener("keydown", function (event) {
  console.log("the pressed")
  console.log(event);
  
  if (event.key === "ArrowLeft") {
    moveDodgerLeft()
  } 

  else if (event.key === "ArrowRight") {
    moveDodgerRight()
  }
  else if (event.key === "ArrowUp") {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    dodger.style.bottom = `${bottom + 3}px`;
  }
  else if (event.key === "ArrowDown") {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    dodger.style.bottom = `${bottom - 3}px`;
  }
});
