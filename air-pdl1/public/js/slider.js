
function finVideo1(){
  console.log("fin video 1");
  showButton();
}

function clickVideo2(){
  var video2 = document.getElementById("video2");
  console.log("click video 2, time : ",video2.currentTime);
  if(video2.currentTime > 0){
    var video3 = document.getElementById("video3");
    console.log("fin video 2 : ", video2.currentTime);
    video2.currentTime = 0;
    video2.style.visibility = "hidden";
    video3.style.visibility = "visible";
    video3.play();}
}

function nextSlide(indice){
  console.log("Next Slide : ", indice);
  switch (indice) {
    case 1:
      console.log("Case 1");
      var video2 = document.getElementById("video2");
      //video2.style.visibility = "visible";
      video2.play();
      break;
    default:

  }
}
function Slider(){
    var swiper = new Swiper('.swiper-container', {

        direction:'vertical',
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',

        },
      });
      swiper.on('slideNextTransitionEnd', function(){
        nextSlide(swiper.activeIndex);
	})
}

function showButton() {
    var down = document.getElementById("up");
    var down = document.getElementById("down");

    if(up.style.visibility == "visible"){
      up.style.visibility = "hidden";
      down.style.visibility = "hidden";
    } else{
    up.style.visibility = "visible";
    down.style.visibility = "visible";
    }
  }
