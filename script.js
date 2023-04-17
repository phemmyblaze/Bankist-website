'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///button scrolling
btnScrollTo.addEventListener('click', e => {
  e.preventDefault();

  const S1coords = section1.getBoundingClientRect();
  console.log(S1coords);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  ////scrolling
  // window.scrollTo(
  //   S1coords.left + window.pageXOffset,
  //   S1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: S1coords.left + window.pageXOffset,
  //   top: S1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////
////Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
    
//     const id = this.getAttribute('href');
    
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })

///1. Add event listener to common parent element
///2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

  ///Matching strategy
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})



// const header = document.querySelector('.header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// const details = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got It</button>`;

// // message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got It</button>`;
// message.insertAdjacentHTML('beforeend', details);

// header.append(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function (e) {
//     e.preventDefault();

//     message.remove();
//   });

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   e.preventDefault();
  
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   e.preventDefault();
  
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', function(e) {
//   e.preventDefault();
  
//   this.style.backgroundColor = randomColor(); 
// });



///styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '102%';
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty("--color-primary", 'orangered')

// ////ATTRIBUTE
// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt)

const h1 =  document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes )
