document.getElementById("logo").textContent = '<\\Prithviraj>';
Sp = document.getElementById("space");

var cb = document.getElementById('click');

cb.addEventListener('change', function() {
  if (this.checked) {
    Sp.innerHTML = `<div style="height:252px">`;
  } else {
    Sp.innerHTML = `<div style="height:0px">` 
  }
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}