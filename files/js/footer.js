//��δ������ϸ��Ƶģ��������벻Ҫ����
function Runtime(){
        // ��ʼʱ�䣬��/��/�� ʱ:��:��
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
        //��Ϣд�뵽DIV��
        span.innerHTML = "��վ�Ѿ�������"+A+"��"+B+"Сʱ"+C+"��"+D+"��"
    }
setInterval(runtime, 1000);



