//function to toggle body classes
function changeBodyColor() {
  let toggleMode = document.getElementById("body");
  toggleMode.classList.toggle("viewMode");
}

// function to toggle footer class
function changeFooterColor() {
  let footer = document.getElementById("footer");
  footer.classList.toggle("footerMode");
}

// function to toggle scroll button class
function changeScrollButton() {
  let scrollButton = document.getElementById("scrollButton");
  scrollButton.style.color = scrollButton.style.color == 'white'? 'black':'white';
}
