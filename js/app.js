// menu

var navMain = document.querySelector('.main-nav');
var navBtn = document.querySelector('.main-nav__btn');

navMain.classList.remove('main-nav--nojs');

navBtn.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    }
    else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
});


//popap

var popap = document.querySelector('.popap');
var popapWrap = document.querySelector('.popap__wrap');
var popapBtn = document.querySelector('.js-open-popap');

popap.classList.remove('popap--js');

popapBtn.addEventListener('click', function() {
  if (popap.classList.contains('popap--closed')) {
    popap.classList.remove('popap--closed');
    popap.classList.add('popap--js');
    }
    else {
      popap.classList.add('popap--closed');
      popap.classList.remove('popap--js');
    }
});
