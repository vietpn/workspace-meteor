/**
 * Created by vietpn on 21/12/2015.
 */
Template.Recipe.events({
    'click .toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    }
});