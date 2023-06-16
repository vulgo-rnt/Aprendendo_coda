const upButton = document.getElementById("up");

document.addEventListener("scroll", () => {
  if (document.scrollingElement.scrollTop > 80) {
    upButton.style.opacity = 1;
  } else {
    upButton.style.opacity = 0;
  }
});

upButton.addEventListener("click", () => {
  document.scrollingElement.scrollTop = 0;
});

document.querySelectorAll(".button").forEach((element) => {
  element.addEventListener("click", function scrollPag(event) {
    switch (event.target.innerText) {
      case "Home":
        document.scrollingElement.scrollTop = 0;
        break;
      case "Contact":
        document.scrollingElement.scrollTop = 250;
        break;
    }
  });
});
