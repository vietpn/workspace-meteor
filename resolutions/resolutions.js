if (Meteor.isClient) {
  Template.body.helpers({
    resolutions: [
      {title: "Hello Resolution #1"},
      {title: "Hello Resolution #2"},
      {title: "Hello Resolution #3"},
    ]
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
