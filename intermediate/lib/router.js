/**
 * Created by vietpn on 17/12/2015.
 */
FlowRouter.route('/', {
    name: 'home',
    action: function(){
        BlazeLayout.render('HomeLayout')
    }
});

FlowRouter.route('/test', {
    name: 'test',
    action: function(){
        BlazeLayout.render('HomeLayout', {main: 'Test'})
    }
});