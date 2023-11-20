const navItems = document.querySelectorAll(".sub-list-head");
let toggle = false;
let lastVisible;

function toggleSubList(event) {
  console.log(event.target.childNodes[3]);
  lastVisible = event.target.childNodes[3];
  lastVisible.classList.toggle("vis");
}

// TODO ensure list remains visible while moused over
navItems.forEach((item) => {
  item.addEventListener("mouseover", toggleSubList);
});
