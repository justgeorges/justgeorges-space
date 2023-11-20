const navItems = document.querySelectorAll(".sub-list-head");
let lastVisible;

function toggleSubList(event) {
  console.log(event.target);
  lastVisible = event.target.childNodes[3];
  lastVisible.classList.toggle("vis");
}

// TODO ensure list remains visible while moused over
navItems.forEach((item) => {
  item.addEventListener("mouseenter", toggleSubList);
  item.addEventListener("mouseleave", toggleSubList);
});
