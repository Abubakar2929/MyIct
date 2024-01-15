//  main slider
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 4000); 

//  Scroll to section
document.addEventListener("DOMContentLoaded", function () {
var scrollLinks = document.querySelectorAll('.scroll-to');

scrollLinks.forEach(function (link) {
link.addEventListener('click', function (e) {
e.preventDefault();

var targetId = this.getAttribute('href').substring(1);
var targetElement = document.getElementById(targetId);

window.scrollTo({
  top: targetElement.offsetTop,
  behavior: 'smooth'
});
});
});
});

// Request a book (popup)
document.addEventListener("DOMContentLoaded", function () {
  function closePopup() {
      document.getElementById("requestPopup").style.display = "none";
  }

  document.getElementById("requestBook").addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("requestPopup").style.display = "flex";
  });

  document.getElementById("closePopup").addEventListener("click", function () {
      closePopup();
  });
});


// Subscribe (alert)
function subscribe() {
  alert('You Have Successfully Subscribed To Quillium')
}

//hamburger
window.onload = function() {
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => link.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
};