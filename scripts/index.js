const firstScreenButton = document.querySelector('.first-screen__button');
const about = document.querySelector('.about');

function firstScreenButtonClick() {
  about.scrollIntoView({behavior: "smooth", block: "start"});
}

firstScreenButton.addEventListener('click', firstScreenButtonClick);
