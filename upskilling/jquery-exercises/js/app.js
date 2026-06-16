// Use $(document).ready
$(function(){
  // Exercise 1 bonus: log Hello World paragraph
  console.log($('#hello').text());

  // Exercise 2: change h1 text and hide p2 when button clicked
  $('h1').text('Changed heading via jQuery');
  $('#hideBtn').on('click', function(){ $('#p2').hide(); });

  // Exercise 3: boxes and methods
  $('#hideBoxBtn').on('click', function(){ $('.box').hide(); });
  $('#showBoxBtn').on('click', function(){ $('.box').show(); });
  $('#fadeOutBtn').on('click', function(){ $('.box').fadeOut ? $('.box').fadeOut() : $('.box').forEach ? $('.box').forEach(b=>b.style.opacity=0) : $('.box').hide(); });
  $('#fadeInBtn').on('click', function(){ $('.box').fadeIn ? $('.box').fadeIn() : $('.box').show(); });
  $('#toggleBtn').on('click', function(){ $('.box').toggle ? $('.box').toggle() : ($('.box').forEach?$('.box').forEach(b=>b.style.display=(b.style.display==='none'?'':'none')):$('.box').toggle()); });

  // Bonus chaining (slideUp().delay(1000).slideDown()) - emulate using jQuery if available
  if ($.fn && $.fn.slideUp) {
    $('.box').on('dblclick', function(){ $(this).slideUp().delay(1000).slideDown(); });
  }

  // Exercise 4: DOM manipulation
  $('#addForm').on('submit', function(e){ e.preventDefault(); const v = $('#itemInput').val(); if(!v) return; const li = document.createElement('li'); li.textContent = v; $('#items').append(li); $('#itemInput').val(''); });
  $('#removeAll').on('click', function(){ $('#items').empty ? $('#items').empty() : $('#items').innerHTML=''; });

  // Exercise 5: color box
  $('#colorBtn').on('click', function(){ $('#colorBox').css('backgroundColor','red'); });
  $('#colorBox').on('dblclick', function(){ $('#colorBox').css('backgroundColor','white'); });

  // Exercise 6: event helpers
  $('#eventDiv').on('click', function(){ $(this).css('backgroundColor','#fffbcc'); });
  $('#eventDiv').on('dblclick', function(){ $(this).css('backgroundColor','#ffd6d6'); });
  $('#eventDiv').on('mouseenter', function(){ $(this).css('border','2px solid #0d6efd'); });
  $('#eventDiv').on('mouseleave', function(){ $(this).css('border','1px solid #ccc'); });
  $('#keyInput').on('keypress', function(e){ $('#keyLog').text('You pressed: ' + String.fromCharCode(e.which || e.keyCode)); });
});
