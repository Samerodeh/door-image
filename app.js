alert("Click the Door to open it and then click inside it to enter \n\nAfter opening door wait for 3-4 seconds to load image\n\nClick the Headphone to play Karaoke version of Door Image theme song \n\nHppe you like it")

var btnM=document.getElementsByTagName("button")[0],mus=document.querySelector("#mus"),door=document.querySelector("#door"),desti=document.querySelector("#desti"),n=0,m=0;
var places=["https://dl.dropbox.com/s/4655qrk6a6zsxge/Wallpaper%201.jpg","https://dl.dropbox.com/s/5sh1k57zo1ovne6/Wallpaper%202.jpg","https://dl.dropbox.com/s/ycnt6zn8lfgdppu/wallpaper%203.jpg","https://dl.dropbox.com/s/n08t5ah734qetyc/wallpaper%204.jpg","https://dl.dropbox.com/s/jlz3u0nglfruc5v/wallpaper%205.jpg","https://dl.dropbox.com/s/37e2816mo6zfeuc/wallpaper%206.jpg","https://dl.dropbox.com/s/fz07j6vcta0il6s/wallpaper%207.jpg","https://dl.dropbox.com/s/8wppuk5x3dv2mvn/wallpaper%208.jpg","https://dl.dropbox.com/s/wyoxo0ng0ewr39l/wallpaper%209.jpg","https://dl.dropbox.com/s/zv88fvv1sy2u6go/Wallpaper%2010.jpg"];

door.addEventListener("click",opnNclos)
function opnNclos(){
   door.classList.toggle("open");
   if(!door.classList.contains("open")){
      if(n>=10){
          n=0;
      }
      setTimeout(function(){
         desti.src = places[n]
         n++
      },300)
   }
}
desti.addEventListener("click",function(){
   cont.style.background="-webkit-linear-gradient(#0003,#0003),url("+desti.src+") no-repeat";
   cont.style.backgroundSize="100% 100%";
   opnNclos();
})
function music(){
    if(m==0){
       mus.play()
       btnM.style.background = "rgba(255,255,255,.3)";
       m=1;
    }
    else{
       mus.pause();
       btnM.background ="rgba(0,0,0,.5)";
       m=0;
    }
    'use strict';}

