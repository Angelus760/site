(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"з4_atlas_1", frames: [[1226,469,219,572],[1447,490,242,484],[985,469,239,530],[1508,0,393,488],[0,0,983,776],[985,0,521,467]]}
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



(lib.CachedBmp_8 = function() {
	this.initialize(ss["з4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["з4_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["з4_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["з4_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2655,792);


(lib.CachedBmp_3 = function() {
	this.initialize(ss["з4_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["з4_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2754,198);// helper functions:

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


(lib.птица = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(11.25,21.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.птица, new cjs.Rectangle(-0.5,-0.5,121.3,308.4), null);


(lib.обезьяна = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(25.2,-0.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(0,17.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.обезьяна, new cjs.Rectangle(0,-0.4,196.5,265), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-0.5,-0.5,1327.5,396), null);


(lib.Анимация4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-245.55,-193.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.5,-193.9,491.5,388);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgeAAQAAANAJAJQAJAJANAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgNAAgJAJQgJAJAAAMg");
	this.shape.setTransform(132.3,-55.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFCC00").ss(1,1,1).p("AHqvoQgFAAgEAAQmMALkZEaQhpBphEB5Qh4DXAAEKQAAELB4DYQBEB4BpBpQA/A/BFAyQDuCrEzAJQAEAAAFAA");
	this.shape_1.setTransform(54.775,-51.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(1,1,1).p("AoGPpQAFAAAFAAQAFAAAFAAQAAAAACAAQAEAAADAAQAEAAAEAAQGeAAElklQB0h0BHiHQACgFADgFQAbg3AUg4QAehYAOhfQAKhKAAhPQAAhNgKhKQgOhfgehYQgUg5gbg2QgDgFgCgFQhHiIh0h0QgXgYgZgVQgoglgsgfQidhxi8gqQhugZh4AAQgEAAgEAAQgDAAgEAAQgCAAAAAAQgFAAgFAAQgFAAgFAA");
	this.shape_2.setTransform(155.7,-51.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AFOAWQgJgJAAgMQAAgNAJgJQAJgJAOAAQAMAAAJAJQAJAJAAANQAAAMgJAJQgJAJgMAAQgOAAgJgJgAl5AWQgJgJAAgMQAAgNAJgJQAJgJANAAQANAAAJAJQAJAJgBANQABAMgJAJQgJAJgNAAQgNAAgJgJg");
	this.shape_3.setTransform(96.7,-55.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AA4EIQAUhEAAhdQAAhkgXhFQgWhGgfAAQggAAgXBGQgWBFAABkQAABdAUBEIhoAAQg0hYAAh5QAAiDA/heQA/hdBXAAQBYAAA/BdQA/BeAACDQAAB5g1BYg");
	this.shape_4.setTransform(104.075,-34.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,204,51,0.318)").s().p("Ag4DIQgUhDAAheQAAhiAXhHQAWhFAfAAQAgAAAXBFQAWBHAABiQAABegUBDg");
	this.shape_5.setTransform(103.95,-28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#993300").s().p("AAJFEIgJAAQhVgCg9goQhAgogCg4IAAgCIBFAAIBnAAIBxAAIBqAAIA0AAIAAACQgCArgmAiQgLAKgOAJQg3AkhMAFIgSABIgIAAgAEOjqQgmglgBgyIAAgCIEGAAIAAACQgCAngWAfQgHAJgIAIQghAigsAEIgQABQg1AAgmgngAEWkyQgKAJABAOQgBAMAKAJQAJAJANAAQANAAAJgJQAIgJABgMQgBgOgIgJQgJgJgNAAQgNAAgJAJgAnFjqQglglgCgyIAAgCIEGAAIAAACQAAAngXAfQgGAJgJAIQghAigtAEIgPABQg2AAgmgngAmxkyQgJAJAAAOQAAAMAJAJQAIAJANAAQANAAAJgJQAJgJAAgMQAAgOgJgJQgJgJgNAAQgNAAgIAJg");
	this.shape_6.setTransform(102.35,-26.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AiUPpIgIAAIgCAAIgKAAIgJAAIAAlAIgEAAIgHAAIAAAAIgGAAIgFAAQjWAAimh3QgtgggqgqQhuhugviIQgkhmAAh2QAAh1AkhnQAviIBuhuQDBjBESAAIAFAAIAGAAIAAAAIAHAAIAEAAIAAlrIAJAAIAKAAIACAAIAIAAIAHAAQB5AABtAZQC7AqCeBxQAsAfApAlQAZAVAXAYQB0B0BHCIIAEAKQAcA2ATA5QAfBYANBfQALBKAABNQAABPgLBKQgNBfgfBYQgTA4gcA3IgEAKQhHCHh0B0QklElmfAAIgHAAgAmmGzQACA4A/AoQBBAqBcAAIAJAAIAIAAIAIAAIAABrIAGAAQEDgGC6i6QDCjBAAkRQAAkQjCjCQgpgpgughQidhxjJgGIgGAAIAAIfQhYAAg+BeQg/BdAACDQAAB5A0BYIhEAAIgSAAIAAACgAqshIQABAyAlAkQAnAnA1AAIAQgBQAtgEAhgiQAIgIAGgIQAXgfABgnIAAgCIkGAAg");
	this.shape_7.setTransform(121.6,-51.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("A9YXwIAA5BIAIAAQAcABAbACQDgATCyB4QA7ApA1AzQD3DrAAFMQAAFLj3DrQjZDQkpAYQgbACgcAAIgIAAgATHHiQkzgJjuirQhFgyhAg/QhphphDh3Qh5jYAAkLQAAkLB5jXQBDh5BphpQEakaGMgLIAKAAIAAFrIgEAAIgHAAIgBAAIgFAAIgFAAQkSAAjBDBQhuBugvCIQgkBnAAB2QAAB2AkBmQAvCIBuBuQAqApAtAgQClB3DXAAIAFAAIAFAAIABAAIAHAAIAEAAIAAFAIgKAAgATTChIAAhrIASgBQBMgFA4gkQAOgJALgJQAlgiACgrIAAgCIg0AAQA0hYAAh5QAAiDg+heQg/hehZAAIAAofIAGAAQDKAGCdBxQAuAhApApQDCDCAAERQAAERjCDBQi6C5kEAGIgGAAgAWppPQACAyAlAlQAmAnA2AAIAPgBQAtgEAhgiQAIgIAGgJQAXgfABgnIAAgCIkGAAg");
	this.shape_8.setTransform(-19.475,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,-153,416.1,305.1);


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-130.15,-116.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.1,-116.6,260.5,233.5);


(lib.Анимация7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(26.45,-42.4);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.5,-195.4,491.5,390.4);


(lib.лев = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Анимация7("synched",0);
	this.instance.setTransform(199.45,209.8,0.8903,0.8903);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:434.05},9).to({x:691.75},10).to({x:937.9},10).to({scaleX:0.9102,skewY:180,x:1022.5},10).to({x:764.8},10).to({x:472.5},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-183.1,1265.1,787.9);


// stage content:
(lib.з4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.лев();
	this.instance.setTransform(229.5,730.8,1,1,0,0,0,199.7,209.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:371.8,y:728.95},7).to({x:567.95},8).to({x:787.2},7).to({x:1056.4},9).to({scaleX:0.9895,skewY:180,x:973},9).to({x:719.2},10).to({x:332.45},9).to({_off:true},1).wait(1));

	// Layer_4
	this.instance_1 = new lib.птица();
	this.instance_1.setTransform(920.65,302,0.1335,0.1335,0,0,0,61.8,153.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:60.1,regY:153.7,scaleX:0.1481,scaleY:0.1481,x:950.3,y:313.15,alpha:0.2499},0).wait(1).to({scaleX:0.1627,scaleY:0.1627,x:980.15,y:324.4,alpha:0.4999},0).wait(1).to({scaleX:0.1772,scaleY:0.1772,x:1010.05,y:335.65,alpha:0.7498},0).wait(1).to({scaleX:0.1918,scaleY:0.1918,x:1039.95,y:346.9,alpha:0.9998},0).wait(1).to({scaleX:0.2064,scaleY:0.2064,x:1069.85,y:358.1},0).wait(1).to({scaleX:0.2209,scaleY:0.2209,x:1099.75,y:369.4},0).wait(1).to({scaleX:0.2355,scaleY:0.2355,y:369.45},0).wait(1).to({scaleX:0.2567,scaleY:0.2567,x:1085.9,y:373.2},0).wait(1).to({scaleX:0.278,scaleY:0.278,x:1071.7,y:375.75},0).wait(1).to({scaleX:0.2992,scaleY:0.2992,x:1057.4,y:377.15},0).wait(1).to({scaleX:0.3204,scaleY:0.3204,x:1043,y:377.3},0).wait(1).to({scaleX:0.3417,scaleY:0.3417,x:1028.65,y:376.1},0).wait(1).to({scaleX:0.3629,scaleY:0.3629,x:1014.4,y:373.85},0).wait(1).to({scaleX:0.3841,scaleY:0.3841,x:1000.35,y:371.05},0).wait(1).to({scaleX:0.4054,scaleY:0.4054,x:986.25,y:367.75,alpha:0.9999},0).wait(1).to({scaleX:0.4266,scaleY:0.4266,x:972.3,y:364.4},0).wait(1).to({scaleX:0.4479,scaleY:0.4479,x:958.25,y:361},0).wait(1).to({scaleX:0.4691,scaleY:0.4691,x:944.35,y:357.45},0).wait(1).to({scaleX:0.4903,scaleY:0.4903,x:930.4,y:353.75},0).wait(1).to({scaleX:0.5116,scaleY:0.5116,x:916.55,y:349.95},0).wait(1).to({scaleX:0.5328,scaleY:0.5328,x:902.7,y:345.85},0).wait(1).to({scaleX:0.554,scaleY:0.554,x:888.95,y:341.6},0).wait(1).to({scaleX:0.5753,scaleY:0.5753,x:875.15,y:337.25},0).wait(1).to({scaleX:0.5965,scaleY:0.5965,x:861.5,y:332.85},0).wait(1).to({scaleX:0.6177,scaleY:0.6177,x:847.85,y:328.25},0).wait(1).to({scaleX:0.639,scaleY:0.639,x:834.2,y:323.6,alpha:1},0).wait(1).to({scaleX:0.6602,scaleY:0.6602,x:820.65,y:318.9},0).wait(1).to({scaleX:0.6815,scaleY:0.6815,x:807.05,y:314},0).wait(1).to({scaleX:0.7027,scaleY:0.7027,x:793.55,y:309.05},0).wait(1).to({scaleX:0.7239,scaleY:0.7239,x:780,y:304.15},0).wait(1).to({scaleX:0.7452,scaleY:0.7452,x:766.35,y:299.65},0).wait(1).to({scaleX:0.7648,scaleY:0.7648,x:752.05,y:295.1,alpha:0.9231},0).wait(1).to({scaleX:0.7844,scaleY:0.7844,x:737.75,y:290.6,alpha:0.8462},0).wait(1).to({scaleX:0.804,scaleY:0.804,x:723.4,y:286.1,alpha:0.7692},0).wait(1).to({scaleX:0.8236,scaleY:0.8236,x:709.1,y:281.7,alpha:0.6923},0).wait(1).to({scaleX:0.8432,scaleY:0.8432,x:694.8,y:277.25,alpha:0.6154},0).wait(1).to({scaleX:0.8628,scaleY:0.8628,x:680.5,y:272.8,alpha:0.5385},0).wait(1).to({scaleX:0.8824,scaleY:0.8824,x:666.2,y:268.35,alpha:0.4615},0).wait(1).to({scaleX:0.902,scaleY:0.902,x:651.85,y:263.95,alpha:0.3846},0).wait(1).to({scaleX:0.9216,scaleY:0.9216,x:637.6,y:259.45,alpha:0.3077},0).wait(1).to({scaleX:0.9412,scaleY:0.9412,x:623.25,y:254.95,alpha:0.2308},0).wait(1).to({scaleX:0.9608,scaleY:0.9608,x:609,y:250.45,alpha:0.1538},0).to({_off:true},1).wait(7).to({_off:false,regX:61.8,regY:153.8,scaleX:0.9804,scaleY:0.9804,x:599.9,y:247.2,alpha:0.0703},0).to({_off:true},1).wait(8).to({_off:false,regY:153.9,scaleX:1,scaleY:1,x:592.95,y:244.85,alpha:0},0).to({_off:true},1).wait(1));

	// ОБЕЗЬЯНА_ДОП
	this.instance_2 = new lib.обезьяна();
	this.instance_2.setTransform(441.95,66.85,1,1,0,0,0,23.4,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7.6868,x:471.35,y:62.05},9).to({regY:54.3,rotation:8.2353,x:466.9,y:56.5},6).to({regX:23.5,regY:54.4,scaleX:0.9999,scaleY:0.9999,rotation:-8.0731,x:459.45,y:54.05},7).to({regX:23.6,regY:54.5,rotation:8.4515,x:451,y:58.85},7).to({rotation:-9.3639,x:454.85,y:33.45},10).to({regX:23.7,scaleX:1,scaleY:1,rotation:9.3805,x:454.2,y:48.2},8).to({regX:23.4,regY:54.2,rotation:0,x:441.95,y:66.85},12).to({_off:true},1).wait(1));

	// трава
	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(-0.45,811.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},60).wait(1));

	// дерево
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663333").ss(1,1,1).p("EAAlAjyIhJAAEAAlAjyIAALIEAAlgu5MAAABSr");
	this.shape.setTransform(1372.3375,566.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("EACXBIdIhGnFUgPngyEgJbhXwIPaAAMAgJCQ5g");
	this.shape_1.setTransform(1223.825,460.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},60).wait(1));

	// палка
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EikOgEeUCqaAFbCeDABIIhDCaUiKiAACilygGOg");
	this.shape_2.setTransform(749.4614,323.7009,0.4049,2.2664,7.7044);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("EiNIgBtI3GixUCqaAFbCeDABIIhDCaIhdAAUiJ8AAAik7gGMg");
	this.shape_3.setTransform(749.4614,323.7009,0.4049,2.2664,7.7044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},60).wait(1));

	// облака
	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(694.1,209.95,1,1,0,0,0,663.3,197.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:663.2,regY:197.5,x:699.75,y:209.6},0).wait(1).to({x:705.5,y:209.05},0).wait(1).to({x:711.3,y:208.55},0).wait(1).to({x:717.05,y:208},0).wait(1).to({x:722.8,y:207.5},0).wait(1).to({x:728.6,y:206.95},0).wait(1).to({x:734.35,y:206.45},0).wait(1).to({x:740.15,y:205.9},0).wait(1).to({x:745.9,y:205.4},0).wait(1).to({x:751.65,y:204.85},0).wait(1).to({x:757.45,y:204.35},0).wait(1).to({x:763.2,y:203.8},0).wait(1).to({x:768.95,y:203.25},0).wait(1).to({x:774.75,y:202.75},0).wait(1).to({x:780.5,y:202.2},0).wait(1).to({x:786.3,y:201.7},0).wait(1).to({x:792.05,y:201.15},0).wait(1).to({x:797.8,y:200.65},0).wait(1).to({x:803.6,y:200.1},0).wait(1).to({x:809.35,y:199.6},0).wait(1).to({x:815.1,y:199.05},0).wait(1).to({x:820.9,y:198.55},0).wait(1).to({x:826.65,y:198},0).wait(1).to({x:832.45,y:197.5},0).wait(1).to({x:839.75,y:194.55},0).wait(1).to({x:847.05,y:191.55},0).wait(1).to({x:854.35,y:188.6},0).wait(1).to({x:861.65,y:185.6},0).wait(1).to({x:868.95,y:182.6},0).wait(1).to({x:876.25,y:179.65},0).wait(1).to({x:883.6,y:176.65},0).wait(1).to({x:890.9,y:173.7},0).wait(1).to({x:898.2,y:170.7},0).wait(1).to({x:905.5,y:167.7},0).wait(1).to({x:912.8,y:164.75},0).wait(1).to({x:920.1,y:161.75},0).wait(1).to({x:927.4,y:158.8},0).wait(1).to({x:934.75,y:155.8},0).wait(1).to({x:942.05,y:152.8},0).wait(1).to({x:949.35,y:149.85},0).wait(1).to({x:956.65,y:146.85},0).wait(1).to({x:963.95,y:143.9},0).wait(1).to({x:971.25,y:140.9},0).wait(1).to({x:978.6,y:137.9},0).wait(1).to({x:965.25},0).wait(1).to({x:951.9},0).wait(1).to({x:938.6},0).wait(1).to({x:925.25},0).wait(1).to({x:911.9},0).wait(1).to({x:898.6},0).wait(1).to({x:885.25},0).wait(1).to({x:871.9},0).wait(1).to({x:858.6},0).wait(1).to({x:845.25},0).wait(1).to({x:831.9},0).wait(1).to({x:818.6},0).wait(1).to({x:805.25},0).wait(1).to({x:791.9},0).wait(1).to({x:778.6},0).wait(1).to({x:251.75,y:224.4},0).wait(1));

	// солнце
	this.instance_5 = new lib.Анимация2("synched",0);
	this.instance_5.setTransform(142.6,121.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0.1,regY:0.1,scaleX:1.032,scaleY:1.032,x:142.7,y:121.3},0).wait(1).to({scaleX:1.064,scaleY:1.064},0).wait(1).to({scaleX:1.096,scaleY:1.096},0).wait(1).to({scaleX:1.128,scaleY:1.128},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.192,scaleY:1.192},0).wait(1).to({scaleX:1.224,scaleY:1.224},0).wait(1).to({scaleX:1.256,scaleY:1.256,x:142.75,y:121.35},0).wait(1).to({scaleX:1.288,scaleY:1.288},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.2954,scaleY:1.2954},0).wait(1).to({scaleX:1.2708,scaleY:1.2708},0).wait(1).to({scaleX:1.2461,scaleY:1.2461,x:142.7,y:121.3},0).wait(1).to({scaleX:1.2215,scaleY:1.2215},0).wait(1).to({scaleX:1.1969,scaleY:1.1969},0).wait(1).to({scaleX:1.1723,scaleY:1.1723},0).wait(1).to({scaleX:1.1477,scaleY:1.1477},0).wait(1).to({scaleX:1.1231,scaleY:1.1231},0).wait(1).to({scaleX:1.0985,scaleY:1.0985},0).wait(1).to({scaleX:1.0738,scaleY:1.0738},0).wait(1).to({scaleX:1.0492,scaleY:1.0492},0).wait(1).to({scaleX:1.0246,scaleY:1.0246},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.0571,scaleY:1.0571},0).wait(1).to({scaleX:1.1143,scaleY:1.1143},0).wait(1).to({scaleX:1.1714,scaleY:1.1714},0).wait(1).to({scaleX:1.2286,scaleY:1.2286},0).wait(1).to({scaleX:1.2857,scaleY:1.2857,x:142.75,y:121.35},0).wait(1).to({scaleX:1.3429,scaleY:1.3429},0).wait(1).to({scaleX:1.4,scaleY:1.4},0).wait(1).to({scaleX:1.4571,scaleY:1.4571},0).wait(1).to({scaleX:1.5143,scaleY:1.5143},0).wait(1).to({scaleX:1.5714,scaleY:1.5714},0).wait(1).to({scaleX:1.6286,scaleY:1.6286},0).wait(1).to({scaleX:1.6857,scaleY:1.6857},0).wait(1).to({scaleX:1.7429,scaleY:1.7429},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:142.8,y:121.4},0).wait(1).to({scaleX:1.7385,scaleY:1.7385,x:142.75,y:121.35},0).wait(1).to({scaleX:1.6769,scaleY:1.6769},0).wait(1).to({scaleX:1.6154,scaleY:1.6154},0).wait(1).to({scaleX:1.5538,scaleY:1.5538},0).wait(1).to({scaleX:1.4923,scaleY:1.4923},0).wait(1).to({scaleX:1.4308,scaleY:1.4308},0).wait(1).to({scaleX:1.3692,scaleY:1.3692},0).wait(1).to({scaleX:1.3077,scaleY:1.3077},0).wait(1).to({scaleX:1.2462,scaleY:1.2462,x:142.7,y:121.3},0).wait(1).to({scaleX:1.1846,scaleY:1.1846},0).wait(1).to({scaleX:1.1231,scaleY:1.1231},0).wait(1).to({scaleX:1.0615,scaleY:1.0615},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(276.1,362.4,1366.3000000000002,754.5000000000001);
// library properties:
lib.properties = {
	id: '63E187045BFD5F458961F53E72CEEDC3',
	width: 1376,
	height: 902,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_4.png", id:"CachedBmp_4"},
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/з4_atlas_1.png", id:"з4_atlas_1"}
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
an.compositions['63E187045BFD5F458961F53E72CEEDC3'] = {
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