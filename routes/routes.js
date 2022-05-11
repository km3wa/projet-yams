import express from "express";
const router = express.Router();

import HomeController from "../controllers/home";
import LoginController from "../controllers/login";
import LoginFormApi from "../api/login-form";

router.get("/", HomeController );
router.get("/login", LoginController);
router.post("/login-form", LoginFormApi);

export default router;