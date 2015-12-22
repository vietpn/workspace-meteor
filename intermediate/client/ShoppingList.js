/**
 * Created by vietpn on 21/12/2015.
 */
Template.ShoppingList.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('recipes');
    });
});

Template.ShoppingList.helpers({
    shoppingList: function(){
        return Recipes.find({inMenu: true});
    }
});