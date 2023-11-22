const projects = document.querySelector(".projects");
const arrows = document.querySelectorAll(".arrow");
const projectBox = [];
let count = 0;
let activeProject;

projects.childNodes.forEach((node) => {
  if (node.nodeName === "LI") {
    projectBox.push(node);
  }
});

console.log(projectBox);

function handleButton(event) {
  console.log(event.target.id === "right-arrow" && count < projectBox.length);
  if (event.target.id === "right-arrow" && count < projectBox.length - 1) {
    count += 1;
    activeProject = projectBox[count];
    displayProject(activeProject, "right", count);
  } else if (event.target.id === "left-arrow" && count > 0) {
    count -= 1;
    activeProject = projectBox[count];
    displayProject(activeProject, "left", count);
  }
}

function displayProject(activeProject, direction, count) {
  switch (direction) {
    case "right":
      projectBox[count - 1].style.display = "none";
      break;
    case "left":
      projectBox[count + 1].style.display = "none";
      break;
  }
  activeProject.style.display = "block";
}

arrows.forEach((arrow) => {
  arrow.addEventListener("click", handleButton);
});
