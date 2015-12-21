/**
 * Created by vietpn on 21/12/2015.
 */
Template.Menu.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('recipes');
    });
});

Template.Menu.helpers({
    recipes: function(){
        return Recipes.find({inMenu: true});
    }
});