﻿# ovsyunlive
这是一套网页直播,监控,视频会议,视频对讲,Web视频推流,Web免插件极速rtsp/rtmp播放，电子游戏直播，桌面远程控制，游戏远控，支持H5监控直播，微信直播会议，RTSP、RTMP网页低延时播放，支持srt,Webrtc,http-flv,ws-flv,Pc可以不用flash,全套低延时,针对硬件游戏机远控推流做了低延时的转码和转发,能在线H5互动游戏,web监控,低延时解决方案,此项目后台Web管理开源，整套方案提供绿色安装包.

特点：H5，Web推流rtmp/rtsp，Web免插件rtmp/rtsp/Webrtc播放，Web极低延时200毫秒直播测试：

1、github上面国内下载不稳定，这里提供国内绿色下载包，Windows上解压

国内下载： http://m.ovmeet.com/ovsyunlive.zip

2、修改ovsyunmedia.ini里面的exthost为你安装机子上的IP（内网用内网IP,公网要用公网IP）

3、双击运行，start.bat  停止：stop.bat  商用版支持Windows,Linux系统

Web在线rtmp/rtsp推流测试：

https://IP:7702/pub/index.html

Web播放rtmp/rtsp/webrtc/ovplayw：

http://IP:7701/play/index.html

一个链接播放rtsp/rtmp:

http://IP:7701/play/play.html?rtsp://admin:xxx@192.168.1.105/live0.264

5、推流测试：

推流地址：rtmp://IP:1937/live/test001

Web播放地址：http://IP:7701/play/index.html

rtmp播流地址：rtmp://IP:1937/live/test001

rtsp播流地址：rtsp://IP:7554/live/test001

webrtc播流地址：webrtc://IP:7701/live/test001

flv播放地址: http://IP:7701/live/流id.flv

srt播放地址：srt://IP:7900?streamid=#!::h=live/12345,m=request

ws-flv播放地址: ws://IP:7701/live/流id.flv

6、管理平台http://IP:8800/ 用户:admin 密码:123456

 拉流列表，添加拉流（支持rtmp,rtsp,监控摄像头） 目标本地地址：rtmp://127.0.0.1:1937/live/流id(随机生成，或自已填写) 

 播放列表，查看流列表在线状态和在线直接播放

 
这个是演示版，商用支持Windows,Linux系统，有需要可以联系 QQ:1410919373 QQ群:216403866


<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/QQ图片20220511161931.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/QQ图片20231106153916.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120437.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120935.png" /></p>

<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190424172015.png" /></p>

<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120755.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120849.png" /></p>


视频会议功能演示：

MCU会议演示：https://w.ovmeet.com:9301/login.html

SFU会议演示：https://v.ovmeet.com:7777/login.html

支持Webrtc,rtsp,rtmp,直播用户参会

支持远程电子白板,文档共享

支持视频录存,视频直播

支持全平台（pc,android,ios）

注意：需要浏览器支持Webrtc,建议Chrome浏览器

新绿色版直接git下载 https://github.com/ccallcn/ovsyunlive/archive/8.10.zip

1、修改ovsyunmedia.ini里面的exthost为你安装机子上的IP（内网用内网IP,公网要用公网IP）

2、 修改ovsyunlive.conf里面的candidate IP;为你安装机子上的IP（内网用内网IP,公网要用公网IP）

4、双击启动start.bat  停止，stop.bat

4、运行路径和流ID不要带中文字符

5，Web测试地址:https://IP:7777/login.html, 帐号随机登录就用，稍懂html也可以login.html自已调调




