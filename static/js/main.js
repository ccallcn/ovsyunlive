     
var connected=false;
      var lc = null;
      var tools;
      var strokeWidths;
      var colors;

      var setCurrentByName;
      var findByName;
				var fileurl ="";	
					var pdfDoc = null,
					    pageNum = 1,
					    pageRendering = false,
					    pageNumPending = null,
					    scale = 1.6,
						 canvas ={},
						ctx =  {};

								var Num = "";
								for(var i = 0; i < 6; i++) {
									Num += Math.floor(Math.random() * 10);
								}
							var r_id = '2234'; //房间ID
							var r_desc = '2234'; //房间ID
						
							var user_name = 'User'  + Num; //用户ID
							var pass_word = '1111'; //密码
							var nick_name = user_name + "-Test";
							var level = 0; //0管理员　１客户
							var videoscale = 1; //横向比 0: 4/3 1: 16/9 

							var mobile = 0; //0 PC　１手机
							var state = 0; //0空闲　1,审请讲话　2,开始讲话
							var pid = "554"; //区域id
							var piddesc = "554"; //区域id
							var vod = ""; //是否录制 录制文件名 
							
 
							
		var socket = new WsClient('wss://localhost:9302/',user_name,nick_name,pass_word,r_id,level);
		socket.connect();
				var  mserver="m.ovmeet.com:9303"
                socket_welcome=function (msg)
                {
					 document.getElementById('content').contentWindow.showMainValue(mserver,r_id,user_name,nick_name,640,360);
				}
                socket_online_list=function(ns){
				
				}
                //查询topList列表
                socket_gettopList=function (data)
                { 
																	if(data){
																 
																		data.forEach(function(v){
																			var d = $.parseJSON(v);
																				//draw_message(d);
																		});
																	} 											
 
                };
                socket_disconnect=function (json)
                { 
 
                };
        var shapeSave = function(data) {
			//console.log("logvvvvvv->"+ data.shape );
			// vv=LiterallyCanvas.getSnapshot();
		    console.log("log->",LC.shapeToJSON(data.shape)); 

			if (socket) { 
				sendmsg=LC.shapeToJSON(data.shape); 
				sendmsg.eventname="shapeSave";
				sendmsg.type="draw_message";
				socket.send(sendmsg); 

				// socket.emit('draw_message','shapeSave', JSON.stringify(sendmsg)); 
			    //socket.emit('draw_message','shapeSave', sendmsg);  
			}
        }


 