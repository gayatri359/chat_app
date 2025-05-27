import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }
});

router.post("/signup", signup); //http;//localhost:3000/signup 
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute,upload.single("profilePic"), updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;
