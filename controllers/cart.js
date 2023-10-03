import Cart from "../models/cart.js";

export const addToCart = async (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  const result = await Cart.addToCart(user_id, product_id, quantity);
  res.status(200).json(result);
};

export const removeFromCart = async (req, res) => {
  const { user_id, product_id } = req.body;
  const result = await Cart.removeFromCart(user_id, product_id);
  res.status(200).json(result);
};

export const getUserCart = async (req, res) => {
  const { user_id } = req.body;
  const cartProducts = Cart.getUserCart(user_id);

  res.status(200).json({ data: cartProducts });
};

export const updateQuantity = async (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  const result = await Cart.updateCart(user_id, product_id, quantity);

  res.status(200).json(result);
};
