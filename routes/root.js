import express from "express";
import * as controller from "../controller/root.js";

const router = express.Router();

router.get("/", controller.rootGet);
router.get("/:author/:id", controller.listAuthorId);
router.get("/new", controller.newlistGet);
router.post("/new", controller.newlistPost);

export default router;