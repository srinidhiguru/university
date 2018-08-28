
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
