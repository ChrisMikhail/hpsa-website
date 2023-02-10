let total = 0;

function respondNav() {

  WindowWidth = $(window).width();

  if (WindowWidth <= 880) {
    $("nav ul").css("display", "none");
    $("nav ul").css("padding-right", "0");
    $("nav ul").css("padding-left", "0");
    $(".toggle-button").show();
    $("nav ul").css("margin", "0");
    $("nav ul li").css("margin-right", "3rem");
    $("nav ul li").css("margin-left", "3rem");
    $("nav ul li").css("text-align", "right");
    $("nav ul li").css("transform", "translate(0, 8rem)");
    $("nav ul li").css("margin-top", "3rem");
  } else {
    $(".toggle-button").hide();
    $("nav ul").css("margin-top", "1.5rem");
    $("nav ul").css("padding-right", "20px");
    $("nav ul li").css("margin", "20px 20px");
    $("nav ul").css("display", "inline");
    $("nav ul li").css("display", "inline-block");
    $("nav ul li").css("transform", "translate(0, 0)");
    $("nav ul").css("background-color", "transparent");
    $(".container").css("filter", "brightness(100%)");
    $("body").css("overflow-y", "visible");
    total = 0;
  }
}

$(document).ready(function () {
  respondNav();
})

$(window).resize(function () {
  respondNav();
})

$(".toggle-button").click(function () {
  total++;
  $("nav ul li").css("display", "list-item");
  $("nav ul").css("background-color", "rgb(38, 52, 80)");
  $("nav ul").css("height", "100vh");
  // $("nav ul").css("max-width", "80vw");
  $("nav ul").animate({ width: 'toggle' }, 165, "linear");
  $(".container").css("filter", "brightness(40%)");
  $("body").css("overflow-y", "hidden");
  if (total % 2 == 0) {
    $(".container").css("filter", "brightness(100%)");
    $("body").css("overflow-y", "visible");
  }
});