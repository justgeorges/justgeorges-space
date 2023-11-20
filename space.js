const navItems = document.querySelectorAll(".nav-item");
let toggle = false;
let lastVisible;

function toggleSubList(event) {
  if (event.target.classList.contains("label")) {
    lastVisible = event.target.nextElementSibling;
    lastVisible.classList.toggle("vis");
  }
}

// TODO ensure list remains visible while moused over
navItems.forEach((item) => {
  item.addEventListener("mouseenter", toggleSubList);
  item.addEventListener("mouseleave", toggleSubList);
});
