import { Router } from "express";
import { getAllProducts, getProductsBySearch } from "../controllers/product.js";
const router = Router();

router.get("/");
router.get("/getAll", getAllProducts);
router.get("/search/:search", getProductsBySearch);

export default router;
