package com.act {
	import flash.events.MouseEvent;
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.geom.Point;
	import flash.display.Sprite;
	import flash.display.Stage;

	public class adjustment extends Sprite {
		private var fun:Function=null;
		private var mxy:Point = null;
		private var m:int=0;
		private var M:MovieClip=null;
		private var mw:int=84;//参考宽，拖动条的宽-按钮的宽
		private var sta:Object={},stk:Object={};
		private var isDown:Boolean=false;//是否按下状态
		private var isOver:Boolean=false;
		private var nn:Number=0,nx:Number=0;
		public function adjustment(s:Object,k:Object,c:MovieClip,f:Function=null,min:Number=0,mix:Number=0):void {
			fun=f;
			M=c;
			M.spe.visible=false;
			sta=s;
			stk=k;
			nn=min;
			nx=mix;
			M.M_p.addEventListener(MouseEvent.MOUSE_OVER,M_Over);
			M.M_g.addEventListener(MouseEvent.MOUSE_DOWN, M_Down);
			M.M_m.addEventListener(MouseEvent.MOUSE_DOWN, M_Down);
		}
		private function M_Over(event:MouseEvent):void{
			M.spe.visible=true;
			isOver=true;
			M.M_p.addEventListener(MouseEvent.MOUSE_DOWN, M_Down);
			M.M_p.addEventListener(MouseEvent.MOUSE_OUT, M_Out);
		}
		private function M_Out(event:MouseEvent):void{
			isOver=false;
			M.M_p.removeEventListener(MouseEvent.MOUSE_UP, M_Out);
			M.M_p.removeEventListener(MouseEvent.MOUSE_DOWN, M_Down);
			M.M_p.addEventListener(MouseEvent.MOUSE_OVER,M_Over);
			if(!isDown){
				M.spe.visible=false;
			}
		}
		private function M_Down(event:MouseEvent):void{
			switch(event.currentTarget){
				case M.M_p:
					isDown=true;
				//trace("event.localX, event.localY",event.localX, event.localY);
					mxy = new Point(event.localX, event.localY); //获取新坐标点
					M.M_p.removeEventListener(MouseEvent.MOUSE_UP, M_Out);
					stk.addEventListener(MouseEvent.MOUSE_UP, M_Up);
					M.M_p.removeEventListener(MouseEvent.MOUSE_DOWN, M_Down);
					M.M_p.addEventListener(Event.ENTER_FRAME, M_Frame);
					break;
				case M.M_g:
				case M.M_m:
					M.M_p.x=M.mouseX-M.M_p.width*0.5;
					Calculate();
					break;
				default:
					break;
			}
			
			
		}
		private function M_Frame(event:Event):void{
			if (mxy != null) {
				trace(mxy,M.mouseX, mxy.x,M.x)
				M.M_p.x = M.mouseX - mxy.x;
				M.M_p.y=-3;
				Calculate();
			}
		}
		private function Calculate():void{
			if (M.M_p.x < 0) {
				M.M_p.x = 0;
			}
			if (M.M_p.x > mw) {
				M.M_p.x = mw;
			}
			M.spe.x=M.M_p.x-10;
			M.M_mask.width=M.M_p.x+1;
			var e:Number=M.M_p.x*(nx-nn)/mw;
			var d:int=M.M_p.x*100/mw;
			if(fun!=null && m!=d){
				m=d;
				M.spe.per.text=m+"%";
				if(nn<0){
					e+=nn;
				}
				fun(e);
			}
		}
		private function M_Up(event: MouseEvent) {
			mxy = null;
			isDown=false;
			if(!isOver){
				M.spe.visible=false;
			}
			M.M_p.removeEventListener(Event.ENTER_FRAME, M_Frame);
			stk.removeEventListener(MouseEvent.MOUSE_UP, M_Up);
			M.M_p.addEventListener(MouseEvent.MOUSE_DOWN, M_Down);
		}
		public function Reset():void{
			M.M_p.x = M.M_g.x+(M.M_g.width-M.M_p.width)*0.5;
			Calculate();
		}
	}
	
}
