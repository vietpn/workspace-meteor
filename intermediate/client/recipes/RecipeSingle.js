/**
 * Created by vietpn on 21/12/2015.
 */
Template.RecipeSingle.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('recipes');
    });
});

Template.RecipeSingle.helpers({
    recipe: function(){
        var  id = FlowRouter.getParam('id');
        return Recipes.findOne({_id: id});
    }
});