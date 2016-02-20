import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['collapsable', 'clickable'],
  classNameBindings: ['expanded'],

  expanded: false,
  header: 'Click to expand',

  actions: {
    toggleCollapse: function() {
      this.toggleProperty('expanded');
    }
  }

});
