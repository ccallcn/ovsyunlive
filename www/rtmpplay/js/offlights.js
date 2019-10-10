/*
该文件是从网上收集的方法，用来做开关灯的，相对于原来的程序做了一些改变，兼容了IE10
*/
var Offlights = {
    create: function() {
        return function() {
            this.initialize.apply(this, arguments)
        }
    }
}
var OverLay = Offlights.create();
OverLay.prototype = {
    initialize: function(options) {
        this.SetOptions(options);
		this.browser = (function(ua){
			  var a=new Object();
			  var b = {
				  msie: /msie/.test(ua) && !/opera/.test(ua),
				  opera: /opera/.test(ua),
				  safari: /webkit/.test(ua) && !/chrome/.test(ua),
				  firefox: /firefox/.test(ua),
				  chrome: /chrome/.test(ua)
			  };
			  var vMark = "";
			  for (var i in b) {
				  if (b[i]) { vMark = "safari" == i ? "version" : i; break; }
			  }
			  b.version = vMark && RegExp("(?:" + vMark + ")[\\/: ]([\\d.]+)").test(ua) ? RegExp.$1 : "0";
			  b.ie = b.msie;
			  b.ie6 = b.msie && parseInt(b.version, 10) == 6;
			  b.ie7 = b.msie && parseInt(b.version, 10) == 7;
			  b.ie8 = b.msie && parseInt(b.version, 10) == 8;
			  a.B=vMark;
			  a.V=b.version;
			  return a;
		  })(window.navigator.userAgent.toLowerCase());
		this.isIE = this.browser['B']=='msie' ? true : false;
		this.isIE6 = (this.isIE && this.browser['V']==6)?true:false;
		this._K_ = function(id) {return "string" == typeof id ? document.getElementById(id) : id};
        this.Lay = this._K_(this.options.Lay) || document.body.insertBefore(document.createElement("div"), document.body.childNodes[0]);
        this.Color = this.options.Color;
        this.Opacity = parseInt(this.options.Opacity);
        this.zIndex = parseInt(this.options.zIndex);
        with(this.Lay.style) {
            display = "none";
            zIndex = this.zIndex;
            left = top = 0;
            position = "fixed";
            width = height = "100%"
        }
        if (this.isIE6) {
            this.Lay.style.position = "absolute";
            this._resize = this.Bind(this,
            function() {
                this.Lay.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) + "px";
                this.Lay.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px"
            });
            this.Lay.innerHTML = ''
        }
    },
	Bind:function(object, fun) {
		return function() {
			return fun.apply(object, arguments)
		}
	},
	Extend :function(destination, source) {
		for (var property in source) {
			destination[property] = source[property]
		}
	},
    SetOptions: function(options) {
        this.options = {
            Lay: null,
            Color: "#000",
            Opacity: 100,
            zIndex: 50
        };
        this.Extend(this.options, options || {})
    },
    Show: function() {
        if (this.isIE6) {
            this._resize();
            window.attachEvent("onresize", this._resize)
        }
        with(this.Lay.style) {
            this.isIE ? filter = "alpha(opacity:" + this.Opacity + ")": opacity = this.Opacity / 100;
            backgroundColor = this.Color;
            display = "block"
        }
    },
    Close: function() {
        this.Lay.style.display = "none";
        if (this.isIE6) {
            window.detachEvent("onresize", this._resize)
        }
    }
};
var LightBox = Offlights.create();
LightBox.prototype = {
    initialize: function(options) {
        this.OverLay = new OverLay(options);
    },
    Show: function(options) {
        this.OverLay.Show();
    },
    Close: function() {
        this.OverLay.Close();
    }
};
