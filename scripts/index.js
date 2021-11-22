const firstScreenButton = document.querySelector('.first-screen__button');
const about = document.querySelector('.about');
const swiper = document.querySelector('.swiper');



function firstScreenButtonClick() {
  about.scrollIntoView({behavior: "smooth", block: "start"});
}

firstScreenButton.addEventListener('click', firstScreenButtonClick);

if (document.documentElement.clientWidth < 400) {
  const mySwiper = new Swiper('.photos', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clicable: true,
    },
    breakpoints: {
      400: {
        enabled: false
      }
    }

  });
}

if (document.documentElement.clientWidth > 400) {
  const swiperSlide = swiper.querySelectorAll('.swiper-slide');
  const swiperWrapper = swiper.querySelector('.swiper-wrapper');
  swiperSlide.forEach((currentValue) => {
    currentValue.classList.remove('swiper-slide');
  })
  swiperWrapper.classList.remove('swiper-wrapper');
  swiper.classList.remove('swiper');

}

/*Настраиваем закраску кнопок с суммами*/
const formDonutsBtnDonutSum = document.querySelectorAll('.form-donuts__button-donut-sum');

formDonutsBtnDonutSum.forEach(function (currentValue, index,currentArray ) {
  currentArray[index].addEventListener('click', function () {
    if (document.querySelector('.form-donuts__button-donut-sum_checked') === null){
      currentArray[index].classList.toggle('form-donuts__button-donut-sum_checked');
    }else {
      document.querySelector('.form-donuts__button-donut-sum_checked').classList.toggle('form-donuts__button-donut-sum_checked');
      currentArray[index].classList.toggle('form-donuts__button-donut-sum_checked');
    }
  });
})

/*Декларируем функцию открытия и закрытия*/
function popupOpen(popupObject){
  popupObject.classList.add(`popup_opened`);
}

function popupClose(popupObject){
  popupObject.classList.remove(`popup_opened`);
}

function popupToggle(popupObject){
  popupObject.classList.toggle(`popup_opened`);
}

/*Вешаем лиссенеры на элементы открытия и закрытия popups*/
/*Popup с формой пожертвования*/
const popupBtnClose = document.querySelector('.popup__button-close');
const popupTypeDonuts = document.querySelector('.popup_type_donuts');
const headerSupportBtn = document.querySelector('.header__support-btn');
const popupNavDonateBtn = document.querySelector('.popup-nav__donate-btn');

headerSupportBtn.addEventListener('click', function (){
  popupOpen(popupTypeDonuts);
});

popupNavDonateBtn.addEventListener('click', function (){
  popupOpen(popupTypeDonuts);
});

popupBtnClose.addEventListener('click', function (){
  popupClose(popupTypeDonuts);
});

/*Popup с меню и городами*/
const popupNav = document.querySelector('.popup-nav');
const popupCities = document.querySelector('.popup-cities');
const headerBurger = document.querySelector('.header__burger');
const popupNavCityChooseBtn = document.querySelector('.popup-nav__city-choose-btn');
const popupCitiesBackspaceBtn = document.querySelector('.popup-cities__backspace-btn');
const popupCitiesCityArr = document.querySelectorAll('.popup-cities__city');
const popupNavCity =document.querySelector('.popup-nav__city');
const headerLocation = document.querySelector('.header__location');

headerBurger.addEventListener('click', function (){
  popupNav.classList.toggle('popup-nav_opened');
});

popupNavCityChooseBtn.addEventListener('click', function (){
  popupCities.classList.toggle('popup-cities_opened');
});

popupCitiesBackspaceBtn.addEventListener('click', function (){
  popupCities.classList.toggle('popup-cities_opened');
});

headerLocation.addEventListener('click', function (){
  popupCities.classList.toggle('popup-cities_opened');
});

const popupCitiesCityChooseBtnArr = document.querySelectorAll('.popup-cities__city-choose-btn');
const popupCitiesCityMarkerArr = document.querySelectorAll('.popup-cities__city-marker');

popupCitiesCityChooseBtnArr.forEach(function (currentValue, index,currentArray ){
  currentArray[index].addEventListener('click',  function(){
    if (document.querySelector('.popup-cities__city-marker_active') === null){
      popupCitiesCityMarkerArr[index].classList.toggle('popup-cities__city-marker_active');
    }else {
      document.querySelector('.popup-cities__city-marker_active').classList.toggle('popup-cities__city-marker_active');
      popupCitiesCityMarkerArr[index].classList.toggle('popup-cities__city-marker_active');
    }
    popupNavCity.textContent = popupCitiesCityArr[index].textContent;
    headerLocation.textContent = popupCitiesCityArr[index].textContent;
  });
})