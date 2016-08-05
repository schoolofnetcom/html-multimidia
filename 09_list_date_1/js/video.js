
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

getVideo().oncanplay = function () {
    var list = getStorage("listVideo");
    setTable(list);
};

getVideo().onplay = function () {
    console.log("The video has started play");
    if(getVideo().currentTime === 0){
        setStorage("video",{desc:["The video has started play"],time:[0],volume:[getVideo().volume]});
    }else{
        var objVideo = getStorage("video");
        objVideo.desc.push("The video has started play");
        objVideo.time.push(getVideo().currentTime);
        objVideo.volume.push(getVideo().volume);
        setStorage("video",objVideo);
    }
};

getVideo().onpause = function(){
    console.log("The video has been paused");

    var objVideo = getStorage("video");
    objVideo.desc.push("The video has been paused");
    objVideo.time.push(getVideo().currentTime);
    objVideo.volume.push(getVideo().volume);
    setStorage("video",objVideo);
};

getVideo().onabort = function(){
    console.log("Video load aborted");

    var objVideo = getStorage("video");
    objVideo.desc.push("Video load aborted");
    objVideo.time.push(getVideo().currentTime);
    objVideo.volume.push(getVideo().volume);
    setStorage("video",objVideo);

    var listVideo = getStorage("listVideo");

    if(!listVideo.length){
        listVideo = [];
    }
    listVideo.push(objVideo);
    setStorage("listVideo",listVideo);

};

getVideo().onvolumechange = function(){
    console.log("The volume has been changed");

    var objVideo = getStorage("video");
    objVideo.desc.push("The volume has been changed");
    objVideo.time.push(getVideo().currentTime);
    objVideo.volume.push(getVideo().volume);
    setStorage("video",objVideo);
};

function setStorage(id,list){
    localStorage.setItem(id,JSON.stringify(list));
}

function getStorage(id){
    var storage = localStorage.getItem(id);
    if(storage){
        return JSON.parse(storage);
    }else{
        return {};
    }
}

function setTable(list){
    var table = '<thead><tr><td>...</td><td>Desc</td><td>Time</td><td>Volume</td></tr></thead><tbody>';
    for(var k in list){
        table += '<tr><td>'+k+'</td>';
        var desc = '';
        var time = '';
        var volume = '';
        for(var j in list[k].desc){
            desc += '<p>'+list[k].desc[j]+'</p>';
            time += '<p>'+list[k].time[j]+'</p>';
            volume += '<p>'+list[k].volume[j]+'</p>';
        }
        table += '<td>'+desc+'</td>';
        table += '<td>'+time+'</td>';
        table += '<td>'+volume+'</td>';
        table += '</tr></tbody>';
    }

    document.getElementById("tableList").innerHTML = table;
}