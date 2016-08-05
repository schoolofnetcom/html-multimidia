
function getVideo(){
    return document.getElementById("video");
}

function play(){
    var video = getVideo();
    video.play();
}

function pause(){
    var video = getVideo();
    video.pause();
}

function stop(){
    var video = getVideo();
    //video.pause();
    //video.currentTime = 0;
    video.load();
}

function volume(){
    var volume = document.getElementById("volume").value;
    if(volume === "100"){
        volume = 1;
    }else{
        volume = parseFloat("0."+volume).toFixed(1);
    }
    var video = getVideo();
    video.volume = volume;
}