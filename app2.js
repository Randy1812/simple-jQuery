$(document).ready(function() {
  $("button").click(function() {
    let content = [];
    $("ul li").each(function() {
      content.push($(this).text())
    });
    $(".extracted-text").text("");
    content.forEach(item => {
      $(".extracted-text").append("<h4>" + item + "</h4><br>");
    });
  });
});
