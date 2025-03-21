﻿# ovsyunlive
这是一套网页直播,监控,视频会议,视频对讲,Web视频推流,Web免插件极速rtsp/rtmp播放，电子游戏直播，桌面远程控制，游戏远控，支持H5监控直播，微信直播会议，RTSP、RTMP网页低延时播放，支持srt,Webrtc,http-flv,ws-flv,Pc可以不用flash,全套低延时,针对硬件游戏机远控推流做了低延时的转码和转发,能在线H5互动游戏,web监控,低延时解决方案,此项目后台Web管理开源，整套方案提供绿色安装包.

特点：

**极简Web免插件rtmp/rtsp/webrtc播放(二行代码)， Web低延时在线 直接推流rtmp/rtsp/webrtc。**

**极简Web自建视频会议，私有云，视频交互项目，绿色启动，webrtc/rtsp/rtmp 一键参会，一链分享接入。**

**智能分发播放，如拉rtsp播放，多个终端同时会只拉路rtsp再分发到终端，减少多路采拉rtsp。**

**自动智能音频转码，播放自动转码到浏览器识别的，web推流rtmp自动转码为H264,AAC为大众平台兼容。**

**Web极低延时200毫秒左右的直播推流和播放，web在线低延时会议直播推流（可定调Web会议在线直播推流）**

Win64测试包：<a href='https://m.ovmeet.com/ovsyunlive.zip'>https://m.ovmeet.com/ovsyunlive.zip</a><br />
Linux测试包：<a href='https://m.ovmeet.com/ovsyunlive11-linux.zip'>https://m.ovmeet.com/ovsyunlive11-linux.zip</a><br />
双击运行，start.bat  停止：stop.bat  商用版支持Windows,Linux系统<br />
服务程序在公网上，要配ovmedia.ini的exthost=公网IP.(内网也可以配内网IP重启)<br />
<br />
解决：1，多屏监控和兼容问题，2，不同编码web集成问题（h265,h264）。3, 多协议兼容，sip会议，gb监控，rtsp,rtmp集中统一 4，多功能融合调度问题。5，多屏录存问题<br />
LiveMeet-GB28181/SIP/MCU/SFU融合会议测试包：http://m.ovmeet.com/ovsyunlive11.zip<br />
1.启动会议地址:https://127.0.0.1:9903<br />
演示融合会议:https://m.ovmeet.com:9903<br />
演示一键会议:https://m.ovmeet.com:7777<br />
<br />
视频会议，媒体中心，指挥调度功能（其它视频互动商用产品）：
<br />
多协议rtmp/rtsp/webrtc/sip/融合 多屏多硬件HDMI/AV/USB/TYPE-C接入
<br />
MCU+SFU媒体中心(流媒体内核)演示：https://v.ovmeet.com:9902/index.html
<br />
MCU-SIP(VOIP)演示：https://w.ovmeet.com:9301/login.html

2.超低延播放器代码集成：网页代码接入，两行代码接入,参考play/demo.html代码，网页嵌入ovplayer.min.js，指定ovsyunlive服务器地址，播放rtsp/rtmp流。<br />
//ovsyunlive运行的服务地址 <br />
var srvurl="http://localhost:7701";<br />
this.ovplayer = new OvPlayer("video",srvurl);<br />
//要播放的rtsp/rtmp视频地址<br />
ovplayer.connect("rtsp://196.21.92.82/axis-media/media.amp"); <br />
<br />
3、Flv低延时播放器,全平台,支持H265,易集成，在线测试：
<br />
http://m.ovmeet.com:8082/ovplayerflv/ （要授权）
<br />
Web在线rtmp/rtsp推流测试：
<br />
https://IP:7702/pub/index.html
<br />
Web播放rtmp/rtsp/webrtc/ovplayw：
<br />
http://IP:7701/play/index.html
<br />
链接播放rtsp/rtmp:
<br />
http://IP:7701/play/play.html?rtsp://admin:xxx@192.168.1.105/live0.264
<br />
<br />
7、其它推流播放测试：
<br />
推流地址：rtmp://IP:1937/live/test001
<br />
Web播放地址：http://IP:7701/play/index.html
<br />
rtmp播流地址：rtmp://IP:1937/live/test001
<br />
rtsp播流地址：rtsp://IP:7554/live/test001
<br />
webrtc播流地址：webrtc://IP:7701/live/test001
<br />
flv播放地址: http://IP:7701/live/流id.flv
<br />
srt播放地址：srt://IP:7900?streamid=#!::h=live/12345,m=request
<br />
ws-flv播放地址: ws://IP:7701/live/流id.flv
<br /><br />
8、管理平台http://IP:8800/ 用户:admin 密码:123456
<br />
 拉流列表，添加拉流（支持rtmp,rtsp,监控摄像头） 目标本地地址：rtmp://127.0.0.1:1937/live/流id(随机生成，或自已填写) 
<br />
 播放列表，查看流列表在线状态和在线直接播放
<br /><br />
9，视频会议测试
<br />
支持Webrtc,rtsp,rtmp,直播用户参会
<br />
支持远程电子白板,文档共享
<br />
支持视频录存,视频直播
<br />
支持全平台（pc,android,ios）
<br />
一键开会，会议测试地址:https://IP:7777
<br />
注意：需要浏览器支持Webrtc,建议Chrome浏览器
<br />
测试为演示版，不定时调整更新，商用需要授权，支持Windows,Linux系统，有需要可以联系 QQ:1410919373 QQ群:216403866
<br />
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/QQ图片20231106153916.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/QQ图片20220511161931.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519124506.png" /></p>
<br />
会议一键登录api: https://IP:7777/join?room=test1111&password=0&name=vimeet001&audio=1&video=1&screen=0&notify=0
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120755.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120849.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120935.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190424172015.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120437.png" /></p>









