const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
});

/* закрытие при клике вне меню */

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
});



const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});






const about = document.querySelector('.about');

const aboutObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

aboutObserver.observe(about);