import express from "express";
const router = express.Router();

import HomeController from "../controllers/home";
import LoginController from "../controllers/login"

router.get("/", HomeController );
router.get("/login", LoginController);

export default router;