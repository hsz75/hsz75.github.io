# 论cmd需要注意的点

## 引子

最近写了一个安装ffmpeg的bat脚本，原理就是把ffmpeg的文件放到system32下，并询问是否打开教程

## 运行目录

当你不用管理员身份运行时，运行目录是当前脚本所在的目录

![1692414304246](G:\Users\Furao57\AppData\Roaming\Typora\typora-user-images\1692414304246.png)

但是当你使用管理员身份运行时，就会变成System32

![1692414610288](G:\Users\Furao57\AppData\Roaming\Typora\typora-user-images\1692414610288.png)

此时如果用%cd%复制文件，不可行

![1692414749692](G:\Users\Furao57\AppData\Roaming\Typora\typora-user-images\1692414749692.png)

这时就要替换成%~dp0了（如果遇到空格、汉字或者其他特殊字符要用双引号括起来）



![1692414845382](G:\Users\Furao57\AppData\Roaming\Typora\typora-user-images\1692414845382.png)

<center><b>更正后的代码</b></center>

![1692415023772](G:\Users\Furao57\AppData\Roaming\Typora\typora-user-images\1692415023772.png)

<center><b>成功运行</b></center>

## 打开本地网页

可能你知道一般的快捷方式都是.Ink文件

![1692426090642](G:\Users\Furao57\AppData\Roaming\Typora\typora-user-images\1692426090642.png)