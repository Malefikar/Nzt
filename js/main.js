function dropOne() {
  document.getElementById("myDropdown1").classList.toggle("dropdown-content__show--first");
}

function dropTwo() {
  document.getElementById("myDropdown2").classList.toggle("dropdown-content__show--second");
}

function dropThree() {
  document.getElementById("myDropdown3").classList.toggle("dropdown-content__show--third");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.main-nav__arrow')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('dropdown-content__show--first')) {
      openDropdown.classList.remove('dropdown-content__show--first');
    }
    if (openDropdown.classList.contains('dropdown-content__show--second')) {
      openDropdown.classList.remove('dropdown-content__show--second');
    }
    if (openDropdown.classList.contains('dropdown-content__show--third')) {
      openDropdown.classList.remove('dropdown-content__show--third');
    }
  }
}}
