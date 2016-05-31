var Job = function(data, job){
	this.data = data || {};
	this.from = this.data.from || new Date();
	this.to = this.data.to || null;
	this.every = this.data.every || 1000;
	this.job = job || function(){};
	this.payload = this.data.payload || {};
	this.steps = 0;
	this.tries = 0;
	this.maxSteps = this.data.maxSteps || null;
	this.at = this.data.at || null;
};

Job.prototype.doJob = function(time){
	if(this.tries%this.every == 0){
		if(((typeof this.from == "object" && this.from <= time.current.date) || (typeof this.from == "number" && this.from <= time.current.time) || (this.from == null)) && ((typeof this.to == "object" && this.to >= time.current.date) || (typeof this.to == "number" && this.to >= time.current.time) || (this.to == null))){
			this.job({payload: this.payload, time: time});
			this.steps++;
		}
	}
	this.tries++;
}

module.exports = Job;