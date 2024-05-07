$(document).ready(function(){
    $('.item-container').slick({
    //   setting-name: setting-value
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".previous",
    nextArrow: ".next"
    });
  });

  const hamurgerMenu = document.getElementById("hamurgerMenu");
  const mobileNav = document.getElementById("mobileNav");
  const blackMenu = document.getElementById("blackMenu")

  hamurgerMenu.addEventListener("click", function() {
    mobileNav.style.display = "block"
  });

  blackMenu.addEventListener("click", function(){
    mobileNav.style.removeProperty("display")
  })