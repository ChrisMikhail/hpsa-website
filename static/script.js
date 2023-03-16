let menutoggle = false;

function respondNav() {

  WindowWidth = $(window).width();
 

  if (WindowWidth <= 800) {
    $("nav ul").css("display", "none");
    $(".toggle-button").show();
    $("nav ul").css("margin", "0");
    $("nav ul li").css("margin", "0");
    $("nav ul li").css("padding", "1.5rem");
    $("nav ul li").css("text-align", "right");
    $("nav ul li").css("transform", "translate(0, 7rem)");
    $("nav ul").css("line-height", "2");
    $(".one").css("font-size", "calc(0.5rem + 1vw)");
    $(".one").css("width", "60%");
    $(".one").css("margin", "auto");
    $("nav ul").css("padding", "0");
    $("nav ul li").css("border-top", "1px solid aliceblue");
    $("nav ul").css("border-bottom", "1px solid aliceblue");
  } else {
    $("nav ul").css("line-height", "1");
    $("nav ul li").css("border-top", "0");
    $("nav ul").css("border-bottom", "0");
    $(".toggle-button").hide();
    $(".one").css("font-size", "1.1rem");
    $(".one").css("width", "auto");
    $("nav ul li").css("font-size", "1.3rem");
    $("nav ul").css("margin-top", "1.5rem");
    $("nav ul").css("margin-right", "0.5rem");
    $("nav ul").css("padding", "10px 25px");
    $("nav ul li").css("margin", "20px 20px");
    $("nav ul").css("display", "inline");
    $("nav ul li").css("display", "inline-block");
    $("nav ul li").css("transform", "translate(0, 0)");
    $("nav ul").css("background-color", "transparent");
    $(".container").css("filter", "brightness(100%)");
    $("body").css("overflow-y", "visible");
    $("nav ul").css("height", "auto");
    $("nav ul").css("width", "auto");
    $("nav ul li").css("padding", "0rem");
  }
}

$(document).ready(function () {
  respondNav();
})



$(window).resize(function () {
  respondNav();
  $(".container").css("filter", "brightness(100%)");
  $("body").css("overflow-y", "visible");
  menutoggle = false;
})

$(".toggle-button").click(function () {
  menutoggle = true;
  $("nav ul li").css("display", "list-item");
  $("nav ul").css("background-color", "rgb(38, 52, 80)");
  $("nav ul").css("height", "32rem");
  $("nav ul").css("width", "100vw");
  $("nav ul").animate({ height: 'toggle' }, 250);
  $(".container").css("filter", "brightness(40%)");
  $("body").css("overflow-y", "hidden");
  $(".one").css("text-align", "center");
  if (menutoggle) {
    $(".container").css("filter", "brightness(100%)");
    $("body").css("overflow-y", "visible");
  }
});

const profileImgs = document.querySelectorAll(".card-img-top");
const toggleBtns = document.querySelectorAll(".toggle");
const texts = document.querySelectorAll(".card-text");

toggleBtns.forEach((toggleBtn, index) => {
  toggleBtn.addEventListener("click", () => {
   
    profileImgs[index].classList.toggle("img-expand");

   
    texts[index].classList.toggle("text-expand");

    toggleBtn.firstElementChild.classList.toggle("arrow-rotate");
    if (!texts[index].classList.contains("text-expand")) {
      texts[index].style.height = "0";
    } else {
      texts[index].style.height = texts[index].scrollHeight + "px";
    }
  });
});