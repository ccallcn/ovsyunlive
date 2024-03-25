﻿# ovsyunlive
这是一套网页直播,监控,视频会议,视频对讲,Web视频推流,Web免插件极速rtsp/rtmp播放，电子游戏直播，桌面远程控制，游戏远控，支持H5监控直播，微信直播会议，RTSP、RTMP网页低延时播放，支持srt,Webrtc,http-flv,ws-flv,Pc可以不用flash,全套低延时,针对硬件游戏机远控推流做了低延时的转码和转发,能在线H5互动游戏,web监控,低延时解决方案,此项目后台Web管理开源，整套方案提供绿色安装包.

特点：

**极简Web免插件rtmp/rtsp/webrtc播放(二行代码)， Web低延时在线 直接推流rtmp/rtsp/webrtc。**

**极简Web自建视频会议，私有云，视频交互项目，绿色启动，webrtc/rtsp/rtmp 一键参会，一链分享接入。**

**智能分发播放，如拉rtsp播放，多个终端同时会只拉路rtsp再分发到终端，减少多路采拉rtsp。**

**自动智能音频转码，播放自动转码到浏览器识别的，web推流rtmp自动转码为H264,AAC为大众平台兼容。**

**Web极低延时200毫秒左右的直播推流和播放，web在线低延时会议直播推流（可定调Web会议在线直播推流）**

1、github上面国内下载不稳定，这里提供国内绿色下载包，Windows上解压

播放webrtc/rtsp/rtmp演示介绍：http://m.ovmeet.com:7701/play/index.html

国内下载： http://m.ovmeet.com/ovsyunlive.zip

在线推流演示：https://m.ovmeet.com:7702/pub/index.html

链接播放：http://m.ovmeet.com:7701/play/play.html?rtsp://admin:xxx@192.168.1.105/live0.264

视频会议测试：https://m.ovmeet.com:7777

2、视频会议，媒体中心，指挥调度功能（其它视频互动商用产品）：

多协议rtmp/rtsp/webrtc/sip/融合 多屏多硬件HDMI/AV/USB/TYPE-C接入

MCU+SFU媒体中心(流媒体内核)演示：https://v.ovmeet.com:9902/index.html

MCU-SIP(VOIP)演示：https://w.ovmeet.com:9301/login.html

3、Flv低延时播放器,全平台,支持H265,易集成，在线测试：

http://m.ovmeet.com:8082/ovplayerflv/ （要授权）

4、直播测试前修改ovsyunmedia.ini里面的exthost为你安装机子上的IP（内网用内网IP,公网要用公网IP）

5、双击运行，start.bat  停止：stop.bat  商用版支持Windows,Linux系统

Web在线rtmp/rtsp推流测试：

https://IP:7702/pub/index.html

Web播放rtmp/rtsp/webrtc/ovplayw：

http://IP:7701/play/index.html

链接播放rtsp/rtmp:

http://IP:7701/play/play.html?rtsp://admin:xxx@192.168.1.105/live0.264

网页代码接入，两行代码接入详见目录/www/play/demo.html：

//引入库

<script src="ovplayer.min.js" ></script>

//"video"是Html5标准video控制，后面是程序安装的服务器地址

this.ovplayer = new OvPlayer("video", window.location.protocol+"//"+window.location.hostname+port);

//rtsp视频地址

ovplayer.connect("rtsp://196.21.92.82/axis-media/media.amp"); 

7、其它推流播放测试：

推流地址：rtmp://IP:1937/live/test001

Web播放地址：http://IP:7701/play/index.html

rtmp播流地址：rtmp://IP:1937/live/test001

rtsp播流地址：rtsp://IP:7554/live/test001

webrtc播流地址：webrtc://IP:7701/live/test001

flv播放地址: http://IP:7701/live/流id.flv

srt播放地址：srt://IP:7900?streamid=#!::h=live/12345,m=request

ws-flv播放地址: ws://IP:7701/live/流id.flv

8、管理平台http://IP:8800/ 用户:admin 密码:123456

 拉流列表，添加拉流（支持rtmp,rtsp,监控摄像头） 目标本地地址：rtmp://127.0.0.1:1937/live/流id(随机生成，或自已填写) 

 播放列表，查看流列表在线状态和在线直接播放

9，视频会议测试

支持Webrtc,rtsp,rtmp,直播用户参会

支持远程电子白板,文档共享

支持视频录存,视频直播

支持全平台（pc,android,ios）

一键开会，会议测试地址:https://IP:7777

注意：需要浏览器支持Webrtc,建议Chrome浏览器

测试为演示版，不定时调整更新，商用需要授权，支持Windows,Linux系统，有需要可以联系 QQ:1410919373 QQ群:216403866

<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/QQ图片20231106153916.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/QQ图片20220511161931.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519124506.png" /></p>

会议一键登录api: https://IP:7777/join?room=test1111&password=0&name=vimeet001&audio=1&video=1&screen=0&notify=0

    | 参数        | 类型           | 说明              |
    | ---------- | ----------- | --------------- |
    | room       | string         | 房间ID   |
    | password | string/boolean | 房间密码  |
    | name       | string         | 用户名      |
    | audio       | boolean     | 打开音频    |
    | video       | boolean      |  打开视频    |
    | screen      | boolean      | 打开桌面分享   |
    | notify       | boolean      | 消息提示 |


<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120755.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120849.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120935.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190424172015.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120437.png" /></p>









