﻿# ovsyunlive
这是一套网页直播,监控,视频会议,视频对讲,Web视频推流,教学直播,录像一体化系统,支持H5监控直播，微信直播会议，RTSP、RTMP网页低延时播放，超低延时，监控直播,支持Webrtc,http-flv,ws-flv,Pc可以不用flash,全套低延时,针对H5在线抓娃娃,在线H5互动游戏,web监控,低延时解决方案,此项目后台Web管理开源，整套方案提供绿色安装包.

视频会议演示：https://m.ovmeet.com:7777/login.html
注意：需要浏览器支持Webrtc,建议Chrome浏览器
新绿色版直接git下载 https://github.com/ccallcn/ovsyunlive/archive/8.09.zip

H5，Webrtc推流，Webrtc直播，Webrtc播放 ，RTSP低延时直播测试：

1、下载上面的github上面的绿色zip包，Windows上解压

2、修改ovsyunmedia.ini里面的exthost为你安装机子上的IP

3、双击运行，start.bat    商用支持Windows,Linux系统

4、网页打开http://127.0.0.1:8800/ 用户：admin 密码：123456

5、推流列表，添加拉流（支持rtmp,rtsp,监控摄像头） 目标本地地址：rtmp://127.0.0.1:1937/live/流id  

6、播放列表，查看流列表在线状态和在线直接播放

7、也可以直接用推流工具推流：rtmp://127.0.0.1:1937/live/流id

8、Webrtc会议，Webrtc推流 测试地址:https://IP:7777/login.html

rtmp播放：rtmp://127.0.0.1:1937/live/流id

flv播放: http://IP:8801/live/流id.flv

ws-flv播放: ws://IP:8801/live/流id.flv

H5超低延时播放: ovplayw://IP:8802/live/流id

这个是演示版，商用支持Windows,Linux系统，有需要可以联系 QQ:1410919373 QQ群:216403866

<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120437.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190424172015.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519124506.jpg" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120935.png" /></p>

1、支持Webrtc视频会议,Web视频推流,Web视频对讲,rtsp监控,rtmp,H5低延时直播。

2、支持Web直播推流，网页RTMP推流，webrtc推流，网页RTMP,RTSP播放

3、支持rtsp,rtmp,ws流互转直播,hls转rtmp。

4、支持全平台H5网页（IOS,android,PC）低延时直播，可以到1秒内，最快0.2秒。 

5、支持IOS，微信自动直播播放。 

6、支持 微信内嵌入页技术，可以不全屏播放。 

7、支持rtmp的cdn云转发。

8、支持本地，云服务器多重部署（如本地监控可以本地部署一套拉流rtsp拉转推rtmp远程云，云服务器部署一套接收）。

9、支持RTMP,RTSP推流,WebRTC直播,延时可以低至0.2秒

10、视频会议功能

支持Webrtc,rtsp,rtmp,直播用户参会

支持远程电子白板,文档共享

支持视频录存,视频直播

视频会议演示：https://m.ovmeet.com:7777/login.html

11、ovplayw播放器地址 http://127.0.0.1:8800/ovplayw/ 配置播放

支持全平台（pc,android,ios）

多线程多通道，播放延时更低

Web同屏可以高达16通道同时在线播放

直播延时低于1秒

智能化丢帧处理，完善解决累积延迟问题。

支持ios自动播和手动控制全屏

ovplayw是针对本系统做了完整优化，可多核解码，配套系统整体优于下面的Flv播放器。

如需要低延时Flv播放器咨询QQ:1410919373 和本系统无关，需要单独授权。

12、Flv播放器（这个要单独授权，和系统无关） http://m.ovmeet.com:8082/ovflv/ 配置播放

支持全平台（pc,android,ios）

支持http-flv和websocket-flv协议

多线程多通道，播放延时更低

直播延时低于1秒

支持ios自动播和手动控制全屏

停止： 1、运行，stop.bat

注意： 1、运行路径和流ID不要带中文字符

<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120755.png" /></p>
<p align="center"><img src="https://github.com/ccallcn/ovsyunlive/raw/master/TIM截图20190519120849.png" /></p>

5分钟Web推流，桌面共享，会议测试,支持Webrtc,rtsp,rtmp参会

1，下载上面的github上面的绿色zip包，Windows上解压

2，修改ovsyunmedia.ini里面的exthost为你安装机子上的IP

3，双击start.bat 启动     stop.bat 停止

4，Web测试地址:https://IP:7777/login.html, 帐号随机登录就用，稍懂html也可以login.html自已调调




