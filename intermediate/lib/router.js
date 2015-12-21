/**
 * Created by vietpn on 17/12/2015.
 */
FlowRouter.route('/', {
    name: 'home',
    action: function(){
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action: function(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Recipes'})
    }
});

FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action: function(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'})
    }
});