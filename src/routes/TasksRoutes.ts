import { Request, Response, Router } from "express";

export const tasksRouter = Router();

tasksRouter.get("/", (req: Request, res: Response) => {
  res.send(["lista de tarefas"]);
});