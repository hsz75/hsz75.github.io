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
    test_bu.innerHTML="<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ExqqdUXXdgA?si=ssodp56KtWwcGK1d\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"></iframe><br><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/I1At6oBpAPo?si=XNtzBb5Sc8ibNZaf\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
    test_txt.innerHTML="如果不行……<br>点我重试<br>（最好检查软件后再试）"
}

