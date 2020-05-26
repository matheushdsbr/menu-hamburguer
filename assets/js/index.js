$(function() {
  console.log( "ready!" );
  $(".menu-box").on("click", function() {
    $(this).find(".menu").toggleClass("active");
  });
});