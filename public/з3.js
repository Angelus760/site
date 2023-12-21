(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"з3_atlas_1", frames: [[0,0,1600,1066]]},
		{name:"з3_atlas_2", frames: [[0,1102,448,414],[0,1518,176,176],[0,0,550,1100]]}
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



(lib._1648948510_1vsegdapomnimcompvolshebniilesfoto1 = function() {
	this.initialize(ss["з3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.карета2 = function() {
	this.initialize(ss["з3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.колесо2 = function() {
	this.initialize(ss["з3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.крылоправое = function() {
	this.initialize(img.крылоправое);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1746,2415);


(lib.эльф = function() {
	this.initialize(ss["з3_atlas_2"]);
	this.gotoAndStop(2);
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


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.колесо2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,176,176), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.крылоправое();
	this.instance.setTransform(0,0,0.1822,0.1822);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,318.2,440.1), null);


(lib.символ1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.колесо2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.символ1, new cjs.Rectangle(0,0,176,176), null);


(lib.крылопр = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(165.1,228,1,1,0,0,0,159.1,220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9691},0).wait(1).to({scaleX:0.9382,x:165.05},0).wait(1).to({scaleX:0.9073},0).wait(1).to({scaleX:0.8764,x:165.1},0).wait(1).to({scaleX:0.8455,x:165.05},0).wait(1).to({scaleX:0.8146},0).wait(1).to({scaleX:0.7837,x:165.1},0).wait(1).to({scaleX:0.7528,x:165.05},0).wait(1).to({scaleX:0.7219},0).wait(1).to({scaleX:0.691,x:165.1},0).wait(1).to({scaleX:0.6601,x:165.05},0).wait(1).to({scaleX:0.6292},0).wait(1).to({scaleX:0.6566,y:227.9},0).wait(1).to({scaleX:0.684,x:165.1,y:227.8},0).wait(1).to({scaleX:0.7114,x:165.05,y:227.7},0).wait(1).to({scaleX:0.7389,y:227.6},0).wait(1).to({scaleX:0.7663,y:227.5},0).wait(1).to({scaleX:0.7937,x:165.1,y:227.45},0).wait(1).to({scaleX:0.8211,y:227.35},0).wait(1).to({scaleX:0.8485,x:165.05,y:227.25},0).wait(1).to({scaleX:0.876,y:227.15},0).wait(1).to({scaleX:0.9034,x:165.1,y:227.05},0).wait(1).to({scaleX:0.9308,y:227},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,7,318.2,441.1);


(lib.колесосимвол = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol3();
	this.instance.setTransform(88,88,1,1,0,0,0,88,88);

	this.instance_1 = new lib.символ1();
	this.instance_1.setTransform(87.95,88,1,1,59.9996,0,0,88,87.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.7497,x:87.95},0).wait(1).to({rotation:7.4995,y:88.05},0).wait(1).to({rotation:11.2492,x:88,y:88},0).wait(1).to({rotation:14.9989},0).wait(1).to({rotation:20.9986,x:87.95,y:88.05},0).wait(1).to({rotation:26.9983,y:88},0).wait(1).to({rotation:32.998,x:88},0).wait(1).to({rotation:38.9977,x:87.95,y:88.05},0).wait(1).to({rotation:44.9974,x:88,y:88},0).wait(1).to({rotation:50.9972,y:88.05},0).wait(1).to({rotation:56.9969},0).wait(1).to({rotation:62.9967,y:88},0).wait(1).to({rotation:68.9964,y:88.05},0).wait(1).to({rotation:74.9962},0).wait(1).to({rotation:77.9961,y:88},0).wait(1).to({rotation:80.996,x:87.95},0).wait(1).to({rotation:83.9958,x:88},0).wait(1).to({rotation:86.9957,x:87.95,y:88.05},0).wait(1).to({rotation:89.9956,y:88},0).wait(1).to({rotation:92.9955},0).wait(1).to({rotation:95.9954,x:88,y:87.95},0).wait(1).to({rotation:98.9952},0).wait(1).to({rotation:101.9951,x:87.95,y:88},0).wait(1).to({rotation:104.995,x:88},0).wait(4).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-36.4,248.9,248.9);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.эльф();
	this.instance.setTransform(86.3,11.25,0.0938,0.0953,0,0,180);

	this.instance_1 = new lib.крылопр();
	this.instance_1.setTransform(92.05,44.65,0.1983,0.2022,0,0,0,165.2,228.7);

	this.instance_2 = new lib.крылопр();
	this.instance_2.setTransform(31.65,44.6,0.1991,0.2022,0,0,180,165.2,228.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,123.6,116.1), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.колесосимвол();
	this.instance.setTransform(438.95,416,1,1,0,0,0,88,88);

	this.instance_1 = new lib.колесосимвол();
	this.instance_1.setTransform(103,416,1.1705,1.1705,0,0,0,88,88);

	this.instance_2 = new lib.карета2();
	this.instance_2.setTransform(52.95,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,527,519), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.эльф();
	this.instance.setTransform(125.95,62.95,0.4583,0.4583);

	this.instance_1 = new lib.крылопр();
	this.instance_1.setTransform(150,220,0.9425,1,0,0,180,165,228);

	this.instance_2 = new lib.крылопр();
	this.instance_2.setTransform(359.05,225.25,1,1,0,0,0,165.1,228.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,518.1,567.1), null);


(lib.эльф2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ5();
	this.instance.setTransform(-171.9,202.75,1,1,0,0,0,61.8,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:57.9,scaleX:1.0187,scaleY:1.0187,x:-157,y:198.15},0).wait(1).to({scaleX:1.0374,scaleY:1.0374,x:-142.15,y:193.6},0).wait(1).to({scaleX:1.0562,scaleY:1.0562,x:-127.3,y:189.1},0).wait(1).to({scaleX:1.0749,scaleY:1.0749,x:-112.4,y:184.65},0).wait(1).to({scaleX:1.0936,scaleY:1.0936,x:-97.55,y:180.1},0).wait(1).to({scaleX:1.1123,scaleY:1.1123,x:-82.7,y:175.6},0).wait(1).to({scaleX:1.1311,scaleY:1.1311,x:-67.85,y:171.1},0).wait(1).to({scaleX:1.1498,scaleY:1.1498,x:-53,y:166.6},0).wait(1).to({scaleX:1.1685,scaleY:1.1685,x:-38.15,y:162.1},0).wait(1).to({scaleX:1.1872,scaleY:1.1872,x:-23.3,y:157.6},0).wait(1).to({scaleX:1.206,scaleY:1.206,x:-8.4,y:153.15},0).wait(1).to({scaleX:1.2247,scaleY:1.2247,x:6.45,y:148.6},0).wait(1).to({scaleX:1.2434,scaleY:1.2434,x:21.3,y:144.1},0).wait(1).to({scaleX:1.2621,scaleY:1.2621,x:36.15,y:139.6},0).wait(1).to({scaleX:1.2809,scaleY:1.2809,x:46.15,y:131.9},0).wait(1).to({scaleX:1.2996,scaleY:1.2996,x:56.15,y:124.25},0).wait(1).to({scaleX:1.3183,scaleY:1.3183,x:66.15,y:116.6},0).wait(1).to({scaleX:1.337,scaleY:1.337,x:76.2,y:108.9},0).wait(1).to({scaleX:1.3558,scaleY:1.3558,x:86.15,y:101.25},0).wait(1).to({scaleX:1.3745,scaleY:1.3745,x:96.15,y:93.6},0).wait(1).to({scaleX:1.3932,scaleY:1.3932,x:106.15,y:85.9},0).wait(1).to({scaleX:1.4119,scaleY:1.4119,x:116.15,y:78.3},0).wait(1).to({scaleX:1.4307,scaleY:1.4307,x:126.15,y:70.65},0).wait(1).to({scaleX:1.4479,scaleY:1.4479,x:134.3,y:65.75},0).wait(1).to({scaleX:1.4652,scaleY:1.4652,x:142.4,y:60.85},0).wait(1).to({scaleX:1.4824,scaleY:1.4824,x:150.45,y:55.95},0).wait(1).to({scaleX:1.4997,scaleY:1.4997,x:158.6,y:51},0).wait(1).to({scaleX:1.5169,scaleY:1.5169,x:166.7,y:46.1},0).wait(1).to({scaleX:1.5342,scaleY:1.5342,x:174.75,y:41.2},0).wait(1).to({scaleX:1.5514,scaleY:1.5514,x:182.9,y:36.3},0).wait(1).to({scaleX:1.5687,scaleY:1.5687,x:191,y:31.4},0).wait(1).to({scaleX:1.5859,scaleY:1.5859,x:199.05,y:26.45},0).wait(1).to({scaleX:1.6032,scaleY:1.6032,x:207.2,y:21.55},0).wait(1).to({scaleX:1.5456,scaleY:1.5456,x:226,y:19.4},0).wait(1).to({scaleX:1.4881,scaleY:1.4881,x:244.85,y:17.25},0).wait(1).to({scaleX:1.4306,scaleY:1.4306,x:263.7,y:15.1},0).wait(1).to({scaleX:1.373,scaleY:1.373,x:282.55,y:12.9},0).wait(1).to({scaleX:1.3155,scaleY:1.3155,x:301.4,y:10.75},0).wait(1).to({scaleX:1.2579,scaleY:1.2579,x:320.25,y:8.6},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:326.35,y:6.1},0).wait(1).to({scaleX:1.1821,scaleY:1.1821,x:332.4,y:3.6},0).wait(1).to({scaleX:1.1442,scaleY:1.1442,x:338.5,y:1.1},0).wait(1).to({scaleX:1.1063,scaleY:1.1063,x:344.6,y:-1.4},0).wait(1).to({scaleX:1.0683,scaleY:1.0683,x:350.7,y:-3.9},0).wait(1).to({scaleX:1.0304,scaleY:1.0304,x:356.85,y:-6.4},0).wait(1).to({scaleX:0.9925,scaleY:0.9925,x:362.95,y:-8.9},0).wait(1).to({scaleX:0.9546,scaleY:0.9546,x:369.05,y:-11.4},0).wait(1).to({scaleX:0.9166,scaleY:0.9166,x:375.15,y:-13.9},0).wait(1).to({scaleX:0.8787,scaleY:0.8787,x:381.2,y:-16.35},0).wait(1).to({x:386.7,y:-20},0).wait(1).to({x:392.2,y:-23.65},0).wait(1).to({x:397.7,y:-27.35},0).wait(1).to({x:403.2,y:-31},0).wait(1).to({x:408.7,y:-34.65},0).wait(1).to({x:414.2,y:-38.35},0).wait(1).to({x:432.95,y:-67.6},0).wait(1).to({x:451.7,y:-96.85},0).wait(1).to({x:470.45,y:-126.1},0).wait(1).to({x:489.2,y:-155.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.6,-206.2,777,467);


(lib.полнаякарета = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ2();
	this.instance.setTransform(-347.6,295.7,1,1,0,0,0,263.4,259.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:260.4,regY:280.8,scaleX:0.9968,scaleY:0.9968,x:-282.7,y:316.9},0).wait(1).to({scaleX:0.9936,scaleY:0.9936,x:-214.75,y:316.85},0).wait(1).to({scaleX:0.9905,scaleY:0.9905,x:-146.9,y:316.75},0).wait(1).to({scaleX:0.9873,scaleY:0.9873,x:-78.95},0).wait(1).to({scaleX:0.9841,scaleY:0.9841,x:-11.1,y:316.65},0).wait(1).to({scaleX:0.9809,scaleY:0.9809,x:56.85,y:316.6},0).wait(1).to({scaleX:0.9777,scaleY:0.9777,x:124.7,y:316.5},0).wait(1).to({scaleX:0.9746,scaleY:0.9746,x:192.6,y:316.45},0).wait(1).to({scaleX:0.9714,scaleY:0.9714,x:260.45,y:316.35},0).wait(1).to({scaleX:0.9682,scaleY:0.9682,x:285.35,y:312.65},0).wait(1).to({scaleX:0.965,scaleY:0.965,x:310.25,y:309},0).wait(1).to({scaleX:0.9618,scaleY:0.9618,x:335.15,y:305.3},0).wait(1).to({scaleX:0.9587,scaleY:0.9587,x:360.1,y:301.6},0).wait(1).to({scaleX:0.9555,scaleY:0.9555,x:384.95,y:297.95},0).wait(1).to({scaleX:0.9523,scaleY:0.9523,x:409.9,y:294.25},0).wait(1).to({scaleX:0.9491,scaleY:0.9491,x:434.75,y:290.55},0).wait(1).to({scaleX:0.9459,scaleY:0.9459,x:459.65,y:286.85},0).wait(1).to({scaleX:0.9428,scaleY:0.9428,x:484.55,y:283.15},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,x:509.45,y:279.5},0).wait(1).to({scaleX:0.9364,scaleY:0.9364,x:530.15,y:279.45},0).wait(1).to({scaleX:0.9332,scaleY:0.9332,x:550.85,y:279.35},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:571.55,y:279.3},0).wait(1).to({scaleX:0.9269,scaleY:0.9269,x:592.25,y:279.2},0).wait(1).to({scaleX:0.9237,scaleY:0.9237,x:613,y:279.15},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:633.65,y:279.05},0).wait(1).to({scaleX:0.9173,scaleY:0.9173,x:654.35},0).wait(1).to({scaleX:0.9141,scaleY:0.9141,x:675.05,y:278.95},0).wait(1).to({scaleX:0.911,scaleY:0.911,x:695.75,y:278.9},0).wait(1).to({scaleX:0.9078,scaleY:0.9078,x:716.45,y:278.8},0).wait(1).to({scaleX:0.9046,scaleY:0.9046,x:737.15,y:278.75},0).wait(1).to({scaleX:0.9014,scaleY:0.9014,x:757.85,y:278.65},0).wait(1).to({scaleX:0.8982,scaleY:0.8982,x:778.55,y:278.6},0).wait(1).to({scaleX:0.8951,scaleY:0.8951,x:799.2,y:278.55},0).wait(1).to({scaleX:0.8919,scaleY:0.8919,x:825.95,y:276},0).wait(1).to({scaleX:0.8887,scaleY:0.8887,x:852.65,y:273.45},0).wait(1).to({scaleX:0.8855,scaleY:0.8855,x:879.4,y:270.85},0).wait(1).to({scaleX:0.8823,scaleY:0.8823,x:906.05,y:268.3},0).wait(1).to({scaleX:0.8792,scaleY:0.8792,x:932.8,y:265.75},0).wait(1).to({scaleX:0.876,scaleY:0.876,x:959.5,y:263.15},0).wait(1).to({scaleX:0.8728,scaleY:0.8728,x:986.2,y:260.65},0).wait(1).to({scaleX:0.8696,scaleY:0.8696,x:1012.9,y:258.1},0).wait(1).to({scaleX:0.8664,scaleY:0.8664,x:1039.6,y:255.5},0).wait(1).to({scaleX:0.8633,scaleY:0.8633,x:1066.35,y:252.95},0).wait(1).to({scaleX:0.8601,scaleY:0.8601,x:1078.05,y:252.9},0).wait(1).to({scaleX:0.8569,scaleY:0.8569,x:1089.85,y:252.8},0).wait(1).to({scaleX:0.8537,scaleY:0.8537,x:1101.55,y:252.75},0).wait(1).to({scaleX:0.8505,scaleY:0.8505,x:1113.3,y:252.7},0).wait(1).to({scaleX:0.8474,scaleY:0.8474,x:1125,y:252.65},0).wait(1).to({scaleX:0.8442,scaleY:0.8442,x:1136.75,y:252.55},0).wait(1).to({scaleX:0.841,scaleY:0.841,x:1148.5,y:252.5},0).wait(1).to({scaleX:0.8378,scaleY:0.8378,x:1160.2,y:252.4},0).wait(1).to({scaleX:0.8346,scaleY:0.8346,x:1172,y:252.35},0).wait(1).to({scaleX:0.8315,scaleY:0.8315,x:1183.7,y:252.25},0).wait(1).to({scaleX:0.8283,scaleY:0.8283,x:1195.45},0).wait(1).to({scaleX:0.7922,scaleY:0.7922,x:1240.35,y:251.45},0).wait(1).to({scaleX:0.7562,scaleY:0.7562,x:1285.3,y:250.7},0).wait(1).to({scaleX:0.7201,scaleY:0.7201,x:1330.2,y:249.9},0).wait(1).to({scaleX:0.6841,scaleY:0.6841,x:1375.15,y:249.15},0).wait(1).to({scaleX:0.648,scaleY:0.648,x:1420.05,y:248.35},0).wait(1).to({scaleX:0.6326,scaleY:0.6326,x:1430.95,y:248.05},0).wait(1).to({scaleX:0.6171,scaleY:0.6171,x:1441.85,y:247.75},0).wait(1).to({scaleX:0.6017,scaleY:0.6017,x:1452.75,y:247.4},0).wait(1).to({scaleX:0.5862,scaleY:0.5862,x:1463.7,y:247.05},0).wait(1).to({scaleX:0.5708,scaleY:0.5708,x:1474.6,y:246.7},0).wait(1).to({scaleX:0.5553,scaleY:0.5553,x:1485.5,y:246.4},0).wait(1).to({scaleX:0.5399,scaleY:0.5399,x:1496.4,y:246.1},0).wait(1).to({scaleX:0.5244,scaleY:0.5244,x:1507.3,y:245.75},0).wait(1).to({scaleX:0.509,scaleY:0.509,x:1518.2,y:245.4},0).wait(1).to({scaleX:0.4935,scaleY:0.4935,x:1529.1,y:245.1},0).wait(1).to({scaleX:0.4798,scaleY:0.4798,x:1540.7,y:244.8},0).wait(1).to({scaleX:0.4661,scaleY:0.4661,x:1552.25,y:244.5},0).wait(1).to({scaleX:0.4523,scaleY:0.4523,x:1563.9,y:244.2},0).wait(1).to({scaleX:0.4386,scaleY:0.4386,x:1575.45,y:243.9},0).wait(1).to({scaleX:0.4249,scaleY:0.4249,x:1587.05,y:243.65},0).wait(1).to({scaleX:0.4111,scaleY:0.4111,x:1598.6,y:243.35},0).wait(1).to({scaleX:0.3974,scaleY:0.3974,x:1610.15,y:243.05},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,x:1621.8,y:242.7},0).wait(1).to({scaleX:0.3699,scaleY:0.3699,x:1633.35,y:242.45},0).wait(1).to({scaleX:0.3562,scaleY:0.3562,x:1644.95,y:242.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-611,10.6,2350.8,544.6);


(lib.ЭЛЬФИЙКА = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(333.95,393.45,0.6311,0.6311,0,0,0,258.6,283.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:259,regY:283,x:328.25,y:389.25},0).wait(1).to({x:322.3,y:385.4},0).wait(1).to({x:316.4,y:381.55},0).wait(1).to({x:310.45,y:377.65},0).wait(1).to({x:304.5,y:373.8},0).wait(1).to({x:298.6,y:369.95},0).wait(1).to({x:292.65,y:366.1},0).wait(1).to({x:286.7,y:362.2},0).wait(1).to({x:280.8,y:358.35},0).wait(1).to({x:274.85,y:354.5},0).wait(1).to({x:268.95,y:350.65},0).wait(1).to({x:263,y:346.75},0).wait(1).to({x:257.05,y:342.9},0).wait(1).to({x:251.15,y:339.05},0).wait(1).to({x:245.2,y:335.2},0).wait(1).to({x:239.25,y:331.3},0).wait(1).to({x:233.35,y:327.45},0).wait(1).to({x:227.4,y:323.6},0).wait(1).to({x:221.5,y:319.75},0).wait(1).to({x:215.55,y:315.85},0).wait(1).to({x:209.6,y:312},0).wait(1).to({x:203.7,y:308.15},0).wait(1).to({x:197.75,y:304.3},0).wait(1).to({x:191.8,y:300.4},0).wait(1).to({x:185.9,y:296.55},0).wait(1).to({x:179.95,y:292.7},0).wait(1).to({x:174.05,y:288.85},0).wait(1).to({x:168.1,y:284.95},0).wait(1).to({x:162.2,y:281.1},0).wait(1).to({x:156.3,y:277.25},0).wait(1).to({x:150.35,y:273.4},0).wait(1).to({x:144.4,y:269.5},0).wait(1).to({x:138.5,y:265.65},0).wait(1).to({x:132.55,y:261.8},0).wait(1).to({x:126.6,y:257.9},0).wait(1).to({scaleX:0.6285,scaleY:0.6285,x:113.7,y:251.1},0).wait(1).to({scaleX:0.6259,scaleY:0.6259,x:100.75,y:244.35},0).wait(1).to({scaleX:0.6234,scaleY:0.6234,x:87.85,y:237.5},0).wait(1).to({scaleX:0.6208,scaleY:0.6208,x:74.95,y:230.75},0).wait(1).to({scaleX:0.6182,scaleY:0.6182,x:61.95,y:223.95},0).wait(1).to({scaleX:0.6157,scaleY:0.6157,x:49.05,y:217.15},0).wait(1).to({scaleX:0.6131,scaleY:0.6131,x:36.15,y:210.35},0).wait(1).to({scaleX:0.6105,scaleY:0.6105,x:23.2,y:203.55},0).wait(1).to({scaleX:0.6079,scaleY:0.6079,x:10.25,y:196.75},0).wait(1).to({scaleX:0.6054,scaleY:0.6054,x:-2.65,y:189.95},0).wait(1).to({scaleX:0.6028,scaleY:0.6028,x:-15.6,y:183.2},0).wait(1).to({scaleX:0.6002,scaleY:0.6002,x:-28.5,y:176.35},0).wait(1).to({scaleX:0.5977,scaleY:0.5977,x:-41.45,y:169.6},0).wait(1).to({scaleX:0.5951,scaleY:0.5951,x:-54.35,y:162.85},0).wait(1).to({scaleX:0.5925,scaleY:0.5925,x:-67.3,y:156.05},0).wait(1).to({scaleX:0.5899,scaleY:0.5899,x:-80.2,y:149.25},0).wait(1).to({scaleX:0.5874,scaleY:0.5874,x:-93.1,y:142.5},0).wait(1).to({scaleX:0.5848,scaleY:0.5848,x:-106.1,y:135.65},0).wait(1).to({scaleX:0.5822,scaleY:0.5822,x:-119,y:128.85},0).wait(1).to({scaleX:0.5797,scaleY:0.5797,x:-131.9,y:122.1},0).wait(1).to({scaleX:0.5771,scaleY:0.5771,x:-144.85,y:115.25},0).wait(1).to({scaleX:0.5745,scaleY:0.5745,x:-157.8,y:108.5},0).wait(1).to({scaleX:0.572,scaleY:0.572,x:-170.7,y:101.7},0).wait(1).to({scaleX:0.5694,scaleY:0.5694,x:-183.65,y:94.9},0).wait(1).to({scaleX:0.5668,scaleY:0.5668,x:-196.55,y:88.1},0).wait(1).to({scaleX:0.5642,scaleY:0.5642,x:-209.5,y:81.3},0).wait(1).to({scaleX:0.5617,scaleY:0.5617,x:-222.45,y:74.5},0).wait(1).to({scaleX:0.5591,scaleY:0.5591,x:-235.35,y:67.7},0).wait(1).to({scaleX:0.5565,scaleY:0.5565,x:-248.25,y:60.9},0).wait(1).to({scaleX:0.554,scaleY:0.554,x:-261.25,y:54.1},0).wait(1).to({scaleX:0.5514,scaleY:0.5514,x:-274.15,y:47.35},0).wait(1).to({scaleX:0.5488,scaleY:0.5488,x:-287.05,y:40.5},0).wait(1).to({scaleX:0.5463,scaleY:0.5463,x:-299.95,y:33.75},0).wait(1).to({scaleX:0.5437,scaleY:0.5437,x:-312.9,y:26.95},0).wait(1).to({scaleX:0.5411,scaleY:0.5411,x:-325.85,y:20.15},0).wait(1).to({scaleX:0.5385,scaleY:0.5385,x:-338.75,y:13.35},0).wait(1).to({scaleX:0.536,scaleY:0.536,x:-351.7,y:6.6},0).wait(1).to({scaleX:0.5334,scaleY:0.5334,x:-364.6,y:-0.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.7,-151.1,1000.4,723.5);


// stage content:
(lib.з3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// эльф_png
	this.instance = new lib.ЭЛЬФИЙКА();
	this.instance.setTransform(763.45,192.2,0.5052,0.5052,0,0,0,259.3,283.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// эльф_png
	this.instance_1 = new lib.эльф2();
	this.instance_1.setTransform(265.8,268.3,1,1,0,0,0,148.3,136.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// колесо_символ
	this.instance_2 = new lib.полнаякарета();
	this.instance_2.setTransform(148.6,508.8,0.4422,0.4422,0,0,0,263.7,333.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой_5
	this.instance_3 = new lib._1648948510_1vsegdapomnimcompvolshebniilesfoto1();
	this.instance_3.setTransform(0,-3,0.5708,0.5802);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(210.4,302,703,313.5);
// library properties:
lib.properties = {
	id: 'A8445BFB57DBEA4CA4E17A130E88A653',
	width: 897,
	height: 610,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/крылоправое_.png", id:"крылоправое"},
		{src:"images/з3_atlas_1.png", id:"з3_atlas_1"},
		{src:"images/з3_atlas_2.png", id:"з3_atlas_2"}
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
an.compositions['A8445BFB57DBEA4CA4E17A130E88A653'] = {
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