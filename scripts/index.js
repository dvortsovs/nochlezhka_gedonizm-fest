const container = document.querySelector('.page');
const firstScreenButton = container.querySelector('.first-screen__button');
const about = container.querySelector('.about');
const photosListItemsArr = container.querySelectorAll('.photos__list-item');
const dotsScrollDotArr = container.querySelectorAll('.dots-scroll__dot');
const formDonutsBtnDonutSum = container.querySelectorAll('.form-donuts__button-donut-sum');
const popupBtnClose = container.querySelector('.popup__button-close');
const popupTypeDonuts = container.querySelector('.popup_type_donuts');
const headerSupportBtn = container.querySelector('.header__support-btn');
const popupNavDonateBtn = container.querySelector('.popup-nav__donate-btn');
const popupNav = container.querySelector('.popup-nav');
const popupCities = container.querySelector('.popup-cities');
const headerBurger = container.querySelector('.header__burger');
const popupNavCityChooseBtn = container.querySelector('.popup-nav__city-choose-btn');
const popupCitiesBackspaceBtn = container.querySelector('.popup-cities__backspace-btn');
const popupCitiesCityArr = container.querySelectorAll('.popup-cities__city');
const popupNavCity = container.querySelector('.popup-nav__city');
const headerLocation = container.querySelector('.header__location');
const popupCitiesCityChooseBtnArr = container.querySelectorAll('.popup-cities__city-choose-btn');
const popupCitiesCityMarkerArr = container.querySelectorAll('.popup-cities__city-marker');

function firstScreenButtonClick() {
  about.scrollIntoView({ behavior: "smooth", block: "start" });
}

firstScreenButton.addEventListener('click', firstScreenButtonClick);

photosListItemsArr.forEach(function (currentValue, index) {
  currentValue.addEventListener('click', function () {
    if (index === photosListItemsArr.length - 1) {
      currentValue.classList.remove('photos__list-item_active');
      photosListItemsArr[0].classList.add('photos__list-item_active');
      dotsScrollDotArr[index].classList.remove('dots-scroll__dot_active');
      dotsScrollDotArr[0].classList.add('dots-scroll__dot_active');
    }
    else {
      currentValue.classList.remove('photos__list-item_active');
      photosListItemsArr[index + 1].classList.add('photos__list-item_active');
      dotsScrollDotArr[index].classList.remove('dots-scroll__dot_active');
      dotsScrollDotArr[index + 1].classList.add('dots-scroll__dot_active');
    }
  });
});


/*Настраиваем переключение картинок через нажатие на точку*/
dotsScrollDotArr.forEach(function (currentValue, index) {
  currentValue.addEventListener('click', function () {
    container.querySelector('.dots-scroll__dot_active').classList.remove('dots-scroll__dot_active');
    container.querySelector('.photos__list-item_active').classList.remove('photos__list-item_active');
    currentValue.classList.add('dots-scroll__dot_active');
    photosListItemsArr[index].classList.add('photos__list-item_active');
  });
})

/*Настраиваем закраску кнопок с суммами*/

formDonutsBtnDonutSum.forEach(function (currentValue, index, currentArray) {
  currentArray[index].addEventListener('click', function () {
    if (container.querySelector('.form-donuts__button-donut-sum_checked') === null) {
      currentArray[index].classList.toggle('form-donuts__button-donut-sum_checked');
    } else {
      container.querySelector('.form-donuts__button-donut-sum_checked').classList.toggle('form-donuts__button-donut-sum_checked');
      currentArray[index].classList.toggle('form-donuts__button-donut-sum_checked');
    }
  });
})

/*Декларируем функцию открытия и закрытия*/
function popupOpen(popupObject) {
  popupObject.classList.add(`popup_opened`);
}

function popupClose(popupObject) {
  popupObject.classList.remove(`popup_opened`);
}

function popupToggle(popupObject){
  popupObject.classList.toggle(`popup_opened`);
}

/*Вешаем лиссенеры на элементы открытия и закрытия popups*/
/*Popup с формой пожертвования*/

headerSupportBtn.addEventListener('click', function () {
  popupOpen(popupTypeDonuts);
});

popupNavDonateBtn.addEventListener('click', function () {
  popupOpen(popupTypeDonuts);
});

popupBtnClose.addEventListener('click', function () {
  popupClose(popupTypeDonuts);
});

/*Popup с меню и городами*/

headerBurger.addEventListener('click', function () {
  popupNav.classList.toggle('popup-nav_opened');
});

popupNavCityChooseBtn.addEventListener('click', function () {
  popupCities.classList.toggle('popup-cities_opened');
});

popupCitiesBackspaceBtn.addEventListener('click', function () {
  popupCities.classList.toggle('popup-cities_opened');
});

headerLocation.addEventListener('click', function () {
  popupCities.classList.toggle('popup-cities_opened');
});


popupCitiesCityChooseBtnArr.forEach(function (currentValue, index, currentArray) {
  currentArray[index].addEventListener('click', function () {
    if (container.querySelector('.popup-cities__city-marker_active') === null) {
      popupCitiesCityMarkerArr[index].classList.toggle('popup-cities__city-marker_active');
    } else {
      container.querySelector('.popup-cities__city-marker_active').classList.toggle('popup-cities__city-marker_active');
      popupCitiesCityMarkerArr[index].classList.toggle('popup-cities__city-marker_active');
    }
    popupNavCity.textContent = popupCitiesCityArr[index].textContent;
    headerLocation.textContent = popupCitiesCityArr[index].textContent;
  });
})