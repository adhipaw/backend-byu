import connection from "../db/connections.js";

export default class Product {
  constructor(
    id,
    name,
    price,
    description,
    category,
    image,
    brand,
    gender,
    size,
    quantity = false
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.size = size;
    this.image = image;
    this.brand = brand;
    this.gender = gender;
    if (quantity) this.quantity = quantity;
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM products WHERE id = '${id}' LIMIT 1`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) return reject("Product not found");
        return resolve(new Product(...Object.values(result[0])));
      });
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM products`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        const products = [];
        result.forEach((product) => {
          products.push(
            new Product(
              product.id,
              product.name,
              product.price,
              product.description,
              product.category,
              product.image,
              product.brand,
              product.gender,
              product.size,
              product.quantity
            )
          );
        });
        return resolve(products);
      });
    });
  }

  static getAllByCategory(category) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM products WHERE category = '${category}'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  static getAllBySize(size) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM products WHERE size = '${size}'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  static getAllByBrand(brand) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM products WHERE brand = '${brand}'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  static getAllByGender(gender) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM products WHERE gender = '${gender}'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  static getBySearch(search) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM products WHERE name LIKE '%${search}%'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        const products = [];
        result.forEach((product) => {
          products.push(
            new Product(
              product.id,
              product.name,
              product.price,
              product.description,
              product.category,
              product.image,
              product.brand,
              product.gender,
              product.size,
              product.quantity
            )
          );
        });
        return resolve(products);
      });
    });
  }
}
