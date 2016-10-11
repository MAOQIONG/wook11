/**
 * Created by Administrator on 2016/10/10 0010.
 */
(function(){
    var list;
    //获取视图下标
    var index=0;
    var timer;
    //    每一张图片内容(路径 跳转地址)
    function imageContent(imagePath,toUrl){
        //a标签
        var backgroundImageView=document.createElement("a");
        backgroundImageView.href=toUrl;
        //图片
        var image=document.createElement("img");
        image.src=imagePath;
        backgroundImageView.appendChild(image);

        backgroundImageView.className="imageView";

        return backgroundImageView;
    }
    //创建一个数组装载所有的图片
    function imageList(){
        var listBox=[{imagePath:"images/1.jpg",toUrl:""},
            {imagePath:"images/2.jpg",toUrl:""},
            {imagePath:"images/3.jpg",toUrl:""}];

        if(!list){
            list=[];
            for (var i=0;i<listBox.length;i++){
                var item=imageContent(listBox[i].imagePath,listBox[i].toUrl);
                list.push(item);
            }
        }
        return list;
    }

//    初始状态
    function imageBegin(){
        //获取视图元素
        var item=imageList()[index];

    //    轮播图容器
        var content=document.getElementById("content");
        content.appendChild(item);
        document.querySelector("#box .nextButton").onclick= function () {
            next();
        };
        document.querySelector("#box .preButton").onclick= function () {
            pre();
        };
    }
//    下一页
    function next(){
    //    点击下一页 数组下标自加
        index++;
        if(index===imageList().length){
            index=0;
        }
        var preItem=document.getElementsByClassName("imageView")[0];
        var Content=document.getElementById("content");
        console.log(preItem);
        Content.removeChild(preItem);
        Content.appendChild(imageList()[index]);

    }
//    上一页
    function pre(){
        index--;
        if(index===-1){
            index=imageList().length-1;
        }
        var preItem=document.getElementsByClassName("imageView")[0];
        var content=document.getElementById("content");
        content.removeChild(preItem);
        content.appendChild(imageList()[index]);
    }

    //封装 鼠标移入 移除事件
    function addMouseEvent(view) {
        view.onmouseenter = function () {
            clearInterval(timer);
        };
        view.onmouseout = function () {
            startTimer();
        };
    }

//    定时器
    function startTimer(){
        if(timer){
            clearInterval(timer);
        }
        timer=setInterval(next,3000);
    }
// 还原视图
    function init(){
        imageBegin();
        startTimer();
        console.log("233334")
    }
    //调用
    init();
})();















