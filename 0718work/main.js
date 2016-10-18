/**
 * Created by Administrator on 2016/10/18 0018.
 */
(function(){
    var div1=$("#div1");
    var div2=$("#div2");
    div2.click(function() {
        div2.animate({width: "0"}, 1000, function () {
            div1.css({display:"block"});
            div2.css({display:"none"});
            div1.animate({width:"200px"},1000)
            });
    });
    div1.click(function() {
        div1.animate({width: "0"}, 1000, function () {
            div2.css({display:"block"});
            div1.css({display:"none"});
            div2.animate({width:"200px"},1000)
        });
    });
})();