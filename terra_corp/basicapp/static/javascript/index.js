$(".custom-nav-data").addClass("sticky-navbar-div--noBorder");
$(':root').css("--windowHeight", $( window ).height() + 'px');

//Adjusting variable "windowHeight" for use in css
window.addEventListener('resize', () => {
  $(':root').css("--windowHeight", $( window ).height() + 'px');
});
