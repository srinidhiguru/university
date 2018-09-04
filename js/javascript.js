/********************************
    toggleMenuBar
*********************************/
document.getElementById('toggleMenuBar').addEventListener('click',function(){
  if(document.getElementById('mainNav').classList.contains('open')){
    document.getElementById('mainNav').classList.remove('open');
  } else {
    document.getElementById('mainNav').classList.add('open');
  }
})

/********************************
    update header on scroll
*********************************/
var mainHeader = document.getElementById('mainHeader');

window.addEventListener('scroll', function() {
  console.log('scrolling');
  if(window.scrollY > 39) {
    mainHeader.classList.add('active');
  } else {
    mainHeader.classList.remove('active');
  }
});

/**************************************/
/*      Background Img Slider        */
/**************************************/
var images = [
  'banner.jpg',
  'slider2.jpg',
  'slider3.jpg'
]
var banner = document.getElementsByClassName('banner')[0];
var img = 1;

function updateSlider() {
  banner.style.backgroundImage = 'url(img/'+images[img]+')'
  img++;
  if(img > images.length-1) {
    img = 0;
  }
}
setInterval(function() {
  updateSlider();
}, 2000)

/**************************************/
/*      SMOOTH SCROLL FUNCTION        */
/**************************************/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 41+'px'
        }, 1000);
        return false;
      }
    }
  });
});
