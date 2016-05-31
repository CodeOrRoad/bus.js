var Timer = require("./core");
var Job = require("./schema/job");

var Bus = function(config){
	this.config = config || {};
	this.every = this.config.every || 50;
	this.jobs = [];
	this.time = 0;
	this.timer = new Timer({
		delay: config && config.delay ? config.delay : 50
	});

	this.add = function(data, job){
		var job = new Job(data, job);
		this.jobs.push(job);
		console.log("Job added", this.jobs.length);
	};

	this.start = function(){
		var self = this;
		this.timer.start(function(time){
			self.ticker(time);
		});
	};

	this.stop = function(){
		this.timer.stop();
	}

	this.ticker = function(time){
		var self = this;
		for(var i=0;i<self.jobs.length;i++){
			self.jobs[i].doJob(time);
		}
	};
};

module.exports = Bus;