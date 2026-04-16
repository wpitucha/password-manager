// src/routes/security.routes.js
import express from "express";
import { checkPasswordBreach } from "../controllers/security.controller.js";

const router = express.Router();

router.post("/check-password-breach", checkPasswordBreach);

export default router;