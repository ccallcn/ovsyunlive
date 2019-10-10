package com.act {
	import flash.display.Loader;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.net.URLRequest;
	import flash.display.LoaderInfo;
	import flash.utils.ByteArray;
	import flash.display.Bitmap;
	import flash.net.URLLoader;
	import flash.display.BitmapData;
	import flash.geom.Rectangle;
	import flash.geom.Point;
	import flash.display.MovieClip;

	public class loadImg {
		private var _l: Loader = null;
		private var _imgArr: Array = [];
		private var error: Function = null,
			com: Function = null;
		private var _imageI: int = 0; //加载图片时计数，一张一张图片加载
		private var bytemapArr: Array = [];


		public function loadImg(img: Array, e: Function, k: Function) {
			// constructor code
			error = e, com = k;
			_imgArr = img;
			loadimage();
		}
		private function loadimage(): void {
			_l = new Loader();
			_l.contentLoaderInfo.addEventListener(Event.COMPLETE, comLoad);
			_l.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR, errorLoad); //监听加载失败
			_l.load(new URLRequest(_imgArr[_imageI]));
		}
		private function comLoad(event: Event): void {
			var o: LoaderInfo = _l.contentLoaderInfo;
			var bitmapdata: BitmapData
			var bytearr: ByteArray = new ByteArray();
			var bytemap: Bitmap = new Bitmap();
			bitmapdata = new BitmapData(o.width, o.height);
			bitmapdata.draw(_l);
			var temp: ByteArray = bitmapdata.getPixels(bitmapdata.rect);
			bytearr.writeBytes(temp);

			var bitmapdata2: BitmapData = new BitmapData(o.width, o.height);
			bytearr.position = 0;
			bitmapdata2.setPixels(bitmapdata.rect, bytearr);
			//bytemap.bitmapData = bitmapdata2;
			bytemapArr.push(bitmapdata2);
			//com(bytemap);
			remove();
			if (_imageI < _imgArr.length - 1) {
				_imageI++;
				loadimage();
			}
			else {
				rectAngle(); //全部加载完进行切图
			}

		}
		private function rectAngle(): void {
			var mov:MovieClip=new MovieClip();
			var nx: int = 0; //新的X坐标
			for (var i: int = 0; i < bytemapArr.length; i++) {
				var bm: BitmapData = bytemapArr[i];
				var bx: int = 0,
					by: int = 0; //定义要切的x,y
				for (var y: int = 0; y < 100; y++) {
					var picRect:Rectangle = new Rectangle(bx, by, 128, 72); //从哪里开始扣，扣多少？  
					var point:Point = new Point(0, 0); //将抠图放在newBitmapdata的那个位置  
					var newBitmapdata: BitmapData = new BitmapData(128, 72);
					newBitmapdata.copyPixels(bm, picRect, point);
					var newmap: Bitmap = new Bitmap();
					newmap.bitmapData=newBitmapdata;
					newmap.x=nx;
					mov.addChild(newmap);
					nx+=128;
					bx+=128;
					if(bx>=bm.width){
						bx=0;
						by+=72;
					}
					
				}

			}
			com(mov);
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