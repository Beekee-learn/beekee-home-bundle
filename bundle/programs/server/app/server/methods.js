(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods.js                                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
exec = Npm.require('child_process').exec; // No idea what is this ?    // 1
cmd = Meteor.wrapAsync(exec);                                          // 2
                                                                       //
Meteor.methods({                                                       // 4
	'getUsedSpace': function () {                                         // 5
		var res;                                                             // 6
		res = cmd("df / -h | awk '{print ($3)}' | tail -1") + "/ " + cmd("df / -h | awk '{print ($2)}' | tail -1") + " (" + cmd("df / | awk '{print ($5)}' | tail -1") + "used)";
		return res;                                                          // 8
	},                                                                    //
	'installApp': function (appName) {                                    // 10
                                                                       //
		// Use future to force Meteor to wait until de script is finished    //
		Future = Npm.require('fibers/future');                               // 13
                                                                       //
		var future = new Future();                                           // 15
                                                                       //
		exec('/bin/bash ' + Meteor.settings.scriptsPath + 'apps/beekee-live/beekee-live_install.sh', function (error, stdout, stderr) {
                                                                       //
			//exec('/bin/bash /Users/Vince/Desktop/beekee-home/scripts/apps/beekee-live/beekee-live_install.sh', function(error,stdout,stderr){
			console.log('error: ', error);                                      // 20
			console.log('stdout: ', stdout);                                    // 21
			console.log('stderr: ', stderr);                                    // 22
                                                                       //
			future['return'](stdout.toString());                                // 24
		});                                                                  //
                                                                       //
		return future.wait();                                                // 27
	},                                                                    //
	'updateApp': function (appName) {                                     // 29
                                                                       //
		// Use future to force Meteor to wait until de script is finished    //
		Future = Npm.require('fibers/future');                               // 32
                                                                       //
		var future = new Future();                                           // 34
                                                                       //
		exec('/bin/bash ' + Meteor.settings.scriptsPath + 'apps/beekee-live/beekee-live_update.sh', function (error, stdout, stderr) {
			console.log('error: ', error);                                      // 37
			console.log('stdout: ', stdout);                                    // 38
			console.log('stderr: ', stderr);                                    // 39
                                                                       //
			future['return'](stdout.toString());                                // 41
		});                                                                  //
                                                                       //
		return future.wait();                                                // 44
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=methods.js.map
