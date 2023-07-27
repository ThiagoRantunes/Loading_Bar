const progress = document.querySelector(".progres");
var timer = 1;
progress.style.width = timer + "%";

const tempo = setInterval(function tempo(){

timer = timer + 1;
progress.style.width = timer + "%";

if(timer == 100){
    timer = timer = 1;
}

}, 20);