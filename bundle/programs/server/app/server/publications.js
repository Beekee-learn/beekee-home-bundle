(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publications.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publish('allApps', function () {                                // 1
  return Apps.find({});                                                // 2
});                                                                    //
                                                                       //
Meteor.publish("users", function () {                                  // 5
  return Meteor.users.find({}, { fields: { createdAt: true, profile: true, emails: true, username: true } });
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=publications.js.map
