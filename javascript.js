
    document.getElementById('toggleMenuBar').addEventListener('click',function(){
      if(document.getElementById('mainNav').classList.contains('open')){
        document.getElementById('mainNav').classList.remove('open');
      } else {
        document.getElementById('mainNav').classList.add('open');
      }
    })
