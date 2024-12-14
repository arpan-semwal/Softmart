import express from "express";
import UserCtrl from "./controllers/UserCtrl";
import classController from "./controllers/classController";
import { registerSchool } from "./controllers/schoolController";
import { AuthenticatedRequest } from "./types/AuthenticatedRequest";
import { validateToken } from "./middleware/validateToken";
 
const router = express.Router();

router.get("/about", (req, res) => {
  res.json({
    message: "about page"
  });
});

router.get("/home", UserCtrl.getList);
router.get("/classes", classController.getClasses);
router.post("/register", express.json(), registerSchool);

router.get("/protected", validateToken, (req: AuthenticatedRequest, res) => {
  res.json({ message: "You have access to this route", userId: req.user?.id });
});

export {
  router
};
