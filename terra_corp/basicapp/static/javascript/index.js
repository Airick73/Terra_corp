var currentWindowPOS = 0;
var lastWindowPOS = 0;
var ticking = false;

window.addEventListener("scroll", function () {
    currentWindowPOS = window.scrollY;

    if(!ticking) {
        window.requestAnimationFrame(function (){
            animateNavbar(currentWindowPOS);
            ticking = false;
        });
    }

    else {
        ticking = true;
    }

});

function animateNavbar(position) {
    if(currentWindowPOS > lastWindowPOS){
      setTimeout(() => {
        $(".navbar").slideUp("fast");
      },"150");
    }
    else if(currentWindowPOS === lastWindowPOS){

    }
    else {
      if(position === 0){
        $(".navbar").removeClass("alt-navbar-bg");
        $(".navbar-brand, .nav-link").removeClass("alt-navbar-text");
        setTimeout(() => {
          $(".navbar").slideDown("fast");
        },"150");

      }

      else {
        $(".navbar").addClass("alt-navbar-bg");
        $(".navbar-brand, .nav-link").addClass("alt-navbar-text");
        setTimeout(() => {
          $(".navbar").slideDown("fast");
        },"200");

      }
    }

    lastWindowPOS = currentWindowPOS;
}
