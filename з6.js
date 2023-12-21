(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"з6_atlas_1", frames: [[0,0,963,1433],[965,0,963,1433]]},
		{name:"з6_atlas_2", frames: [[878,588,316,411],[1196,588,316,411],[1692,217,102,304],[0,1256,812,586],[814,1256,812,586],[878,0,812,586],[0,0,876,1254],[1514,588,290,282],[1692,0,164,215],[1514,872,228,244]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["з6_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["з6_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["з6_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["з6_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["з6_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["з6_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["з6_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["з6_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["з6_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3853,291);


(lib.голва = function() {
	this.initialize(ss["з6_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.тело1 = function() {
	this.initialize(ss["з6_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.хвост2 = function() {
	this.initialize(ss["з6_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.тело = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.тело1();
	this.instance.setTransform(332.9,0,2.03,1.8824,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.тело, new cjs.Rectangle(0,0,332.9,404.7), null);


(lib.голова = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.голва();
	this.instance.setTransform(278.1,0,0.959,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голова, new cjs.Rectangle(0,0,278.1,282), null);


(lib.Символ10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.хвост2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,228,244), null);


// stage content:
(lib.з6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_11
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(3.2,14.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57));

	// Каркас_1
	this.ikNode_1 = new lib.голова();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(556.2,614.2,1,1,0,0,0,153.2,156.2);

	this.ikNode_2 = new lib.тело();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(543.5,893.3,1,1,0,0,0,166.5,202.3);

	this.ikNode_4 = new lib.Символ10();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(292.05,908.25,1.1639,1.0793,0,0,180,121.4,152.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{scaleX:1.1639,scaleY:1.0793,skewX:0,skewY:180,y:908.25,x:292.05,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:0,y:893.3,x:543.5,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0,x:556.2,y:614.2,regY:156.2,regX:153.2}}]}).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-0.3216,skewY:179.6785,y:909.65,x:292.05,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.3244,y:893.2,x:543.5,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0009,x:556.15,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-0.6457,skewY:179.3539,y:911.1,x:292.25,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.6487,y:893.2,x:543.5,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0026,x:556.15,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1637,scaleY:1.0792,skewX:-0.9698,skewY:179.0301,y:912.5,x:292.35,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.9731,y:893.2,x:543.45,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0044,x:556.15,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-1.2947,skewY:178.7048,y:913.85,x:292.4,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.2975,y:893.25,x:543.45,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0052,x:556.15,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-1.6189,skewY:178.3808,y:915.35,x:292.6,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.622,y:893.2,x:543.4,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.007,x:556.15,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-1.9439,skewY:178.0562,y:916.65,x:292.65,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.9465,y:893.2,x:543.3,regX:166.4,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0087,x:556.15,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-2.2681,skewY:177.7314,y:918.1,x:292.85,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-2.2711,y:893.2,x:543.3,regX:166.4,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0105,x:556.1,y:614.2,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-2.5925,skewY:177.4073,y:919.5,x:292.95,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-2.5957,y:893.2,x:543.4,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0114,x:556.1,y:614.2,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-2.9169,skewY:177.0832,y:920.95,x:293.1,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-2.9196,y:893.2,x:543.4,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0131,x:556.1,y:614.2,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-3.2406,skewY:176.7589,y:922.35,x:293.2,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-3.2444,y:893.2,x:543.4,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0149,x:556.1,y:614.2,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-3.5653,skewY:176.4346,y:923.8,x:293.4,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-3.5685,y:893.2,x:543.35,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0166,x:556.1,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-3.8901,skewY:176.1101,y:925.1,x:293.55,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-3.8935,y:893.2,x:543.35,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0175,x:556.1,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-4.214,skewY:175.7855,y:926.55,x:293.75,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-4.2178,y:893.15,x:543.35,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0192,x:556.1,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-4.5382,skewY:175.4616,y:927.95,x:293.9,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-4.5422,y:893.15,x:543.35,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.021,x:556.1,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-4.8634,skewY:175.1367,y:929.35,x:294.15,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-4.8668,y:893.1,x:543.3,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0227,x:556.1,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-5.187,skewY:174.8131,y:930.6,x:294.35,regY:152.1,regX:121.4}},{t:this.ikNode_2,p:{rotation:-5.1915,y:893.15,x:543.2,regX:166.4,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0236,x:556.1,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-5.5117,skewY:174.4879,y:932.15,x:294.5,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-5.5156,y:893.15,x:543.35,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0254,x:556.1,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-5.8365,skewY:174.1641,y:933.55,x:294.7,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-5.8406,y:893.15,x:543.35,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.028,x:556.1,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-6.1608,skewY:173.8393,y:934.95,x:295,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-6.1651,y:893.1,x:543.35,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:0.0289,x:556.05,y:614.15,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-5.5491,skewY:174.4509,y:932.35,x:295.3,regY:152.2,regX:121.3}},{t:this.ikNode_2,p:{rotation:-5.5533,y:893.15,x:543.85,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-0.0918,x:556.1,y:614.1,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-4.9365,skewY:175.0628,y:929.75,x:295.3,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-4.9414,y:893.15,x:544.45,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-0.2124,x:556.1,y:614.1,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-4.3253,skewY:175.6748,y:927.1,x:295.65,regY:152.2,regX:121.3}},{t:this.ikNode_2,p:{rotation:-4.33,y:893.2,x:545,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-0.3331,x:556.1,y:614.1,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-3.7138,skewY:176.2863,y:924.4,x:295.7,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-3.7183,y:893.2,x:545.6,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-0.4538,x:556.1,y:614.1,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-3.1027,skewY:176.8974,y:921.8,x:296.15,regY:152.2,regX:121.3}},{t:this.ikNode_2,p:{rotation:-3.1069,y:893.25,x:546.15,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-0.5744,x:556.05,y:614.05,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-2.4903,skewY:177.5088,y:919.15,x:296.3,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-2.4951,y:893.25,x:546.75,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-0.6951,x:556.1,y:614.1,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-1.879,skewY:178.1208,y:916.45,x:296.65,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.8844,y:893.4,x:547.35,regX:166.5,regY:202.4}},{t:this.ikNode_1,p:{rotation:-0.8157,x:556.05,y:614.05,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-1.2663,skewY:178.7333,y:913.75,x:297.05,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.2722,y:893.25,x:547.95,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-0.9364,x:556.1,y:614.1,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-0.6554,skewY:179.3449,y:911.1,x:297.55,regY:152.2,regX:121.3}},{t:this.ikNode_2,p:{rotation:-0.661,y:893.4,x:548.55,regX:166.5,regY:202.4}},{t:this.ikNode_1,p:{rotation:-1.0571,x:556.05,y:613.9,regY:156.1,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0791,skewX:-0.0429,skewY:179.9564,y:908.5,x:297.65,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.0498,y:893.25,x:549,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.1786,x:555.9,y:614,regY:156.2,regX:153.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-0.9989,skewY:179.0008,y:908.85,x:298,regY:152.1,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.1801,y:893.4,x:549.2,regX:166.5,regY:202.4}},{t:this.ikNode_1,p:{rotation:-1.2092,x:556.05,y:613.9,regY:156.1,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-1.9544,skewY:178.0456,y:909.55,x:298.15,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.3104,y:893.3,x:549.35,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.2398,x:556.05,y:614.05,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-2.9088,skewY:177.0907,y:910.2,x:298.4,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.4406,y:893.25,x:549.55,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.2704,x:556,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-3.864,skewY:176.1357,y:910.6,x:298.55,regY:152.1,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.5709,y:893.3,x:549.7,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.301,x:556.05,y:613.9,regY:156.1,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-4.8194,skewY:175.1804,y:911.15,x:298.85,regY:152.1,regX:121.3}},{t:this.ikNode_2,p:{rotation:-0.7012,y:893.25,x:549.85,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.3316,x:556.05,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-5.7746,skewY:174.2252,y:911.85,x:298.95,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.8315,y:893.4,x:550,regX:166.5,regY:202.4}},{t:this.ikNode_1,p:{rotation:-1.3622,x:556,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-6.7298,skewY:173.27,y:912.45,x:299.15,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.9617,y:893.25,x:550.1,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.3928,x:556.05,y:614.05,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-7.6851,skewY:172.3143,y:913.05,x:299.35,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.092,y:893.25,x:550.15,regX:166.4,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.4235,x:556.05,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-8.6405,skewY:171.3595,y:913.55,x:299.55,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.2223,y:893.25,x:550.3,regX:166.4,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.4541,x:556,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1637,scaleY:1.0792,skewX:-9.5946,skewY:170.4053,y:914.15,x:299.8,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.3526,y:893.25,x:550.6,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.4847,x:556.05,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-10.55,skewY:169.4494,y:914.6,x:299.95,regY:152.1,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.4829,y:893.35,x:550.75,regX:166.5,regY:202.4}},{t:this.ikNode_1,p:{rotation:-1.5153,x:556.05,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-11.5049,skewY:168.495,y:915.3,x:300.1,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.6141,y:893.2,x:550.9,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.5459,x:556.05,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-12.4606,skewY:167.5387,y:915.9,x:300.4,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.7444,y:893.25,x:550.85,regX:166.4,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.5765,x:556.05,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-13.4155,skewY:166.5838,y:916.4,x:300.7,regY:152.2,regX:121.3}},{t:this.ikNode_2,p:{rotation:-1.8748,y:893.25,x:551,regX:166.4,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.6071,x:556.05,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-14.3705,skewY:165.6285,y:916.95,x:300.7,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-2.0051,y:893.2,x:551.3,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.6377,x:556.05,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-13.1701,skewY:166.83,y:916.55,x:300.65,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.8844,y:893.35,x:551.2,regX:166.5,regY:202.4}},{t:this.ikNode_1,p:{rotation:-1.622,x:556,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-11.9684,skewY:168.0315,y:915.9,x:300.5,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.7628,y:893.25,x:551,regX:166.4,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.6071,x:556.05,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1637,scaleY:1.0792,skewX:-10.7683,skewY:169.2314,y:915.4,x:300.35,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.6421,y:893.2,x:551.1,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.5923,x:556.05,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-9.5674,skewY:170.4328,y:914.75,x:300.25,regY:152.1,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.5214,y:893.35,x:551,regX:166.5,regY:202.4}},{t:this.ikNode_1,p:{rotation:-1.5774,x:556.05,y:614,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-8.3659,skewY:171.6337,y:914.3,x:300.1,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.4007,y:893.3,x:550.9,regX:166.5,regY:202.4}},{t:this.ikNode_1,p:{rotation:-1.5625,x:556,y:613.95,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-7.1648,skewY:172.8347,y:913.7,x:300.15,regY:152.2,regX:121.3}},{t:this.ikNode_2,p:{rotation:-1.28,y:893.2,x:550.7,regX:166.4,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.5476,x:556,y:613.95,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-5.9635,skewY:174.0364,y:913.2,x:299.9,regY:152.1,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.1594,y:893.2,x:550.75,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.5319,x:556.05,y:613.95,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-4.7626,skewY:175.2376,y:912.75,x:299.75,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-1.0378,y:893.2,x:550.55,regX:166.4,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.517,x:556.05,y:613.95,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0791,skewX:-3.5612,skewY:176.4384,y:912.15,x:299.7,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.9172,y:893.15,x:550.6,regX:166.5,regY:202.3}},{t:this.ikNode_1,p:{rotation:-1.5022,x:556,y:613.95,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-2.3605,skewY:177.639,y:911.55,x:299.5,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.7965,y:893.3,x:550.55,regX:166.5,regY:202.4}},{t:this.ikNode_1,p:{rotation:-1.4873,x:556,y:613.95,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0792,skewX:-1.1602,skewY:178.84,y:911.05,x:299.4,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.6758,y:893.3,x:550.5,regX:166.5,regY:202.4}},{t:this.ikNode_1,p:{rotation:-1.4724,x:556,y:613.9,regY:156.2,regX:153.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.1638,scaleY:1.0791,skewX:0.0365,skewY:-179.9639,y:910.5,x:299.3,regY:152.2,regX:121.4}},{t:this.ikNode_2,p:{rotation:-0.5552,y:893.3,x:550.4,regX:166.5,regY:202.4}},{t:this.ikNode_1,p:{rotation:-1.4576,x:556,y:613.95,regY:156.2,regX:153.2}}]},1).wait(1));

	// Каркас_25
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Alys2QBXkFDJCgIHFadQg8FtjikBQg5jThIkRIiuqGQhUk6hEkAg");
	this.shape.setTransform(1330.775,784.5069);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABVNuIiBnkIiuqGIiYo6QBXkFDJCgIHFadQgjDWhdAAQhBAAhdhqg");
	this.shape_1.setTransform(1330.775,784.5069);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("Alos4QBXkFDJCfQBMERBVFGQBSFABOFKQBAECAwDDQhEFrjckFIh3nnQhMkvhUlYQhSk7hIj9g");
	this.shape_2.setTransform(1329.7,784.7834);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABJNuIh3nnIigqHQhSk7hHj9QBWkFDJCfQBMERBVFGQBSFABNFKIBxHFQgoDThbAAQhBAAhchtg");
	this.shape_3.setTransform(1329.7,784.7834);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("Alds6QBVkFDKCfQBREQBRFIQBQE/BEFPQA6EDAsDEQhLFqjXkJIhtnqQhFkxhNlYQhPk7hLj6g");
	this.shape_4.setTransform(1328.65,785.0449);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA8NuIhtnqIiSqJQhPk7hLj6QBVkFDKCfQBREQBRFIQBQE/BEFPIBmHHQgrDRhaAAQhCAAhbhwg");
	this.shape_5.setTransform(1328.65,785.0449);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlTs8QBWkGDJCfQBVERBPFIQBNFBA6FSIBdHJQhSFojSkNQgsjXg4kVIiEqKQhLk7hQj4g");
	this.shape_6.setTransform(1327.55,785.2878);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAwNtIhknsIiEqKQhLk7hQj4QBWkGDJCfQBVERBPFIQBNFBA5FSIBeHJQgvDOhZAAQhCAAhahzg");
	this.shape_7.setTransform(1327.55,785.2878);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlIs+QBVkFDKCeQBaESBLFIQBKFBAvFWQAwEFAkDGQhZFmjMkSIhantQg4k0g/lXQhIk8hTj1g");
	this.shape_8.setTransform(1326.5,785.4844);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAjNrIhZntIh3qLQhIk8hTj1QBVkFDKCeQBZESBLFIQBLFBAvFWIBUHLQgyDLhYAAQhDAAhZh3g");
	this.shape_9.setTransform(1326.5,785.4844);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak9s/QBUkGDKCeQBeESBIFJQBIFCAlFZIBKHMQhgFljHkWIhPnwQgyk0g3lWQhFk9hXjyg");
	this.shape_10.setTransform(1325.425,785.68);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXNqIhPnwIhpqKQhFk9hXjyQBUkGDKCeQBeESBIFJQBIFCAlFZIBKHMQg2DIhWABQhEAAhXh6g");
	this.shape_11.setTransform(1325.425,785.68);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkztBQBUkFDLCdQBiETBFFKQBFFCAaFcQAlEHAdDHQhoFijBkaQgejYgnkZQgsk1gvlWQhDk9hbjwg");
	this.shape_12.setTransform(1324.325,785.8245);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AALNoIhFnxIhbqLQhDk9hbjwQBUkFDLCdQBiETBFFKQBFFCAaFcIBCHOQg6DFhWAAQhDAAhWh9g");
	this.shape_13.setTransform(1324.325,785.8245);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkotCQBUkFDKCcQBnEUBCFKQBCFDAQFeIA4HQQhvFgi6keIg8nyQgmk3golUQg/k9hfjug");
	this.shape_14.setTransform(1323.225,785.9633);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAANmIg8nyIhOqLQg/k9hfjuQBUkFDKCcQBnEUBCFKQBCFDAQFeIA4HQQg+DChUAAQhFAAhSiAg");
	this.shape_15.setTransform(1323.225,785.9633);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkdtCQBTkGDKCdQBsEVA/FKQA+FCAHFiQAaEIAUDIQh2Fei0kiQgWjZgckaQggk3gglTQg9k+hijrg");
	this.shape_16.setTransform(1322.15,786.045);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNNkIgxnzQggk3gglTQg8k+hjjrQBSkGDLCdQBsEVA/FKQA9FCAIFiIAuHQQhBC/hTAAQhFAAhSiDg");
	this.shape_17.setTransform(1322.15,786.045);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkStCQBSkHDLCdQBwEVA8FLQA7FCgEFkIAlHSQh9FbiuklIgon0QgZk4gZlSQg6k+hmjog");
	this.shape_18.setTransform(1321.025,786.1467);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYNiIgon0IgyqKQg6k+hmjoQBSkHDLCdQBwEVA8FLQA7FCgEFkIAlHSQhEC8hSAAQhGAAhPiGg");
	this.shape_19.setTransform(1321.025,786.1467);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkHtCQBSkHDKCcQB1EXA5FKQA4FDgOFmQAPEKAMDIQiEFZiokpQgOjagQkbQgSk4gSlQQg3k+hqjmg");
	this.shape_20.setTransform(1319.925,786.1999);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkNfIgen1IgkqIQg3k/hqjmQBSkGDKCcQB1EWA5FLQA4FDgOFmIAbHSQhHC5hSAAQhGAAhNiJg");
	this.shape_21.setTransform(1319.925,786.1999);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj8tCQBRkHDLCbQB6EYA2FLQA0FCgZFpQAKEKAIDIQiKFWijksQgJjagLkbQgMk4gLlQQgzk+hujjg");
	this.shape_22.setTransform(1318.8,786.2204);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgwNcIgUn1QgMk4gKlQQg0k+hujjQBRkHDLCbQB6EYA2FLQA0FCgZFpIASHSQhKC2hRAAQhHABhLiNg");
	this.shape_23.setTransform(1318.8,786.2204);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj0tCQBRkHDLCbQB+EZAyFLQAyFCgjFrQAEEKAEDIQiSFTickvQgEjagFkbQgGk5gDlNQgxk+hyjig");
	this.shape_24.setTransform(1317.9749,786.223);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag/NZIgJn1QgGk5gDlNQgxk+hyjiQBRkHDLCbQB+EZAyFLQAyFCgjFrIAIHSQhNCzhQAAQhIAAhJiPg");
	this.shape_25.setTransform(1317.9749,786.223);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjytCQBRkGDLCaQCCEaAwFLQAuFCguFsQAAEKAADJQiZFQiWkyQAAjbAAkbQABk5AElLQgtk+h3jgg");
	this.shape_26.setTransform(1317.7438,786.2054);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhTNWIAAn2QABk5AElLQgtk+h3jgQBRkGDLCaQCCEaAwFLQAuFCguFsIAAHTQhRCwhPAAQhHAAhIiSg");
	this.shape_27.setTransform(1317.7438,786.2054);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjwtAQBPkHDMCaQCHEbAsFLQArFCg4FuIgKHSQigFNiQk1QAFjbAGkbQAHk4AMlKQgrk+h6jdg");
	this.shape_28.setTransform(1317.5588,786.1426);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhpNTIALn2QAHk4AMlKQgrk+h6jdQBPkHDMCaQCHEbAsFLQArFCg4FuIgKHSQhTCshPAAQhIAAhGiUg");
	this.shape_29.setTransform(1317.5588,786.1426);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjwtAQBPkHDMCaQCHEcAsFKQAsFCg4FxQgLEJgRDLQisFHiEk6QASjXAMkbQANk5AElGQgrk+h6jeg");
	this.shape_30.setTransform(1317.5807,786.0906);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ah6NNQASjXAMkbQANk5AElGQgrk+h6jeQBPkHDMCaQCHEcAsFKQAsFCg4FxQgLEJgRDLQhYCnhNAAQhKAAhBiag");
	this.shape_31.setTransform(1317.5807,786.0906);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ajus+QBQkHDMCZQCGEcAtFKQAWChgMC9QgIC2gNCiQgQEJgeDNQi4E/h4k/QAfjTARkaQATk4gDlEQgrk+h7jdg");
	this.shape_32.setTransform(1317.3368,785.9902);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AiINGQAfjTARkaQATk4gDlEQgrk+h7jdQBQkHDMCZQCGEcAtFKQAWChgMC9QgIC2gNCiQgQEJgeDNQhdCfhLAAQhMAAg8ifg");
	this.shape_33.setTransform(1317.3368,785.9902);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ajus9QBPkHDMCaQCGEbAuFKQAWCigLC+QgGC3gQCiQgUEIgsDPQjDE4htlDQAtjPAWkZQAYk3gKlDQgrk9h6jeg");
	this.shape_34.setTransform(1317.3946,785.8363);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiaNAQAtjPAWkZQAYk3gKlDQgrk9h6jeQBPkHDMCaQCGEbAuFKQAWCigLC+QgGC3gQCiQgUEIgsDPQhgCZhLAAQhOAAg3ikg");
	this.shape_35.setTransform(1317.3946,785.8363);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ajus7QBPkHDMCZQCGEbAuFKQAhDxgrHLQgZEIg5DPQjOExhhlIQA6jJAbkZQAek2gRlAQgsk+h6jdg");
	this.shape_36.setTransform(1317.3835,785.6626);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiqM4QA6jJAbkZQAek2gRlAQgsk+h6jdQBPkHDMCZQCGEbAuFKQAhDxgrHLQgZEIg5DPQhkCThJAAQhQAAgyiqg");
	this.shape_37.setTransform(1317.3835,785.6626);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ajws5QBPkHDMCaQCGEaAvFLQAnEWgxGoQgdEHhGDPQjbEphUlLQBIjDAfkYQAkk1gZk/Qgsk9h6jeg");
	this.shape_38.setTransform(1317.5191,785.4194);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ai8MxQBIjDAfkYQAkk1gZk/Qgsk9h6jeQBPkHDMCaQCGEaAvFLQAnEWgxGoQgdEHhGDPQhoCNhIAAQhSAAgtivg");
	this.shape_39.setTransform(1317.5191,785.4194);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ajxs2QBQkHDMCZQCGEbAuFKQAXChgGDEQgEC6gVCiQgjEGhTDPQjlEhhIlOQBUi9AlkXQAok0gfk9Qgsk+h7jdg");
	this.shape_40.setTransform(1317.5621,785.1692);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AjMMqQBUi9AlkXQAok0gfk9Qgsk+h7jdQBQkHDMCZQCGEbAuFKQAXChgGDEQgEC6gVCiQgjEGhTDPQhqCGhIAAQhUAAgnizg");
	this.shape_41.setTransform(1317.5621,785.1692);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjxszQBPkHDMCZQCGEbAvFKQAXChgFDGQgDC7gXCiQgoEEhgDPQjwEXg7lQQBhi3AqkVQAukygnk8Qgtk9h6jeg");
	this.shape_42.setTransform(1317.6118,784.865);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AjcMiQBhi3AqkVQAukygnk8Qgtk9h6jeQBPkHDMCZQCGEbAvFKQAXChgFDGQgDC7gXCiQgoEEhgDPQhsB/hIAAQhXAAggi4g");
	this.shape_43.setTransform(1317.6118,784.865);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjysvQBPkHDNCZQCFEaAwFKQAXChgDDIQgDC9gZChQgsEChuDPQj6EOgulTQBtivAukUQA0kxgvk6Qgtk+h6jdg");
	this.shape_44.setTransform(1317.6923,784.5266);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AjrMaQBtivAukUQA0kxgvk6Qgtk+h6jdQBPkHDNCZQCFEaAwFKQAXChgDDIQgDC9gZChQgsEChuDPQhuB4hHAAQhaAAgZi9g");
	this.shape_45.setTransform(1317.6923,784.5266);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjvsrQBPkHDMCZQCGEaAwFKQAXChgCDJQgCC+gbChQgwEBh7DNQkEEEgilUQB5ioA0kSQA4kvg1k5Qguk+h6jdg");
	this.shape_46.setTransform(1317.3578,784.1367);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Aj3MSQB5ioA0kSQA4kvg1k5Qguk+h6jdQBPkHDMCZQCGEaAwFKQAXChgCDJQgCC+gbChQgwEBh7DNQhwBxhHAAQhcAAgTjBg");
	this.shape_47.setTransform(1317.3578,784.1367);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjpsnQBPkHDMCZQCGEZAwFLQAYChgBDLQgBC/geCgQg1EAiHDKQkPD7gUlVQCFigA4kQQA+ktg9k5Qguk+h6jdg");
	this.shape_48.setTransform(1316.7505,783.7158);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Aj/MKQCFigA4kQQA+ktg9k5Qguk+h6jdQBPkHDMCZQCGEZAwFLQAYChgBDLQgBC/geCgQg1EAiHDKQhyBqhGAAQhfAAgMjEg");
	this.shape_49.setTransform(1316.7505,783.7158);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjjsjQBPkHDNCZQCFEaAxFKQAXChABDNQgBDBggCfQg4D+iVDIQkXDwgIlWQCQiYA9kOQBCkphEk5Qguk+h6jeg");
	this.shape_50.setTransform(1316.15,783.2641);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AkGMBQCQiYA9kOQBCkphDk5Qgvk+h6jeQBPkHDNCZQCFEaAxFKQAXChABDNQgBDBgfCfQg5D+iVDIQhzBjhFAAQhjAAgEjJg");
	this.shape_51.setTransform(1316.15,783.2641);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjdsdQBOkIDNCZQCGEaAwFKQAYChACDPQAADCgiCfQg9D7ihDFQkhDlAGlVQCbiQBBkLQBHknhLk5Qguk+h6jdg");
	this.shape_52.setTransform(1315.5699,782.7653);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AkNL5QCbiQBBkLQBHknhLk5Qguk+h6jdQBOkIDNCZQCGEaAwFKQAYChACDPQAADCgiCfQg9D7ihDFQh0BchEAAQhmAAADjMg");
	this.shape_53.setTransform(1315.5699,782.7653);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjLsYQBQkGDMCZQCHEaAtFLQAWChgBDRQgDDDgmCeQhED4ivDAQksDXAWlVQCniFBJkIQBQkjhMk6Qgsk+h7jdg");
	this.shape_54.setTransform(1313.777,782.1056);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AkYLtQCniFBJkIQBQkjhMk6Qgsk+h7jdQBQkGDMCZQCHEaAtFLQAWChgBDRQgDDDgmCeQhED4ivDAQh0BThEAAQhrAAANjRg");
	this.shape_55.setTransform(1313.777,782.1056);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ai4sRQBPkGDMCaQCIEbArFLQAVChgEDTQgGDFgrCdQhMD0i8C6Qk2DIAmlTQCyh6BRkFQBZkghNk6Qgpk9h8jdg");
	this.shape_56.setTransform(1311.9946,781.3752);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AkiLiQCyh6BRkFQBZkghNk6Qgpk9h8jdQBPkGDMCaQCIEbArFLQAVChgEDTQgGDFgrCdQhMD0i8C6QhzBKhDAAQhyAAAYjVg");
	this.shape_57.setTransform(1311.9946,781.3752);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("AinsJQBRkHDLCbQCJEdAoFKQATCigHDVQgJDHgvCbQhTDxjKCyQk+C4A2lQQC7hvBZkAQBikchPk7Qgmk9h9jcg");
	this.shape_58.setTransform(1310.2628,780.5547);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AkrLWQC7hvBZkAQBikchPk7Qgmk9h9jcQBRkHDLCbQCJEdAoFKQATCigHDVQgJDHgvCbQhTDxjKCyQhwBBhCAAQh5AAAjjZg");
	this.shape_59.setTransform(1310.2628,780.5547);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiVsBQBRkHDLCcQCKEeAlFKQASCigLDXQgMDIgzCaQhaDtjWCqQlJCpBHlOQDFhiBhj8QBpkXhPk8Qgjk+h+jbg");
	this.shape_60.setTransform(1308.5125,779.7107);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ak0LJQDFhiBhj8QBpkXhPk8Qgjk+h+jbQBRkHDLCcQCKEeAlFKQASCigLDXQgMDIgzCaQhaDtjWCqQhvA5hBAAQiBAAAvjeg");
	this.shape_61.setTransform(1308.5125,779.7107);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiFr5QBTkGDKCcQCLEgAiFKQARChgODaQgQDJg3CYQhhDpjjChQlQCaBXlKQDOhWBoj4QBykRhRk/Qgfk9iBjbg");
	this.shape_62.setTransform(1306.8516,778.8149);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ak8K9QDOhWBoj4QBykRhRk/Qgfk9iBjbQBTkGDKCcQCLEgAiFKQARChgODaQgQDJg3CYQhhDpjjChQhqAxhAAAQiKAAA7jhg");
	this.shape_63.setTransform(1306.8516,778.8149);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah0rwQBTkGDKCcQCMEiAfFKQAPChgRDcQgTDKg7CWQhoDljvCYQlWCKBmlGQDWhJBujzQB6kMhRlAQgdk+iBjag");
	this.shape_64.setTransform(1305.2009,777.875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AlDKwQDWhJBujzQB6kMhRlAQgdk+iBjaQBTkGDKCcQCMEiAfFKQAPChgRDcQgTDKg7CWQhoDljvCYQhlApg/AAQiUAABIjlg");
	this.shape_65.setTransform(1305.2009,777.875);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhkrnQBUkFDKCdQCNEiAcFKQAOChgWDeQgWDLg/CVQhuDgj7CPQlcB4B1lAQDeg7B1juQCCkHhSlCQgbk+iCjag");
	this.shape_66.setTransform(1303.6197,776.8914);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AlKKjQDeg7B1juQCCkHhSlCQgbk+iCjaQBUkFDKCdQCNEiAcFKQAOChgWDeQgWDLg/CVQhuDgj7CPQhfAgg8AAQihAABVjog");
	this.shape_67.setTransform(1303.6197,776.8914);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhUrdQBUkGDKCeQCOEkAZFKQAMChgZDgQgZDMhDCTQh1DakGCFQliBnCFk6QDlgtB7jpQCKkBhTlFQgXk9iEjZg");
	this.shape_68.setTransform(1302.0573,775.8712);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AlQKVQDlgtB7jpQCKkBhTlFQgXk9iEjZQBUkGDKCeQCOEkAZFKQAMChgZDgQgZDMhDCTQh1DakGCFQhXAZg6AAQiwAABkjsg");
	this.shape_69.setTransform(1302.0573,775.8712);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhFrTQBVkFDJCeQCQElAWFKQALChgdDhQgeDOhGCQQh7DWkRB5QlmBXCUk0QDqgfCCjjQCQj7hSlHQgVk9iFjZg");
	this.shape_70.setTransform(1300.589,774.8303);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AlVKHQDqgfCCjjQCQj7hSlHQgVk9iFjZQBVkFDJCeQCQElAWFKQALChgdDhQgeDOhGCQQh7DWkRB5QhPATg2AAQjBAAB0jwg");
	this.shape_71.setTransform(1300.589,774.8303);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag2rJQBVkFDJCeQCQEnATFKQAKChghDjQghDOhKCPQiBDQkbBtQlqBFCikrQDxgRCHjdQBMh6ABiUQAJiQgRihQgSk9iGjYg");
	this.shape_72.setTransform(1299.152,773.7517);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AlbJ5QDxgRCHjdQBMh6ABiUQAJiQgRihQgSk9iGjYQBVkFDJCeQCQEnATFKQAKChghDjQghDOhKCPQiBDQkbBtQhDANgyAAQjWAACDjzg");
	this.shape_73.setTransform(1299.152,773.7517);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(1,1,1).p("Agoq/QBWkEDICfQCSEoAQFJQAIChglDlQgkDPhOCMQiGDKklBiQltAzCwkjQD1gBCOjYQBPh3ACiTQAKiQgQihQgPk8iIjZg");
	this.shape_74.setTransform(1297.7696,772.6879);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AlfJqQD1gBCOjYQBPh3ACiTQAKiQgQihQgPk8iIjZQBWkEDICfQCSEoAQFJQAIChglDlQgkDPhOCMQiGDKklBiQg3AIgqAAQjyAACWj4g");
	this.shape_75.setTransform(1297.7696,772.6879);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(1,1,1).p("Agaq1QBXkEDHCfQCTEqANFJQAHChgqDnQgoDQhRCJQiLDEkuBVQlwAjC/kcQD4APCUjSQBShzADiUQALiQgPihQgMk8iJjYg");
	this.shape_76.setTransform(1296.4487,771.6049);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AliJaQD4APCUjSQBShzADiUQALiQgPihQgMk8iJjYQBXkEDHCfQCTEqANFJQAHChgqDnQgoDQhRCJQiLDEkuBVQgoAEgiAAQkRAACqj9g");
	this.shape_77.setTransform(1296.4487,771.6049);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgOqrQBYkEDHCgQCUEsAKFIQAFCfgtDqQgsDRhVCHQiQC+k3BIQlxAQDNkRQD7AdCZjLQBVhwAEiTQANiRgOigQgKk8iLjYg");
	this.shape_78.setTransform(1295.1836,770.5589);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AllJLQD7AdCZjLQBVhwAEiTQANiRgOigQgKk8iLjYQBYkEDHCgQCUEsAKFIQAFCfgtDqQgsDRhVCHQiQC+k3BIIgoABQk9AADBkCg");
	this.shape_79.setTransform(1295.1836,770.5589);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgBqhQBYkEDHChQCUEtAHFIQAECfgyDrQgvDShYCEQiVC4k/A6QlxgBDZkIQD+AuCdjFQBYhsAFiUQAOiQgMihQgHk7iMjYg");
	this.shape_80.setTransform(1293.997,769.5465);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AloI6QD+AuCdjFQBYhsAFiUQAOiQgMihQgHk7iMjYQBYkEDHChQCUEtAHFIQAECfgyDrQgvDShYCEQiVC4k/A6QlxgBDZkIg");
	this.shape_81.setTransform(1293.997,769.5465);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgcrPQBfkCDDCnQCCEpALFLQAFChgjDiQgkDNhMCNQiDDPkaBrQlrBDCkkrQDwgPCKjdQBNh5ADiUQALiRgNihQgLk+h6jfg");
	this.shape_82.setTransform(1296.8969,773.598);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AlfJ5QDwgPCKjdQBNh5ADiUQALiRgNihQgLk+h6jfQBfkCDDCnQCCEpALFLQAFChgjDiQgkDNhMCNQiDDPkaBrQhDAMgxAAQjZAACGj0g");
	this.shape_83.setTransform(1296.8969,773.598);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag+r8QBlj/C/CqQBwEnAOFMQAHCigWDZQgZDIg+CUQhtDjjvCUQlYCEBrlEQDVhHB0jxQCAkKhFlFQgOlAhpjlg");
	this.shape_84.setTransform(1300.4992,777.6445);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AlLKwQDVhHB0jxQCAkKhFlFQgOlAhpjlQBlj/C/CqQBwEnAOFMQAHCigWDZQgZDIg+CUQhtDjjvCUQhkAmg9AAQiYAABMjmg");
	this.shape_85.setTransform(1300.4992,777.6445);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhlskQBrj9C7CwQBeEjASFOQAICjgMDPQgODCgvCaQhUDzi9CzQk6DBAulSQCwh4BakCQBjkdg9lDQgPlBhZjsg");
	this.shape_86.setTransform(1304.6383,781.1343);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AktLjQCwh4BakCQBjkdg9lDQgPlBhZjsQBrj9C7CwQBeEjASFOQAICjgMDPQgODCgvCaQhUDzi9CzQhyBGhDAAQh0AAAdjXg");
	this.shape_87.setTransform(1304.6383,781.1343);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiNtEQByj7C1C1QBMEgAVFPQAcHFg5D9Qg5D/iHDIQkQD4gRlVQCDihA9kPQBDksgzlEQgTlChHjzg");
	this.shape_88.setTransform(1308.9639,783.8536);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AkDMRQCDihA9kPQBDksgzlEQgTlChHjzQByj7C1C1QBMEgAVFPQAcHFg5D9Qg5D/iHDIQhyBphFAAQhgAAgKjGg");
	this.shape_89.setTransform(1308.9639,783.8536);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ai4tbQB4j3CyC4QA5EdAYFQQAXFGgSFuQgcEHhNDRQjfEmhPlMQBPi/AdkYQAhk1gplLQgXlDg2j6g");
	this.shape_90.setTransform(1313.4654,785.6522);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AjPM5QBPi/AdkYQAhk1gplLQgXlDg2j6QB4j3CyC4QA5EdAYFQQAXFGgSFuQgcEHhNDRQhoCKhJAAQhTAAgqiwg");
	this.shape_91.setTransform(1313.4654,785.6522);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjItnQB+j1CsC9QAnEaAbFQQAbFHAKFdQACEKgUDPQilFKiLk3QAVjTgCkbQgDk4ghlXQgalEgkkBg");
	this.shape_92.setTransform(1315.4091,786.4178);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("Ah5NbQAVjTgCkbQgDk4ghlXQgalEgkkBQB+j1CsC9QAnEaAbFQQAbFHAKFdQACEKgUDPQhVCqhOAAQhJAAhEiXg");
	this.shape_93.setTransform(1315.4091,786.4178);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjxtqQCEjwCoDAQAUEXAeFQQAeFHAjFMQAhEIAjDCQhmFjjBkZQgnjbgjkZQgmk1gclpQgdlCgTkKg");
	this.shape_94.setTransform(1319.825,786.1614);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("Ag1N0QgnjbgjkZQgmk1gclpQgdlCgTkKQCEjwCoDAQAUEXAeFQQAeFHAjFMQAhEIAjDCQg5DGhVAAQhEAAhVh8g");
	this.shape_95.setTransform(1319.825,786.1614);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjxtpQCEjxCoDAQAUEXAfFQQAeFHAlFMQAgEIAhDDQhoFijAkaQgkjagjkZQglk2gelnQgelDgTkJg");
	this.shape_96.setTransform(1319.775,786.1729);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("Ag2NzQgkjagjkZQglk2gelnQgelDgTkJQCEjxCoDAQAUEXAfFQQAeFHAlFMQAgEIAhDDQg6DFhVAAQhEAAhVh9g");
	this.shape_97.setTransform(1319.775,786.1729);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjxtpQCEjxCoDAQAVEXAfFPQAfFHAlFNQAgEIAfDEQhqFhi+kaQgjjaghkZQgmk3gflmQgelDgUkJg");
	this.shape_98.setTransform(1319.725,786.1873);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("Ag2NzQgjjaghkZQgmk3gflmQgelDgUkJQCEjxCoDAQAVEXAfFPQAfFHAlFNQAgEIAfDEQg7DEhVAAQhEAAhUh9g");
	this.shape_99.setTransform(1319.725,786.1873);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjxtpQCEjyCpDBQAUEWAgFQQAgFGAlFOQAfEIAeDEQhrFii+kcQggjaghkZQglk3ghllQgflDgUkJg");
	this.shape_100.setTransform(1319.7,786.2068);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("Ag3NyQggjagikZQgjk3gillQgflDgTkJQCDjyCoDBQAVEWAgFQQAgFGAlFOQAfEIAeDEQg8DEhVAAQhEAAhUh+g");
	this.shape_101.setTransform(1319.7,786.2068);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjwtpQCDjyCoDAQAVEXAhFPQAfFHAnFOQAfEIAbDFQhtFhi8kdQgejaggkZQgkk2gjllQgglDgTkJg");
	this.shape_102.setTransform(1319.675,786.2013);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("Ag4NxQgejaggkZQgkk2gjllQgglDgTkJQCDjyCoDAQAVEXAhFPQAfFHAnFOQAfEIAbDFQg8DEhVAAQhFAAhTiAg");
	this.shape_103.setTransform(1319.675,786.2013);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjwtpQCDjxCpC/QAVEXAhFPQAgFGAoFPQAeEIAZDGQhvFgi6keQgcjZggkZQgkk3gklkQgglDgUkJg");
	this.shape_104.setTransform(1319.625,786.2257);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Ag4NwQgcjZggkZQgkk3gklkQgglDgUkJQCDjxCpC/QAVEXAhFPQAgFGAoFPQAeEIAZDGQg9DChVAAQhEAAhTiAg");
	this.shape_105.setTransform(1319.625,786.2257);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjwtpQCDjxCpC/QAVEWAiFQQAhFHAoFOQAeEIAXDHQhxFfi5keQgZjZggkaQgik2gnlkQghlCgUkKg");
	this.shape_106.setTransform(1319.575,786.2282);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("Ag5NwIg5nzIhJqaQghlCgUkKQCDjxCpC/QAVEWAiFQQAhFHAoFOIA1HPQg+DBhVAAQhEAAhTiAg");
	this.shape_107.setTransform(1319.575,786.2282);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjwtpQCDjxCpC/QAVEWAiFQQAiFGApFPQAeEIAUDIQhzFfi3kgQgXjZgfkZQgik3gpljQgglCgVkKg");
	this.shape_108.setTransform(1319.55,786.2356);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("Ag5NvIg2nyIhMqaQgglCgVkKQCDjxCpC/QAVEWAjFQQAgFGAqFPQAdEIAWDIQhADBhUAAQhFAAhRiCg");
	this.shape_109.setTransform(1319.55,786.2356);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjvtpQCCjyCqDAQAVEWAjFPQAiFGAqFQQAcEIATDIQh1Ffi1khQgVjZgfkZQghk3grliQghlCgUkKg");
	this.shape_110.setTransform(1319.5,786.2504);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("Ag6NuQgUjZggkZQghk3gqliQgilCgUkKQCCjyCpDAQAWEWAiFPQAjFGAqFQQAcEIATDIQhADBhUAAQhFAAhRiDg");
	this.shape_111.setTransform(1319.5,786.2504);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjvtpQCCjxCpC+QAWEWAjFQQAjFGArFQQAcEIARDJQh3Fei0kiQgSjYgekZQghk3gtliQghlCgVkKg");
	this.shape_112.setTransform(1319.45,786.2502);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("Ag7NtQgSjYgekZQghk3gtlhQghlDgVkKQCCjxCqC/QAVEVAjFQQAjFGArFQQAcEIARDJQhBDAhTAAQhGAAhRiEg");
	this.shape_113.setTransform(1319.45,786.2502);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).wait(1));

	// Слой_6
	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(927.5,232.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(927.5,232.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(927.5,232.05,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(927.5,232.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},39).to({state:[{t:this.instance_4}]},12).wait(1));

	// Слой_2
	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(966.5,261.75,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_8();
	this.instance_6.setTransform(966.5,261.75,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_7();
	this.instance_7.setTransform(1189.6,285.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},56).wait(1));

	// Каркас_7
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArcoFQg3kND9AmQD0D1EQEPILTLTQCDFalEhuQj2j2kQkQg");
	this.shape_114.setTransform(1137.4123,638.756);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AIALXIoGoGIrWrWQg3kND9AmIIEIEILTLTQBkEHijAAQg0AAhOgbg");
	this.shape_115.setTransform(1137.4123,638.756);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(1,1,1).p("AreoCQg5kMD9AkQD4DyEREOIDjDiQEIEHDpDpQCEFalFhtQj1j2kQkQIjpjnQkIkFjqjlg");
	this.shape_116.setTransform(1137.172,638.9534);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AICLVIoFoGIjpjnQkIkFjqjlQg5kMD9AkQD4DyEREOIDjDiIHxHwQBkEHijAAQg0AAhOgag");
	this.shape_117.setTransform(1137.172,638.9534);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(1,1,1).p("Arfn+Qg7kMD9AiQD7DvESENIDkDiQEJEGDpDqQCDFalEhtQj1j2kRkQIjpjmQkJkEjsjhg");
	this.shape_118.setTransform(1136.9382,639.1797);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AIFLTIoGoGIjpjmQkJkEjsjhQg7kMD9AiQD7DvESENIDkDiQEJEGDpDqQBkEHikAAQgzAAhOgag");
	this.shape_119.setTransform(1136.9382,639.1797);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(1,1,1).p("Arhn7Qg+kLD+AgQD+DsEUEMQBxBuB0B0QEJEGDpDqQCEFZlFhsQj1j2kSkQIjojlQkLkDjujeg");
	this.shape_120.setTransform(1136.709,639.377);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AIHLRQj1j2kSkQIjojlQkLkDjujeQg+kLD+AgQD+DsEUEMQBxBuB0B0QEJEGDpDqQBkEHijAAQg0AAhOgag");
	this.shape_121.setTransform(1136.709,639.377);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(1,1,1).p("Arin3QhAkLD+AdQEBDrEWEKQByBtBzB1QEJEGDpDqQCEFalEhtQj1j2kSkQQhzhzh1hxQkNkCjwjag");
	this.shape_122.setTransform(1136.4974,639.5839);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AIKLPQj1j2kSkQQhzhzh1hxQkNkCjwjaQhAkLD+AdQEBDrEWEKQByBtBzB1QEJEGDpDqQBkEHijAAQg0AAhNgag");
	this.shape_123.setTransform(1136.4974,639.5839);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(1,1,1).p("Arkn0QhCkLD+AcQEFDnEWEJQBzBtB0B2QEJEFDpDqQCFFalFhtQj1j2kSkPQhzh0h1hwQkOkAjzjXg");
	this.shape_124.setTransform(1136.2984,639.8022);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AIMLMQj1j2kSkPQhzh0h1hwQkOkAjzjXQhCkLD+AcQEFDnEWEJQBzBtB0B2QEJEFDpDqQBlEIikAAQgzAAhOgbg");
	this.shape_125.setTransform(1136.2984,639.8022);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArmnwQhEkKD+AZQEIDlEYEHQB0BtBzB2QEKEFDqDqQCEFZlFhsQj1j2kSkPQh0hzh0hwQkPj+j2jUg");
	this.shape_126.setTransform(1136.0654,640.005);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AIOLKQj1j2kSkPIjojjQkPj+j2jUQhEkKD+AZQEIDlEYEHQB0BtBzB2QEKEFDqDqQBkEHikAAQgzAAhOgag");
	this.shape_127.setTransform(1136.0654,640.005);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArnntQhGkJD+AXQELDiEaEGQBzBsB1B3QEKEEDpDrQCEFalEhtQj1j2kTkPQh0hzh0hvQkQj9j4jRg");
	this.shape_128.setTransform(1135.8438,640.2284);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AIRLIQj1j2kTkPQh0hzh0hvQkQj9j4jRQhGkJD+AXQELDiEaEGQBzBsB1B3QEKEEDpDrQBlEHilAAQgzAAhNgag");
	this.shape_129.setTransform(1135.8438,640.2284);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArpnqQhIkID+AVQEODfEbEEQB1BsB0B3QELEFDpDqQCFFalFhtQj1j2kTkOQh0hzh1huQkRj8j6jOg");
	this.shape_130.setTransform(1135.6524,640.4534);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AITLFQj1j2kTkOQh0hzh1huQkRj8j6jOQhIkID+AVQEODfEbEEQB1BsB0B3QELEFDpDqQBlEIikAAQgzAAhOgbg");
	this.shape_131.setTransform(1135.6524,640.4534);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArqnlQhLkJD/ATQERDdEcECQB1BsB1B3QELEFDpDrQCFFZlFhsQj0j2kUkOQh0h0h0htQkTj6j8jKg");
	this.shape_132.setTransform(1135.4288,640.6487);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AIVLEQj0j2kUkOQh0h0h0htQkTj6j8jKQhLkJD/ATQERDdEcECQB1BsB1B3QELEFDpDrQBlEGikAAQgzAAhOgZg");
	this.shape_133.setTransform(1135.4288,640.6487);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArrniQhNkID/ARQEUDZEdECQB1BqB2B5QELEEDpDrQCGFZlGhsQj0j2kUkOQh0hyh0htQkUj6j+jGg");
	this.shape_134.setTransform(1135.2235,640.861);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AIXLBQj0j2kUkOQh0hyh0htQkUj6j+jGQhNkID/ARQEUDZEdECQB1BqB2B5QELEEDpDrQBmEHilAAQgzAAhOgag");
	this.shape_135.setTransform(1135.2235,640.861);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArtnfQhPkHD/APQEXDWEfEAQB2BqB2B5QELEEDqDrQCFFalFhsQj0j2kVkOQh0hzh0hsQkVj4kBjDg");
	this.shape_136.setTransform(1135.0128,641.1071);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AIaK/Qj0j2kVkOQh0hzh0hsQkVj4kBjDQhPkHD/APQEXDWEfEAQB2BqB2B5QELEEDqDrQBlEIikAAQg0AAhNgag");
	this.shape_137.setTransform(1135.0128,641.1071);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArunbQhRkGD/AMQEbDUEfD/QB3BpB2B6QEMEDDpDsQCFFZlFhsQj0j2kUkNQh1hzh0hsQkWj2kDjAg");
	this.shape_138.setTransform(1134.7956,641.2985);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AIcK9Qj0j2kUkNQh1hzh0hsQkWj2kDjAQhRkGD/AMQEbDUEfD/QB3BpB2B6QEMEDDpDsQBlEHikAAQg0AAhNgag");
	this.shape_139.setTransform(1134.7956,641.2985);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArvnYQhTkFD/AKQEdDREhD9QB3BpB3B6QEMEDDpDsQCGFZlFhrQj0j3kVkNQh1hyh0hrQkXj1kFi9g");
	this.shape_140.setTransform(1134.5995,641.5317);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AIfK7Qj0j3kVkNQh1hyh0hrQkXj1kFi9QhTkFD/AKQEdDREhD9QB3BpB3B6QEMEDDpDsQBmEHilAAQgzAAhNgZg");
	this.shape_141.setTransform(1134.5995,641.5317);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArwnUQhWkFD/AIQEhDOEiD7QB4BpB3B7QEMEDDpDrQCGFalFhsQj0j2kVkNQh1hyh0hrQkYjzkHi5g");
	this.shape_142.setTransform(1134.3857,641.7712);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AIhK4Qj0j2kVkNQh1hyh0hrQkYjzkHi5QhWkFD/AIQEhDOEiD7QB4BpB3B7QEMEDDpDrQBmEIilAAQgzAAhNgag");
	this.shape_143.setTransform(1134.3857,641.7712);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArwnZQhSkGD/AMQEbDSEhD9QB3BpB3B6QENECDpDsQCHFZlGhrQj0j2kVkNQh1hyh1hrQkXj1kEi/g");
	this.shape_144.setTransform(1134.6574,641.4653);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AIeK7Qj0j2kVkNQh1hyh1hrQkXj1kEi/QhSkGD/AMQEbDSEhD9QB3BpB3B6QENECDpDsQBnEIimAAQgzAAhNgag");
	this.shape_145.setTransform(1134.6574,641.4653);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArundQhQkHEAAOQEVDYEgD/QB2BpB4B4QENECDpDsQCGFZlFhrQj0j2kWkNQh0hyh2hrQkWj2kAjFg");
	this.shape_146.setTransform(1134.923,641.1641);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AIcK+Qj0j2kWkNQh0hyh2hrQkWj2kAjFQhQkHEAAOQEVDYEgD/QB2BpB4B4QENECDpDsQBmEHilAAQgzAAhNgZg");
	this.shape_147.setTransform(1134.923,641.1641);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArtniQhMkID/ASQEQDcEeEAQB2BqB3B2QEOECDpDsQCGFalFhsQj0j2kWkMQh0hyh3hrQkVj4j8jLg");
	this.shape_148.setTransform(1135.2049,640.9021);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AIZLAQj0j2kWkMQh0hyh3hrQkVj4j8jLQhMkID/ASQEQDcEeEAQB2BqB3B2QEOECDpDsQBmEIikAAQg0AAhNgag");
	this.shape_149.setTransform(1135.2049,640.9021);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArsnnQhIkID/AVQEKDgEdECQB1BrB4B0QENECDqDsQCFFZlFhrQjzj2kWkMQh1hyh4hrQkTj6j5jRg");
	this.shape_150.setTransform(1135.4747,640.6142);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AIWLDQjzj2kWkMQh1hyh4hrQkTj6j5jRQhIkID/AVQEKDgEdECQB1BrB4B0QENECDqDsQBmEIimAAQgzAAhNgag");
	this.shape_151.setTransform(1135.4747,640.6142);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArqnrQhGkKD/AZQEFDlEbEDQB0BsB5ByQENEBDqDtQCGFZlGhrQjyj2kXkMQh2hyh4hrQkSj8j0jWg");
	this.shape_152.setTransform(1135.7688,640.338);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AITLGQjyj2kXkMQh2hyh4hrQkSj8j0jWQhGkKD/AZQEFDlEbEDQB0BsB5ByQENEBDqDtQBmEHilAAQg0AAhNgZg");
	this.shape_153.setTransform(1135.7688,640.338);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArpnwQhBkLD9AcQD/DqEaEFIDsDcQEOECDqDtQCGFZlFhrQjzj3kXkLQh2hyh5hsQkRj9jwjcg");
	this.shape_154.setTransform(1136.0531,640.0586);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AIRLJQjzj3kXkLQh2hyh5hsQkRj9jwjcQhBkLD9AcQD/DqEaEFIDsDcQEOECDqDtQBnEHimAAQgzAAhNgZg");
	this.shape_155.setTransform(1136.0531,640.0586);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FFFFFF").ss(1,1,1).p("Arnn0Qg+kLD9AeQD5DuEZEHQB0BtB4BuQEOEBDpDtQCHFZlGhqQjyj3kYkLQh1hyh6hsQkQj+jsjig");
	this.shape_156.setTransform(1136.3321,639.7747);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AIOLMQjyj3kYkLQh1hyh6hsQkQj+jsjiQg+kLD9AeQD5DuEZEHQB0BtB4BuQEOEBDpDtQBnEIimAAQgzAAhNgZg");
	this.shape_157.setTransform(1136.3321,639.7747);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#FFFFFF").ss(1,1,1).p("Armn4Qg7kND+AjQDzDyEXEIQBzBuB4BsQEPEBDpDtQCHFZlGhrQjyj2kYkLQh1hxh7htQkOkAjpjng");
	this.shape_158.setTransform(1136.6197,639.4951);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AILLOQjyj2kYkLQh1hxh7htQkOkAjpjnQg7kND+AjQDzDyEXEIQBzBuB4BsQEPEBDpDtQBnEHilAAQg0AAhNgZg");
	this.shape_159.setTransform(1136.6197,639.4951);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#FFFFFF").ss(1,1,1).p("Arkn9Qg4kND9AmQDuD2EWEKQByBuB4BrQEPEADpDuQCHFZlFhrQjzj3kXkKQh2hyh8htQkNkBjkjtg");
	this.shape_160.setTransform(1136.9046,639.2371);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AIJLRQjzj3kXkKQh2hyh8htQkNkBjkjtQg4kND9AmQDuD2EWEKQByBuB4BrQEPEADpDuQBnEHilAAQgzAAhNgZg");
	this.shape_161.setTransform(1136.9046,639.2371);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArioBQg1kOD9ApQDnD6EVEMQBxBuB5BpQEPEADpDuQCHFZlFhrQjyj2kYkKQh2hxh9huQkLkDjgjyg");
	this.shape_162.setTransform(1137.202,638.9608);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AIGLTQjyj2kYkKQh2hxh9huQkLkDjgjyQg1kOD9ApQDnD6EVEMQBxBuB5BpQEPEADpDuQBoEIimAAQgzAAhNgag");
	this.shape_163.setTransform(1137.202,638.9608);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArgoFQgxkPD8AsQDiD/ESENQBxBvB5BnQEQEADpDuQCHFZlGhrQjyj3kXkJQh3hxh+huQkJkEjcj4g");
	this.shape_164.setTransform(1137.4868,638.6983);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AIDLWQjyj3kXkJQh3hxh+huQkJkEjcj4QgxkPD8AsQDiD/ESENQBxBvB5BnQEQEADpDuQBnEHimAAQgzAAhNgZg");
	this.shape_165.setTransform(1137.4868,638.6983);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArfoKQgtkOD7AuQDcEDEREOQBwBwB6BmQEPD/DqDuQCHFZlGhqQjyj3kYkJQh2hxh/hvQkIkFjYj+g");
	this.shape_166.setTransform(1137.8096,638.431);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AIALZQjyj3kYkJQh2hxh/hvQkIkFjYj+QgtkOD7AuQDcEDEREOQBwBwB6BmQEPD/DqDuQBnEIimAAQgzAAhNgZg");
	this.shape_167.setTransform(1137.8096,638.431);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114}]}).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).wait(1));

	// Слой_8
	this.instance_8 = new lib.CachedBmp_9();
	this.instance_8.setTransform(1194.7,876.75,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_10();
	this.instance_9.setTransform(1194.7,876.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},56).wait(1));

	// Каркас_31
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#FF6699").ss(5,1,1).p("AKkkBQA/IPjUDTQjTDVksgBQhWAAhPgSQjDgriWiXQjTjTAQoTQARoTDMCbQCqCBDdgFQAtgCAugGQEWgnChhxQCghxA/IRg");
	this.shape_168.setTransform(976.8619,249.2048);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF6699").s().p("AAQK1QhWAAhPgSQjDgriWiXQjTjTAQoTQARoTDMCbQCqCBDdgFQAtgCAugGQEWgnChhxQCghxA/IRQA/IPjUDTQjTDUkqAAIgCAAg");
	this.shape_169.setTransform(976.8619,249.2048);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#FF6699").ss(5,1,1).p("AKmj9QA6IQjWDRQjVDTksgEQhWgBhPgTQjCgtiViYQjSjVAWoTQAWoTDLCdQCoCDDdgDQAtgBAugGQEXglChhvQCihvA6IRg");
	this.shape_170.setTransform(976.5391,249.9082);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF6699").s().p("AAJKzQhWgBhPgTQjCgtiViYQjSjVAWoTQAWoTDLCdQCoCDDdgDQAtgBAugGQEXglChhvQCihvA6IRQA6IQjWDRQjRDPklAAIgLAAg");
	this.shape_171.setTransform(976.5391,249.9082);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FF6699").ss(5,1,1).p("AKnj5QA2IQjZDPQjXDRksgHQhWgBhPgUQjCgviTiaQjQjXAboSQAboUDKCgQCmCEDegBQAtAAAugGQEXghCjhuQCihuA1ISg");
	this.shape_172.setTransform(976.2236,250.6588);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF6699").s().p("AABKwQhWgBhPgUQjCgviTiaQjQjXAboSQAboUDKCgQCmCEDegBQAtAAAugGQEXghCjhuQCihuA1ISQA2IQjZDPQjRDLkgAAIgSgBg");
	this.shape_173.setTransform(976.2236,250.6588);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#FF6699").ss(5,1,1).p("AKpjwQAwIRjbDNQjZDOkrgJQhXgDhOgUQjCgxiSibQjNjZAgoSQAgoTDIChQClCHDeAAQAtABAugGQEYgfCjhsQCkhsAwISg");
	this.shape_174.setTransform(975.8854,250.8837);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF6699").s().p("AgGKzQhXgDhOgUQjCgxiSibQjNjZAgoSQAgoTDIChQClCHDeAAQAtABAugGQEYgfCjhsQCkhsAwISQAwIRjbDNQjRDFkcABIgXgBg");
	this.shape_175.setTransform(975.8854,250.8837);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#FF6699").ss(5,1,1).p("AKqjnQArISjdDKQjbDMkrgMQhXgDhOgVQjBgziRidQjLjbAmoSQAloSDGCjQClCIDdADQAtAAAugEQEYgdCkhqQClhrArITg");
	this.shape_176.setTransform(975.5585,251.1164);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FF6699").s().p("AgOK1QhXgDhOgVQjBgziRidQjLjbAmoSQAloSDGCjQClCIDdADQAtAAAugEQEYgdCkhqQClhrArITQArISjdDKQjPDBkXAAIgggBg");
	this.shape_177.setTransform(975.5585,251.1164);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#FF6699").ss(5,1,1).p("AKrjeQAlISjeDJQjdDKkqgPQhXgFhPgVQjAg1iPieQjIjeApoRQAroSDFCmQCjCJDdAFQAtABAugEQEYgaCmhoQCmhqAlITg");
	this.shape_178.setTransform(975.2077,251.3327);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF6699").s().p("AgVK4QhXgFhPgVQjAg1iPieQjIjeApoRQAroSDFCmQCjCJDdAFQAtABAugEQEYgaCmhoQCmhqAlITQAlISjeDJQjNC8kSAAIgogBg");
	this.shape_179.setTransform(975.2077,251.3327);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#FF6699").ss(5,1,1).p("AKsjUQAhISjhDGQjfDIkqgSQhXgFhOgWQi/g4iOieQjHjgAvoRQAwoRDDCnQCiCLDdAHQAtACAugEQEYgYCnhmQCnhoAgIUg");
	this.shape_180.setTransform(974.8556,251.5435);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF6699").s().p("AgdK6QhXgFhOgWQi/g4iOieQjHjgAvoRQAwoRDDCnQCiCLDdAHQAtACAugEQEYgYCnhmQCnhoAgIUQAhISjhDGQjNC3kNAAIgvgBg");
	this.shape_181.setTransform(974.8556,251.5435);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#FF6699").ss(5,1,1).p("AKujLQAbISjiDEQjhDGkqgVQhXgGhOgXQi/g5iMigQjFjiA1oQQA1oRDBCpQCgCMDeAKQAtACAtgDQEZgVCohlQCohmAbIUg");
	this.shape_182.setTransform(974.4906,251.7642);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF6699").s().p("AgkK8QhXgGhOgXQi/g5iMigQjFjiA1oQQA1oRDBCpQCgCMDeAKQAtACAtgDQEZgVCohlQCohmAbIUQAbISjiDEQjMCzkIAAQgbAAgcgCg");
	this.shape_183.setTransform(974.4906,251.7642);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#FF6699").ss(5,1,1).p("AKvjCQAWITjkDCQjjDDkqgYQhXgGhOgZQi+g6iLiiQjCjjA6oQQA6oRC/CrQCfCODeAMQAsADAugDQEZgSCphkQCphkAWIUg");
	this.shape_184.setTransform(974.1395,251.9862);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FF6699").s().p("AgsK+QhXgGhOgZQi+g6iLiiQjCjjA6oQQA6oRC/CrQCfCODeAMQAsADAugDQEZgSCphkQCphkAWIUQAWITjkDCQjLCukEAAQgeAAgggDg");
	this.shape_185.setTransform(974.1395,251.9862);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FF6699").ss(5,1,1).p("AKwi5QAQITjlC/QjmDBkpgaQhWgIhOgZQi+g8iJijQjAjmA/oPQA/oQC+CtQCdCQDeAOQArADAvgDQEagPCphiQCqhjARIVg");
	this.shape_186.setTransform(973.7771,252.2002);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FF6699").s().p("Ag0LAQhWgIhOgZQi+g8iJijQjAjmA/oPQA/oPC+CsQCdCQDeAOQArADAvgDQEagPCphiQCqhiARIUQAQITjlC/QjKCqj/AAQgiAAgkgDg");
	this.shape_187.setTransform(973.7771,252.2002);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#FF6699").ss(5,1,1).p("AKxiwQALITjoC9QjnDAkpgeQhXgIhNgaQi9g+iHilQi/jnBFoPQBEoPC8CvQCdCRDdAQQArAEAvgDQEagMCqhgQCrhiAMIVg");
	this.shape_188.setTransform(973.4213,252.4328);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FF6699").s().p("Ag8LCQhXgIhNgaQi9g+iHilQi/jnBFoPQBEoPC8CvQCdCRDdAQQArAEAvgDQEagMCqhgQCrhiAMIVQALITjoC9QjHCmj6AAQgmAAgpgEg");
	this.shape_189.setTransform(973.4213,252.4328);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#FF6699").ss(5,1,1).p("AKxinQAGITjpC7QjpC9kpggQhXgKhMgaQi9hAiGimQi7jpBJoOQBJoOC7CwQCbCTDdASQArAEAvgCQEZgJCshfQCshgAGIVg");
	this.shape_190.setTransform(973.0597,252.6478);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FF6699").s().p("AhELEQhXgKhMgaQi9hAiGimQi7jpBJoOQBJoOC7CwQCbCTDdASQArAEAvgCQEZgJCshfQCshgAGIVQAGITjpC7QjGChj3AAQgpAAgsgEg");
	this.shape_191.setTransform(973.0597,252.6478);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FF6699").ss(5,1,1).p("AKyieQABITjrC5QjrC6kogjQhWgLhOgaQi7hCiFioQi5jqBOoNQBPoOC5CyQCaCUDcAVQAsAEAvgBQEYgHCthdQCthdABIUg");
	this.shape_192.setTransform(972.6936,252.8503);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FF6699").s().p("AhLLFQhWgLhOgaQi7hCiFioQi5jqBOoNQBPoOC5CyQCaCUDcAVQAsAEAvgBQEYgHCthdQCthdABIUQABITjrC5QjGCdjyAAQgsAAgvgGg");
	this.shape_193.setTransform(972.6936,252.8503);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#FF6699").ss(5,1,1).p("AKziVQgFITjtC3QjsC4kognQhWgKhNgcQi8hEiCipQi3jsBUoMQBToOC3C1QCZCVDcAXQArAEAvAAQEagFCthbQCuhbgEIUg");
	this.shape_194.setTransform(972.3464,253.0507);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF6699").s().p("AhTLGQhWgKhNgcQi8hEiCipQi3jsBUoMQBToOC3C1QCZCVDcAXQArAEAvAAQEagFCthbQCuhbgEIUQgFITjtC3QjDCYjtAAQgxAAgzgHg");
	this.shape_195.setTransform(972.3464,253.0507);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#FF6699").ss(5,1,1).p("AK0ijQAGITjqC7QjpC8kwggQhWgLhOgaQi8hBiKirQi4jsBRoMQBRoOC4CzQCZCVDaAVQAsAEAvgCQEYgJCshfQCshfAHIVg");
	this.shape_196.setTransform(972.6719,252.8899);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF6699").s().p("AhJLHQhWgLhOgaQi8hBiKirQi4jsBRoMQBRoOC4CzQCZCVDaAVQAsAEAvgCQEYgJCshfQCshfAHIVQAGITjqC7QjHCgj7AAQgqAAgtgEg");
	this.shape_197.setTransform(972.6719,252.8899);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#FF6699").ss(5,1,1).p("AK0iyQAQITjmC/QjlDBk4gbQhWgJhOgaQi9g/iRisQi6jqBOoOQBOoNC5CyQCZCUDZATQAsADAvgCQEZgPCqhiQCqhjAQIVg");
	this.shape_198.setTransform(973.0371,252.7388);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FF6699").s().p("Ag/LGQhWgJhOgaQi9g/iRisQi6jqBOoOQBOoNC5CyQCZCUDZATQAsADAvgCQEZgPCqhiQCqhjAQIVQAQITjmC/QjJCpkKAAQgkAAgmgDg");
	this.shape_199.setTransform(973.0371,252.7388);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FF6699").ss(5,1,1).p("AK0jBQAbISjjDFQjhDElBgUQhWgIhOgZQi9g9iaitQi6jqBLoNQBMoPC5CxQCaCTDXATQAsACAvgEQEYgUCohlQCohmAbIUg");
	this.shape_200.setTransform(973.4383,252.5358);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FF6699").s().p("Ag2LGQhWgIhOgZQi9g9iaitQi6jqBLoNQBMoPC5CxQCaCTDXATQAsACAvgEQEYgUCohlQCohmAbIUQAbISjjDFQjMCykbAAQgdAAgegCg");
	this.shape_201.setTransform(973.4383,252.5358);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FF6699").ss(5,1,1).p("AK0jQQAkISjeDIQjeDJlIgOQhWgHhPgYQi9g6iiivQi8jpBJoOQBJoPC6CxQCbCSDVARQAtABAugEQEYgaCmhoQCmhpAlITg");
	this.shape_202.setTransform(973.8423,252.3847);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF6699").s().p("AgsLFQhWgHhPgYQi9g6iiivQi8jpBJoOQBJoPC6CxQCbCSDVARQAtABAugEQEYgaCmhoQCmhpAlITQAkISjeDIQjPC8ksAAIgrgBg");
	this.shape_203.setTransform(973.8423,252.3847);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FF6699").ss(5,1,1).p("AKzjfQAuIRjaDNQjaDNlQgIQhWgGhOgXQi/g4ipiwQi9joBFoOQBHoPC7CvQCcCRDTAQQAtABAtgGQEYgfCkhrQCkhsAvISg");
	this.shape_204.setTransform(974.2487,252.2356);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FF6699").s().p("AgjLEQhWgGhOgXQi/g4ipiwQi9joBFoOQBHoPC7CvQCcCRDTAQQAtABAtgGQEYgfCkhrQCkhsAvISQAuIRjaDNQjRDFk+AAIgbAAg");
	this.shape_205.setTransform(974.2487,252.2356);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FF6699").ss(5,1,1).p("AKxjuQA5IQjXDQQjWDSlXgCQhWgEhPgWQi/g2ixixQi/jnBDoPQBDoPC9CuQCdCQDRAPQAsAAAugHQEXgkCihuQCihwA5ISg");
	this.shape_206.setTransform(974.7017,252.0915);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FF6699").s().p("AgaLCQhWgEhPgWQi/g2ixixQi/jnBDoPQBDoPC9CuQCdCQDRAPQAsAAAugHQEXgkCihuQCihwA5ISQA5IQjXDQQjUDQlTAAIgGAAg");
	this.shape_207.setTransform(974.7017,252.0915);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FF6699").ss(5,1,1).p("AKvj9QBDIOjTDVQjSDWleAFQhWgEhPgVQjAgzi5izQi/jlBAoPQBAoQC9CtQCeCQDPANQAtgBAtgHQEWgpCghyQCghzBDIRg");
	this.shape_208.setTransform(975.1649,251.9294);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FF6699").s().p("Ai2KoQjAgzi5izQi/jlBAoPQBAoQC9CtQCeCQDPANQAtgBAtgHQEWgpCghyQCghzBDIRQBDIOjTDVQjSDWleAFQhWgEhPgVg");
	this.shape_209.setTransform(975.1649,251.9294);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FF6699").ss(5,1,1).p("AKtkNQBNIOjODYQjODblmALQhWgChQgVQjAgxjBizQjAjkA9oPQA9oRC/CtQCeCODNAMQAtgCAtgIQEVguCeh1QCdh1BOIOg");
	this.shape_210.setTransform(975.6235,251.7776);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FF6699").s().p("AiuKoQjAgxjBizQjAjkA9oPQA9oRC/CtQCeCODNAMQAtgCAtgIQEVguCeh1QCdh1BOIOQBNIOjODYQjODblmALQhWgChQgVg");
	this.shape_211.setTransform(975.6235,251.7776);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FF6699").ss(5,1,1).p("AKqkWQBXILjKDdQhlBvieBCQiXA/idAAQhWgBhPgTQjBgvjJizQjBjjA6oQQA7oRC/CrQCfCPDLAKQAtgDAtgJQEUgzCch4QCbh5BXIOg");
	this.shape_212.setTransform(976.0805,251.0511);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FF6699").s().p("AilKuQjBgvjJizQjBjjA6oQQA7oRC/CrQCfCPDLAKQAtgDAtgJQEUgzCch4QCbh5BXIOQBXILjKDdQhlBvieBCQiXA/idAAQhWgBhPgTg");
	this.shape_213.setTransform(976.0805,251.0511);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FF6699").ss(5,1,1).p("AKnkfQBhIKjGDhQhiBxihBFQiYBDifACQhWAAhPgSQhggXh3g8Qhtg7hOhSQjDjjA4oQQA4oQDACqQCfCNDKAKQAtgFAtgJQETg5CZh7QCZh7BhILg");
	this.shape_214.setTransform(976.57,250.2213);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FF6699").s().p("AidK1QhggXh3g8Qhtg7hOhSQjDjjA4oQQA4oQDACqQCfCNDKAKQAtgFAtgJQETg5CZh7QCZh7BhILQBhIKjGDhQhiBxihBFQiYBDifACQhWAAhPgSg");
	this.shape_215.setTransform(976.57,250.2213);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FF6699").ss(5,1,1).p("AKkknQBrIIjCDkQhgBzikBJQiZBGifAFQhWABhPgSQhhgVh6g8Qhxg6hPhTQjEjhA1oQQA1oSDBCqQCgCNDIAIQAsgFAugKQERg/CXh9QCXh/BrIKg");
	this.shape_216.setTransform(977.0608,249.368);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FF6699").s().p("AiUK7QhhgVh6g8Qhxg6hPhTQjEjhA1oQQA1oSDBCqQCgCNDIAIQAsgFAugKQERg/CXh9QCXh/BrIKQBrIIjCDkQhgBzikBJQiZBGifAFIgJAAQhRAAhLgRg");
	this.shape_217.setTransform(977.0608,249.368);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FF6699").ss(5,1,1).p("AKgkwQB1IGi9DoQheB1imBNQibBJigAHQhVAChQgQQhhgUh+g8Qh0g6hQhSQjFjgAyoRQAyoRDCCoQChCMDFAIQAtgGAugLQEPhECUiBQCViBB1IHg");
	this.shape_218.setTransform(977.552,248.5224);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FF6699").s().p("AiMLCQhhgUh+g8Qh0g6hQhSQjFjgAyoRQAyoRDCCoQChCMDFAIQAtgGAugLQEPhECUiBQCViBB1IHQB1IGi9DoQheB1imBNQibBJigAHIgPAAQhNAAhJgOg");
	this.shape_219.setTransform(977.552,248.5224);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#FF6699").ss(5,1,1).p("AKiktQBzIHi/DmQhfB1imBMQibBIihAGQhVAChQgRQhhgUh9g9Qhzg6hRhTQjDjhA0oQQA2oSDBCqQCgCMDFAJQAtgGAtgKQEQhDCViAQCViABzIIg");
	this.shape_220.setTransform(977.3303,248.8909);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FF6699").s().p("AiQLAQhhgUh9g9Qhzg6hRhTQjDjhA0oQQA2oSDBCqQCgCMDFAJQAtgGAtgKQEQhDCViAQCViABzIIQBzIHi/DmQhfB1imBMQibBIihAGIgOAAQhNAAhKgPg");
	this.shape_221.setTransform(977.3303,248.8909);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FF6699").ss(5,1,1).p("AKjkrQBwIIjADmQhfBzinBMQibBHihAFQhVABhPgRQhhgVh+g9Qhyg6hQhTQjDjjA4oQQA3oQDBCqQCfCNDFAKQAtgFAugMQEQhBCWh/QCVh/BwIIg");
	this.shape_222.setTransform(977.1135,249.2484);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FF6699").s().p("AiTK+QhhgVh+g9Qhyg6hQhTQjDjjA4oQQA3oQDBCqQCfCNDFAKQAtgFAugMQEQhBCWh/QCVh/BwIIQBwIIjADmQhfBzinBMQibBHihAFIgJAAQhQAAhLgQg");
	this.shape_223.setTransform(977.1135,249.2484);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FF6699").ss(5,1,1).p("AKlkpQBtIIjBDlQhgBzinBLQicBGigAFQhWABhPgSQhhgVh9g+Qhyg7hPhUQjCjjA6oQQA7oQC/CrQCfCODFALQAtgFAugLQEQhACXh+QCWh+BtIIg");
	this.shape_224.setTransform(976.8894,249.641);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FF6699").s().p("AiXK8QhhgVh9g+Qhyg7hPhUQjCjjA6oQQA7oQC/CrQCfCODFALQAtgFAugLQEQhACXh+QCWh+BtIIQBtIIjBDlQhgBzinBLQicBGigAFIgJAAQhRAAhLgRg");
	this.shape_225.setTransform(976.8894,249.641);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FF6699").ss(5,1,1).p("AKmknQBrIJjCDkQhhByinBKQidBGigAEQhWAAhPgSQhggWh9g/Qhyg7hPhUQjAjkA9oQQA9oQC+CsQCeCPDFAMQAtgFAugLQERg+CXh9QCXh+BqIJg");
	this.shape_226.setTransform(976.6783,250.0241);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FF6699").s().p("AibK6QhggWh9g/Qhyg7hPhUQjAjkA9oQQA9oQC+CsQCeCPDFAMQAtgFAugLQERg+CXh9QCXh+BqIJQBrIJjCDkQhhByinBKQidBGigAEQhWAAhPgSg");
	this.shape_227.setTransform(976.6783,250.0241);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#FF6699").ss(5,1,1).p("AKokkQBnIJjDDjQhhByioBJQidBEigAEQhWgBhOgSQhhgWh8hAQhyg8hPhUQi/jlBAoPQBAoQC9CtQCdCQDGAMQAsgEAugLQESg8CXh9QCXh9BpIKg");
	this.shape_228.setTransform(976.4522,250.3925);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF6699").s().p("AieK4QhhgWh8hAQhyg8hPhUQi/jlBAoPQBAoQC9CtQCdCQDGAMQAsgEAugLQESg8CXh9QCXh9BpIKQBnIJjDDjQhhByioBJQidBEigAEQhWgBhOgSg");
	this.shape_229.setTransform(976.4522,250.3925);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FF6699").ss(5,1,1).p("AKpkiQBmIJjFDiQhiByioBIQidBEigACQhWAAhPgTQhggXh8hAQhyg9hOhUQi+jnBDoOQBCoQC9CuQCdCQDEAOQAtgEAtgKQETg7CYh8QCYh9BlILg");
	this.shape_230.setTransform(976.229,250.7771);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FF6699").s().p("AiiK2QhggXh8hAQhyg9hOhUQi+jnBDoOQBCoQC9CuQCdCQDEAOQAtgEAtgKQETg7CYh8QCYh9BlILQBmIJjFDiQhiByioBIQidBEigACQhWAAhPgTg");
	this.shape_231.setTransform(976.229,250.7771);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#FF6699").ss(5,1,1).p("AKrkgQBiIKjFDhQhiBxipBHQieBEifABQhXgBhOgTQhhgXh7hBQhxg9hOhVQi9joBFoOQBGoQC7CwQCcCRDFAPQAtgFAtgJQETg6CZh7QCYh8BjILg");
	this.shape_232.setTransform(975.9912,251.1454);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FF6699").s().p("AilK0QhhgXh7hBQhxg9hOhVQi9joBFoOQBGoQC7CwQCcCRDFAPQAtgFAtgJQETg6CZh7QCYh8BjILQBiIKjFDhQhiBxipBHQieBEifABQhXgBhOgTg");
	this.shape_233.setTransform(975.9912,251.1454);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#FF6699").ss(5,1,1).p("AKskeQBgILjHDgQhjBwipBHQieBCifABQhXgChOgUQhhgXh7hBQhwg+hNhWQi8joBIoOQBIoPC6CwQCcCSDEAQQAtgEAtgKQETg4Cah6QCZh7BgILg");
	this.shape_234.setTransform(975.7791,251.5299);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FF6699").s().p("AipKxQhhgXh7hBQhwg+hNhWQi8joBIoOQBIoPC6CwQCcCSDEAQQAtgEAtgKQETg4Cah6QCZh7BgILQBgILjHDgQhjBwipBHQieBCifABQhXgChOgUg");
	this.shape_235.setTransform(975.7791,251.5299);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#FF6699").ss(5,1,1).p("AKukbQBdIKjIDgQhkBwipBFQieBCifAAQhXgDhPgUQhggYh7hBQhwg/hNhWQi6jpBKoOQBLoOC6CxQCaCTDFAQQAtgDAtgKQETg3Cah5QCbh6BdIMg");
	this.shape_236.setTransform(975.5377,251.898);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FF6699").s().p("AitKvQhggYh7hBQhwg/hNhWQi6jpBKoOQBLoOC6CxQCaCTDFAQQAtgDAtgKQETg3Cah5QCbh6BdIMQBdIKjIDgQhkBwipBFQieBCifAAQhXgDhPgUg");
	this.shape_237.setTransform(975.5377,251.898);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#FF6699").ss(5,1,1).p("AKvkZQBaIMjJDeQhkBviqBFQieBAifgBQhXgChOgVQhhgYh6hDQhwg/hMhWQi5jqBNoNQBNoPC5CzQCaCTDEASQAtgDAtgKQEUg2Cbh4QCah5BbIMg");
	this.shape_238.setTransform(975.3127,252.216);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FF6699").s().p("AgLLEQhXgChOgVQhhgYh6hDQhwg/hMhWQi5jqBNoNQBNoPC5CzQCaCTDEASQAtgDAtgKQEUg2Cbh4QCah5BbIMQBaIMjJDeQhkBviqBFQicA/icAAIgFAAg");
	this.shape_239.setTransform(975.3127,252.216);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#FF6699").ss(5,1,1).p("AKwkUQBYIMjKDdQhlBviqBEQifBAifgCQhXgDhOgVQhggZh6hDQhwhAhLhWQi5jsBQoMQBRoOC3CzQCZCUDFATQAsgDAugJQEUg1Cbh3QCch5BXINg");
	this.shape_240.setTransform(975.073,252.3401);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FF6699").s().p("AgPLGQhXgDhOgVQhggZh6hDQhwhAhLhWQi5jsBQoMQBRoOC3CzQCZCUDFATQAsgDAugJQEUg1Cbh3QCch5BXINQBYIMjKDdQhlBviqBEQiaA+iaAAIgKAAg");
	this.shape_241.setTransform(975.073,252.3401);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#FF6699").ss(5,1,1).p("AKykPQBVIMjLDcQhmBuiqBDQifA/ifgCQhXgEhOgVQhggah6hDQhvhAhMhXQi3jsBToNQBToNC3C0QCYCUDEAUQAtgDAtgIQEVgzCch3QCch3BVINg");
	this.shape_242.setTransform(974.8344,252.4585);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FF6699").s().p("AgSLHQhXgEhOgVQhggah6hDQhvhAhMhXQi3jsBToNQBToNC3C0QCYCUDEAUQAtgDAtgIQEVgzCch3QCch3BVINQBVIMjLDcQhmBuiqBDQiZA9iZAAIgMAAg");
	this.shape_243.setTransform(974.8344,252.4585);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#FF6699").ss(5,1,1).p("AKzkKQBSIMjMDbQhmBuirBCQifA+ifgDQhXgEhOgWQhggah5hEQhvhBhLhXQi2jtBVoMQBWoNC2C1QCXCWDEAUQAtgCAugJQEVgxCch2QCdh3BSIOg");
	this.shape_244.setTransform(974.6052,252.5503);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FF6699").s().p("AgWLIQhXgEhOgWQhggZh5hFQhvhBhLhXQi2jtBVoMQBWoNC2C1QCXCWDEAUQAtgCAugJQEVgxCch2QCdh3BSIOQBSIMjMDbQhmBuirBCQiXA7iWAAIgRAAg");
	this.shape_245.setTransform(974.6052,252.5503);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#FF6699").ss(5,1,1).p("AK0kFQBQINjODaQhnBtirBBQifA+ifgFQhXgEhOgWQhfgbh6hFQhuhBhLhYQi0jtBYoMQBYoMC2C1QCWCXDEAWQAtgDAtgIQEVgwCeh1QCdh3BPIPg");
	this.shape_246.setTransform(974.3511,252.6807);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FF6699").s().p("AgaLJQhXgEhOgWQhfgbh6hFQhuhBhLhYQi0jtBYoMQBYoMC2C1QCWCXDEAWQAtgDAtgIQEVgwCeh1QCdh3BPIPQBQINjODaQhnBtirBBQiUA6iUAAIgWgBg");
	this.shape_247.setTransform(974.3511,252.6807);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#FF6699").ss(5,1,1).p("AK2j/QBNINjPDZQhnBtisA/QigA9ifgFQhWgFhOgWQhggch4hFQhvhChKhYQizjvBboLQBcoMC0C2QCVCYDEAXQAtgCAtgIQEWgvCeh0QCdh1BNIPg");
	this.shape_248.setTransform(974.0986,252.787);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FF6699").s().p("AgeLLQhWgFhOgWQhggch4hFQhvhChKhYQizjvBboLQBcoMC0C2QCVCYDEAXQAtgCAtgIQEWgvCeh0QCdh1BNIPQBNINjPDZQhnBtisA/QiUA4iTAAIgYAAg");
	this.shape_249.setTransform(974.0986,252.787);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#FF6699").ss(5,1,1).p("AK3j7QBKIPjQDXQhoBsisA/QigA8ifgGQhWgFhOgXQhfgch5hGQhuhDhJhZQiyjwBeoKQBeoLCzC3QCVCZDEAYQAtgCAtgIQEWgtCeh0QCfh0BJIPg");
	this.shape_250.setTransform(973.8323,252.9211);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FF6699").s().p("AgiLMQhWgFhOgXQhfgch5hGQhuhDhJhZQiyjwBeoKQBeoLCzC3QCVCZDEAYQAtgCAtgIQEWgtCeh0QCfh0BJIPQBKIPjQDXQhoBsisA/QiRA2iRAAIgdAAg");
	this.shape_251.setTransform(973.8323,252.9211);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#FF6699").ss(5,1,1).p("AK5j2QBGIPjRDWQhoBrisA/QihA7ifgHQhWgGhOgYQhfgch4hHQhuhDhJhZQiwjwBhoLQBhoKCyC4QCUCZDDAZQAtgBAugIQEVgrCghzQCfhzBHIPg");
	this.shape_252.setTransform(973.5805,253.0547);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FF6699").s().p("AgmLNQhWgGhOgYQhfgch4hHQhuhDhJhZQiwjwBhoLQBhoKCyC4QCUCZDDAZQAtgBAugIQEVgrCghzQCfhzBHIPQBGIPjRDWQhoBrisA/QiQA1iOAAIgigBg");
	this.shape_253.setTransform(973.5805,253.0547);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#FF6699").ss(5,1,1).p("AK6jwQBEIPjTDVQhpBrisA9QihA6ifgIQhWgGhOgYQhfgdh4hHQhthEhIhZQivjyBkoJQBkoLCxC6QCSCaDEAaQAtgBAtgHQEXgrCfhxQCghzBEIQg");
	this.shape_254.setTransform(973.3379,253.1434);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FF6699").s().p("AgqLOQhWgGhOgYQhfgdh4hHQhthEhIhZQivjyBkoJQBkoLCxC6QCSCaDEAaQAtgBAtgHQEXgrCfhxQCghzBEIQQBEIPjTDVQhpBrisA9QiOAziMAAIgmgBg");
	this.shape_255.setTransform(973.3379,253.1434);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FF6699").ss(5,1,1).p("AK8jrQBAIPjTDUQhqBrisA8QiiA5ifgJQhWgGhOgZQhegdh3hIQhthFhIhZQiujzBnoJQBnoJCwC6QCRCaDEAcQAtgCAugGQEWgpCghxQChhyBBIRg");
	this.shape_256.setTransform(973.0387,253.2897);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FF6699").s().p("AguLPQhWgGhOgZQhegdh3hIQhthFhIhZQiujzBnoJQBnoJCwC6QCRCaDEAcQAtgCAugGQEWgpCghxQChhyBBIRQBAIPjTDUQhqBrisA8QiMAxiJAAIgsgBg");
	this.shape_257.setTransform(973.0387,253.2897);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FF6699").ss(5,1,1).p("AK9jmQA+IQjVDTQhqBqitA7QiiA4ifgKQhXgGhNgZQhegeh3hJQhshFhIhaQisj0BqoIQBqoJCuC7QCRCcDEAcQAsgBAugGQEXgoChhwQChhwA+IQg");
	this.shape_258.setTransform(972.7917,253.3879);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FF6699").s().p("AgyLQQhXgGhNgZQhegeh3hJQhshFhIhaQisj0BqoIQBqoJCuC7QCRCcDEAcQAsgBAugGQEXgoChhwQChhwA+IQQA+IQjVDTQhqBqitA7QiLAviIAAIgugBg");
	this.shape_259.setTransform(972.7917,253.3879);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#FF6699").ss(5,1,1).p("AK+jhQA7IQjWDSQhrBpitA6QiiA4ifgLQhWgIhOgZQhegeh2hJQhshGhHhbQirj0BsoIQBtoJCuC9QCQCdDDAdQAtgBAugGQEXgmChhvQCihwA7IRg");
	this.shape_260.setTransform(972.5231,253.5045);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FF6699").s().p("Ag2LRQhWgIhOgZQhegeh2hJQhshGhHhbQirj0BsoIQBtoJCuC9QCQCdDDAdQAtgBAugGQEXgmChhvQCihwA7IRQA7IQjWDSQhrBpitA6QiIAviGAAQgaAAgZgCg");
	this.shape_261.setTransform(972.5231,253.5045);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#FF6699").ss(5,1,1).p("AK/jbQA5IQjYDQQhrBpiuA5QijA2iegLQhWgIhNgZQhfgfh2hKQhrhHhHhaQipj2BvoHQBvoICtC9QCQCeDDAeQAtAAAtgHQEXgkCjhuQCihvA4ISg");
	this.shape_262.setTransform(972.2747,253.6222);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FF6699").s().p("Ag6LSQhWgIhNgZQhfgfh2hKQhrhHhHhaQipj2BvoHQBvoICtC9QCQCeDDAeQAtAAAtgHQEXgkCjhuQCihvA4ISQA5IQjYDQQhrBpiuA5QiHAtiEAAQgbAAgbgCg");
	this.shape_263.setTransform(972.2747,253.6222);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#FF6699").ss(5,1,1).p("ALAjWQA2IQjZDQQhsBoiuA4QijA2iegNQhWgIhNgaQhegfh2hLQhrhHhGhbQioj3ByoGQBzoICrC/QCOCdDDAgQAtAAAugGQEXgiCjhuQCjhuA1ISg");
	this.shape_264.setTransform(972.0008,253.7377);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FF6699").s().p("Ag+LTQhWgIhNgaQhegfh2hLQhrhHhGhbQioj3ByoGQBzoICrC/QCOCdDDAgQAtAAAugGQEXgiCjhuQCjhuA1ISQA2IQjZDQQhsBoiuA4QiEAriAAAQgfAAgegCg");
	this.shape_265.setTransform(972.0008,253.7377);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FF6699").ss(5,1,1).p("ALCjRQAyIQjZDPQhtBniuA4QijA0ifgNQhWgJhNgaQheggh1hMQhrhHhFhcQinj3B1oGQB1oHCrDAQCNCeDDAhQAsAAAvgGQEYghCjhsQCjhtAzISg");
	this.shape_266.setTransform(971.7365,253.8616);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FF6699").s().p("AhCLUQhWgJhNgaQheggh1hMQhrhHhFhcQinj3B1oGQB1oHCrDAQCNCeDDAhQAsAAAvgGQEYghCjhsQCjhtAzISQAyIQjZDPQhtBniuA4QiDAqiAAAQggAAgfgDg");
	this.shape_267.setTransform(971.7365,253.8616);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#FF6699").ss(5,1,1).p("ALDjMQAvIRjaDNQhtBnivA3QikAziegOQhWgJhNgbQhdggh1hNQhrhIhFhcQilj4B4oFQB5oGCpDAQCMCgDDAhQAsAAAugFQEYgfCkhsQCkhsAwISg");
	this.shape_268.setTransform(971.4644,253.9786);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FF6699").s().p("AhGLVQhWgJhNgbQhdggh1hNQhrhIhFhcQilj4B4oFQB5oGCpDAQCMCgDDAhQAsAAAugFQEYgfCkhsQCkhsAwISQAvIRjaDNQhtBnivA3QiBAoh9AAQgiAAgigDg");
	this.shape_269.setTransform(971.4644,253.9786);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FF6699").ss(5,1,1).p("ALEjGQAtIQjcDMQhtBniwA1QijAzifgPQhWgKhMgbQheghh0hNQhqhIhFhdQikj5B7oFQB7oFCpDBQCLChDDAiQAsABAugFQEYgeClhrQClhrAsITg");
	this.shape_270.setTransform(971.1893,254.0874);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FF6699").s().p("AhKLWQhWgKhMgbQheghh0hNQhqhIhFhdQikj5B7oFQB7oFCpDBQCLChDDAiQAsABAugFQEYgeClhrQClhrAsITQAtIQjcDMQhtBniwA1Qh+Aoh7AAQglAAgkgEg");
	this.shape_271.setTransform(971.1893,254.0874);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#FF6699").ss(5,1,1).p("ALFjCQAqISjdDKQhuBmiwA1QijAxifgPQhWgLhMgbQhegih0hNQhphJhEhdQijj7B+oDQB+oFCnDCQCLCiDCAjQAsABAvgFQEYgcClhqQClhrAqITg");
	this.shape_272.setTransform(970.9266,254.2113);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FF6699").s().p("AhOLXQhWgLhMgbQhegih0hNQhphJhEhdQijj7B+oDQB+oFCnDCQCLCiDCAjQAsABAvgFQEYgcClhqQClhrAqITQAqISjdDKQhuBmiwA1Qh8Amh6AAQgmAAgmgEg");
	this.shape_273.setTransform(970.9266,254.2113);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FF6699").ss(5,1,1).p("ALGi8QAnIRjeDJQhvBmiwAzQikAxiegQQhWgLhMgcQhegihzhOQhphKhDhdQiij7CBoEQCBoECmDEQCKChDCAlQAsABAugEQEZgbClhpQCmhpAnITg");
	this.shape_274.setTransform(970.6502,254.3219);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FF6699").s().p("AhSLYQhWgLhMgcQhegihzhOQhphKhDhdQiij7CBoEQCBoECmDEQCKChDCAlQAsABAugEQEZgbClhpQCmhpAoITQAmIRjeDJQhvBmiwAzQh6Alh3AAQgpAAgogEg");
	this.shape_275.setTransform(970.6502,254.3219);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FF6699").ss(5,1,1).p("ALIi3QAjISjfDIQhvBkiwAzQilAwiegRQhWgMhMgcQhdgjhzhOQhphLhChdQihj9CEoCQCEoDClDEQCJCjDCAmQArABAvgEQEZgaCmhoQCnhoAkITg");
	this.shape_276.setTransform(970.3903,254.4423);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FF6699").s().p("AhWLZQhWgMhMgcQhdgjhzhOQhphLhChdQihj9CEoCQCEoDClDEQCJCjDCAmQArABAvgEQEZgaCmhoQCnhoAkITQAjISjfDIQhvBkiwAzQh5Ajh1AAQgrAAgqgEg");
	this.shape_277.setTransform(970.3903,254.4423);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#FF6699").ss(5,1,1).p("ALIiyQAhISjgDHQhwBkiwAyQilAviegTQhWgMhMgcQhdgjhyhQQhphLhCheQifj8CHoCQCHoDCkDFQCICkDBAnQAsABAvgEQEYgYCnhmQCohoAgITg");
	this.shape_278.setTransform(970.1046,254.534);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FF6699").s().p("AhaLZQhWgMhMgcQhdgjhyhQQhphLhCheQifj8CHoCQCHoDCkDFQCICkDBAnQAsABAvgEQEYgYCnhmQCohoAgITQAhISjgDHQhwBkiwAyQh2AhhzAAQgtAAgtgFg");
	this.shape_279.setTransform(970.1046,254.534);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#FF6699").ss(5,1,1).p("ALKitQAdISjhDGQhwBjixAxQilAuiegTQhWgNhLgdQhdgjhyhQQhohMhCheQidj+CJoBQCKoBCjDFQCHClDBAnQAsADAvgEQEYgXCohmQCohmAeITg");
	this.shape_280.setTransform(969.8415,254.67);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FF6699").s().p("AheLaQhWgNhLgdQhdgjhyhQQhohMhCheQidj+CJoBQCKoBCjDFQCHClDBAnQAsADAvgEQEYgXCohmQCohmAeITQAdISjhDGQhwBjixAxQh0AhhxAAQgvAAgvgGg");
	this.shape_281.setTransform(969.8415,254.67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168}]}).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_239},{t:this.shape_238}]},1).to({state:[{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_243},{t:this.shape_242}]},1).to({state:[{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_247},{t:this.shape_246}]},1).to({state:[{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_251},{t:this.shape_250}]},1).to({state:[{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_255},{t:this.shape_254}]},1).to({state:[{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_259},{t:this.shape_258}]},1).to({state:[{t:this.shape_261},{t:this.shape_260}]},1).to({state:[{t:this.shape_263},{t:this.shape_262}]},1).to({state:[{t:this.shape_265},{t:this.shape_264}]},1).to({state:[{t:this.shape_267},{t:this.shape_266}]},1).to({state:[{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.shape_271},{t:this.shape_270}]},1).to({state:[{t:this.shape_273},{t:this.shape_272}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_277},{t:this.shape_276}]},1).to({state:[{t:this.shape_279},{t:this.shape_278}]},1).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).wait(1));

	// Слой_9
	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#0099CC").ss(5,1,1).p("EgNIggVUAEeAdpAVzAjC");
	this.shape_282.setTransform(1058.225,493.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_282).wait(57));

	// Слой_4
	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#FFFFFF").ss(1,1,1).p("Alpp4QgBgSgBgTQgotkGpM4QALAWALAWQE1JtAOLYQAQM+l3rxQlJqVgorYg");
	this.shape_283.setTransform(1215.3245,367.0561);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AAIL1QlJqVgorYIgCglQgotkGpM4IAWAsQE1JtAOLYQAIGzhjAAQhaAAiylmg");
	this.shape_284.setTransform(1215.3245,367.0561);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_284},{t:this.shape_283}]}).wait(57));

	// Слой_3
	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkYwAQEU0lElVEQDfP9kHQtQkhSUj0ywQjWwdDawQg");
	this.shape_285.setTransform(1314.7936,366.8126,0.6868,0.6868,14.9989);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AkcQtQjWwdDawQQEU0lElVEQDfP9kHQtQiQJDiDAAQiHAAh7pfg");
	this.shape_286.setTransform(1314.7936,366.8126,0.6868,0.6868,14.9989);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_286},{t:this.shape_285}]}).wait(57));

	// Слой_1
	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#00CCCC").ss(1,1,1).p("EiRpgzQMEjTAAAMAAABmhMkjTAAAg");
	this.shape_287.setTransform(970.2375,551.8636,1.0408,1.6822);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#00CCCC").s().p("EiRpAzRMAAAhmhMEjTAAAMAAABmhg");
	this.shape_288.setTransform(970.2375,551.8636,1.0408,1.6822);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_288},{t:this.shape_287}]}).to({state:[{t:this.shape_288},{t:this.shape_287}]},56).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(959,539,982.5,573.3);
// library properties:
lib.properties = {
	id: '67F2DB2DD5C44E438D72E8606D61AFFE',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_6.png", id:"CachedBmp_6"},
		{src:"images/з6_atlas_1.png", id:"з6_atlas_1"},
		{src:"images/з6_atlas_2.png", id:"з6_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['67F2DB2DD5C44E438D72E8606D61AFFE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;