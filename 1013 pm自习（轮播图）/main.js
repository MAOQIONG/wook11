/**
 * Created by Administrator on 2016/10/13 0013.
 */
(function(){
    var list;
    var index=0;
    var timer;
    function imageContent(imagePath,toUrl){
        var backgroundImage=document.createElement("a");
        backgroundImage.href=toUrl;
        var image=document.createElement("img");
        image.src=imagePath;
        backgroundImage.appendChild(image);
        backgroundImage.className="imageView";
        return backgroundImage;
    }
function imageList(){
    var listBox=[{imagePush:"images/1.jpg",toUrl:""},
        {imagePush:"images/2.jpg",toUrl:""},
        {imagePush:"images/3.jpg",toUrl:""}];
    if(!list){
        list=[];
        for(var i=0;i<listBox.length;i++){
            var item=imageContent(listBox[i].imagePush,listBox[i].toUrl);
            list.push(item);
        }
    }
return list;
}
function showImage(){
    var item=imageList()[index];
    var content=document.getElementById("content");
    content.appendChild(item);

    var nextButton=document.getElementById("nextButton");
    nextButton.onclick=function(){
            next();
        };
    var preButton=document.getElementById("preButton");
    preButton.onclick=function(){
        pre();
    };
//-------------------------------
    for(var i=0;i<imageList().length;i++){
        var choosers = document.createElement("button");
        var chooser = document.getElementById("chooser");

        choosers.className = "choosers";
        choosers.textContent = i+1;
        chooser.appendChild(choosers);
        if(i === 0){
            choosers.id = "selected";
            choosers.style.background = "#666";
        }
        //addMouseEvent(choosers);
        choosers.onclick = function () {
            index = this.textContent-1;
            next();
        };
    }
    //----------------------------------
}
function next(){
    index++;
    if(index===imageList().length){
        index=0;
    }
    var preItem=document.getElementsByClassName("imageView")[0];
    var Content=document.getElementById("content");

    Content.removeChild(preItem);
    Content.appendChild(imageList()[index]);

    updateChooses();
}
    function pre(){
        index--;
        if(index===-1){
            index=imageList().length-1;
        }
        var preItem=document.getElementsByClassName("imageView")[0];
        var content=document.getElementById("content");
        content.removeChild(preItem);
        content.appendChild(imageList()[index]);

        updateChooses();
    }
//    -------------------------------------
    function updateChooses(){
        var a = document.getElementById("selected");
        a.id = "";
        document.getElementsByClassName("choosers")[index].id="selected";

        for(var i=0;i<imageList().length;i++){
            document.getElementsByClassName("choosers")[i].style.background = "#fff";
        }
        document.getElementById("selected").style.background = "#a2a2a2";
    }

//    -------------------------------------
function startTimer(){
    if(timer){
        clearInterval(timer);
    }
    timer=setInterval(next,2000);
}
function init(){
    startTimer();
    showImage();
}
init();
})();















