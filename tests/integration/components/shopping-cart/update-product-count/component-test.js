import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('shopping-cart/update-product-count', 'Integration | Component | shopping cart/update product count', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{shopping-cart/update-product-count}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#shopping-cart/update-product-count}}
      template block text
    {{/shopping-cart/update-product-count}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
