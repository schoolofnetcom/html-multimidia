
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