(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/apps.js                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Apps = new Mongo.Collection('apps');                                   // 1
                                                                       //
Apps.allow({                                                           // 4
                                                                       //
	insert: function () {                                                 // 6
		return true;                                                         // 6
	},                                                                    //
	update: function (userId, space) {                                    // 7
		return true;                                                         // 7
	},                                                                    //
	remove: function (userId, space) {                                    // 8
		return true;                                                         // 8
	}                                                                     //
                                                                       //
});                                                                    //
                                                                       //
// if(Meteor.isServer) {                                               //
                                                                       //
// 	Meteor.methods({                                                   //
// 		wheelInsert: function(wheelAttributes) {                          //
                                                                       //
// 			var user = Meteor.user();                                        //
// 			var wheel = _.extend(wheelAttributes, {                          //
// 				userId: user._id,                                               //
// 				submitted: new Date(),                                          //
// 			});                                                              //
                                                                       //
// 			var wheelId = Wheels.insert(wheel);                              //
                                                                       //
// 			return { _id: wheelId };                                         //
// 		}                                                                 //
// 	});                                                                //
// }                                                                   //
// insert: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
                                                                       //
// update: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); },
                                                                       //
// remove: function(userId, space) { return ownsDocument(userId, space) || isAdmin(userId); }
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=apps.js.map
