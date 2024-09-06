var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var test_bu = document.getElementById("test");
var test_txt=document.getElementById("test_bu");
var button = document.getElementById("up");
var b2 = document.getElementById("down");
var num = 1;


step2.style.display = 'none';
step3.style.display = 'none';
step4.style.display = 'none';
button.style.display = "none";


function tostep() {
    switch (num) {
        case 1:
            step1.style.display = "none";
            step2.style.display = "inline";
            button.style.display = "inline";
            num++;

            break;
        case 2:
            step2.style.display = "none";
            step3.style.display = "inline";
            button.style.diplay = "inline";
            num++;

            break;

        case 3:
            step3.style.display = "none";
            step4.style.display = "inline";
            num++;
            b2.style.display = "none";
            break;
    }
}

function upstep() {
    switch (num) {
        case 2:
            step2.style.display = "none";
            step1.style.display = "inline";
            button.style.display = "none";

            num--;
            break;

        case 3:
            step3.style.display = "none";
            step2.style.display = "inline";
            num--;

            break;

        case 4:
            step4.style.display = "none";
            step3.style.display = "inline";
            b2.style.display = "inline";
            num--;

            break;
    }
}



function test() {
    test_bu.innerHTML="<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ExqqdUXXdgA?si=ssodp56KtWwcGK1d\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"></iframe><br>";
    test_txt.innerHTML="如果还有<b id=\"count\">15</b>秒还没加载出来的话……<br>点我重试（最好检查软件后再试）";
    var time=15;
    document.getElementById("count").innerHTML=time;
    setInterval(function (){
        if (time>0){
        time--;
        document.getElementById("count").innerHTML=time;
        console.info(time);
        }else{
            test_txt.innerHTML="如果视频还没出现的话就检查一下软件再点我刷新<br>如果出现了就点击“下一步”吧";
            clearInterval();
        }
    },1000)
}

function test2(){
    document.getElementById("test2").innerHTML="<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/I1At6oBpAPo?si=XNtzBb5Sc8ibNZaf\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
}