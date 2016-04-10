export default function () {
  this.get('/api/cart/', (db) => {
    return db.carts[0];
  });

  this.get('/api/products/');
}
