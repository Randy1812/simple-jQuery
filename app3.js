$(document).ready(function() {
  let content = [];
  $("ul li").each(function() {
    content.push($(this).text());
  });
  $("button").click(function() {
    let inp = $("input[type='text']").val();
    $("ul").text("");
    content.forEach(item => {
      if(inp.toLowerCase() === item.toLowerCase()) {
        $("ul").append("<li><strong>" + item + "</strong></li>");
      } else {
        $("ul").append("<li>" + item + "</li>");
      }
    });
  });
});
