var config = require("./config");

module.exports = {
	log: function(){
		if(config.DEBUG){
			if(!arguments.length){
				console.log(arguments[0]);
			}else{
				console.log(arguments);
			}
		}
	}
}