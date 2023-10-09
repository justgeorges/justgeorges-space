var main = document.querySelector("main"),
  canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  text = document.querySelector(".text"),
  ww = window.innerWidth,
  menu = document.querySelector(".menu"),
  ul = menu.querySelector("ul"),
  li = ul.children,
  idx = 0,
  count = ul.childElementCount - 1,
  toggle = true,
  frame;

// Set canvas size
canvas.width = ww / 3;
canvas.height = (ww * 0.5625) / 3;

// Generate CRT noise
function snow(ctx) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    d = ctx.createImageData(w, h),
    b = new Uint32Array(d.data.buffer),
    len = b.length;

  for (var i = 0; i < len; i++) {
    b[i] = ((255 * Math.random()) | 0) << 24;
  }

  ctx.putImageData(d, 0, 0);
}

function animate() {
  snow(ctx);
  frame = requestAnimationFrame(animate);
}

// Glitch
for (i = 0; i < 4; i++) {
  var span = text.firstElementChild.cloneNode(true);
  text.appendChild(span);
}

window.addEventListener("DOMContentLoaded", function (e) {
  setTimeout(function () {
    main.classList.add("on");
    main.classList.remove("off");
    animate();
  }, 1000);
});

window.addEventListener("keydown", function (e) {
  var key = e.key;
  var prev = idx;
  if (key === "ArrowUp" || key === "ArrowDown") {
    e.preventDefault();

    switch (key) {
      case "ArrowUp":
        if (idx > 0) {
          idx--;
        }
        break;
      case "ArrowDown":
        if (idx < count) {
          idx++;
        }
        break;
    }

    ul.children[prev].classList.remove("active");
    ul.children[idx].classList.add("active");
  } else if (key === "Enter") {
    const selected = this.document.querySelector(".active");
    console.log(selected.childNodes);
    selected.childNodes[1].click();
  }
});

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("mouseenter", function (e) {
    console.log(e);
    e.target.classList.add("active");
  });
  li[i].addEventListener("mouseleave", function (e) {
    e.target.classList.remove("active");
  });
}
