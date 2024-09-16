import { Request, Response, Router } from "express";
import { DefaultController } from "../controllers/DefaultController";
import { tasksRouter } from "./TasksRoutes";
import { defaultRouter } from "./DefaultRoutes";

export const router = Router();

router.use("/", defaultRouter);
router.use("/tarefas", tasksRouter);