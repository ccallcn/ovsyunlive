package com.act {
	import flash.display.Loader;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.net.URLRequest;
	import flash.display.LoaderInfo;
	import flash.display.MovieClip;

	public class loadPic {
		private var _l: Loader = null;
		private var _img:String="";
		private var error: Function = null,
			com: Function = null;


		public function loadPic(img:String, e: Function, k: Function) {
			// constructor code
			error = e, com = k;
			_img = img;
			loadimage();
		}
		private function loadimage(): void {
			_l = new Loader();
			_l.contentLoaderInfo.addEventListener(Event.COMPLETE, comLoad);
			_l.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR, errorLoad); //监听加载失败
			_l.load(new URLRequest(_img));
		}
		private function comLoad(event: Event): void {
			var o: LoaderInfo = _l.contentLoaderInfo;
			var m:MovieClip=new MovieClip();
			m.addChild(_l);
			com(m);
		}
		private function errorLoad(event: IOErrorEvent): void {
			remove();
			error();
		}
		private function remove(): void {
			_l.removeEventListener(Event.COMPLETE, comLoad);
			_l.removeEventListener(IOErrorEvent.IO_ERROR, errorLoad);
			_l = null;
		}
	}

}