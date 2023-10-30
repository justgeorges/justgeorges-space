const button = document.querySelector(".downloader");

function downloadPDF() {
  var link = document.createElement("a");
  link.href = "/GeorgeASHKR2023.pdf";
  link.download = "GeorgeASHKR2023.pdf";
  link.dispatchEvent(new MouseEvent("click"));
}

button.addEventListener("click", downloadPDF);
