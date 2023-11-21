const navItems = document.querySelectorAll(".has-submenu");
const navButtons = document.querySelectorAll("button");
let lastVisible;

function toggleSubList(event) {
  // TODO refactor to allow menu to stay open
  console.log(event);
  if (event.target.childNodes[3]) {
    lastVisible = event.target.childNodes[3];
    lastVisible.classList.toggle("vis");
  } else if (event.target.nextElementSibling.classList.contains("sub-list")) {
    lastVisible = event.target.nextElementSibling;
    lastVisible.classList.toggle("vis");
  }
  if (lastVisible.classList.contains("vis")) {
    lastVisible.setAttribute("aria-expanded", "true");
  } else {
    lastVisible.setAttribute("aria-expanded", "false");
  }
}

function test(event) {
  console.log(event);
}

// TODO ensure list remains visible while moused over
navItems.forEach((item) => {
  item.addEventListener("mouseenter", toggleSubList);
  item.addEventListener("mouseleave", toggleSubList);
});

navButtons.forEach((button) => {
  button.addEventListener("focus", toggleSubList);
  button.addEventListener("blur", toggleSubList);
});
