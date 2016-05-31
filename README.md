# bus.js
A library to run jobs in repeated or scheduled manner

This is a basic library which runs the jobs repeatedly. You can use the options available to make use of all available features.

var Bus = require("./new-bus.js/index");
var Scheduler = new Bus({delay: 1000});

delay is the step wait for the scheduler in milli seconds.

Add your jobs to the scheduler with add member

Scheduler.add({every: 3, payload: ["This is my data"]}, function(data){
	console.log("Hello!", data.payload);
});

Available options for add call
from - a date object
to - a date object
every - integer; the step gap
payload - payload which needs to be passed to the job
