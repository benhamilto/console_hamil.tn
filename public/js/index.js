$(function() {
  $(".ls-item").mouseover(function (){
    typeWriter(this);
  });
});

var timer;
function typeWriter(el) {
  var $typer = $(el);
  var txt = $typer.data('command');
  var tot = txt.length;
  ch = 0;
  clearTimeout(timer);

  (function typeIt() {
    if (ch > tot) return;
    $('#command-field').text(txt.substring(0, ch++));
    timer = setTimeout(typeIt, 50);
  }());
}