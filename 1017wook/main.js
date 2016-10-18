/**
 * Created by Administrator on 2016/10/17 0017.
 */

(function(){
    var box=document.getElementById("box");
    //box.appendChild(divs);
    for(var i=1;i<57;i++){
        var divs=document.createElement("div");
        divs.className="newDiv";
        divs.id=i;
        //divs.innerText="";
        divs.style.width="30px";
        divs.style.height="30px";
        divs.style.border="1px solid #ed8b5b";
        divs.style.float="left";
        divs.style.margin="1px";
        divs.style.borderRadius="5px";
        divs.style.background="#fffaf5";
        divs.style.textAlign="center";
        divs.style.lineHeight="30px";
        box.appendChild(divs);
    }


var list=["1","2","3","4","5","6","7","8","9","0","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l",
"z","x","c","v","b","n","m","-","=","+","[","]","!","@","#","$","%","^","&","*","-","=","+","[","]","确定","取消"];


    //var divList=document.getElementsByClassName("newDiv");
    //console.log(divList.length);
    //for(var j=0;j<list.length;j++){
    //divList[j].innerText=list[j];
    for(var j=0;j<list.length;j++){
    var divList = $(".newDiv");
    divList[j].innerText = list[j];
    }

    $("#55").css({height:"30px",width:"130px",background:"#d94600",lineHeight:"25px",color:"#fff"});
    $("#56").css({height:"30px",width:"68px",background:"#ff8000",lineHeight:"25px",color:"#fff"});
var a="";
    //$(".newDiv").on("click",function(){
    //    var text=this.innerText;
    //    $("input").val += text;
    //    console.log(this.innerText);
    //});

    var a="" ;
    $(".newDiv").on("click", function (e) {
        var txt = $(this).html();
        a = a+txt;
        $("input").val(a);
    });

    $("#56").on("click",function(e){
        $("input").val("");
    })


})();