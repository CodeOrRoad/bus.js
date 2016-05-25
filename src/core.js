var _config = require("./config");
var _debugger = require("./debugger");

var Timer = function(config){
	this.config = config || {};
	this.delay = this.config.delay || 50;
	this.timeHandler = null;
	this.ticker = null;
	this.initial = {
		date: new Date(),
		time: 0
	};
	this.current = {
		date: new Date(),
		time: 0
	};

	this.start = function(ticker){
		var self = this;
		this.ticker = ticker || this.ticker;
		this.timeHandler = setInterval(function(){
			self.tick();
		}, this.delay);
		_debugger.log("Timer started");
	};

	this.stop = function(){
		clearInterval(this.timeHandler);
		_debugger.log("Timer stopped");
	};

	this.reset = function(config){
		this.stop();
		this.config = config || this.config;
		this.updateConfig();
		this.current.time = 0;
		this.start();
		_debugger.log("Timer reset");
	};

	this.set = function(time){
		this.current.time = time || 0;
		_debugger.log("Timer set");
	}

	this.tick = function(){
		var self = this;
		this.current.time += this.delay;
		this.current.date = new Date();
		if(self.ticker){
			self.ticker({
				initial: self.initial,
				current: self.current
			});
		}
		_debugger.log("Timer trigged");
	};

	this.updateConfig = function(){
		this.delay = this.config.delay || 50;
		_debugger.log("Timer updated config");
	}
};

module.exports = Timer;