﻿# ovsyunlive
这是一套网页直播,监控,视频会议,视频对讲,Web视频推流,Web免插件极速rtsp/rtmp播放，电子游戏直播，桌面远程控制，游戏远控，支持H5监控直播，微信直播会议，RTSP、RTMP网页低延时播放，支持srt,Webrtc,http-flv,ws-flv,Pc可以不用flash,全套低延时,针对硬件游戏机远控推流做了低延时的转码和转发,能在线H5互动游戏,web监控,低延时解决方案,此项目后台Web管理开源，整套方案提供绿色安装包.

特点：

**极简Web免插件rtmp/rtsp/webrtc播放(二行代码)， Web低延时在线 直接推流rtmp/rtsp/webrtc。**

**极简Web自建视频会议，私有云，视频交互项目，绿色启动，webrtc/rtsp/rtmp 一键参会，一链分享接入。**

**智能分发播放，如拉rtsp播放，多个终端同时会只拉路rtsp再分发到终端，减少多路采拉rtsp。**

**自动智能音频转码，播放自动转码到浏览器识别的，web推流rtmp自动转码为H264,AAC为大众平台兼容。**

**Web极低延时200毫秒左右的直播推流和播放，web在线低延时会议直播推流（可定调Web会议在线直播推流）**

演示下载:https://m.ovmeet.com:7702/play/<br />
Win64测试包：<a href='https://m.ovmeet.com/ovsyunlive13-windows.zip'>https://m.ovmeet.com/ovsyunlive13-windows.zip</a><br />
Linux-debian12测试包：<a href='https://m.ovmeet.com/ovsyunlive13-linux.zip'>https://m.ovmeet.com/ovsyunlive13-linux.zip</a><br />
双击运行，start.bat  停止：stop.bat  商用版支持Windows,Linux,Arm-Linux,MAC,Android系统可以定制指定设备<br />
公网服务程序配IP，要配ovmediamcu.ini的public_ip=公网IP.(内网也可以配内网IP重启)<br />
<br />
支持：低延时极简部署支持街机游戏直播分布式集群,前置节点与视频源服务节点分离,自建平台
<br />
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/20251021163335.png" /></p>
1.直播推流测试：
<br />
推流地址：[whip://IP:7703/whip//live/test001](http://IP:7703/whip/?app=live&stream=test001)
<br />
Web播放地址：whep://IP:7703/whep/?app=live&stream=test001
<br />
rtsp播流地址：rtsp://IP:7754/live/test001
<br />
webrtc播流地址：webrtc://IP:7703/live/test001
<br />
<br />
2.超低延播放器代码集成：网页代码接入，两行代码接入,参考play/demo-autoplay.html代码，网页嵌入ovplayer.js，指定ovsyunlive服务器地址，播放rtsp/rtmp流。<br />
//ovsyunlive运行的服务地址 <br />
    var player = new OvPlayer('#video', {server: 'http://' + location.hostname + ':7703', password: '', muted: true,});<br />
    // ② 播放：随便哪种地址<br />
    player.play('rtsp://192.168.1.64:554/Streaming/Channels/101');<br />
    // player.play('whep://192.168.0.13:7703/live/cam1');<br />
    // player.play('http://192.168.0.13:7703/whep/?app=live&stream=cam1');<br />
    // player.playDesktop(); 主机主屏<br />
    // player.playCamera();　主机摄像头<br />
    // ③ 停止（会通知 MCU 结束观看会话，回收转发资源）<br />
    // player.stop(); <br />
<br />
3、Flv低延时播放器,全平台,支持H265,易集成，在线测试：
<br />
Web在线rtmp/rtsp推流测试：
<br />
https://m.ovmeet.com:7702/pub/index.html
<br />
Web播放rtmp/rtsp/webrtc/ovplayw：
<br />
http://m.ovmeet.com:7701/play/index.html
<br />
链接播放rtsp/rtmp:
<br />
http://m.ovmeet.com:7701/play/play.html?rtsp://admin:xxx@192.168.1.105/live0.264
<br />
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/ovsyunlive13-desk.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/ovsyunlive13-rtsp.png" /></p>
<br />
会议解决：1，多屏监控和兼容问题，2，不同编码web集成问题（h265,h264）。3, 多协议兼容，sip会议，gb监控，rtsp,rtmp集中统一 4，多功能融合调度问题。5，多屏录存问题<br /> 
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/QQ截图20260920081055.png" /></p>
有业务需求可以联系 QQ:1410919373 QQ群:216403866
演示融合会议:https://m.ovmeet.com:9903<br />
演示一键会议:https://m.ovmeet.com:7777<br />
演示播放器:https://m.ovmeet.com:7702/play/<br />
<br />
视频会议，媒体中心，指挥调度功能（其它视频互动商用产品）：
<br />
多协议rtmp/rtsp/webrtc/sip/融合 多屏多硬件HDMI/AV/USB/TYPE-C接入
<br />
MCU+SFU媒体中心(流媒体内核)演示：https://v.ovmeet.com:9902/index.html
<br />
MCU-SIP(VOIP)演示：https://w.ovmeet.com:9301/login.html
<br />
<br />
2，视频会议测试
<br />
支持Webrtc,rtsp,rtmp,直播用户参会
<br />
支持远程电子白板,文档共享
<br />
支持视频录存,视频直播
<br />
支持全平台（pc,android,ios）
<br />
一键开会，会议测试地址:https://m.ovmeet.com:7777
<br />
注意：需要浏览器支持Webrtc,建议Chrome浏览器
<br />
测试为演示版，不定时调整更新，商用需要授权，支持Windows,Linux系统，有需要可以联系 QQ:1410919373 QQ群:216403866
<br />
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/QQ图片20231106153916.png" /></p>

<br />
会议一键登录api: https://IP:7777/join?room=test1111&password=0&name=vimeet001&audio=1&video=1&screen=0&notify=0
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/ovsyunlive13-pan.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/ovsyunlive13-list.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120935.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190424172015.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/ovsyunlive13-pull.png" /></p>









