$(document).ready(function() {
  $("#enable_submit").click(function() {
    if($(this).is(":checked")) {
      console.log("checked")
      $("#submit_btn").prop('disabled', false);
    } else {
      console.log("unchecked")
      $("#submit_btn").prop('disabled', true);
    }
  });
});
