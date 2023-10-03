import Cart from "../models/cart.js";

export const addToCart = async (req, res) => {
  const { product_id, quantity } = req.body;
  const { id: user_id } = req.user;
  const result = await Cart.addToCart(user_id, product_id, quantity);
  res.status(200).json(result);
};

export const removeFromCart = async (req, res) => {
  const { product_id } = req.body;
  const { id: user_id } = req.user;
  const result = await Cart.removeFromCart(user_id, product_id);
  res.status(200).json(result);
};

export const getUserCart = async (req, res) => {
  const { id: user_id } = req.user;
  const cartProducts = await Cart.getUserCart(user_id);

  res.status(200).json({ data: cartProducts });
};

export const updateQuantity = async (req, res) => {
  const { product_id, quantity } = req.body;
  const { id: user_id } = req.user;
  const result = await Cart.updateCart(user_id, product_id, quantity);

  res.status(200).json(result);
};
