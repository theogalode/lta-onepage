const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    header.style.backgroundColor = "#2F1353";
  } else {
    header.style.backgroundColor = "transparent";
  }
}