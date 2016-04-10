import Ember from 'ember';

const {
  computed,
} = Ember;

export default Ember.Component.extend({
  cartService: Ember.inject.service('cart'),
  cart: computed('products', 'subtotal', () => {
    const cart = { products: [], subtotal: 0.0 };
    return cart;
  }),

  actions: {
    updateProduct(product) {
      console.log('product is: ', product);
    },
    removeProduct(product) {
      console.log('product is: ', product);
    },
  },
});
