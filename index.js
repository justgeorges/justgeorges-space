const contacts = document.querySelector(".contact");
const contactIcons = contacts.querySelectorAll("a");
const projects = document.querySelector(".projects");
const projectLinks = projects.querySelectorAll("li");

// spin the icons! in the future, I'd like to look into adding physics to the spin
contactIcons.forEach((icon) => {
  icon.addEventListener("mouseover", function (e) {
    e.target.classList.add("fa-flip");
    const timeoutId = setTimeout(() => {
      e.target.classList.remove("fa-flip");
    }, 1000).then(clearTimeout(timeoutId));
  });
});

// keep the bots away
const email = document.querySelector(".secret-email");
email.addEventListener("mouseover", addEmail);
email.addEventListener("click", addEmail);

function addEmail() {
  if (this.classList.contains("email-added")) {
    return;
  } else {
    this.href = `mailto:` + `george@justgeorges.space`;
    this.classList.add("email-added");
  }
}

// adding an interesting highlight over the project pages
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);
const negative = document.createElement("div");
negative.classList.add("negative");

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
projectLinks.forEach((li) => li.addEventListener("mouseenter", highlightLink));
