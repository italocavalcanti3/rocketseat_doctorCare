window.addEventListener('scroll', onScroll);

const navigation = document.getElementById('navigation');
const scrollToTopButton = document.querySelector('.scrollToTop');

function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
  
  if (scrollY > 300) {
    scrollToTopButton.style.opacity = "1";
  } else {
    scrollToTopButton.style.opacity = "0";
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}



ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home,
          #home .woman,
          #home .stat,
          #services,
          #services .card,
          #about,
          #about img,
          #contact,
          #contact button,
          #footer,
          #footer .social-links`, { reset: true });