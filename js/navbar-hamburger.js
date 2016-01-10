$(function(){
  $(".js-navbar-button").on("click", function(event){
    event.preventDefault();
    $(".js-navbar-collapse").toggleClass("expand-navbar");
    $(".js-overlay").addClass("js-expand-overlay");
  });

  $(".js-navbar-collapse").on("click", ".js-navbar-link, .js-navbar-close", closeSidemenu);
  // $(".js-navbar-collapse").on("click", ".js-navbar-close", closeSidemenu);

  function closeSidemenu() {
    event.preventDefault();
    $(this).closest(".js-navbar-collapse").removeClass("expand-navbar");
    $(".js-overlay").removeClass("js-expand-overlay");
  }

  $(".js-overlay").click(function(){
    console.log('click document');
    $(".js-navbar-collapse").removeClass("expand-navbar");
    $(this).removeClass("js-expand-overlay");
  });

});