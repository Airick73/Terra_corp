var currentWindowPOS = window.scrollY;
var lastWindowPOS = window.scrollY;
var ticking = false;
var documentBodyColor = $('body').css('background-color')

//Determining the sticky style of the navbar (background)//
var stickyThemeBg;
var stickyTansitionBg;
if(documentBodyColor === "rgb(38, 38, 38)") {
  stickyThemeBg = "sticky-navbar-bg--dark";
  stickyTansitionBg = "t-sticky-navbar-bg--dark";
}
else { //NULL
  stickyThemeBg = "";
  stickyTansitionBg = "";
}

//Determining the sticky style of the navbar (text)//
var stickyThemeText;
var stickyTansitionText;
if (documentBodyColor === "rgb(38, 38, 38)"){
  stickyThemeText = "sticky-navbar-text--dark";
  stickyTansitionText = "t-sticky-navbar-text--dark";
}
else { //NULL
  stickyThemeText = "";
  stickyTansitionText = "";
}

//Onload navbar color//
if(window.scrollY === 0){
  $(".navbar").addClass(stickyThemeBg);
  $(".navbar-brand, .nav-link").addClass(stickyThemeText);
}

window.addEventListener("scroll", function() {
  currentWindowPOS = window.scrollY;

  if (window.innerWidth > "991" && !($(".navbar").hasClass("navbar-static"))) {
    window.requestAnimationFrame(function() {
      animateNavbar(currentWindowPOS);
    });
  }
});

function animateNavbar(position) {
  //Scrolling down window//
  if (currentWindowPOS > lastWindowPOS) {
    $(".navbar").slideUp("fast", () => {
      $(".navbar").stop(true, true);
    });
  }
  //NOT MOVING//
  else if (currentWindowPOS === lastWindowPOS) {}
  //Scrolling up window//
  else {
    //Check to see if navbar is at top of window//
    if (position === 0 && documentBodyColor === "rgb(38, 38, 38)") {
      //If at top of window, determine if smooth transition is needed//
      if ($(".navbar").css("display") == 'none') {
        $(".navbar").addClass("sticky-navbar-bg--dark");
        $(".navbar-brand, .nav-link").addClass("sticky-navbar-text--dark");
        $(".navbar").slideDown("fast", () => {
          $(".navbar").stop(true, true);
        });
      }
      else {
        $(".navbar").addClass("t-sticky-navbar-bg--dark");
        $(".navbar-brand, .nav-link").addClass("t-sticky-navbar-text--dark");
        setTimeout(() => {
          $(".navbar").addClass("sticky-navbar-bg--dark");
          $(".navbar-brand, .nav-link").addClass("sticky-navbar-text--dark");
          $(".navbar").removeClass("t-sticky-navbar-bg--dark");
          $(".navbar-brand, .nav-link").removeClass("t-sticky-navbar-text--dark");
        }, "150");
      }
    }
    //Not at top of window//
    else {
      $(".navbar").removeClass("sticky-navbar-bg--dark");
      $(".navbar-brand, .nav-link").removeClass("sticky-navbar-text--dark");
      $(".navbar").slideDown("fast", () => {
        $(".navbar").stop(true, true);
      });
    }
  }

  lastWindowPOS = currentWindowPOS;
}
