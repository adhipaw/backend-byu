import Cart from "../models/cart.js";

export const addToCart = async (req, res) => {
  const { product_id, quantity, size } = req.body;
  const { id: user_id } = req.user;
  const result = await Cart.addToCart(
    user_id,
    product_id,
    quantity,
    size
  ).catch((err) => res.status(500).json({ message: err.message }));
  res.status(200).json({ message: "Product added to cart" });
};

export const removeFromCart = async (req, res) => {
  const { product_id } = req.body;
  const { id: user_id } = req.user;
  const result = await Cart.removeFromCart(user_id, product_id).catch((err) =>
    res.status(500).json({ message: err.message })
  );
  res.status(200).json({ message: "Product removed from cart", success: true });
};

export const getUserCart = async (req, res) => {
  const { id: user_id } = req.user;
  const cartProducts = await Cart.getUserCart(user_id).catch((err) =>
    res.status(500).json({ message: err.message })
  );

  res.status(200).json({ data: cartProducts });
};

export const getCartTotal = async (req, res) => {
  const { id: user_id } = req.user;
  const cartProducts = await Cart.getUserCart(user_id);
  let subTotal = 0;
  let shipementCost = 0;

  cartProducts.forEach((product) => {
    subTotal += product.price * product.quantity;
    shipementCost += 10 * product.quantity;
  });

  res.status(200).json({
    subTotal,
    shipementCost,
    tax: subTotal * 0.05,
    total: subTotal + shipementCost + subTotal * 0.05,
  });
};

export const updateQuantity = async (req, res) => {
  const { product_id, quantity } = req.body;
  const { id: user_id } = req.user;
  const result = await Cart.updateCart(user_id, product_id, quantity).catch(
    (err) => res.status(500).json({ message: err.message })
  );

  return res.status(200).json({ message: "Cart updated", success: true });
};

export const checkout = async (req, res) => {
  const { id: user_id } = req.user;
  const result = await Cart.checkout(user_id).catch((err) =>
    res.status(500).json({ message: err.message })
  );

  return res.status(200).json({ message: "Cart updated", success: true });
};
