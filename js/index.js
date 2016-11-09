$(function(){
  $(".footer span").click(function(){
      $(this).next("ul").slideToggle();
  });
})