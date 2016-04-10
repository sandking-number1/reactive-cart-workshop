import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('shopping-cart/cart-subtotal', 'Integration | Component | shopping cart/cart subtotal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{shopping-cart/cart-subtotal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#shopping-cart/cart-subtotal}}
      template block text
    {{/shopping-cart/cart-subtotal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
