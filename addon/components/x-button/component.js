import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['btnTypeClass'],
  attributeBindings: ['isDisabled:disabled', 'type', 'title'],
  buttonType: 'default',
  btnTypeClass: Ember.computed('buttonType', function () {
    let btnType = this.get('buttonType') || 'default';

    return `btn-${btnType}`;
  }),
});
