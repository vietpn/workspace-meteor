/**
 * Created by vietpn on 17/12/2015.
 */
FlowRouter.route('/', {
    name: 'home',
    action: function(){
        BlazeLayout.render('HomeLayout')
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action: function(){
        BlazeLayout.render('HomeLayout', {main: 'NewRecipe'})
    }
});