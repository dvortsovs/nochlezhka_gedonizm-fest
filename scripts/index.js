const firstScreenButton = document.querySelector('.first-screen__button');
const about = document.querySelector('.about');

function firstScreenButtonClick() {
  about.scrollIntoView({behavior: "smooth", block: "start"});
}

firstScreenButton.addEventListener('click', firstScreenButtonClick);

/*------------------------------------Блок работы с картинками из Instagram-------------------------------------*/
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
});

/*------------------------------------Блок функций открытия/закрытия popups-------------------------------------*/
/*Декларируем функцию открытия*/
function popupOpen(popupObject){
  popupObject.classList.add(`popup_opened`);
}

/*Декларируем функцию закрытия*/
function popupClose(popupObject){
  popupObject.classList.remove(`popup_opened`);
}

/*------------------------------------Блок работы с popup пожертвований-------------------------------------*/
/*Записываем popup в переменную*/
const popupTypeDonuts = document.querySelector('.popup_type_donuts');

/*Записываем кнопки открытия/закрытия popup в переменные*/
const popupBtnClose = document.querySelector('.popup__button-close');
const headerSupportBtn = document.querySelector('.header__support-btn');
const popupNavDonateBtn = document.querySelector('.popup-nav__donate-btn');

/*Вешаем лиссененры на определённые ранее кнопки*/
headerSupportBtn.addEventListener('click', function (){
  popupOpen(popupTypeDonuts);
});

popupNavDonateBtn.addEventListener('click', function (){
  popupOpen(popupTypeDonuts);
});

popupBtnClose.addEventListener('click', function (){
  popupClose(popupTypeDonuts);
});

/*Дополнительно Настраиваем закраску кнопок с суммами после нажатия*/
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
});

/*------------------------------------Блок работы с header-------------------------------------*/
/*Записываем header в переменную*/
const mainHeader = document.querySelector('.header');

/*Декларируем функцию закрепления header*/
function headerFixed(){
  mainHeader.classList.add(`header_fixed`);
}

/*Декларируем функцию закрытия*/
function headerFloat(){
  mainHeader.classList.remove(`header_fixed`);
}


/*------------------------------------Блок работы с popup навигации-------------------------------------*/
/*Записываем popup в переменную*/
const popupNav = document.querySelector('.popup-nav');

/*Записываем кнопки открытия/закрытия popup в переменные*/
const headerBurger = document.querySelector('.header__burger'); /*бургер*/

/*Вешаем лиссененры на определённые ранее кнопки*/
headerBurger.addEventListener('click', function (){
  if (popupNav.classList.contains('popup_opened')){
    popupClose(popupNav);
    popupClose(popupCities);
    headerFloat();
  }else{
    popupOpen(popupNav);
    headerFixed();
  }
});

/*------------------------------------Блок работы с popup выбора города-------------------------------------*/
/*Записываем popup в переменную*/
const popupCities = document.querySelector('.popup-cities');

/*Записываем кнопки открытия/закрытия popup в переменные*/
const headerLocation = document.querySelector('.header__location');  /*кнопка с названием города в header*/
const popupNavCityChooseBtn = document.querySelector('.popup-nav__city-choose-btn'); /*кнопка с названием города в меню навигации*/
const popupCitiesBackspaceBtn = document.querySelector('.popup-cities__backspace-btn');

/*Объявляем функцию активации маркера выбранного города*/
function popupNavCityChooseBtnActive(btn){
  btn.classList.toggle('popup-cities_city-choose-btn_active')
}

/*Объявляем функцию отметки текущего города в списке городов к выбору*/
function markedCity(cityBtnArr){
  popupCitiesCityChooseBtnArr.forEach(function (currentValue, index,currentArray ){
    if (currentArray[index].textContent === popupNavCity.textContent){
      if (currentArray[index].contains('popup-cities_city-choose-btn_active')) {
        return
      }else {
        alert(currentArray[index]);
        popupNavCityChooseBtnActive(currentArray[index]);
      }
    }
  });
}

/*Вешаем лиссененры на определённые ранее кнопки*/
headerLocation.addEventListener('click', function (){
  if (popupCities.classList.contains('popup_opened')){
    popupClose(popupCities);
    headerFloat(popupCitiesCityChooseBtnArr);
  }else{
    popupOpen(popupCities);
    headerFixed();
    markedCity(popupNavCityChooseBtn);
  }
});

popupNavCityChooseBtn.addEventListener('click', function (){
  if (popupCities.classList.contains('popup_opened')){
    popupClose(popupCities);
    headerFloat();
  }else{
    popupOpen(popupCities);
    headerFixed();
    markedCity(popupCitiesCityChooseBtnArr);
  }
});

popupCitiesBackspaceBtn.addEventListener('click', function (){
  if (popupCities.classList.contains('popup_opened')){
    popupClose(popupCities);
    headerFloat();
  }else{
    popupOpen(popupCities);
    headerFixed();
    markedCity(popupCitiesCityChooseBtnArr);
  }
});

/*-----------------------------Блок работы со списком городов в popup выбора города-----------------------------*/
/*Записываем в переменную массив кнопок переключения городов*/
const popupCitiesCityChooseBtnArr = document.querySelectorAll('.popup-cities__city-choose-btn');

/*Записываем в переменную поле текущего города из popup навигации*/
const popupNavCity = document.querySelector('.popup-nav__city');

/*Вешаем лиссененры на определённые ранее кнопки переключения городов*/
popupCitiesCityChooseBtnArr.forEach(function (currentValue, index,currentArray ){
  currentArray[index].addEventListener('click',  function(){
    if (document.querySelector('.popup-cities_city-choose-btn_active') === null){
      popupNavCityChooseBtnActive(currentArray[index]);
    }else {
      document.querySelector('.popup-cities_city-choose-btn_active').classList.toggle('popup-cities_city-choose-btn_active');
      popupNavCityChooseBtnActive(currentArray[index]);
    }
    popupNavCity.textContent = popupCitiesCityChooseBtnArr[index].textContent; /*присваиваем выбранное значение полю города в popup навигации*/
    headerLocation.textContent = popupCitiesCityChooseBtnArr[index].textContent /*присваиваем выбранное значение полю города в header*/;
  });
})