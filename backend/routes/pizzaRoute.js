import express from "express";
import {
  addPizza,
  listPizza,
  removePizza,
} from "../controllers/pizzaController.js";
import multer from "multer";
const pizzaRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

pizzaRouter.get("/list", listPizza);
pizzaRouter.post("/add", upload.single("image"), addPizza);
pizzaRouter.post("/remove", removePizza);

export default pizzaRouter;
