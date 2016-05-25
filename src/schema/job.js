var Job = function(data, job){
	this.data = data || {};
	this.from = this.data.from || new Date();
	this.to = this.data.to || null;
	this.every = this.data.every || 1000;
	this.job = job || function(){};
	this.payload = this.data.payload || {};
};

module.exports = Job;