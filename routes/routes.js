import express from "express";
const router = express.Router();

import IndexController from "../controllers/index"
import PlayController from "../controllers/play/index";
import HasPlayedController from "../controllers/play/has_played";
import EndController from "../controllers/play/end";
import LoginController from "../controllers/login";
import LogoutController from "../controllers/logout";
import LoginFormApi from "../api/login-form";

router.get("/", IndexController);

router.get("/play", PlayController );
router.get("/play/has_played", HasPlayedController);
router.get("/play/end", EndController);

router.get("/login", LoginController);
router.get("/logout", LogoutController);


router.post("/login-form", LoginFormApi);

export default router;