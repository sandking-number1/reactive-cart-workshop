import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.list.random('Peaches', 'Apples', 'Cherries', 'Almonds', 'Cabbage'),
  count: faker.list.random(1.99, 2.45, 3.50, 4.90, 5.99),
  unitPrice: faker.list.random(1.99, 2.45, 3.50, 4.90, 5.99),
  taxRate: 0.04
});
