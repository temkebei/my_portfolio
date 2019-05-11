 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("btn").style.display = "block";
  } else {
    document.getElementById("btn").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// little script to activate the tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


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


