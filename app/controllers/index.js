import Ember from 'ember';

export default Ember.Controller.extend({

  numberOfPeople: 1,
  slicesPerPerson: 1,

  pizzasNeeded: function () {
    return Math.ceil(this.get('numberOfPeople') * this.get('slicesPerPerson'));
  }.property('numberOfPeople', 'slicesPerPerson')

});
