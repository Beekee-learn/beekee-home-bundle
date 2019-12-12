(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/router.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// Router.route('/', function () {                                     //
//   	this.render('index');                                            //
// }, {                                                                //
// name:'index'                                                        //
// });                                                                 //
                                                                       //
Router.route('/', {                                                    // 9
  // this template will be rendered until the subscriptions are ready  //
  //loadingTemplate: 'loading',                                        //
  name: 'index',                                                       // 12
                                                                       //
  waitOn: function () {                                                // 14
    Meteor.subscribe('allApps');                                       // 15
                                                                       //
    // return one handle, a function, or an array                      //
    //return Meteor.subscribe('students');                             //
  },                                                                   //
  data: function () {                                                  // 20
    //return {wheelId:this.params._id}                                 //
  },                                                                   //
  action: function () {                                                // 23
    this.render('index');                                              // 24
  }                                                                    //
});                                                                    //
                                                                       //
Router.route('/settings', {                                            // 29
  // this template will be rendered until the subscriptions are ready  //
  //loadingTemplate: 'loading',                                        //
  name: 'settings',                                                    // 32
                                                                       //
  waitOn: function () {                                                // 34
    // return one handle, a function, or an array                      //
    //return Meteor.subscribe('students');                             //
  },                                                                   //
  data: function () {                                                  // 38
    //return {wheelId:this.params._id}                                 //
  },                                                                   //
  action: function () {                                                // 41
    this.render('settings');                                           // 42
  }                                                                    //
});                                                                    //
                                                                       //
Router.route('/store', {                                               // 46
  // this template will be rendered until the subscriptions are ready  //
  //loadingTemplate: 'loading',                                        //
  name: 'store',                                                       // 49
                                                                       //
  waitOn: function () {                                                // 51
    // return one handle, a function, or an array                      //
    //return Meteor.subscribe('students');                             //
  },                                                                   //
  data: function () {                                                  // 55
    //return {wheelId:this.params._id}                                 //
  },                                                                   //
  action: function () {                                                // 58
    this.render('store');                                              // 59
  }                                                                    //
});                                                                    //
                                                                       //
Router.route('/help', {                                                // 64
  // this template will be rendered until the subscriptions are ready  //
  //loadingTemplate: 'loading',                                        //
  name: 'help',                                                        // 67
                                                                       //
  waitOn: function () {                                                // 69
    // return one handle, a function, or an array                      //
    //return Meteor.subscribe('students');                             //
  },                                                                   //
  data: function () {                                                  // 73
    //return {wheelId:this.params._id}                                 //
  },                                                                   //
  action: function () {                                                // 76
    this.render('help');                                               // 77
  }                                                                    //
});                                                                    //
                                                                       //
Router.route('/register', function () {                                // 82
  this.render('register', {                                            // 83
    waitOn: function () {                                              // 84
      //Meteor.subscribe('students');                                  //
    },                                                                 //
    data: function () {                                                // 87
      //return {classId:this.params._id}                               //
    }                                                                  //
  });                                                                  //
});                                                                    //
                                                                       //
Router.route('/login', function () {                                   // 93
  this.render('login', {                                               // 94
    waitOn: function () {                                              // 95
      //Meteor.subscribe('students');                                  //
    },                                                                 //
    data: function () {                                                // 98
      //return {classId:this.params._id}                               //
    }                                                                  //
  });                                                                  //
});                                                                    //
                                                                       //
Router.route('/user', function () {                                    // 104
  this.render('userSettings', {                                        // 105
    waitOn: function () {                                              // 106
      // Meteor.subscribe('students');                                 //
    },                                                                 //
    data: function () {                                                // 109
      //return {classId:this.params._id}                               //
    }                                                                  //
  });                                                                  //
}, {                                                                   //
  name: 'userSettings'                                                 // 114
});                                                                    //
                                                                       //
var requireLogin = function () {                                       // 118
  if (!Meteor.user()) {                                                // 119
    if (Meteor.loggingIn()) {                                          // 120
      this.render(this.loadingTemplate);                               // 121
    } else {                                                           //
      this.render('login');                                            // 123
    }                                                                  //
  } else {                                                             //
    this.next();                                                       // 126
  }                                                                    //
};                                                                     //
                                                                       //
Router.onBeforeAction(requireLogin, { except: ['index', 'help'] });    // 130
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=router.js.map
