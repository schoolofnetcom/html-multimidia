
function getAudio(){
    return document.getElementById("audio");
}

getAudio().onplay = function(){
    console.log("The audio has started to play");
};

getAudio().onpause = function(){
    console.log("The audio has been paused");
};

getAudio().onvolumechange = function(){
    console.log("The volume has been changed");
};
