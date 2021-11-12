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

/*Вешаем лиссенеры на элементы открытия и закрытия popups*/
const popupBtnClose = document.querySelector('.popup__button-close');
const popupTypeDonuts = document.querySelector('.popup_type_donuts');
const headerSupportBtn = document.querySelector('.header__support-btn');

headerSupportBtn.addEventListener('click', function (){
  popupOpen(popupTypeDonuts);
});

popupBtnClose.addEventListener('click', function (){
  popupClose(popupTypeDonuts);
});
