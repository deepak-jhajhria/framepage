let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let span3 = document.querySelector(".span3")
let navbtn = document.querySelector(".nav-btn")

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("span4");
    span2.classList.toggle("span5");
    span3.classList.toggle("span6");
})
navbtn.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})
 
$(document).ready(function(){
  // hide #back-top first
  $("#back-top").hide();
  // fade in #back-top
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 500) {
              $('#back-top').fadeIn();
          } else {
              $('#back-top').fadeOut();
    
          }
      });
      // scroll body to 0px on click
      $('a#back-top').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 100);
          return false;
      });
  });

});