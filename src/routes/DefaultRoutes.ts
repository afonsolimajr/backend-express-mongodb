import { Request, Response, Router } from "express";
import { DefaultController } from "../controllers/DefaultController";

const defaultController = new DefaultController();

export const defaultRouter = Router();

defaultRouter.get("/", (req: Request, res: Response) => {
  res.send(defaultController.getHello());
});