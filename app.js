import express from "express";
import dotenv from "dotenv";
import authRouter from "./routers/auth.js";
import productRouter from "./routers/product.js";
import cartRouter from "./routers/cart.js";
import { checkAuth } from "./midlewares/auth.js";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/products", checkAuth, productRouter);
app.use("/api/cart", checkAuth, cartRouter);

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
