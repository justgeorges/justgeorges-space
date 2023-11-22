const me = `george`;

// keep the bots away
const email = document.querySelector(".secret-email");
email.addEventListener("mouseover", addEmail);
email.addEventListener("click", addEmail);

function addEmail() {
  if (this.classList.contains("email-added")) {
    return;
  } else {
    this.href = `mailto:` + me + `@` + `justgeorges.space`;
    this.classList.add("email-added");
  }
}
