import { Router } from "express";

const router = Router();

router.get("/");
router.get("/getAll");
router.get("/getBySearch/:search");

export default router;
