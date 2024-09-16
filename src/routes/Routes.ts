import { Request, Response, Router } from "express";
import { DefaultController } from "../controllers/DefaultController";

export const router = Router();

const defaultController = new DefaultController();

// Define a route for the root path ('/')
router.get("/", (req: Request, res: Response) => {
  res.send(defaultController.getHello());
});