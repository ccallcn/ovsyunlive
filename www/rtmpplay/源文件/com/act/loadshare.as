package com.act {
	/*
		文件名称：ckplayer加载xml文件的类
		作用：加载指定的xml文件并返回对象，是用来做精彩视频推荐使用的
		版本：1.0
		制作：捻灯
		开始时间：2014-3-26
	*/
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.net.URLVariables;
	import flash.net.URLRequestMethod;
	public class loadshare {
		private var f:Function;//加载成功或失败都返回该函数
		private var l:URLLoader=null;
		public function loadshare(m:String,c:Function):void {
			f=c;
			l=new URLLoader();
			l.load(new URLRequest(m));
			l.addEventListener(Event.COMPLETE,com);
			l.addEventListener(IOErrorEvent.IO_ERROR,err);
		}
		private function remove():void{
			l.removeEventListener(Event.COMPLETE, com);
			l.removeEventListener(IOErrorEvent.IO_ERROR, err);
		}
		private function com(event:Event):void{
			var xml:XML=new XML(event.currentTarget.data);
			if(xml){
				analysis(xml);
			}
			else{
				f(null,false);
			}
			remove();
		}
		private function analysis(xml:XML):void{
			var obj:Object={};
			var r:XMLList = xml.children();
			var r2:XMLList=xml.share_button.children();
			var m:String="";
			var a:Array=[];
			//trace(r);
			for each(var k in r){
				m=k.name();
				obj[m]=k;
				if(m=="share_button"){
					obj[m]=[];
					for each(var k2 in r2){
						a=[k2.id,k2.img,k2.coordinate]
						obj[m].push(a);
					}
				}
			}
			
			f(obj);
		}
		private function err(event:IOErrorEvent) {
    		f({},false);
			remove();
		}
		
	}
	
}
