import { Router } from "express";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  getUserCart,
} from "../controllers/cart.js";

const router = Router();

router.post("/", addToCart);
router.delete("/", removeFromCart);
router.patch("/", updateQuantity);
router.get("/", getUserCart);

export default router;
