
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

function muted(){
    var video = getVideo();
    var mut = document.getElementById("muted");
    if(video.muted){
        video.muted = false;
        mut.style.color = "black";
    }else{
        video.muted = true;
        mut.style.color = "red";
    }
}

function full(){
    var video = getVideo();
    video.webkitEnterFullScreen();
}

getVideo().onplay = function () {
    console.log("The video has strted play");
};

getVideo().onpause = function(){
    console.log("The video has been paused");
};

getVideo().onabort = function(){
    console.log("Video load aborted");
};

getVideo().onvolumechange = function(){
    console.log("The volume has been changed");
};
