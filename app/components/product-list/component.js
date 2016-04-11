import Ember from 'ember';

const {
  $,
  inject,
} = Ember;

export default Ember.Component.extend({
  products: [],
  cart: inject.service('services/cart'),
  actions: {
    addToCart(product) {
      const cart = this.get('cart');
      cart.addProduct(product);
    }
  },

  willInsertElement() {
    this.set('products', []);
    $.getJSON('/api/products/', (data) => {
      const model = this.get('products');
      for (let i = 0; i < data.products.length; i++) {
        model.pushObject(data.products[i]);
      }
    });
  },
  willClearRender() {
    this.set('products', []);
  },
  willDestroyElement() {
    console.log(this.get('products'));
  }
});
