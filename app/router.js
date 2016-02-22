import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootUrl: '/why-leaving-apple/'
});

Router.map(function() {
  this.route('index', {path:'/why-leaving-apple/'});
});

export default Router;
