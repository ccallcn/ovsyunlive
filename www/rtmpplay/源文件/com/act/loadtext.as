package com.act {
	/*
		文件名称：ckplayer加载文本文件的类
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
	public class loadtext {
		private var f:Function;//加载成功或失败都返回该函数
		private var l:URLLoader=null;
		public function loadtext(m:String,c:Function):void {
			f=c;
			l=new URLLoader();
			l.load(new URLRequest(m));
			l.addEventListener(Event.COMPLETE,com);
			l.addEventListener(IOErrorEvent.IO_ERROR,err);
		}
		private function remove():void{
			l.removeEventListener(Event.COMPLETE, com);
			l.removeEventListener(IOErrorEvent.IO_ERROR, err);
			l=null;
		}
		private function com(event:Event):void{
			f(event.currentTarget.data);
			remove();
		}
		private function err(event:IOErrorEvent) {
    		f(null);
			remove();
		}
		
	}
	
}
