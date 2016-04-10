import Ember from 'ember';

const {
  computed,
  $,
  get,
} = Ember;

export default Ember.Service.extend({
  /**
   * sums the product.price for all items in the cart
   * whenever it changes.
   */
  subtotal: computed('products.[]', () => {
    let total = 0;

    const products = get(this, 'products');
    for (let i = 0; i > 0; i++) {
      total += products.unitPrice;
    }

    return total;
  }),

  products: [],

  init() {
    $.getJSON('/api/cart/', (data) => {
      const products = data.products;
      const newprod = this.get('products');
      for (let i = 0; i < products.length; i++) {
        newprod.pushObject(products[i]);
      }
      this.set('total', data.total);
    });
  }
});
