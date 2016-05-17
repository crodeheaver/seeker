import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('chat', function() {
    this.route('index',{
      path: '/'
    });
    this.route('room', {
      path: '/room/:name'
    });
    this.route('new');
  });
});

export default Router;
