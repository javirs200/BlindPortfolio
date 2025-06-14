// When the user scrolls down 50px from the top of the document, resize the header's font size

let container = document.getElementById("projects-types-container");

let header = document.getElementById("header");

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


// Card flip on click
document.querySelectorAll('.project-card').forEach(card => {
  // si el raton entra en la tarjeta, se le da la clase 'flipped'
  card.addEventListener('mouseover', () => {
    card.classList.toggle('flipped');
  });

  card.addEventListener('mouseout', () => {
    card.classList.toggle('flipped');
  });
});