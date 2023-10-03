import Product from "../models/products.js";
export const getAllProducts = async (req, res) => {
  const products = await Product.getAll();

  res.status(200).json({ data: products });
};

export const getProductsBySearch = async (req, res) => {
  const search = req.params.search;
  const products = await Product.getBySearch(search);
  res.status(200).json({ data: products });
};
