import express from "express";
import authRouter from "./routers/auth.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
