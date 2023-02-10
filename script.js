function respondNav() {

    WindowWidth = $(window).width();
  
    if (WindowWidth <= 880) {
      $("nav ul").css("display", "none");
      $(".toggle-button").show();
      $("nav ul").css("margin", "0");
      $("nav ul li").css("text-align", "right");
      $("nav ul li").css("transform", "translate(0, 8rem)");
      $("nav ul li").css("margin-top", "3rem");
    } else {
      $(".toggle-button").hide();
      $("nav ul").css("display", "inline");
      $("nav ul li").css("display", "inline-block");
      $("nav ul li").css("transform", "translate(0, 0)");
      $("nav ul").css("background-color", "transparent");
    }
  }
  
  $(document).ready(function () {
    respondNav();
  })
  
  $(window).resize(function () {
    respondNav();
  })

$(".toggle-button").click(function () {
    $("nav ul li").css("display", "list-item");
    $("nav ul").css("background-color", "rgb(38, 52, 80)");
    $("nav ul").css("height", "100vh");
    $("nav ul").animate({width: 'toggle'});
  });