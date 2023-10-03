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
    size
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
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM products`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
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

  static getAllBySerach(search) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM products WHERE name LIKE '%${search}%'}`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }
}
