import Ember from 'ember';

export default Ember.Component.extend({

  pizzas: 0,

  didInsertElement: function () {
    this.updatePizzas();
  },

  updatePizzas: function () {
    let pizzas = [];
    for (var i = 0; i < this.get('pizzas'); i++) {
      pizzas.pushObject('<img src="pizza.png" alt="pizza" class="pizza">');
    }
    this.$().html(pizzas);
  }.observes('pizzas')

});
