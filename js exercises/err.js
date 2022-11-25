var gyr = new Array("green","yellow","red");

var index = 0;
var gyrLen = gyr.length;

function nextLightClick() {
    if (index == gyrLen) 
        index = 0;

   // var image = document.getElementById('starting_light');
  //  image.src = gyr[index];

    index++;
}