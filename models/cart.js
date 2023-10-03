import Product from "./products.js";

export default class Cart {
  constructor(user_id, products) {
    this.user_id = user_id;
    this.products = products;
  }

  static addToCart(user_id, product_id, quantity) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `INSERT INTO cart (user_id, product_id, quantity) VALUES ('${user_id}', '${product_id}', '${quantity}')`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  static updateCart(user_id, product_id, quantity) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `UPDATE cart SET quantity = '${quantity}' WHERE user_id = '${user_id}' AND product_id = '${product_id}'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  static removeFromCart(user_id, product_id) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `DELETE FROM cart WHERE user_id = '${user_id}' AND product_id = '${product_id}'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  static getUserCart(user_id) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM cart JOIN products ON products.id = cart.products.id WHERE user_id = '${user_id}'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        const products = [];
        result.forEach((product) => {
          products.push(Product.ProductFromDb(...Object.values(product)));
        });
        return resolve(new Cart(user_id, products));
      });
    });
  }
}
