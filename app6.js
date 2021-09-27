$(document).ready(function() {
  $("button").click(function() {
    if( this.name === "rem_border" ) {
      $('[name="main_button"]').css("border", "2px solid #e5e5e5");
    }
    if( this.name === "rem_bgcol" ) {
      $('[name="main_button"]').css("background-color", "#fff");
      $('[name="main_button"]').css("background-image", "none");
    }
    if( this.name === "rem_borshadow" ) {
      $('[name="main_button"]').css("box-shadow", "none");
    }
  });
});
