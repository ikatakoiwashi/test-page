// 蝶を動かす
document.querySelectorAll(".butterfly").forEach(function(el){

    el.addEventListener("mouseover",function(){

        let x = Math.random() * 850;
        let y = Math.random() * 450;

        el.style.left = x + "px";
        el.style.top = y + "px";

    });

});

// 青い生きものを動かす
document.querySelectorAll(".foo").forEach(function(el){

    el.addEventListener("mouseover",function(){

        let x = 360 + Math.random() * 450;
        let y = 190 + Math.random() * 120;

        el.style.left = x + "px";
        el.style.top = y + "px";

    });

});