// When the user scrolls down 50px from the top of the document, resize the header's font size

let container = document.getElementById("container");

let header = document.getElementById("header");

container.onscroll = function () {
  scrollFunction();
};

header.onmouseover = function () {
  if (header.style.fontSize == "30px") {
    header.style.fontSize = "90px";
  }
};

// Function to change the font size of the header based on scroll position
function scrollFunction() {
  if (container.scrollTop > 50 || container.scrollTop > 50) {
    header.style.fontSize = "30px";
  } else {
    header.style.fontSize = "90px";
  }
}
