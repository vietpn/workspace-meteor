/**
 * Created by vietpn on 17/12/2015.
 */
Meteor.publish('recipes', function(){
    return Recipes.find({author: this.userId})
})