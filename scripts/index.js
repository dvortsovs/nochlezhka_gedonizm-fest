const firstScreenButton = document.querySelector('.first-screen__button');
const about = document.querySelector('.about');

function firstScreenButtonClick() {
  about.scrollIntoView({behavior: "smooth", block: "start"});
}

firstScreenButton.addEventListener('click', firstScreenButtonClick);

/*Определяем массив картинок*/
const photosListItemsArr = document.querySelectorAll('.photos__list-item');

/*Определяем масcив точек переключения*/
const dotsScrollDotArr = document.querySelectorAll('.dots-scroll__dot');

/*Настраиваем переключение картинок через нажатие на картинку*/
photosListItemsArr.forEach(function (currentValue, index,currentArray ){
  currentArray[index].addEventListener('click',  function(){
    if (index === currentArray.length - 1 ){
      currentArray[index].classList.toggle('photos__list-item_active');
      currentArray[0].classList.toggle('photos__list-item_active');
      dotsScrollDotArr[index].classList.toggle('dots-scroll__dot_active');
      dotsScrollDotArr[0].classList.toggle('dots-scroll__dot_active');
    }else{
      currentArray[index].classList.toggle('photos__list-item_active');
      currentArray[index + 1].classList.toggle('photos__list-item_active');
      dotsScrollDotArr[index].classList.toggle('dots-scroll__dot_active');
      dotsScrollDotArr[index + 1].classList.toggle('dots-scroll__dot_active');
    }
  });
});

/*Настраиваем переключение картинок через нажатие на точку*/
dotsScrollDotArr.forEach(function (currentValue, index,currentArray ) {
  currentArray[index].addEventListener('click', function () {
    document.querySelector('.dots-scroll__dot_active').classList.toggle('dots-scroll__dot_active');
    document.querySelector('.photos__list-item_active').classList.toggle('photos__list-item_active');
    currentArray[index].classList.toggle('dots-scroll__dot_active');
    photosListItemsArr[index].classList.toggle('photos__list-item_active');
  });
})

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