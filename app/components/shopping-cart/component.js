import Ember from 'ember';

const {
  inject,
} = Ember;

export default Ember.Component.extend({
  cart: inject.service('services/cart'),

  actions: {
    updateProduct(product) {
      console.log('product is: ', product);
    },
    removeProduct(product) {
      console.log('product is: ', product);
    },
  },
});
