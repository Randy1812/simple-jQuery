$(document).ready(function() {
  $(document).mousedown(function(event) {
    console.log("clicked");
    switch(event.which) {
      case 1:
        $("h4.output").text("The Left Mouse Button was clicked.");
        // console.log("The Left Mouse Button was clicked.");
      break;
      case 2:
      $("h4.output").text("The Middle Mouse Button was clicked.");
      // console.log("The Middle Mouse Button was clicked.");
      break;
      case 3:
      $("h4.output").text("The Right Mouse Button was clicked.")
      // console.log("The Right Mouse Button was clicked.");
      break;
    }
  });
});
