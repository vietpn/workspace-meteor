/**
 * Created by vietpn on 16/12/2015.
 */
if (Meteor.isClient) {
    Template.resolution.helpers({
        isOwner: function(){
            return this.owner === Meteor.userId();
        }
    });

    Template.resolution.events({
        'click .toggle-checked': function(){
            Meteor.call("updateResolution", this._id, !this.checked);
        },
        'click .delete': function(){
            Meteor.call("deleteResolution", this._id);
        },
        'click .toggle-private': function(){
            Meteor.call("setPrivate", this._id, !this.private);
        }
    });
}