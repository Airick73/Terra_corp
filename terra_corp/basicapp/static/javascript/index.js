$(".custom-nav-data").addClass("sticky-navbar-div--noBorder");
$(':root').css("--windowHeight", $( window ).height() + 'px');

//Adjusting variable "windowHeight" for use in css
window.addEventListener('resize', () => {
  $(':root').css("--windowHeight", $( window ).height() + 'px');
});

var elementID = [];
Array.from(document.getElementsByClassName("news-link")).forEach( (name) => {
  elementID.push("#" + name.getAttribute("id"));
});

elementID.forEach((ID) => {
  $(ID).hover( () => {
    $(ID + " img").addClass("img-hover");
    $(ID + " .img-overlay").addClass("img-overlay-hover");
  }, () => {
    $(ID + " img").removeClass("img-hover");
    $(ID + " .img-overlay").removeClass("img-overlay-hover");
  });
});

