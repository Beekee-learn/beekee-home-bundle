(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/fixtures.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// ###  Create admin user at first start  ###                          //
                                                                       //
if (Meteor.users.find().count() === 0) {                               // 4
	var adminPassword = "admin";                                          // 5
                                                                       //
	var users = [{ username: "admin", roles: ['admin'] }];                // 7
                                                                       //
	_.each(users, function (user) {                                       // 11
		var id;                                                              // 12
		id = Accounts.createUser({                                           // 13
			username: user.username,                                            // 14
			email: "Admin",                                                     // 15
			password: adminPassword,                                            // 16
			profile: { name: "Admin" }                                          // 17
		});                                                                  //
                                                                       //
		if (user.roles.length > 0) {                                         // 20
			Roles.addUsersToRoles(id, user.roles);                              // 21
		}                                                                    //
	});                                                                   //
}                                                                      //
                                                                       //
if (Apps.find().count() === 0) {                                       // 27
                                                                       //
	var defaultApps = [{ name: "Beekee Live", actual_version: "1.3.3", last_version: "1.3.3", url: "https://live.beekee.ch", icon: "beekee-live.png", description: "Beekee Live promote real-time interaction by allowing learners to express themselves asking questions, posting photos or sharing files.", installed: true, version: "0.1", hidden: false }, { name: "Beekee Wheel", actual_version: "0.7", last_version: "0.7", url: "https://wheel.beekee.ch", icon: "beekee-wheel.png", description: "A simple random picker wheel.", installed: true, version: "0.1", hidden: false }, { name: "Moodle", actual_version: "xx", last_version: "xx", url: "https://tecfalms.unige.ch/moodle/", icon: "moodle.png", description: "Moodle is a free, online Learning Management system enabling educators to create their own private website filled with dynamic courses that extend learning, any time, anywhere.", installed: true, version: "0.1", hidden: false }];
                                                                       //
	_.each(defaultApps, function (defaultApps) {                          // 35
		Apps.insert(defaultApps);                                            // 36
	});                                                                   //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=fixtures.js.map
