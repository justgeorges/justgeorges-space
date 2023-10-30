const button = document.querySelector(".downloader");
const textToDisplay = button.querySelector(".download-text");

function showText(e) {
  let buttonStyle = window.getComputedStyle(button);
  console.log(buttonStyle.getPropertyValue("width"));
  if (buttonStyle.getPropertyValue("width") >= "80px") {
    textToDisplay.classList.remove("hidden");
  } else if (buttonStyle.getPropertyValue("width") <= "40px") {
    textToDisplay.classList.add("hidden");
  }
}

button.addEventListener("mousemove", showText);
