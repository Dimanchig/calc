var timeout;
$(window).resize(changePersective);

changePersective();

function changePersective(){
  TweenMax.set('#container', {perspective: $('#container').width()});
}


$('#container').mousemove(function(e){
  if(timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 400);
  
});

function callParallax(e){
  parallaxIt(e, '.slide', 100);
  parallaxIt(e, 'p', -30);
}

function parallaxIt(e, target, movement){
  var $this = $('#container');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  
  TweenMax.to(target, 1, {
    rotationY: (relX - $this.width()/2) / $this.width() * movement,
    rotationX: (relY - $this.height()/2) / $this.height() * movement,
    ease: Power2.easeOut
  })
}