/**
 * Created by Administrator on 2016/10/14 0014.
 */
(function(){
    var list;
    var list_s;
    var index=0;
    var timer;
    var timer_s;
//    图片数组
    function images(imgPath,toUrl){
        var backgroundImage=document.createElement("a");
        backgroundImage.href=toUrl;
        var image=document.createElement("img");
        image.src=imgPath;
        backgroundImage.appendChild(image);
        backgroundImage.className="imageView";
        return backgroundImage;
    }
//    承载数组的容器
    function imageBoxList(){
        var boxInList=[{imgPath:"image1/1.jpg",toUrl:"#"},{imgPath:"image1/2.jpg",toUrl:"#"},{imgPath:"image1/3.jpg",toUrl:"#"}]
        if(!list){
            list=[];
            for(var i=0;i<boxInList.length;i++){
                var item=images(boxInList[i].imgPath,boxInList[i].toUrl);
                list.push(item);
            }
        }
        return list;
    }
//    初始状态
    function showImage(){
        var item=imageBoxList()[index];
        var content=document.getElementById("content");
        content.appendChild(item);
        var nextButton=document.getElementById("nextButton");
        nextButton.onclick=function(){
            next();
        };
        var preButton=document.getElementById("preButton");
        preButton.onclick=function(){
            pre();
        }
    }
    for(var i=0;i<imageBoxList().length;i++){
        var choosers = document.createElement("button");
        var chooser = document.getElementById("chooser");
        choosers.className = "choosers";
        choosers.textContent = i+1;
        chooser.appendChild(choosers);
        if(i === 0){
            choosers.id = "selected";
            choosers.style.background = "#666";
        }
        choosers.onclick = function () {
            index = this.textContent-2;
            next();
        };
    }
//    下一页
    function next(){
        index++;
        if(index===imageBoxList().length){
            index = 0;
        }
        var preItem=document.getElementsByClassName("imageView")[0];
        var content=document.getElementById("content");
        content.removeChild(preItem);
        content.appendChild(imageBoxList()[index]);
        updateChooses();
    }
//    上一页
    function pre(){
        index--;
        if(index===-1){
            index=imageBoxList().length-1;
        }
        var preItem=document.getElementsByClassName("imageView")[0];
        var content=document.getElementById("content");
        content.removeChild(preItem);
        content.appendChild(imageBoxList()[index]);
        updateChooses();
    }
    function updateChooses(){
        var a = document.getElementById("selected");
        a.id = "";
        document.getElementsByClassName("choosers")[index].id="selected";
        for(var i=0;i<imageBoxList().length;i++){
            document.getElementsByClassName("choosers")[i].style.background = "#fff";
        }
        document.getElementById("selected").style.background = "#a2a2a2";
    }
    //定时器
    function startTimer(){
        if(timer){
            clearInterval(timer);
        }
        timer=setInterval(next,3000);
    }
    function init(){
        showImage();
        startTimer();
    }
    init();
//------------------------轮播图 2------------------------
     function images2(imagePath,toUrl){
        var background=document.createElement("a");
        background.href=toUrl;
        var img=document.createElement("img");
        img.src=imagePath;
        background.className="imageView2";
        background.appendChild(img);
        return background;
    }
    function imageBox2(){
        var boxInList2=[{imagePath:"image2/1.jpg",toUrl:"#"},{imagePath:"image2/3.jpg",toUrl:"#"},{imagePath:"image2/4.jpg",toUrl:"#"}];
        if(!list_s){
            list_s=[];
            for(var i=0;i<boxInList2.length;i++){
                var item=images2(boxInList2[i].imagePath,boxInList2[i].toUrl);
                list_s.push(item);
            }
        }
        return list_s;
    }
    function showImage2(){
        var item=imageBox2()[index];
        var content=document.getElementById("content_s");

        content.appendChild(item);
        var nextButton=document.getElementById("nextButton_s");
        nextButton.onclick=function(){
            next2();
        };
        var preButton=document.getElementById("preButton_s");
        preButton.onclick=function(){
            pre2();
        };
    }
    function next2(){
        index++;
        if (index===imageBox2().length){
            index=0;
        }
        var preItem=document.getElementsByClassName("imageView2")[0];
        var content=document.getElementById("content_s");
        content.removeChild(preItem);
        content.appendChild(imageBox2()[index]);
    }
    function pre2(){
        index--;
        if(index===-1){
            index=imageBox2().length[index];
        }
        var preItem=document.getElementsByClassName("imageView2")[0];
        var content=document.getElementById("content_s");
        content.removeChild(preItem);
        content.appendChild(imageBox2()[index]);
    }
    //function startTimer2(){
    //    if(timer_s){
    //        clearInterval(timer_s);
    //    }
    //    timer_s=setTimeout(next2,3000);
    //}
    function init_s(){
        showImage2();
        //startTimer2();
    }
    init_s();
})();