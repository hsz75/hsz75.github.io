//这段代码网上复制的，看到了请不要介意
function Runtime(){
        // 初始时间，日/月/年 时:分:秒
        X = new Date("10/7/2020 1:00:00");
        Y = new Date();
        T = (Y.getTime()-X.getTime());
        M = 24*60*60*1000;
        a = T/M;
        A = Math.floor(a);
        b = (a-A)*24;
        B = Math.floor(b);
        c = (b-B)*60;
        C = Math.floor((b-B)*60);
        D = Math.floor((c-C)*60);
        //信息写入到DIV中
        span.innerHTML = "本站已经运行了"+A+"天"+B+"小时"+C+"分"+D+"秒"
    }
setInterval(runtime, 1000);



