$(document).ready(function(){
  $("button").mouseover(function(){
    this.style.backgroundColor = this.name;
  });
  $("button").mouseout(function(){
    this.style.backgroundColor = "white";
  })
});
