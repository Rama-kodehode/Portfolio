const x = document.getElementById("x-coordinate");
const y = document.getElementById("y-coordinate");
x.style.border = "solid";
y.style.border = "solid";
let roundSquares;

window.addEventListener("mousemove", (e) => {
  x.textContent = `${e.clientX / 10}`;
  y.textContent = `${e.clientY / 10}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollIndicator = document.getElementById("data-scroll-indicator");

  const updateScrollIndicator = () => {
    const sectionHeight = document.querySelector(".section").clientHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const totalHeight =
      document.querySelector(".sections").clientHeight - windowHeight;
    const percent = (scrollPosition / totalHeight) * 100;
    scrollIndicator.textContent = `${Math.round(percent)}%`;
  };

  window.addEventListener("scroll", updateScrollIndicator);
  updateScrollIndicator(); // Initial update
});

function preload() {
  roundSquares = loadModel("3dObj/roundSquares.obj");
}

function setup() {
  const canvas = createCanvas(40, 100, WEBGL);
  canvas.parent("y-cont"); // Adding the 3d obj as a child
}

function draw() {
  background(225);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(60);
  if (roundSquares) {
    model(roundSquares);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let preloaderImg = document.getElementById("preloader-img");

  preloaderImg.addEventListener("animationend", function () {
    preloaderImg.parentNode.removeChild(preloaderImg);
  });
});
