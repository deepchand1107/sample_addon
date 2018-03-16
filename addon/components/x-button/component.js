import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'button',
  attributeBindings: ['isDisabled:disabled', 'type', 'title']
});
