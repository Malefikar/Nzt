$(document).on('click', '.main-nav__item--selected', function() {
  var dropDownContent = $(this).find('.dropdown-content');
  $(document).find('.main-nav__item--selected .main-nav__arrow').removeClass('main-nav__arrow--rotate');
  if (dropDownContent.is(':hidden')) {
    $(document).find('.main-nav__item--selected .dropdown-content').each(function() {
      $(this).hide();
    });
    dropDownContent.show();
    $(this).find('.main-nav__arrow').addClass('main-nav__arrow--rotate');
  } else {
    $(document).find('.main-nav__item--selected .dropdown-content').each(function() {
      $(this).hide();
    });
  }

})

window.onclick = function(event) {
  if (!event.target.matches('.main-nav__arrow')) {
    $(document).find('.main-nav__item--selected .main-nav__arrow').removeClass('main-nav__arrow--rotate');
    $(document).find('.main-nav__item--selected .dropdown-content').each(function() {
      $(this).hide();
    });
  }
}

$(document).ready(function () {
  var owl = $('#notes__list').owlCarousel({items: 1, loop: true});
  $(document).on('click', '.notes__button', function() {
    if ($(this).hasClass('notes__button--right')) {
      owl.trigger('next.owl.carousel');
    } else {
      owl.trigger('prev.owl.carousel');
    }
  });})


  $(document).ready(function () {
    var owl = $('#opinions__list').owlCarousel({items: 1, autoWidth:true, margin: 44, loop: true});
    $(document).on('click', '.opinions__button', function() {
      if ($(this).hasClass('opinions__button--right')) {
        owl.trigger('next.owl.carousel');
      } else {
        owl.trigger('prev.owl.carousel');
      }
    });})



window.onscroll = function() {menuScrolling()};

var header = document.getElementById("myHeader");
var container = document.getElementById("container");
var sticky = header.offsetTop;

function menuScrolling() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky"), container.classList.add("main-header--padding");
  } else {
    header.classList.remove("sticky"), container.classList.remove("main-header--padding");
  }
}
