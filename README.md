﻿# ovsyunlive
这是一套网页直播,监控,视频会议,视频对讲,Web视频推流,Web免插件极速rtsp/rtmp播放，电子游戏直播，桌面远程控制，游戏远控，支持H5监控直播，微信直播会议，RTSP、RTMP网页低延时播放，支持srt,Webrtc,http-flv,ws-flv,Pc可以不用flash,全套低延时,针对硬件游戏机远控推流做了低延时的转码和转发,能在线H5互动游戏,web监控,低延时解决方案,此项目后台Web管理开源，整套方案提供绿色安装包.

特点：

**极简Web免插件rtmp/rtsp/webrtc播放(二行代码)， Web低延时在线 直接推流rtmp/rtsp/webrtc。**

**极简Web自建视频会议，私有云，视频交互项目，绿色启动，webrtc/rtsp/rtmp 一键参会，一链分享接入。**

**智能分发播放，如拉rtsp播放，多个终端同时会只拉路rtsp再分发到终端，减少多路采拉rtsp。**

**自动智能音频转码，播放自动转码到浏览器识别的，web推流rtmp自动转码为H264,AAC为大众平台兼容。**

**Web极低延时200毫秒左右的直播推流和播放，web在线低延时会议直播推流（可定调Web会议在线直播推流）**

演示下载:https://m.ovmeet.com:7702/play/<br />
        Win64测试包：<a href='http://m.ovmeet.com/ovsyunlive13-windows.zip'>http://m.ovmeet.com/ovsyunlive13-windows.zip</a><br />
        Linux测试包：<a href='http://m.ovmeet.com/ovsyunlive13-linux.zip'>http://m.ovmeet.com/ovsyunlive13-linux.zip</a><br />
        Windows系统，1.解压  2.配ovmeetmcu.ini上IP  3.运行 双击start.bat  4.停止：stop.bat <br />
        Linux系统，  1.解压  2.配ovmeetmcu.ini上IP  3.授权 chmod -R 777 ./ovsyunlive/*  4.运行 ./start.sh  5.停止：./stop.sh <br />
        服务程序配IP，要配ovmeetmcu.ini的public_ip =公网IP.(内网也可以配内网IP重启)<br />
        github地址:<a href='https://github.com/ccallcn/ovsyunlive'>https://github.com/ccallcn/ovsyunlive</a><br />
			<br />
1，全面支持取win/linux/arm/android设备摄像头麦克风，支持取桌面+外放音频，<br />
rtsp播放，桌面分享web打开，超低100毫秒延时<br />
演示地址：<a href='./demo.html'>http://m.ovmeet.com/play/demo.html</a><br />
<p><img src="./ovsyunlive13-desk.png" alt="dvr" width="640" height="360" style="text-align:center;"></p><br />
2.超低延播放器代码集成：详见sdk文档和播放demo代码，网页嵌入ovplayer.js，指定ovsyunlive服务器地址，播放rtsp/rtmp流。<br />
    var player = new OvPlayer('#video', {server: 'http://' + location.hostname + ':7703', password: '', muted: true,});<br />
    // 播放：随便哪种地址 rtsp,rtmp,whep,webrtc,ovplayw,桌面和摄像头<br />
    player.play('rtsp://192.168.1.64:554/Streaming/Channels/101');<br />
    // player.play('whep://192.168.0.13:7703/live/cam1');<br />
    // player.play('http://192.168.0.13:7703/whep/?app=live&stream=cam1');<br />
    // player.playDesktop(); 主机主屏<br />
    // player.playCamera();　主机摄像头<br />
    // 停止 <br />
    // player.stop(); <br />
			<br />
3.whip/rtsp推流测试：<br />
          whip推流地址: http://IP:7703/whip/?app=live&stream=2222<br />
          rtsp推流地址: http://IP:7554/live/2222<br />
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









