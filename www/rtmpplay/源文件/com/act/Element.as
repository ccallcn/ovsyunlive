package com.act {
	import flash.display.Sprite;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
	import flash.filters.GlowFilter;
	public class Element {

		public static function straightLine(w: int = 0, c: uint = 0xFFFFFF): Sprite {
			var z: Sprite = new Sprite();
			z.graphics.lineStyle(1, c);
			z.graphics.moveTo(0, 0);
			z.graphics.lineTo(w, 0);
			return z;
		}
		public static function getTitle(color: String, face: String, size: int, text: String, wd: int = 0): TextField {
			var title: TextField = new TextField();
			var filter: Array = [new GlowFilter(0x000000, 1.0, 2.0, 2.0, 10, 1, false, false)];
			title.htmlText = "<font color='" + color + "' face='" + face + "' size='" + size + "'>" + text + "</font>";
			title.autoSize = TextFieldAutoSize.LEFT;
			title.selectable = false;
			title.alwaysShowSelection = true;
			if (wd > 0) {
				title.width = wd;
				title.wordWrap = true;
			}
			title.filters = filter;
			return title;
		}
	}

}