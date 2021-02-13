// main.js


// TODO

var volumeNumber = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");
var volumeImage = document.getElementById("volume-image");
var myAudio = document.getElementById("horn-sound");

volumeSlider.addEventListener(onchange, sliderChanged);
volumeNumber.addEventListener(onchange, numberChanged);


//the function that updates volume image based on the input value
function updateImage(num){
    if (num == 0){
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
    } else if (num <=33){
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
    } else if (num <= 66){
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
    } else{
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
    }

}

//function that updates button based on input value
function updateBtn(num){
    if (num==0){
        myBtn.disabled = true;
    } else{
        myBtn.disabled = false;
    }
}

//update image and number and volume when slider is changed
function sliderChanged(){
    var myVolume = volumeSlider.value;
    //change image
    updateImage(myVolume);
    //change number
    volumeNumber.value = myVolume;
    //update volume 
    myAudio.volume= myVolume/100;
    //update Button
    updateBtn(myVolume);
}

//update image and slider and volume when number is changed 
function numberChanged(){
    var myVolume = volumeNumber.value;
    //change image
    updateImage(myVolume);
    //change number
    volumeSlider.value = myVolume;
    //update volume 
    myAudio.volume= myVolume/100;
    //update Button
    updateBtn(myVolume);
}

//change the audio selection 
var airAudio = document.getElementById("radio-air-horn-container");
airAudio.addEventListener(onclick, toAir);

var airAudio = document.getElementById("radio-car-horn-container");
airAudio.addEventListener(onclick, toCar);

var airAudio = document.getElementById("radio-party-horn-container");
airAudio.addEventListener(onclick, toParty);


function toAir(){
    //change audio
    document.getElementById("horn-sound").setAttribute("src","./assets/media/audio/air-horn.mp3");
    //change img
    document.getElementById("sound-image").setAttribute("src","./assets/media/images/air-horn.svg");
}


function toCar(){
    //change audio
    document.getElementById("horn-sound").setAttribute("src","./assets/media/audio/car-horn.mp3");
    //change img
    document.getElementById("sound-image").setAttribute("src","./assets/media/images/car-horn.svg");
}


function toParty(){
    //change audio
    document.getElementById("horn-sound").setAttribute("src","./assets/media/audio/party-horn.mp3");
    //change img
    document.getElementById("sound-image").setAttribute("src","./assets/media/images/party-horn.svg");
}


//play the audio when button is clicekd 

var myBtn = document.getElementById("honk-btn");
myBtn.addEventListener("click", function(){if (myBtn.disabled==false){myAudio.play();}});