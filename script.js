'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
const details =  `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got It</button>`

// message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got It</button>`;
message.insertAdjacentHTML("beforeend", details)

header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function (e) {
    e.preventDefault();

    message.remove();
  });

  ///styles

message.style.backgroundColor = '#37383d';
message.style.width = '102%';
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty("--color-primary", 'orangered')

////ATTRIBUTE
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)

